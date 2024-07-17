"use client"
/*export function Componente() {
  return (
    <span onClick={() => console.log("oi")}> Olá TypeDev</span>
  )
}*/

/*export function Componente() {
  return (
    <input placeholder="Digite aqui"
      className="border border-gray-400 rouded-md m-3 p2"
      onChange={(e) => console.log(e.target.value)}
    />
  )
}*/

/*export function Componente() {
  return (
    <input placeholder="Digite aqui"
      className="border border-gray-400 rouded-md m-3 p2"
      onFocus={(e) => console.log("Fui selecionado")}
      onBlur={(e) => console.log("Fui descelecionado")}
    />
  )
}*/

export function Componente() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const nome = formData.get("nome")
    const email = formData.get("email")
    console.log(nome, email)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nome"
        className="border border-gray-400 rouded-md m-3 p2"
        name="nome"
      />
      <input
        placeholder="Email" type="email"
        className="border border-gray-400 rouded-md m-3 p2"
        name="email"
      />
      <button className="bg-green-800 text-white border border-gray-400 p-2 m-3">Enviar</button>
    </form>
  )
}

