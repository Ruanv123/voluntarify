import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";
import { compareSync } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const isPassword = compareSync(credentials.password, user.password);

        if (!isPassword) {
          return null;
        }

        if (user.userType === "VOLUNTARIO") {
          const voluntario = await prisma.voluntario.findUnique({
            where: {
              userId: user.id,
            },
          });

          console.log("voluntario", voluntario);

          return {
            id: String(user.id),
            name: voluntario?.name,
            email: user.email,
            role: user.role,
            image: voluntario?.profilePic,
          };
        }

        if (user.userType === "EMPRESA") {
          const empresa = await prisma.empresa.findUnique({
            where: {
              userId: user.id,
            },
          });

          return {
            id: String(user.id),
            email: user.email,
            role: user.role,
            name: empresa?.name,
            image: empresa?.profilePic,
          };
        }

        return {
          id: String(user.id),
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          role: u.role,
        };
      }
      return token;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          id: token.id,
          name: token.name,
          email: token.email,
          image: token.picture,
          role: token.role,
        },
      };
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
    updateAge: 60 * 60 * 24,
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
};
