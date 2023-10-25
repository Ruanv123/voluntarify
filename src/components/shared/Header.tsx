"use client";
import Image from "next/image";
import { GenericLink } from "./GenericLink";
import { Button } from "../ui/button";
import { useMediaQuery } from "usehooks-ts";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const mobile = useMediaQuery("( max-width: 768px )");
  return (
    <header className="bg-white">
      <div className="content flex items-center justify-between py-5">
        <div>
          <GenericLink href="/">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                objectFit: "contain",
              }}
              className="h-full w-full"
            />
          </GenericLink>
        </div>
        <nav
          className={`${
            mobile ? "hidden" : "flex"
          } items-center justify-between gap-5`}
        >
          <GenericLink
            href="/vagas"
            className="text-base font-medium hover:text-blue-500"
          >
            Vagas
          </GenericLink>
          <GenericLink
            href="/about"
            className="text-base font-medium hover:text-blue-500"
          >
            Quem Somos
          </GenericLink>

          <GenericLink
            href="/"
            className="text-base font-medium hover:text-blue-500"
          >
            Voluntários
          </GenericLink>

          <GenericLink
            href="/"
            className="text-base font-medium hover:text-blue-500"
          >
            Para Empresas
          </GenericLink>
        </nav>
        <nav
          className={` ${mobile ? "hidden" : "flex"} flex items-center gap-2`}
        >
          <GenericLink
            href="/login"
            className="text-base font-semibold hover:text-blue-500"
          >
            <Button variant="ghost" className="transition-all duration-300">
              Entrar
            </Button>
          </GenericLink>
          <GenericLink
            href="/register"
            className="text-base font-semibold hover:text-blue-500"
          >
            <Button className="transition-all duration-300">Registrar</Button>
          </GenericLink>
        </nav>
        <Sheet>
          {mobile && (
            <SheetTrigger>
              <Button variant="ghost">
                <Menu />
              </Button>
            </SheetTrigger>
          )}
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col items-center gap-5 py-5">
              <GenericLink
                href="/vagas"
                className="text-base font-medium hover:text-blue-500"
              >
                Vagas
              </GenericLink>
              <GenericLink
                href="/about"
                className="text-base font-medium hover:text-blue-500"
              >
                Quem Somos
              </GenericLink>

              <GenericLink
                href="/"
                className="text-base font-medium hover:text-blue-500"
              >
                Voluntários
              </GenericLink>

              <GenericLink
                href="/"
                className="text-base font-medium hover:text-blue-500"
              >
                Para Empresas
              </GenericLink>

              <div className="flex flex-col items-center gap-2">
                <GenericLink
                  href="/login"
                  className="text-base font-semibold hover:text-blue-500"
                >
                  <Button
                    variant="outline"
                    className="transition-all duration-300"
                  >
                    Entrar
                  </Button>
                </GenericLink>
                <GenericLink
                  href="/register"
                  className="text-base font-semibold hover:text-blue-500"
                >
                  <Button className="transition-all duration-300">
                    Registrar
                  </Button>
                </GenericLink>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
