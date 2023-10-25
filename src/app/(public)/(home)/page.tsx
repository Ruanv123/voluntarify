import { Footer } from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import CardList from "./components/card-list";
import prisma from "@/lib/prisma";
import SectionTitle from "@/components/shared/section-title";
import { hashSync } from "bcryptjs";
import { VagaCard } from "@/components/shared/vaga-card";

export default async function Home() {
  const vagas = await prisma.vaga.findMany({
    where: {
      isDestaque: true,
    },
  });

  return (
    <>
      <Header />
      <main className="content flex">
        {/* carrousel de banners ? */}

        {/* Vagas em Destaque */}
        <div className="mt-8 overflow-hidden px-3">
          <SectionTitle>Vagas em Destaque</SectionTitle>
          <CardList vagas={vagas} />
        </div>
        {/* Card de anuncio */}
        <div></div>
      </main>
      <Footer />
    </>
  );
}
