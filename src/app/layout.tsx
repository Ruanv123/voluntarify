import { NextAuthProvider } from "@/components/providers/NextAuthProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voluntarify",
  description:
    "Encontre Seu Propósito no Voluntariado. Transforme Vidas, Faça a Diferença! Descubra Oportunidades de Voluntariado Inspiradoras perto de Você.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-gray-200`}>
        <NextAuthProvider>
          <Toaster richColors />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
