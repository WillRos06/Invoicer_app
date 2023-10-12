import React from 'react'

export default function Head({ handleprint }) {
  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Factura</h1>
        </div>
        {/*
        <div>
          <ul className="flex items-center justify-between flex-wrap">
            <li><button onClick={handleprint} className="bg-gray-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-gray-500 hover:bg-transparent hover:text-gray-500 transition-all duration-300">Imprimir</button></li>
            <li className='mx-2'><button className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">Descargar</button></li>
            <li><button className="bg-green-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration-300">Enviar</button></li>
          </ul>
         </div>
         */}
      </header>
    </>
  )
}
