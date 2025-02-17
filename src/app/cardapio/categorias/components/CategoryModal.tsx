"use client"

import * as Dialog from '@radix-ui/react-dialog';
import { X } from '@phosphor-icons/react';
import { useState } from 'react';
import { useCategories } from '@/hooks/useCategories';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CategoryModal({ isOpen, onClose }: CategoryModalProps) {
  const [name, setName] = useState('');
  const [parentId, setParentId] = useState('');
  const { categories, addCategory, addSubcategory } = useCategories();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (parentId) {
      addSubcategory(parentId, { name });
    } else {
      addCategory({ name });
    }

    setName('');
    setParentId('');
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/25" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-full max-w-[480px] rounded-2xl p-6">
          <header className="flex items-center justify-between mb-6">
            <Dialog.Title className="text-lg font-medium text-zinc-900">
              Cadastrar categoria
            </Dialog.Title>
            <Dialog.Close className="text-zinc-400 hover:text-zinc-500">
              <X size={24} />
            </Dialog.Close>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="parent" className="block text-sm text-zinc-700 mb-2">
              Nome da categoria
              </label>
              <select
                id="parent"
                value={parentId}
                onChange={e => setParentId(e.target.value)}
                className="w-full p-3 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900"
              >
                <option value="" className="text-zinc-900">Nenhuma categoria</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id} className="text-zinc-900">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm text-zinc-700 mb-2">
                É uma subcategoria de
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full p-3 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full bg-[#FF5900] text-white font-medium"
            >
              Cadastrar
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
