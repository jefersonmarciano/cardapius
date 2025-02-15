"use client"

import { useState } from 'react';
import { useCategories } from '@/hooks/useCategories';
import { CaretLeft, MagnifyingGlass } from '@phosphor-icons/react';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CategoryModal({ isOpen, onClose }: CategoryModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const { categories, searchCategories } = useCategories();

  if (!isOpen) return null;

  const filteredCategories = searchCategories(searchTerm);

  return (
    <div className="fixed inset-0 bg-black/25 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-full max-w-[600px] max-h-[90vh] overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <button onClick={onClose} className="text-zinc-500 hover:text-zinc-600">
              <CaretLeft size={20} />
            </button>
            <h1 className="text-lg font-medium text-zinc-900">Adicionar categoria(s)</h1>
          </div>

          <div className="relative mb-6">
            <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input
              type="text"
              placeholder="Buscar categoria"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-zinc-200 outline-none"
            />
          </div>

          <button 
            className="flex items-center gap-2 text-[#FF5900] hover:text-[#FF5900]/90 mb-6"
          >
            <span className="text-lg">+</span>
            <span className="text-sm">Criar nova categoria</span>
          </button>

          <div className="mb-4">
            <span className="text-zinc-500">Categorias cadastradas:</span>
          </div>

          <div className="space-y-4 overflow-y-auto max-h-[300px] scrollbar-none">
            {filteredCategories.map(category => (
              <label 
                key={category.id}
                className="flex items-center justify-between py-4 border-b border-zinc-100 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {category.parentId && (
                    <span className="text-zinc-400">{categories.find(c => c.id === category.parentId)?.name} &gt; </span>
                  )}
                  <span className="text-zinc-900">{category.name}</span>
                </div>
                <input
                  type="checkbox"
                  checked={selected.includes(category.name)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelected([...selected, category.name]);
                    } else {
                      setSelected(selected.filter(name => name !== category.name));
                    }
                  }}
                  className="w-5 h-5 text-[#FF5900] border-zinc-300 rounded focus:ring-[#FF5900]"
                />
              </label>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-zinc-100">
          <button
            onClick={() => {
              onClose();
            }}
            className="w-full bg-[#FF5900] text-white py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}