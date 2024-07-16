import { Banner } from "@/components/Banner";
import { BotaoCadastro } from "@/components/BotaoCadastro";

export default function Home() {
  return (
    <main>
      <Banner>
        <BotaoCadastro texto="Cadastre-se" />
      </Banner>
    </main>
  );
}
