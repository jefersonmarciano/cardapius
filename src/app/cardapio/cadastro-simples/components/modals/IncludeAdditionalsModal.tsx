"use client"

import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";
import { useAdditionals } from '../../hooks/useAdditionals';

interface IncludeAdditionalsModalProps {
  isOpen: boolean;
  onClose: () => void;
  additionals: {
    id: number;
    image: string;
    name: string;
    description: string;
    price: string;
    promoPrice: string;
    isAvailable: boolean;
  }[];
}

export function IncludeAdditionalsModal({ isOpen, onClose }: IncludeAdditionalsModalProps) {
  const {
    additionals,
    toggleAvailability,
    searchAdditionals
  } = useAdditionals();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-full max-w-[800px] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-2 p-6 border-b border-zinc-100">
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-600"
          >
            <CaretLeft className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-medium text-zinc-900">Incluir adicional(s)</h2>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 overflow-auto">
          {/* Campo de busca */}
          <div className="relative mb-6">
            <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Buscar categoria"
              onChange={(e) => searchAdditionals(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-zinc-200 outline-none"
            />
          </div>

          {/* Botão Novo adicional */}
          <button className="text-[#FF5900] bg-[#FFF6F3] px-4 py-2 rounded-lg text-sm font-medium mb-8">
            + Novo adicional
          </button>

          {/* Lista de Adicionais */}
          <div>
            <p className="text-zinc-400 mb-4">Adicionais cadastrados:</p>
            
            <div className="space-y-4">
              {additionals.map(additional => (
                <div 
                  key={additional.id} 
                  className="grid grid-cols-[80px_1fr_auto_auto_auto_auto] gap-4 items-center py-4 border-b border-zinc-100"
                >
                  {/* Imagem */}
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                    <Image
                      src={additional.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Informações */}
                  <div>
                    <h4 className="text-[#FF5900] font-medium">{additional.name}</h4>
                    <p className="text-sm text-zinc-500">{additional.description}</p>
                  </div>

                  {/* Preço */}
                  <div className="text-zinc-900 whitespace-nowrap">
                    R$ {additional.price}
                  </div>

                  {/* Preço promocional */}
                  <div className="text-zinc-900 whitespace-nowrap">
                    R$ {additional.promoPrice}
                  </div>

                  {/* Toggle de disponibilidade */}
                  <div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={additional.isAvailable}
                        onChange={() => toggleAvailability(additional.id)}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  {/* Botão de adicionar */}
                  <button className="w-8 h-8 flex items-center justify-center text-emerald-500 hover:bg-emerald-50 rounded-lg">
                    <span className="text-xl">+</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-zinc-100">
          <button 
            className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}