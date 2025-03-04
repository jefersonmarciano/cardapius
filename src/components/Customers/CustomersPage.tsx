"use client"

import { MagnifyingGlass, WhatsappLogo, NotePencil, Trash } from "@phosphor-icons/react";

export function CustomersPage() {
  const customers = Array(10).fill({
    name: 'Allan Vieira',
    phone: '(11) 99999-9999',
    lastOrder: '01 de outubro de 2024'
  });

  return (
    <div className=" max-h-screen overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
      <div className="flex items-center justify-between mb-6">

        <h1 className="text-2xl font-medium text-zinc-900">Clientes</h1>
        <button className="bg-[#FF5900] text-white px-4 py-2 rounded-lg text-sm font-medium">
          + Cadastrar cliente
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
          <input 
            type="text"
            placeholder="Buscar clientes por nome ou telefone"
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#F5F5F5] border border-zinc-100 outline-none text-sm"
          />
        </div>

        <div className="relative">
          <select className="appearance-none bg-[#F5F5F5] border border-zinc-100 rounded-lg px-4 py-3 pr-10 text-sm text-zinc-500 outline-none">
            <option>Ordenar por: Mais novos</option>
            <option>Ordenar por: Mais antigos</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="#71717A" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] rounded-lg border border-zinc-100">
        <div className="grid grid-cols-[auto_2fr_1fr_1fr_auto] gap-4 p-4 border-b border-zinc-100 text-sm">
          <div className="flex items-center">
            <input type="checkbox" className="rounded border-zinc-300" />
          </div>
          <div className="text-zinc-400 font-medium">Nome</div>
          <div className="text-zinc-400 font-medium">Telefone</div>
          <div className="text-zinc-400 font-medium">Último pedido</div>
          <div className="text-zinc-400 font-medium">Ações</div>
        </div>

        {customers.map((customer, index) => (
          <div key={index} className="grid grid-cols-[auto_2fr_1fr_1fr_auto] gap-4 p-4 border-b border-zinc-100 text-sm items-center">
            <div className="flex items-center">
              <input type="checkbox" className="rounded border-zinc-300" />
            </div>
            <div className="text-[#FF5900] font-medium">{customer.name}</div>
            <div className="text-zinc-500">{customer.phone}</div>
            <div className="text-zinc-500">{customer.lastOrder}</div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                <WhatsappLogo weight="regular" className="w-5 h-5" />
              </button>
              <button className="p-2 text-[#cc9c00] hover:bg-[#cc9c00]/10 rounded-lg transition-colors">
                <NotePencil weight="fill" className="w-5 h-5" />
              </button>
              <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                <Trash weight="fill" className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
