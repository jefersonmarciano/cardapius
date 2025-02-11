"use client"

import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import { useAdditionalGroups } from "../../hooks/useAdditionalGroups";

interface AdditionalGroupsListModalProps {
  isOpen: boolean;
  onBack: () => void;
}

export function AdditionalGroupsListModal({ isOpen, onBack }: AdditionalGroupsListModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const { groups, searchGroups } = useAdditionalGroups();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-full max-w-[800px] max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-zinc-100">
          <div className="flex items-center gap-2">
            <button 
              onClick={onBack}
              className="text-zinc-500 hover:text-zinc-600"
            >
              <CaretLeft className="w-5 h-5" />
            </button>
            <h2 className="text-2xl font-medium text-zinc-900">Grupos de adicionais</h2>
          </div>
          <button 
            className="bg-[#FF5900] text-white px-4 py-2 rounded-lg flex items-center gap-1 text-sm font-medium"
          >
            <span>+</span>
            Cadastrar novo grupo de adicional
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 overflow-auto">
          {/* Campo de busca */}
          <div className="relative mb-6">
            <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Buscar grupo de adicionais"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                searchGroups(e.target.value);
              }}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-zinc-200 outline-none"
            />
          </div>

          {/* Lista de Grupos */}
          <div className="space-y-4">
            {/* Header da tabela */}
            <div className="grid grid-cols-[1fr_auto] gap-4 pb-2">
              <div className="text-sm text-zinc-500">Informações</div>
              <div className="text-sm text-zinc-500">Ações</div>
            </div>

            {/* Itens da tabela */}
            
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
