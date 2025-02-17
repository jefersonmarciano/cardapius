"use client"

import * as Dialog from '@radix-ui/react-dialog';
import { CaretLeft, MagnifyingGlass, Plus } from '@phosphor-icons/react';
import { useState } from 'react';

interface Category {
  id: string;
  name: string;
  subcategories?: string[];
}

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategories: (categories: Category[]) => void;
}

export function CategoryModal({ isOpen, onClose, onSelectCategories }: CategoryModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [categories] = useState<Category[]>([
    { id: '1', name: 'Lanches' },
    { id: '2', name: 'Bebidas', subcategories: ['Refrigerantes', 'Cervejas'] },
    { id: '3', name: 'Combos' },
    { id: '4', name: 'Promoções' },
  ]);

  const handleCategorySelect = (category: Category) => {
    setSelectedCategories(prev => {
      const isSelected = prev.some(c => c.id === category.id);
      if (isSelected) {
        return prev.filter(c => c.id !== category.id);
      }
      return [...prev, category];
    });
  };

  const handleContinue = () => {
    console.log('Enviando categorias:', selectedCategories); // Para debug
    onSelectCategories(selectedCategories);
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-[600px] h-[500px] rounded-2xl overflow-hidden">
          <div className="p-6">
            <header className="flex items-center gap-4 mb-6">
              <Dialog.Close className="text-zinc-900 hover:text-zinc-700">
                <CaretLeft size={24} weight="bold" />
              </Dialog.Close>
              <Dialog.Title className="text-xl text-zinc-900 font-medium">
                Adicionar categoria(s)
              </Dialog.Title>
            </header>

            <div className="relative mb-6">
              <MagnifyingGlass 
                size={20} 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
              />
              <input
                type="text"
                placeholder="Buscar categoria"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            <div className="flex items-center gap-2 text-[#FF5900] mb-6">
              <Plus size={20} className="text-[#FF5900]" />
              <span className="text-[#FF5900] font-medium">Criar nova categoria</span>
            </div>

            <div className="space-y-4 h-[240px] overflow-y-auto pr-2">
              <p className="text-sm text-zinc-500">Categorias cadastradas:</p>
              
              <div className="space-y-4">
                {categories.map(category => (
                  <div key={category.id} className="border-b border-zinc-100 pb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-900">{category.name}</span>
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.some(c => c.id === category.id)}
                        onChange={() => handleCategorySelect(category)}
                        className="h-5 w-5 rounded border-zinc-300 text-[#FF5900] focus:ring-[#FF5900]"
                      />
                    </div>
                    
                    {category.subcategories?.map(sub => (
                      <div key={sub} className="flex items-center justify-between mt-4 pl-4">
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-400">›</span>
                          <span className="text-zinc-700">{sub}</span>
                        </div>
                        <input 
                          type="checkbox" 
                          className="h-5 w-5 rounded border-zinc-300 text-[#FF5900] focus:ring-[#FF5900]"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-zinc-100">
            <button
              onClick={handleContinue}
              className="w-full px-6 py-3 rounded-full bg-[#FF5900] text-white font-medium hover:bg-[#FF5900]/90 transition-colors"
            >
              Continuar
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}