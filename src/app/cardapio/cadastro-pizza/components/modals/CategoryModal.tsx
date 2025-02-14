"use client"

import { useState } from 'react';
import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";
import { useCategories } from '@/hooks/useCategories';
import { NewCategoryModal } from './NewCategoryModal';

interface Category {
  id: number;
  name: string;
  parentId?: number;
}

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (selectedCategories: string[]) => void;
}

export function CategoryModal({ isOpen, onClose, onConfirm }: CategoryModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] = useState(false);
  const [localCategories, setLocalCategories] = useState<Category[]>([
    { id: 1, name: 'Lanches' },
    { id: 2, name: 'Bebidas' },
    { id: 3, name: 'Refrigerantes', parentId: 2 },
    { id: 4, name: 'Cervejas', parentId: 2 },
    { id: 5, name: 'Combos' },
    { id: 6, name: 'Promoções' },
  ]);
  
  const filteredCategories = searchTerm
    ? localCategories.filter(category => 
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : localCategories;

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryName)) {
        return prev.filter(cat => cat !== categoryName);
      }
      return [...prev, categoryName];
    });
  };

  const handleNewCategory = (categoryName: string, parentCategory: string | null) => {
    const newId = Math.max(...localCategories.map(c => c.id)) + 1;
    const parentCategoryItem = parentCategory 
      ? localCategories.find(c => c.name === parentCategory)
      : null;

    const newCategory: Category = {
      id: newId,
      name: categoryName,
      ...(parentCategoryItem && { parentId: parentCategoryItem.id })
    };

    setLocalCategories(prev => [...prev, newCategory]);
    setIsNewCategoryModalOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center [margin-top:0!important] min-h-screen">
      <div className="bg-white rounded-[32px] w-full max-w-[600px] max-h-[85vh] flex flex-col overflow-hidden my-auto">
        {/* Header com título e botão voltar */}
        <div className="flex items-center gap-3 p-8 pb-6">
          <button onClick={onClose}>
            <CaretLeft size={24} className="text-[#BABEC6]" />
          </button>
          <h2 className="text-2xl font-medium text-zinc-900">Adicionar categoria(s)</h2>
        </div>

        <div className="px-8 flex-1 overflow-y-auto">
          {/* Campo de busca */}
          <div className="relative mb-4">
            <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-[#BABEC6]" size={20} />
            <input
              type="text"
              placeholder="Buscar categoria"
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-zinc-200 outline-none text-sm placeholder:text-[#BABEC6]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Botão Criar nova categoria */}
          <button 
            onClick={() => setIsNewCategoryModalOpen(true)}
            className="w-full text-left text-[#FF5900] hover:bg-[#FFF6F3] rounded-lg transition-colors"
          >
            <div className="px-4 py-3 flex items-center gap-2">
              <span>+</span>
              <span>Criar nova categoria</span>
            </div>
          </button>

          {/* Lista de categorias */}
          <div className="mt-6">
            <p className="text-[#BABEC6] px-4 mb-4">Categorias cadastradas:</p>
            
            <div className="divide-y divide-zinc-100">
              {filteredCategories.map((category) => (
                <label 
                  key={category.id}
                  className="flex items-center w-full hover:bg-zinc-50 cursor-pointer group"
                >
                  <div className="flex items-center py-4 px-4 w-full">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.name)}
                      onChange={() => handleCategorySelect(category.name)}
                      className="mr-3 rounded border-[#BABEC6]"
                    />
                    {category.parentId ? (
                      <div className="flex items-center">
                        <span className="text-[#BABEC6] mr-2 ml-8">›</span>
                        <span className="text-[#BABEC6]">{category.name}</span>
                      </div>
                    ) : (
                      <span className="text-zinc-900">{category.name}</span>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer com botão de continuar */}
        <div className="border-t border-zinc-100 p-4 mt-auto">
          <div className="flex justify-end">
            <button
              onClick={() => {
                onConfirm(selectedCategories);
                onClose();
              }}
              className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>

      <NewCategoryModal
        isOpen={isNewCategoryModalOpen}
        onClose={() => setIsNewCategoryModalOpen(false)}
        onConfirm={handleNewCategory}
        availableCategories={localCategories.filter(c => !c.parentId).map(c => c.name)}
      />
    </div>
  );
}
