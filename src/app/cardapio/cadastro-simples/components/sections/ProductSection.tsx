"use client"

import { PencilSimple, Trash } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

interface ProductSectionProps {
  isEditing: boolean;
  onEdit: () => void;
}

export function ProductSection({ isEditing, onEdit }: ProductSectionProps) {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    promoPrice: '',
    image: '/images/produtos/cheese-burger.jpg',
    isAvailable: true
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setProductData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-200">
      <h3 className="text-zinc-900 font-medium mb-2">Produto</h3>
      <p className="text-zinc-500 text-sm mb-6">Adicione as informações do produto.</p>

      {isEditing ? (
        <div>
          <div className="grid grid-cols-2 gap-8">
            {/* Coluna da esquerda */}
            <div className="space-y-6">
              {/* Nome do produto */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-900 mb-2">
                  Nome do produto
                </label>
                <input 
                  type="text"
                  id="name"
                  value={productData.name}
                  onChange={handleInputChange}
                  placeholder="Cheese Burger"
                  className="w-full p-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
                />
              </div>

              {/* Descrição */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-zinc-900 mb-2">
                  Descrição
                </label>
                <textarea 
                  id="description"
                  value={productData.description}
                  onChange={handleInputChange}
                  placeholder="Pão de brioche, queijo prato, hamburguer e maionese."
                  rows={6}
                  className="w-full p-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400 resize-none"
                />
              </div>
            </div>

            {/* Coluna da direita - Imagem */}
            <div>
              <label className="block text-sm font-medium text-zinc-900 mb-2">
                Imagem do produto
              </label>
              <div className="border-2 border-dashed border-zinc-200 rounded-lg p-8 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                  <Image 
                    src="/images/icons/burgerplaceholder.svg"
                    alt="Upload" 
                    width={32}
                    height={32}
                    className="opacity-40"
                  />
                </div>
                <button className="px-4 py-2 rounded-full border border-[#FF5900] text-[#FF5900] text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  Enviar foto
                </button>
              </div>
              <div className="mt-4 text-xs text-zinc-500 space-y-1">
                <p>Formatos: <span className="font-medium text-zinc-900">jpg, jpeg, png ou heic</span></p>
                <p>Tamanhos: <span className="font-medium text-zinc-900">até 5 MB</span></p>
                <p>Resolução mínima recomendada: <span className="font-medium text-zinc-900">500x500</span></p>
              </div>
            </div>
          </div>

          {/* Grid de 3 colunas */}
          <div className="flex items-center gap-4 mt-8">
            {/* Valor */}
            <div style={{ width: '33%' }}>
              <label htmlFor="price" className="block text-sm font-medium text-zinc-900 mb-2 whitespace-nowrap">
                Valor
              </label>
              <input 
                type="text"
                id="price"
                value={productData.price}
                onChange={handleInputChange}
                placeholder="R$ 49,90"
                className="w-full p-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            {/* Valor promocional */}
            <div style={{ width: '33%' }}>
              <label htmlFor="promoPrice" className="block text-sm font-medium text-zinc-900 mb-2 whitespace-nowrap">
                Valor promocional
              </label>
              <input 
                type="text"
                id="promoPrice"
                value={productData.promoPrice}
                onChange={handleInputChange}
                placeholder="R$ 39,90"
                className="w-full p-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            {/* Disponibilidade */}
            <div style={{ width: '33%' }}>
              <label htmlFor="disponibilidade" className="block text-sm font-medium text-zinc-900 mb-2 whitespace-nowrap">
                Disponibilidade
              </label>
              <div className="relative">
                <select 
                  id="disponibilidade"
                  defaultValue="disponivel"
                  className="w-full p-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 bg-white appearance-none pr-10 cursor-pointer"
                >
                  <option value="disponivel">Disponível</option>
                  <option value="indisponivel">Indisponível</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] gap-4 items-center">
          <div className="w-12 h-12 relative">
            <Image
              src={productData.image}
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h4 className="text-[#FF5900] font-medium">
              {productData.name || "Cheese Burger"}
            </h4>
            <p className="text-sm text-zinc-500">
              {productData.description || "Pão de brioche, queijo prato, hamburguer e maionese."}
            </p>
          </div>
          <div className="text-zinc-900">
            {productData.price ? `R$ ${productData.price}` : "R$ 50,00"}
          </div>
          <div className="text-zinc-900">
            {productData.promoPrice ? `R$ ${productData.promoPrice}` : "R$ 50,00"}
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <div className="flex gap-2">
            <button 
              onClick={onEdit}
              className="p-2 text-yellow-500 hover:bg-yellow-50 rounded-lg"
            >
              <PencilSimple className="w-5 h-5" />
            </button>
            <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
              <Trash className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
