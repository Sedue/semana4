
/*import { Banner } from "@/components/Banner";
import { BotaoCadastro } from "@/components/BotaoCadastro";

export default function Home() {
  return (
    <main>
      <Banner>
        <BotaoCadastro texto="Cadastre-se" />
      </Banner>
    </main>
  );
}*/



/*const users = [
  { id: 1, nome: "Rodrigo Lima", profissao: "Programador", idade: 30 },
  { id: 2, nome: "Ricardo", profissao: "Engenheiro", idade: 26 },
  { id: 3, nome: "Elisa", profissao: "Médico", idade: 35 },
]

export default function Home() {
  return (
    <main>
      {/* outra forma usando o index
      <div className="grid grid-cols-3 gap-2">
        {users.map((user, index) => (
          <p key={index}>{user.nome}</p>
        ))}
      </div>*/
/*<div className="grid sm:grid-cols-3 gap-2">
        {users.map(user => (
          <div key={user.id} className="p-3 m-3 border border-gray-400 rounded-md">
            <p className="text-lg font-bold ">{user.nome}</p>
            <p className="text-sm">{user.profissao} | {user.idade} anos</p>
            <button className="text-sm px-2 py-1 bg-green-700 text-white rounded-md my-2 ">Enviar Email</button>
          </div>
        ))}
      </div>
    </main >
  );
}*/

/*import { ElementoClicavel } from "@/components/ElementoClicavel";

export default function Home() {
  console.log("Onde eu apareço?")
  return (
    <main>
      <ElementoClicavel />
    </main >
  );
}*/

import { Componente } from "@/Components/Componente";

export default function Home() {
  console.log("Onde eu apareço?")
  return (
    <main>
      <Componente />
    </main >
  );
}



