"use client"

import { useState } from 'react';
import { MagnifyingGlass, DotsThree, Plus } from '@phosphor-icons/react';
import { useCategories } from '@/hooks/useCategories';
import { CategoryModal } from './components/CategoryModal';

export default function CategoriasPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { categories } = useCategories();

  return (
    <div className="p-8">
      <div className="max-w-[1000px] space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium text-zinc-900">Categorias</h1>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#FF5900] text-white px-4 py-2 rounded-full"
          >
            <Plus size={20} weight="bold" />
            <span>Cadastrar categoria</span>
          </button>
        </div>

        <div className="relative">
          <MagnifyingGlass 
            size={20} 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <input
            type="text"
            placeholder="Buscar categoria ou subcategoria"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-zinc-200 outline-none text-zinc-900"
          />
        </div>

        <div className="bg-white rounded-2xl">
          {categories.map(category => (
            <div key={category.id} className="border-b border-zinc-100 last:border-none">
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <button className="w-6 h-6 grid place-items-center">
                    <DotsThree size={24} className="text-zinc-400" />
                  </button>
                  <span className="text-zinc-900">{category.name}</span>
                </div>
                <button className="w-6 h-6 grid place-items-center">
                  <DotsThree size={24} className="text-zinc-400" />
                </button>
              </div>

              {category.subcategories?.map(sub => (
                <div key={sub.id} className="flex items-center justify-between p-4 pl-12 border-t border-zinc-100">
                  <div className="flex items-center gap-3">
                    <button className="w-6 h-6 grid place-items-center">
                      <DotsThree size={24} className="text-zinc-400" />
                    </button>
                    <span className="text-zinc-700">{sub.name}</span>
                  </div>
                  <button className="w-6 h-6 grid place-items-center">
                    <DotsThree size={24} className="text-zinc-400" />
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <CategoryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
