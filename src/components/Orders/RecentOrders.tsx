"use client"

import { useOrders } from '@/hooks/userOrders';
import { Button } from '@/components/Button';
import { FileText } from "@phosphor-icons/react";

interface Order {
  id: string;
  customer: string;
  items: {
    name: string;
    price: number;
    quantity: number;
  }[];
  status: 'pending' | 'accepted' | 'preparing' | 'delivered';
  time: string;
}

export function RecentOrders() {
  const { orders, isLoading, error } = useOrders();

  console.log('Estado atual:', { orders, isLoading, error }); // Debug

  const getStatusInfo = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return {
          label: 'Em aberto',
          badge: 'bg-amber-400 text-black rounded-r-md rounded-l-none -ml-4',
          button: { text: 'Aceitar pedido', color: 'bg-[#2CAFA0]' }
        };
      case 'accepted':
        return {
          label: 'Em preparo',
          badge: 'bg-orange-400/20 text-orange-600 rounded-r-md rounded-l-none -ml-4',
          button: { text: 'Pedido pronto', color: 'bg-[#2CAFA0]' }
        };
      case 'preparing':
        return {
          label: 'Aguardando envio',
          badge: 'bg-blue-400/20 text-blue-600 rounded-r-md rounded-l-none -ml-4',
          button: { text: 'Enviar pedido', color: 'bg-[#2CAFA0]' }
        };
      case 'delivered':
        return {
          label: 'Pedido enviado',
          badge: 'bg-green-400/20 text-green-600 rounded-r-md rounded-l-none -ml-4',
          button: { text: 'Pedido entregue', color: 'bg-zinc-200 text-zinc-500' }
        };
    }
  };

  return (
    <div className="w-[400px] p-6 bg-white border-l border-t border-zinc-100 rounded-tl-[32px]">
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
          {orders.map((order, index) => {
            const statusInfo = getStatusInfo(order.status);
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-4 border border-zinc-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              >
                
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-md text-sm font-medium ${statusInfo.badge}`}>
                    {statusInfo.label}
                  </span>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-2">
                      <FileText size={24} className="text-zinc-500" />
                      <span className="text-zinc-500 text-2xl">{order.id.number}</span>
                    </div>
                    
                  </div>
                </div>

                <div className="">
                  <div className="flex justify-between items-center">
                    <h3 className="text-[#FF5900] text-xl font-medium">
                      {order.customer}
                    </h3>
                    <span className="text-[#FFB800] text-lg">
                      {order.id.time}.
                    </span>
                  </div>

                  <div className="">
                    {order.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between">
                        <span className="text-zinc-400">{item.name}</span>
                        <span className="text-zinc-400">R$ {item.price.toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="text-zinc-400">+2 itens</div>
                  </div>

                  <div className="flex justify-between pt-2">
                    <span className="text-zinc-400">Total</span>
                    <span className="text-zinc-400">
                      R$ {order.items.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <button 
                    onClick={() => {}} 
                    className="flex-1 bg-primary text-white py-1 rounded-md"
                  >
                    Ver detalhes
                  </button>
                  <button 
                    onClick={() => {}} 
                    className="flex-1 bg-[#38C7A5] text-white py-1 rounded-md"
                  >
                    Aceitar pedido
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
