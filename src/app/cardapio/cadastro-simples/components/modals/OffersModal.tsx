"use client"

import { useState } from 'react';
import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";
import { useOffers } from '@/contexts/OffersContext';
import Image from 'next/image';
import { Offer } from '@/types/offers';

interface OffersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OffersModal({ isOpen, onClose }: OffersModalProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const { addOffer, searchOffers } = useOffers();
  const filteredOffers = searchOffers(searchTerm);

  const handleAddOffer = (offer: Offer) => {
    addOffer(offer);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-[32px] w-full max-w-[800px] flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-8">
          <div className="flex items-center gap-4 mb-8">
            <button onClick={onClose} className="text-zinc-400 hover:text-zinc-600">
              <CaretLeft size={24} weight="bold" />
            </button>
            <h2 className="text-2xl font-medium text-zinc-900">Incluir oferta</h2>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input
              type="text"
              placeholder="Buscar produto"
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-zinc-200"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col">
            <h3 className="text-zinc-500 mb-4">Adicionais cadastrados:</h3>
            
            {/* Table Header */}
            <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 px-4 py-2 text-zinc-500 text-sm">
              <div></div>
              <div>Informações</div>
              <div>Preço</div>
              <div>Preço promocional</div>
              <div className="text-right">Ações</div>
            </div>

            {/* Table Content */}
            <div className="space-y-2">
              {filteredOffers.map(offer => (
                <div 
                  key={offer.id}
                  className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 items-center px-4 py-3 hover:bg-zinc-50 rounded-lg"
                >
                  <div className="w-12 h-12 relative rounded-lg overflow-hidden">
                    <Image
                      src={offer.image}
                      alt={offer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#FF5900] font-medium">{offer.name}</h4>
                    <p className="text-sm text-zinc-500">{offer.description}</p>
                  </div>
                  <div className="text-zinc-900">
                    R$ {offer.price.toFixed(2).replace('.', ',')}
                  </div>
                  <div className="text-zinc-900">
                    R$ {offer.promoPrice.toFixed(2).replace('.', ',')}
                  </div>
                  <div>
                    <button
                      onClick={() => handleAddOffer(offer)}
                      className="w-8 h-8 flex items-center justify-center text-emerald-500 hover:bg-emerald-50 rounded-lg text-2xl"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-100 p-4 mt-auto">
          <div className="flex justify-end">
            <button
              onClick={onClose}
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