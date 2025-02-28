import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
}

export function CategoryModal({ isOpen, onClose, selectedCategories, onCategoryChange }: CategoryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-full max-w-[600px]">
        {/* Header atualizado */}
        <div className="flex items-center gap-3 p-4 border-b border-zinc-100">
          <button 
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-600"
          >
            <CaretLeft size={24} weight="bold" />
          </button>
          <h2 className="text-2xl font-medium text-zinc-900">Adicionar categoria(s)</h2>
        </div>

        <div className="p-4">
          {/* Campo de busca */}
          <div className="relative mb-4">
            <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <input 
              type="text"
              placeholder="Buscar categoria"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-zinc-200 outline-none text-sm placeholder:text-zinc-400"
            />
          </div>

          {/* Criar nova categoria */}
          <button className="text-[#FF5900] text-sm mb-6">
            + Criar nova categoria
          </button>

          {/* Lista de categorias */}
          <div>
            <p className="text-sm text-zinc-400 mb-4">Categorias cadastradas:</p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-zinc-100">
                <span className="text-zinc-900">Lanches</span>
                <input 
                  type="checkbox" 
                  checked={selectedCategories.includes('lanches')}
                  onChange={() => onCategoryChange('lanches')}
                  className="w-5 h-5 accent-[#FF5900] cursor-pointer" 
                />
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-zinc-100">
                <span className="text-zinc-900">Bebidas</span>
                <input 
                  type="checkbox" 
                  checked={selectedCategories.includes('bebidas')}
                  onChange={() => onCategoryChange('bebidas')}
                  className="w-5 h-5 accent-[#FF5900] cursor-pointer" 
                />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-zinc-100 pl-4">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400">Bebidas</span>
                  <span className="text-zinc-900">› Refrigerantes</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={selectedCategories.includes('refrigerantes')}
                  onChange={() => onCategoryChange('refrigerantes')}
                  className="w-5 h-5 accent-[#FF5900] cursor-pointer" 
                />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-zinc-100 pl-4">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400">Bebidas</span>
                  <span className="text-zinc-900">› Cervejas</span>
                </div>
                <input 
                  type="checkbox" 
                  checked={selectedCategories.includes('cervejas')}
                  onChange={() => onCategoryChange('cervejas')}
                  className="w-5 h-5 accent-[#FF5900] cursor-pointer" 
                />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-zinc-100">
                <span className="text-zinc-900">Combos</span>
                <input 
                  type="checkbox" 
                  checked={selectedCategories.includes('combos')}
                  onChange={() => onCategoryChange('combos')}
                  className="w-5 h-5 accent-[#FF5900] cursor-pointer" 
                />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-zinc-100">
                <span className="text-zinc-900">Promoções</span>
                <input 
                  type="checkbox" 
                  checked={selectedCategories.includes('promocoes')}
                  onChange={() => onCategoryChange('promocoes')}
                  className="w-5 h-5 accent-[#FF5900] cursor-pointer" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 mt-4">
          <button 
            onClick={onClose}
            className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
