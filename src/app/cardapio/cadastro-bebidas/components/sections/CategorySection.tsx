"use client"

import { useState } from 'react';
import { Plus } from '@phosphor-icons/react';
import { CategoryModal } from '../modal/CategoryModal';

interface Category {
  id: string;
  name: string;
  subcategories?: string[];
}

export function CategorySection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  return (
    <>
      <div className="bg-white p-6 rounded-2xl border border-zinc-200">
        <div className="flex flex-col">
          <div className={selectedCategories.length > 0 ? "flex items-center justify-between mb-6" : "mb-6"}>
            <div>
              <h3 className="text-zinc-900 font-medium mb-2">Categorias</h3>
              <p className="text-zinc-500 text-sm">
                As categorias ajudam seus clientes a encontrarem os produtos mais rápido.
              </p>
            </div>

            {selectedCategories.length > 0 && (
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-[#FF5900] text-sm px-4 py-2 rounded-lg border border-[#FF5900]"
              >
                Alterar
              </button>
            )}
          </div>

          {selectedCategories.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {selectedCategories.map(category => (
                <div key={category.id} className="inline-flex">
                  <span className="text-emerald-700 bg-emerald-50 px-4 py-2 rounded-lg text-sm">
                    {category.name}
                  </span>
                  {category.subcategories?.map(sub => (
                    <span key={sub} className="text-emerald-700 bg-emerald-50 px-4 py-2 rounded-lg text-sm ml-2">
                      {sub}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 text-[#FF5900]"
            >
              <Plus size={20} weight="bold" />
              <span className="text-sm">Adicionar categoria(s)</span>
            </button>
          )}
        </div>
      </div>

      <CategoryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectCategories={setSelectedCategories}
      />
    </>
  );
}
