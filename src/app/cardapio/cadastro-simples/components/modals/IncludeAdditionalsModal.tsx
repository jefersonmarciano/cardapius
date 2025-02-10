"use client"

import { useAdditionals } from "@/contexts/AdditionalsContexts";
import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";



interface IncludeAdditionalsModalProps {
  isOpen: boolean;
  onBack: () => void;
}

export function IncludeAdditionalsModal({ isOpen, onBack }: IncludeAdditionalsModalProps) {
  const { additionals, selectedAdditionals, addAdditional, removeAdditional } = useAdditionals();

  const handleAddItem = (additional: any) => {
    if (selectedAdditionals.some(item => item.id === additional.id)) {
      removeAdditional(additional.id);
    } else {
      addAdditional({
        id: additional.id,
        name: additional.name,
        description: additional.description,
        price: additional.price,
        promoPrice: additional.promoPrice,
        image: additional.image,
        isAvailable: additional.isAvailable
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-3xl w-full max-w-[900px] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 p-6">
          <button 
            onClick={onBack}
            className="text-zinc-500 hover:text-zinc-600"
          >
            <CaretLeft className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-medium text-zinc-900">Incluir adicional(s)</h2>
        </div>

        {/* Content */}
        <div className="px-6 flex-1 overflow-auto">
          {/* Campo de busca */}
          <div className="relative mb-6">
            <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Buscar categoria"
              className="w-full pl-12 pr-4 py-3 rounded-2xl border border-zinc-100 outline-none text-zinc-600"
            />
          </div>

          {/* Botão Novo adicional */}
          <button className="text-[#FF5900] font-medium text-sm mb-8">
            + Novo adicional
          </button>

          {/* Lista de Adicionais */}
          <div>
            <p className="text-zinc-400 mb-6">Adicionais cadastrados:</p>
            
            {/* Cabeçalho da tabela */}
            <div className="grid grid-cols-[24px_1fr_auto_auto_auto_auto] items-center gap-4 mb-4">
              <input type="checkbox" className="w-4 h-4 rounded border-zinc-300" />
              <span className="text-zinc-400 text-sm">Informações</span>
              <span className="text-zinc-400 text-sm">Preço</span>
              <span className="text-zinc-400 text-sm whitespace-nowrap">Preço promocional</span>
              <span className="text-zinc-400 text-sm">Disponibilidade</span>
              <span className="text-zinc-400 text-sm">Ações</span>
            </div>

            {/* Lista de itens */}
            <div className="space-y-4">
              {additionals.map(additional => (
                <div 
                  key={additional.id} 
                  className="grid grid-cols-[24px_1fr_auto_auto_auto_auto] items-center gap-4 py-4"
                >
                  <input type="checkbox" className="w-4 h-4 rounded border-zinc-300" />
                  
                  {/* Informações */}
                  <div className="flex gap-4">
                    <div className="w-14 h-14 relative rounded-lg overflow-hidden bg-zinc-100">
                      <Image
                        src={additional.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[#FF5900] font-medium">{additional.name}</h4>
                      <p className="text-sm text-zinc-400">Maionese temperada da casa</p>
                    </div>
                  </div>

                  {/* Preço */}
                  <div className="text-zinc-700 whitespace-nowrap border border-zinc-100 rounded-lg px-3 py-2">
                    R$ 50,00
                  </div>

                  {/* Preço promocional */}
                  <div className="text-zinc-700 whitespace-nowrap border border-zinc-100 rounded-lg px-3 py-2">
                    R$ 50,00
                  </div>

                  {/* Toggle de disponibilidade */}
                  <div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={additional.isAvailable}
                      />
                      <div className="w-11 h-6 bg-zinc-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>

                  {/* Botão de adicionar */}
                  <button 
                    className={`w-8 h-8 flex items-center justify-center ${
                      selectedAdditionals.some(item => item.id === additional.id)
                        ? 'text-white bg-emerald-500 hover:bg-emerald-600'
                        : 'text-emerald-500 hover:bg-emerald-50'
                    } rounded-lg`}
                    onClick={() => handleAddItem(additional)}
                  >
                    <span className="text-2xl">
                      {selectedAdditionals.some(item => item.id === additional.id) ? '✓' : '+'}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 flex justify-end">
          <button 
            onClick={onBack}
            className="bg-[#FF5900] text-white px-8 py-3 rounded-full font-medium hover:bg-[#FF5900]/90"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}