"use client"

import { useOrders } from '@/hooks/userOrders';
import { Button } from '@/components/Button';
import { FileText } from "@phosphor-icons/react";
import { OrderCard } from './OrderCard';

interface Order {
  id: {
    number: string; // ID do pedido
    time: string;   // Tempo do pedido
  };
  customer: string;
  items: {
    name: string;
    price: number;
    quantity: number;
  }[];
  total: number; // Total do pedido
  status: 'pending' | 'accepted' | 'preparing' | 'delivered'; // Status do pedido
}

export function RecentOrders() {
  const { orders, isLoading, error } = useOrders();

  console.log('Estado atual:', { orders, isLoading, error }); // Debug

  const mockOrders: Order[] = [
    {
      id: {
        number: '999',
        time: 'há 15 min'
      },
      customer: 'Allan Vieira',
      items: [
        { name: 'Pizza Grande', price: 45.90, quantity: 1 },
        { name: 'Refrigerante 2L', price: 12.00, quantity: 1 }
      ],
      total: 45.90 + 12.00, // Calcule o total aqui
      status: 'pending'
    },
    // Adicione mais pedidos conforme necessário
  ];

  return (
    <div className="w-[400px] p-6 bg-[#F5F5F5] border-l border-t border-zinc-100 rounded-tl-[32px]">
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-lg p-1 bg-zinc-100">
          <button className="px-4 py-1.5 rounded-lg bg-emerald-600 text-white font-medium transition-colors">
            Loja aberta
          </button>
          <button className="px-4 py-1.5 rounded-lg text-zinc-400 font-medium transition-colors">
            Loja fechada
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-zinc-900">Últimos pedidos</h2>
        <button className="text-[#FF3F00] text-sm font-medium">Ver mais</button>
      </div>

      {isLoading && (
        <div className="text-center py-4">
          <p>Carregando pedidos...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-4 text-red-500">
          <p>{error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="space-y-4 max-h-[calc(100vh-240px)] overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
          {orders.map((order, index) => (
            <OrderCard key={index} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}
