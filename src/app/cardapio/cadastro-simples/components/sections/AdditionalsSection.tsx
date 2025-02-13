"use client"

import { useAdditionals } from "@/contexts/AdditionalsContexts";
import { ArrowSquareOut } from "@phosphor-icons/react";

interface AdditionsSectionProps {
  onOpenAdditionalsModal: () => void;
  onOpenGroupsList: () => void;
  isVisible: boolean;
}

export function AdditionalsSection({ 
  onOpenAdditionalsModal, 
  onOpenGroupsList,
  isVisible 
}: AdditionsSectionProps) {
  const { selectedGroups, selectedAdditionals } = useAdditionals();

  if (!isVisible) return null;

  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-200">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-zinc-900 font-medium mb-2">Adicionais</h3>
          <p className="text-zinc-500 text-sm">
            Se este produto pode receber adicionais, inclua por aqui.
          </p>
        </div>
        <button 
          onClick={onOpenAdditionalsModal}
          className="text-[#FF5900] hover:text-[#FF5900]/90 bg-[#FFF6F3] px-4 py-2 rounded-lg text-sm font-medium"
        >
          + Criar grupo de adicionais
        </button>
      </div>

      {(selectedGroups.length > 0 || selectedAdditionals.length > 0) && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-zinc-400 text-sm">Grupos de adicionais</h4>
            <div className="flex items-center justify-between text-zinc-400 text-sm">
              <span className="w-32">Informações</span>
              <span className="w-20 text-right">Ações</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {selectedGroups.map(group => (
              <div key={group.id} className="flex items-center justify-between p-4 border border-zinc-100 rounded-lg">
                <h5 className="text-zinc-700 font-medium">{group.name}</h5>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {group.additionals.slice(0, 4).map((additional) => (
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
                  <button 
                    onClick={onOpenGroupsList}
                    className="text-[#FF5900] hover:text-[#FF5900]/80"
                  >
                    <ArrowSquareOut size={20} />
                  </button>
                </div>
              </div>
            ))}

            {selectedAdditionals.map(additional => (
              <div key={additional.id} className="flex items-center justify-between p-4 border border-zinc-100 rounded-lg">
                <h5 className="text-zinc-700 font-medium">{additional.name}</h5>
                <div className="flex items-center gap-2">
                  {additional.description && (
                    <span className="text-sm text-zinc-500">{additional.description}</span>
                  )}
                  {additional.price && (
                    <span className="text-sm text-zinc-500">R$ {additional.price.toFixed(2)}</span>
                  )}
                  <button 
                    onClick={onOpenGroupsList}
                    className="text-[#FF5900] hover:text-[#FF5900]/80"
                  >
                    <ArrowSquareOut size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
