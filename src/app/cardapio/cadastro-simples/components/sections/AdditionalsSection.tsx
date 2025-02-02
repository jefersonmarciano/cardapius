interface AdditionsSectionProps {
  onOpenAdditionalsModal: () => void;
  isVisible: boolean;
}

export function AdditionalsSection({ onOpenAdditionalsModal, isVisible }: AdditionsSectionProps) {
  if (!isVisible) return null;

  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-200">
      <h3 className="text-zinc-900 font-medium mb-2">Adicionais</h3>
      <p className="text-zinc-500 text-sm mb-6">
        Se este produto pode receber adicionais, inclua por aqui.
      </p>
      
      <button 
        onClick={onOpenAdditionalsModal}
        className="flex items-center gap-2 text-[#FF5900] bg-[#FFF6F3] px-4 py-3 rounded-lg"
      >
        <span className="text-2xl">+</span>
        <span className="text-sm font-medium">Criar grupo de adicionais</span>
      </button>
    </div>
  );
}
