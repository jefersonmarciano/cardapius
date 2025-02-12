"use client"

import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import { useAdditionals } from "../../hooks/useAdditionals";
import Image from "next/image";

interface IncludeAdditionalsModalProps {
  isOpen: boolean;
  onBack: () => void;
}

export function IncludeAdditionalsModal({ isOpen, onBack }: IncludeAdditionalsModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const { additionals, selectedAdditionals, toggleAdditionalSelection, searchAdditionals } = useAdditionals();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-full max-w-[800px] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 p-6 border-b border-zinc-100">
          <button onClick={onBack} className="text-zinc-500 hover:text-zinc-600">
            <CaretLeft className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-medium text-zinc-900">Incluir adicional(s)</h2>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {/* Campo de busca */}
          <div className="relative mb-6">
            <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Buscar categoria"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                searchAdditionals(e.target.value);
              }}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-zinc-200 outline-none"
            />
          </div>

          {/* Botão Novo adicional */}
          <button className="text-[#FF5900] font-medium text-sm flex items-center gap-1 mb-6">
            <span className="text-[#FF5900] font-normal">+</span>
            <span className="text-[#FF5900]">Novo adicional</span>
          </button>

          {/* Título da seção */}
          <p className="text-zinc-500 mb-4">Adicionais cadastrados:</p>

          {/* Cabeçalho da tabela */}
          <div className="grid grid-cols-[40px_1fr_150px_150px_120px_80px] gap-4 px-4 mb-4">
            <div></div>
            <div className="text-sm text-zinc-500">Informações</div>
            <div className="text-sm text-zinc-500">Preço</div>
            <div className="text-sm text-zinc-500">Preço promocional</div>
            <div className="text-sm text-zinc-500">Disponibilidade</div>
            <div className="text-sm text-zinc-500">Ações</div>
          </div>

          {/* Lista de Adicionais */}
          <div className="space-y-4">
            {additionals.map((additional) => (
              <div 
                key={additional.id} 
                className="grid grid-cols-[40px_1fr_150px_150px_120px_80px] gap-4 items-center px-4 py-2"
              >
                <div className="w-10 h-10 relative rounded-lg overflow-hidden">
                  <Image
                    src={additional.imageUrl}
                    alt={additional.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[#FF5900] font-medium">{additional.name}</h4>
                  <p className="text-sm text-zinc-500">{additional.description}</p>
                </div>
                <div className="bg-zinc-50 px-3 py-1 rounded-md text-zinc-900">
                  R$ {additional.price.toFixed(2)}
                </div>
                <div className="bg-zinc-50 px-3 py-1 rounded-md text-zinc-900">
                  R$ {additional.price.toFixed(2)}
                </div>
                <div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>
                <div className="flex justify-center">
                  <button className="w-8 h-8 flex items-center justify-center text-[#FF5900] hover:bg-[#FF5900]/10 rounded-lg">
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-zinc-100">
          <button 
            onClick={onBack}
            className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}