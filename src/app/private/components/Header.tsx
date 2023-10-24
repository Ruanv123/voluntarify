"use client";

import { GenericLink } from "@/components/shared/GenericLink";
import { Text } from "@/components/shared/Text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Shield, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const HeaderPrivate = () => {
  const { data: session, status } = useSession();

  if (!session?.user) return;

  return (
    <header className="bg-white">
      <div className="content flex items-center justify-between py-5">
        <div>
          <GenericLink href="/private">
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
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center gap-2">
              <Avatar className="h-[35px] w-[35px]">
                <AvatarImage
                  src={session?.user?.image!}
                  style={{
                    objectFit: "cover",
                  }}
                />
                <AvatarFallback>RV</AvatarFallback>
              </Avatar>
              <Text size="base" text={session?.user?.name!} />
            </div>
          </PopoverTrigger>
          <PopoverContent className="max-w-[200px]" sideOffset={5}>
            <div className="flex w-full flex-col gap-3">
              <GenericLink
                href="/private/perfil"
                className="flex items-center gap-2"
              >
                <User />
                Perfil
              </GenericLink>
              {/* @ts-ignore  */}
              {session.user?.role === "ADMIN" && (
                <GenericLink href="/admin" className="flex items-center gap-2">
                  <Shield />
                  Admin
                </GenericLink>
              )}
              <Button onClick={() => signOut()} className="w-full">
                Sair
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default HeaderPrivate;
