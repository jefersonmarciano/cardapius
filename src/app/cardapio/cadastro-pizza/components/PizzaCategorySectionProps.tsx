interface PizzaCategorySectionProps {
  onAddCategory: () => void;
}

export function PizzaCategorySection({ onAddCategory }: PizzaCategorySectionProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-200">
      <div>
        <h3 className="text-zinc-900 font-medium mb-2">Categorias</h3>
        <p className="text-zinc-500 text-sm">As categorias ajudam seus clientes a encontrarem os produtos mais rápido.</p>
      </div>

      <button 
        onClick={onAddCategory}
        className="mt-4 flex items-center gap-2 text-[#FF5900] bg-[#FFF6F3] px-4 py-2 rounded-lg text-sm"
      >
        <span>+</span>
        <span>Adicionar categoria(s)</span>
      </button>
    </div>
  );
}
