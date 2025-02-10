import { useAdditionals } from "@/contexts/AdditionalsContexts";
import { ArrowSquareOut } from "@phosphor-icons/react";

interface AdditionsSectionProps {
  onOpenAdditionalsModal: () => void;
  isVisible: boolean;
}

export function AdditionalsSection({ onOpenAdditionalsModal, isVisible }: AdditionsSectionProps) {
  const { selectedAdditionals } = useAdditionals();
  
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

      {selectedAdditionals.length > 0 && (
        <div className="mt-6">
          <h4 className="text-zinc-400 text-sm mb-4">Grupos de adicionais</h4>
          
          <div className="space-y-4">
            {selectedAdditionals.map(additional => (
              <div key={additional.id} className="flex items-center justify-between p-4 border border-zinc-100 rounded-lg">
                <div>
                  <h5 className="text-zinc-700 font-medium">{additional.name}</h5>
                  <p className="text-sm text-zinc-500">{additional.description}</p>
                </div>
                <button className="text-[#FF5900]">
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
