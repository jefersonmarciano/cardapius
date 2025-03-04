"use client"

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import { Button } from "@/components/Button";
import { OrderCard } from "./OrderCard";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

export function OrdersPage() {
  const [activeFilter, setActiveFilter] = useState('Em aberto');
  
  const orders = Array(8).fill({
    id: '999',
    customer: 'Allan Vieira',
    items: [
      { name: 'Cheese Burger', price: 50.00 },
      { name: 'Coca-cola 350ml', price: 8.00 },
    ],
    totalItems: 2,
    total: 70.00,
    time: 'há 15 min.',
    status: 'Em aberto'
  });

  const statusFilters = [
    'Em aberto',
    'Em preparo',
    'Aguardando envio',
    'Enviados',
    'Finalizados'
  ];

  return (
    <div className="p-8 max-h-screen overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none] bg-[#F5F5F5]">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-medium text-zinc-900">Pedidos</h1>
        <Button>
          + Pedido manual
        </Button>
      </div>

      <div className="relative mb-6">
        <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
        <input 
          type="text"
          placeholder="Buscar pelo número do pedido ou nome do cliente"
          className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-zinc-100 outline-none text-sm"
        />
      </div>

      <div className="bg-[#F5F5F5] p-6 rounded-3xl border border-[#E8E8E8]">
        <div className="flex gap-4 mb-6 border-b border-zinc-100 pb-4">
          {statusFilters.map((status) => (
            <button
              key={status}
              onClick={() => setActiveFilter(status)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                status === activeFilter 
                  ? 'text-[#FF5900]' 
                  : 'text-zinc-400'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {orders.map((order, index) => (
            <OrderCard key={index} order={order} />
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-100 text-zinc-400">
            &lt;
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 flex items-center justify-center rounded-lg ${
                page === 1 
                  ? 'bg-[#FF5900] text-white' 
                  : 'border border-zinc-100 text-zinc-400'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-100 text-zinc-400">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
