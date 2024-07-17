"use client"

import React from "react"

export function Componente() {
  /*return (
    /*<span onClick={() => console.log("oi")}>Olá Typdev</span>*/

  /* <input placeholder="Digite aqui" className="border-gray-400 rounded-md m-3 p-2"
     onChange={(e) => console.log(e.target.value)}
   />*/

  /*<input placeholder="Digite aqui" className="border-gray-400 rounded-md m-3 p-2"
    onFocus={(e) => console.log("Fui selecionado")}
    onBlur={(e) => console.log("Fui desmarcado")}      
  />*/



  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const nome = formData.get("nome")
    const email = formData.get("email")
    console.log(nome, email)
  }
  return (

    <form onSubmit={handleSubmit}>
      <input placeholder="Nome"
        className="border border-gray-700 rounded-md m-3 p-2"
        name="nome"
      />
      <input placeholder="E-mail" type="email"
        className="border border-gray-400 rounded-md m-3 p-2"
        name="email"
      />
      <button className="bg-green-800 text-white p-2 m3">Enviar</button>
    </form>
  )
}