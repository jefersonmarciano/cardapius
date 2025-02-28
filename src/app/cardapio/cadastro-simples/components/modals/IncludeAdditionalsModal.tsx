"use client"

import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import Image from 'next/image';
import { useAdditionals } from "@/contexts/AdditionalsContexts";
import { Additional } from "@/types/additionals";
import { Button } from '@/components/Button';

const mockAdditionals: Additional[] = [
  {
    id: 1,
    name: 'Bacon Extra',
    description: 'Fatias de bacon crocante',
    price: 5.90,
    promoPrice: 4.90,
    available: true,
    image: '/images/icons/burgerplaceholder.svg'
  },
  {
    id: 2,
    name: 'Queijo Cheddar',
    description: 'Fatia de queijo cheddar',
    price: 3.90,
    promoPrice: 4.90,
    available: true,
    image: '/images/icons/burgerplaceholder.svg'
  },
];

interface IncludeAdditionalsModalProps {
  isOpen: boolean;
  onBack: () => void;
}

export function IncludeAdditionalsModal({ isOpen, onBack }: IncludeAdditionalsModalProps) {
  const { selectedGroups, selectedAdditionals, addAdditional } = useAdditionals();
  const [searchTerm, setSearchTerm] = useState('');
  const [additionalsState, setAdditionals] = useState<Additional[]>(mockAdditionals);

  if (!isOpen) return null;

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (!term) {
      setAdditionals(mockAdditionals);
      return;
    }
    const filtered = mockAdditionals.filter(additional => 
      additional.name.toLowerCase().includes(term.toLowerCase())
    );
    setAdditionals(filtered);
  };

  const handleAddAdditional = (additional: Additional) => {
    addAdditional(additional);
    onBack();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-[32px] w-full max-w-[800px] flex flex-col">
        {/* Header */}
        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <button onClick={onBack} className="text-zinc-400 hover:text-zinc-600">
              <CaretLeft size={24} weight="bold" />
            </button>
            <h2 className="text-2xl font-medium text-zinc-900">Incluir adicional(s)</h2>
          </div>

          {/* Search */}
          <div className="relative">
            <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input
              type="text"
              placeholder="Buscar categoria"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#FF5900]"
            />
          </div>
        </div>

        {/* Novo adicional */}
        <div className="px-8">
          <button className="text-[#FF5900] hover:text-[#FF5900]/80 text-sm">
            + Novo adicional
          </button>
        </div>

        {/* Lista de Adicionais */}
        <div className="p-8">
          <p className="text-sm text-zinc-400 mb-4">Adicionais cadastrados:</p>
          
          {/* Table */}
          <div className="space-y-4">
            {additionalsState.map((additional) => (
              <div
                key={additional.id}
                className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] items-center gap-4 px-4 py-2"
              >
                <div className="w-10">
                  <input
                    type="checkbox"
                    checked={selectedAdditionals.some(item => item.id === additional.id)}
                    onChange={() => handleAddAdditional(additional)}
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
                  {additional.price ? `R$ ${additional.price.toFixed(2).replace('.', ',')}` : '-'}
                </div>
                <div className="w-32 text-zinc-900">
                  {additional.promoPrice ? `R$ ${additional.promoPrice.toFixed(2).replace('.', ',')}` : '-'}
                </div>
                <div className="w-32">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={additional.available}
                      readOnly
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>
                <div className="w-20 flex justify-end">
                  <button
                    onClick={() => handleAddAdditional(additional)}
                    className="text-[#FF5900] hover:text-[#FF5900]/80 text-2xl"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-100 p-4">
          <div className="flex justify-end">
            <Button onClick={onBack}>
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}