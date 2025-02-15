"use client"

import { useState } from 'react';
import { PlusCircle } from '@phosphor-icons/react';
import { CategoryModal } from '../modal/CategoryModal';

export function CategorySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white p-6 rounded-2xl border border-zinc-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-zinc-900 font-medium mb-2">Categoria</h3>
            
            <p className="text-zinc-700 text-sm">
              Selecione ou adicione uma categoria para o produto.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 text-[#FF5900]"
          >
            <PlusCircle size={16} weight="bold" />
            <span className="text-sm">Adicionar categoria</span>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border-2 border-[#FF5900] bg-orange-50">
            <span className="text-sm text-[#FF5900] font-medium">Bebidas</span>
          </div>
          <div className="p-4 rounded-lg border-2 border-zinc-200">
            <span className="text-sm text-zinc-700">Porções</span>
          </div>
          <div className="p-4 rounded-lg border-2 border-zinc-200">
            <span className="text-sm text-zinc-700">Drinks</span>
          </div>
        </div>
      </div>

      <CategoryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
