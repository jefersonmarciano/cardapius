"use client"

import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import { useAdditionalGroups } from "../../hooks/useAdditionalGroups";
import { useAdditionals } from "@/contexts/AdditionalsContexts";

interface AdditionalGroupsListModalProps {
  isOpen: boolean;
  onBack: () => void;
}

export function AdditionalGroupsListModal({ isOpen, onBack }: AdditionalGroupsListModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const { groups, searchGroups } = useAdditionalGroups();
  const { addGroup } = useAdditionals();

  if (!isOpen) return null;

  const handleAddGroup = (group: any) => { // Usando any temporariamente para manter compatibilidade
    addGroup(group);
    onBack();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-[32px] w-full max-w-[800px] flex flex-col">
        <div className="p-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium text-zinc-900">Grupos de adicionais</h2>
          </div>

          <div className="relative mb-6">
            <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input
              type="text"
              placeholder="Buscar grupo..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-zinc-200"
              value={searchTerm}
              onChange={e => {
                setSearchTerm(e.target.value);
                searchGroups(e.target.value);
              }}
            />
          </div>

          <div className="space-y-4">
            {groups.map(group => (
              <div key={group.id} className="flex items-center justify-between p-4 border border-zinc-100 rounded-lg">
                <div>
                  <h3 className="font-medium mb-2 text-zinc-900">{group.name}</h3>
                  <div className="flex gap-2">
                    {group.additionals.slice(0, 4).map(additional => (
                      <span 
                        key={additional.id}
                        className="px-3 py-1 bg-emerald-50 text-emerald-500 text-sm rounded-full"
                      >
                        {additional.name}
                      </span>
                    ))}
                    {group.additionals.length > 4 && (
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-500 text-sm rounded-full">
                        +{group.additionals.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleAddGroup(group)}
                  className="text-[#FF5900] hover:text-[#FF5900]/80 text-2xl"
                >
                  +
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-zinc-100 p-4">
          <div className="flex justify-end">
            <button
              onClick={onBack}
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
