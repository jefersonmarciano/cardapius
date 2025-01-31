"use client"

import { useCart } from '@/hooks/useCart';
import { X } from '@phosphor-icons/react';
import Image from 'next/image';

export function Cart({ onClose }: { onClose: () => void }) {
  const { items, removeFromCart, updateQuantity } = useCart();

  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50">
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-zinc-900 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Carrinho</h2>
          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {items.length === 0 ? (
          <p className="text-zinc-400">Seu carrinho está vazio</p>
        ) : (
          <>
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-250px)]">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-contain rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-zinc-400">
                      R$ {item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="bg-zinc-800 px-2 rounded hover:bg-zinc-700"
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="bg-zinc-800 px-2 rounded hover:bg-zinc-700"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <X size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-zinc-800 pt-6">
              <div className="flex items-center justify-between mb-4">
                <span>Total:</span>
                <span className="text-xl font-bold">
                  R$ {total.toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-red-500 py-3 rounded-md hover:bg-red-600 transition-colors">
                Finalizar pedido
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
