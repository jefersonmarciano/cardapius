interface CategorySectionProps {
  selectedCategories: string[];
  onOpenModal: () => void;
}

export function CategorySection({ selectedCategories, onOpenModal }: CategorySectionProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-200">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-zinc-900 font-medium mb-2">Categorias</h3>
          <p className="text-zinc-500 text-sm">As categorias ajudam seus clientes a encontrarem os produtos mais rápido.</p>
        </div>
        <button 
          onClick={onOpenModal}
          className="text-[#FF3F00] text-sm font-medium"
        >
          Alterar
        </button>
      </div>

      {selectedCategories.length > 0 && (
        <div className="flex gap-2 mt-4">
          {selectedCategories.map(category => (
            <span 
              key={category}
              className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm"
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
