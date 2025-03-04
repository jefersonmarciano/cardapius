"use client"

import { Button } from "@/components/Button";
import { FileText } from "@phosphor-icons/react";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: {
    number: string;
    time: string;
  };
  customer: string;
  items: OrderItem[];
  total: number;
  status: string;
}

export function OrderCard({ order }: { order: any }) {
  console.log('Order:', order);

  return (
    <div className="bg-white rounded-2xl p-4 border border-zinc-200 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
      <div className="flex items-center justify-between mb-2">
        <span className={`px-3 py-1 rounded-md text-sm font-medium bg-amber-400 text-black rounded-r-md -ml-4`}>
          {order.status}
        </span>
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2">
            <FileText size={24} className="text-zinc-500" />
            <span className="text-zinc-500 text-2xl">{order.id.number}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h3 className="text-[#FF5900] text-lg font-medium">{order.customer}</h3>
        <span className="text-[#FFB800] text-lg">{order.id.time}</span>
      </div>

      <div className="space-y-2">
        {order.items.map((item: any, itemIndex: number) => (
          <div key={itemIndex} className="flex justify-between text-zinc-400 text-sm">
            <span>{item.name}</span>
            <span>R$ {item.price.toFixed(2)}</span>
          </div>
        ))}
        <div className="text-zinc-400 text-sm">+{order.items.length - 2} itens</div>
      </div>

      <div className="flex justify-between pt-2">
        <span className="text-zinc-400">Total</span>
        <span className="text-zinc-400">
          R$ {typeof order.total === 'number' ? order.total.toFixed(2) : '0.00'}
        </span>
      </div>

      <div className="flex gap-2 mt-4">
        <Button fullWidth>
          Ver detalhes
        </Button>
        <Button fullWidth className="!bg-emerald-500">
          Aceitar pedido
        </Button>
      </div>
    </div>
  );
}
