import Image from "next/image";
import { GenericLink } from "./GenericLink";
import { Button } from "../ui/button";

const Header = () => {
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
        <nav className="hidden items-center justify-between gap-5 md:flex">
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
        <nav className="flex items-center gap-2">
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
      </div>
    </header>
  );
};

export default Header;
