"use client"

import { useState } from 'react';
import { PencilSimple, Trash } from '@phosphor-icons/react';
import Image from 'next/image';
import { Product } from '../../types';

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export function ProductList({ products, onEdit, onDelete }: ProductListProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-200">
      <h3 className="text-zinc-900 font-medium mb-2">Produto</h3>
      <p className="text-zinc-700 text-sm mb-6">
        Adicione as informações do produto.
      </p>

      <div className="divide-y divide-zinc-100">
        {products.map(product => (
          <div key={product.id} className="py-4 flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-zinc-100 flex-shrink-0">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={64}
                  height={64}
                  className="rounded-lg object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z" fill="#A1A1AA"/>
                  </svg>
                </div>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-[#FF5900] font-medium truncate">{product.name}</h4>
              <p className="text-sm text-zinc-700 truncate">{product.description}</p>
            </div>

            <div className="flex items-center gap-8">
              <div>
                <span className="text-sm text-zinc-700 font-medium">Preço</span>
                <p className="text-zinc-900">R$ {product.price}</p>
              </div>

              <div>
                <span className="text-sm text-zinc-700 font-medium">Preço promocional</span>
                <p className="text-zinc-900">R$ {product.promotionalPrice}</p>
              </div>

              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${product.available ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className="text-sm text-zinc-700 font-medium">
                  {product.available ? 'Disponível' : 'Indisponível'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => onEdit(product)}
                  className="p-2 hover:bg-zinc-50 rounded-full transition-colors"
                >
                  <PencilSimple size={20} className="text-yellow-500" />
                </button>
                <button 
                  onClick={() => onDelete(product.id)}
                  className="p-2 hover:bg-zinc-50 rounded-full transition-colors"
                >
                  <Trash size={20} className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
