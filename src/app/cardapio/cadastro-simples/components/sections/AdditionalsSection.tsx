"use client"

import { useAdditionals } from "@/contexts/AdditionalsContexts";
import { ArrowSquareOut } from "@phosphor-icons/react";
import Image from "next/image";

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
          <h4 className="text-zinc-700 text-lg mb-4">Grupos de adicionais</h4>
          
          <div className="flex items-center justify-between mb-2 px-2">
            <span className="text-zinc-400 text-sm">Informações</span>
            <span className="text-zinc-400 text-sm">Ações</span>
          </div>

          <div className="space-y-4">
            {/* Grupos e Adicionais combinados */}
            {[...selectedGroups, ...selectedAdditionals].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <h5 className="text-zinc-800 font-medium mb-2">
                    {'additionals' in item ? item.name : `Adicionais de ${item.name}`}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {'additionals' in item 
                      ? item.additionals.slice(0, 4).map((additional, idx) => (
                          <span key={idx} className="px-3 py-1 bg-emerald-50 text-emerald-600 text-sm rounded-full">
                            {additional.name}
                          </span>
                        ))
                      : (
                          <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-sm rounded-full">
                            {item.name}
                          </span>
                        )
                    }
                    {'additionals' in item && item.additionals.length > 4 && (
                      <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-sm rounded-full">
                        +{item.additionals.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                <button 
                  onClick={onOpenGroupsList}
                  className="text-[#FF5900] hover:text-[#FF5900]/80"
                >
                  <ArrowSquareOut size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
