"use client"

import { useState } from 'react';
import Image from 'next/image';
import { useAdditionals } from '@/contexts/AdditionalsContexts';

interface IncludeAdditionalsModalProps {
  isOpen: boolean;
  onBack: () => void;
}

export function IncludeAdditionalsModal({ isOpen, onBack }: IncludeAdditionalsModalProps) {
  const { additionals, selectedAdditionals, toggleAdditionalSelection } = useAdditionals();
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-[32px] w-full max-w-[800px] h-[85vh] flex flex-col">
        {/* Header fixo */}
        <div className="shrink-0 p-8 border-b border-zinc-100">
          <div className="flex items-center gap-3 mb-6">
            <button onClick={onBack} className="text-zinc-500 hover:text-zinc-600">
              ←
            </button>
            <h2 className="text-2xl font-medium text-zinc-900">Incluir adicional(s)</h2>
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar categoria"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF5900]"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400">
              🔍
            </span>
          </div>
        </div>

        {/* Novo adicional e Table Header fixos */}
        <div className="shrink-0 px-8 pt-8">
          <button className="text-[#FF5900] hover:text-[#FF5900]/80 flex items-center gap-1 text-sm mb-8">
            <span>+</span>
            Novo adicional
          </button>

          <p className="text-zinc-400 mb-6">Adicionais cadastrados:</p>
          
          <div className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] items-center gap-4 px-4 text-sm text-zinc-500 bg-white">
            <div className="w-10"></div>
            <div>Informações</div>
            <div className="w-32">Preço</div>
            <div className="w-32">Preço promocional</div>
            <div className="w-32">Disponibilidade</div>
            <div className="w-20 text-right">Ações</div>
          </div>
        </div>

        {/* Content com scroll */}
        <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <div className="px-8 pt-4">
            {/* Table Content */}
            <div className="space-y-4">
              {additionals.map((additional) => (
                <div
                  key={additional.id}
                  className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] items-center gap-4 px-4 py-2"
                >
                  <div className="w-10">
                    <input
                      type="checkbox"
                      checked={selectedAdditionals.some(item => item.id === additional.id)}
                      onChange={() => toggleAdditionalSelection(additional)}
                      className="w-4 h-4 rounded border-zinc-300 text-[#FF5900] focus:ring-[#FF5900]"
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 relative rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={additional.image}
                        alt={additional.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-[#FF5900] font-medium">{additional.name}</h4>
                      <p className="text-sm text-zinc-500">{additional.description}</p>
                    </div>
                  </div>
                  <div className="w-32 text-zinc-900">
                    R$ {additional.price.toFixed(2).replace('.', ',')}
                  </div>
                  <div className="w-32 text-zinc-900">
                    R$ {additional.promoPrice.toFixed(2).replace('.', ',')}
                  </div>
                  <div className="w-32">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={additional.isAvailable}
                        readOnly
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                    </label>
                  </div>
                  <div className="w-20 flex justify-end">
                    <button
                      onClick={() => toggleAdditionalSelection(additional)}
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-[#FF5900] hover:bg-[#FF5900]/10"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer fixo */}
        <div className="shrink-0 p-4 border-t border-zinc-100">
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