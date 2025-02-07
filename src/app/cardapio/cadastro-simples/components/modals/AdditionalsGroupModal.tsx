import { CaretLeft } from "@phosphor-icons/react";
import Image from "next/image";

interface AdditionalsGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenIncludeAdditionals: () => void;
}

export function AdditionalsGroupModal({ 
  isOpen, 
  onClose,
  onOpenIncludeAdditionals 
}: AdditionalsGroupModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-full max-w-[800px] p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <button 
              onClick={onClose}
              className="text-zinc-500 hover:text-zinc-600"
            >
              <CaretLeft className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold text-zinc-900">Novo grupo de adicionais</h2>
          </div>
          <button 
            onClick={onOpenIncludeAdditionals}
            className="bg-[#FF5900] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#FF5900]/90 flex items-center gap-2"
          >
            <span>+</span>
            Incluir grupo de adicional
          </button>
        </div>

        {/* Formulário */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 mb-8">
          {/* Nome do grupo */}
          <div>
            <label className="block text-sm font-medium text-zinc-900 mb-2">
              Nome do grupo
            </label>
            <input 
              type="text"
              placeholder="Adicionais para lanches"
              className="w-full p-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
            />
          </div>

          {/* Obrigatório */}
          <div>
            <label className="block text-sm font-medium text-zinc-900 mb-2">
              Obrigatório
            </label>
            <div className="relative">
              <select 
                className="w-full p-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 bg-white appearance-none pr-10"
              >
                <option>Sim</option>
                <option>Não</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Mínimo */}
          <div>
            <label className="block text-sm font-medium text-zinc-900 mb-2">
              Mínimo
            </label>
            <div className="flex items-center border border-zinc-200 rounded-lg">
              <button className="p-3 text-zinc-400 hover:text-zinc-600">-</button>
              <input 
                type="text"
                value="1"
                className="w-full text-center border-none outline-none text-zinc-900"
                readOnly
              />
              <button className="p-3 text-[#FF5900] hover:text-[#FF5900]/80">+</button>
            </div>
          </div>

          {/* Máximo */}
          <div>
            <label className="block text-sm font-medium text-zinc-900 mb-2">
              Máximo
            </label>
            <div className="flex items-center border border-zinc-200 rounded-lg">
              <button className="p-3 text-zinc-400 hover:text-zinc-600">-</button>
              <input 
                type="text"
                value="3"
                className="w-full text-center border-none outline-none text-zinc-900"
                readOnly
              />
              <button className="p-3 text-[#FF5900] hover:text-[#FF5900]/80">+</button>
            </div>
          </div>
        </div>

        {/* Seção de Adicionais */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-zinc-900">Adicionais neste grupo</h3>
            <button 
              onClick={onOpenIncludeAdditionals}
              className="text-[#FF5900] bg-[#FFF1EC] hover:bg-[#FFF1EC]/80 px-3 py-1.5 rounded-lg flex items-center gap-1 text-sm"
            >
              <span>+</span>
              Incluir adicional
            </button>
          </div>
          <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-zinc-200 rounded-lg">
            <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-4">
              <Image 
                src="/images/icons/prato.svg"
                alt="Adicionais" 
                width={72}
                height={72}
              />
            </div>
            <p className="text-zinc-400 text-center mb-2">Ops! Este grupo ainda não possui adicionais.</p>
            <p className="text-zinc-400 text-center">
              Clique em <span className="text-[#FF5900]">incluir adicional</span> e ofereça mais opções para turbinar seu produto!
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2">
          <button 
            onClick={onClose}
            className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90"
          >
            Finalizar
          </button>
        </div>
      </div>
    </div>
  );
}
