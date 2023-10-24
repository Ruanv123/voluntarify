import { Footer } from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Text } from "@/components/shared/Text";
import { VagaCard } from "@/components/shared/vaga-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import prisma from "@/lib/prisma";
import { Search } from "lucide-react";

const VagasPage = async () => {
  const vagas = await prisma.vaga.findMany({});
  return (
    <>
      <Header />
      <main className="content py-8">
        <Input type="email" placeholder="Email" className="w-full" />
        {/* grid section */}
        <div className="flex items-center justify-between">
          <div>
            <Text size="h4" text="Vagas" weight="semiBold" />
            <Text size="base" text={`${vagas.length} em aberto`} />
          </div>
        </div>
        <section className="mt-5 grid w-full grid-cols-5 gap-3">
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
          <VagaCard vaga={vagas[0]} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VagasPage;
