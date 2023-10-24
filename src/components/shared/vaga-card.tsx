import Image from "next/image";
import { GenericLink } from "./GenericLink";
import { Text } from "./Text";
import { Vaga } from "@prisma/client";
import { Card, CardContent, CardHeader } from "../ui/card";

interface Props {
  vaga: Vaga;
}

export const VagaCard = ({ vaga }: Props) => {
  return (
    <GenericLink href={`/vaga/teste`}>
      <Card className="h-[400px]  w-full max-w-[260px] overflow-hidden border border-gray-300 shadow-lg">
        <CardHeader className="w-full overflow-hidden p-0">
          <div className="h-[200px] w-full overflow-hidden">
            <Image
              src="https://thumbs.jusbr.com/imgs.jusbr.com/publications/images/ee6128f9a6738399d8bdeac97daa7a3d"
              alt="teste"
              width={0}
              height={0}
              style={{
                objectFit: "cover",
              }}
              sizes="100vw"
              className="h-full w-full"
            />
          </div>
        </CardHeader>
        <CardContent className="px-3 py-3">
          <div className="flex flex-col items-start">
            {/* description */}
            <Text size="xl" text={"teste"} />
            {/* subtitle */}
            <Text size="base" text="empresa do joaquim" color="text-gray-400" />
          </div>
          <p className="mt-1 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            aspernatur totam voluptate error accusamus suscipit voluptatibus
          </p>
        </CardContent>
        {/* <div className="flex max-w-[260px]  flex-col gap-4"></div> */}
      </Card>
    </GenericLink>
  );
};
