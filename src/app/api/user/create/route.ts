import prisma from "@/lib/prisma";
import { hashSync } from "bcryptjs";
import { NextResponse } from "next/server";

type accountType = "EMPRESA" | "VOLUNTARIO";

interface User {
  name: string;
  email: string;
  password: string;
  UserType: string;
}

export async function POST(req: Request) {
  try {
    const { name, email, password, UserType } = (await req.json()) as User;

    const hashedPassword = await hashSync(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        userType: UserType,
      },
    });

    if (UserType === "VOLUNTARIO") {
      await prisma.voluntario.create({
        data: {
          userId: user.id,
          name: name,
        },
      });
    } else if (UserType === "EMPRESA") {
      await prisma.empresa.create({
        data: {
          userId: user.id,
          name: name,
        },
      });
    }

    return NextResponse.json({
      status: 201,
      user: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "ocorreu um error!",
        message: error.message,
      }),
      { status: 500 },
    );
  }
}
