"use client"

import { useState } from 'react';
import { CaretLeft } from "@phosphor-icons/react";

interface NewCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (categoryName: string, parentCategory: string | null) => void;
  availableCategories: string[];
}

export function NewCategoryModal({ isOpen, onClose, onConfirm, availableCategories }: NewCategoryModalProps) {
  const [categoryName, setCategoryName] = useState('');
  const [parentCategory, setParentCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (categoryName.trim()) {
      onConfirm(categoryName.trim(), parentCategory);
      setCategoryName('');
      setParentCategory(null);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center [margin-top:0!important] min-h-screen">
      <div className="bg-white rounded-[32px] w-full max-w-[600px] flex flex-col overflow-hidden my-auto">
        {/* Header */}
        <div className="flex items-center gap-3 p-8 pb-6">
          <button onClick={onClose}>
            <CaretLeft size={24} className="text-[#BABEC6]" />
          </button>
          <h2 className="text-2xl font-medium text-zinc-900">Nova categoria</h2>
        </div>

        <div className="px-8 flex-1">
          {/* Nome da categoria */}
          <div className="mb-6">
            <label className="block text-zinc-900 mb-2">Nome da categoria</label>
            <input
              type="text"
              placeholder="Ex: Pizza grande ou Pizza média"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-sm text-zinc-900 placeholder:text-[#BABEC6]"
            />
          </div>

          {/* Subcategoria */}
          <div className="mb-6">
            <label className="block text-zinc-900 mb-2">É uma subcategoria de:</label>
            <select
              value={parentCategory || ''}
              onChange={(e) => setParentCategory(e.target.value || null)}
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-sm text-zinc-900"
            >
              <option value="">Selecione uma categoria ou não</option>
              {availableCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-100 p-4 mt-6">
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
