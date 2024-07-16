interface BotaCadastroProps {
  texto: string;
}

//Tem essa opção com o props
/*function BotaoCadastro(props: BotaCadastroProps) {
  return (
    <button className="bg-green-800 text-white rounded-md p-3">
      {props.texto}
    </button>
  )
}*/
//tem essa opção sem o props destruturando com chaves inf a palavra texto
export function BotaoCadastro({ texto }: BotaCadastroProps) {
  return (
    <button className="bg-green-800 text-white rounded-md p-3">
      {texto}
    </button>
  )
}