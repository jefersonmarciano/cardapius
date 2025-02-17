"use client"

import { useState } from 'react';
import { CaretDown, UploadSimple } from '@phosphor-icons/react';
import { Product } from '../../types';

interface ProductSectionProps {
  onSave: (product: Product) => void;
  editingProduct?: Product;
  onCancel?: () => void;
}

export function ProductSection({ onSave, editingProduct, onCancel }: ProductSectionProps) {
  const [formData, setFormData] = useState({
    name: editingProduct?.name || '',
    description: editingProduct?.description || '',
    price: editingProduct?.price || '',
    promotionalPrice: editingProduct?.promotionalPrice || '',
    available: editingProduct?.available || true,
    image: editingProduct?.image || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: editingProduct?.id || crypto.randomUUID(),
      ...formData
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-200">
      <h3 className="text-zinc-900 font-medium mb-2">Produto</h3>
      <p className="text-zinc-700 text-sm mb-6">
        Adicione as informações do produto.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-900 mb-2">
                Nome do produto
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
                placeholder="Mundial do Palmeiras"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-900 mb-2">
                Nome do produto
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 outline-none resize-none text-zinc-900 placeholder:text-zinc-400"
                placeholder="Bebida comemorativa do título do Mundial de Clubes do Palmeiras"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-900 mb-2">
                  Quantidade
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
                  placeholder="1"
                />
              </div>

              <div>
                <label className="block text-sm text-zinc-900 mb-2">
                  Un. de Medida
                </label>
                <div className="relative">
                  <select 
                    className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 outline-none appearance-none text-zinc-900"
                  >
                    <option>Litro(s)</option>
                  </select>
                  <CaretDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-700 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-900 mb-2">
                  Valor
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700">R$</span>
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
                    placeholder="49,90"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-zinc-900 mb-2">
                  Valor promocional
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700">R$</span>
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
                    placeholder="39,90"
                    value={formData.promotionalPrice}
                    onChange={(e) => setFormData({ ...formData, promotionalPrice: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-zinc-900 mb-2">
              Imagem do produto
            </label>
            <div className="border-2 border-dashed border-zinc-200 rounded-lg p-8 flex flex-col items-center">
              <div className="w-32 h-32 bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z" fill="#A1A1AA"/>
                </svg>
              </div>
              <button className="flex items-center gap-2 text-[#FF5900] border-2 border-[#FF5900] rounded-full px-6 py-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10" stroke="#FF5900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.3327 5.33333L7.99935 2L4.66602 5.33333" stroke="#FF5900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 2V10" stroke="#FF5900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text-sm">Enviar foto</span>
              </button>
            </div>
            <div className="text-xs text-zinc-700 mt-4 space-y-1 text-center">
              <p>Formatos: jpg, jpeg, png ou heic</p>
              <p>Tamanhos: até 5 MB</p>
              <p>Resolução mínima recomendada: 500x500</p>
            </div>
            <div className="mt-1 ml-8">
              <label className="block text-sm text-zinc-900 mb-2">
                Disponibilidade
              </label>
              <div className="relative max-w-[200px]">
                <select 
                  className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 outline-none appearance-none text-zinc-900"
                >
                  <option>Disponível</option>
                  <option>Indisponivel</option>
                </select>
                <CaretDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-700 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-2 rounded-full border-2 border-zinc-200 text-zinc-700"
            >
              Cancelar
            </button>
          )}
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-[#FF5900] text-white"
          >
            {editingProduct ? 'Salvar alterações' : 'Adicionar produto'}
          </button>
        </div>
      </form>
    </div>
  );
}
