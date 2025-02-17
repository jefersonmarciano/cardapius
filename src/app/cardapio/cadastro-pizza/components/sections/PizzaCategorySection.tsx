"use client"

import { useState } from 'react';
import { PencilSimple } from "@phosphor-icons/react";
import { CategoryModal } from '../modals/CategoryModal';

interface PizzaCategorySectionProps {
  onAddCategory: () => void;
}

export function PizzaCategorySection({ onAddCategory }: PizzaCategorySectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoriesSelected = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-2xl border border-zinc-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-zinc-900 font-medium">Categorias</h3>
          {selectedCategories.length > 0 && (
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-[#FF5900] text-sm font-medium"
            >
              <PencilSimple className="w-4 h-4" />
              Alterar
            </button>
          )}
        </div>

        <p className="text-zinc-500 text-sm mb-4">
          As categorias ajudam seus clientes a encontrarem os produtos mais rápido.
        </p>

        {selectedCategories.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((category) => (
              <div 
                key={category}
                className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm"
              >
                {category}
              </div>
            ))}
          </div>
        ) : (
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 text-[#FF5900] bg-[#FFF6F3] px-4 py-2 rounded-lg text-sm"
          >
            <span>+</span>
            <span>Adicionar categoria(s)</span>
          </button>
        )}
      </div>

      <CategoryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleCategoriesSelected}
      />
    </>
  );
}
