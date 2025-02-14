"use client"

import { useState } from 'react';
import { OffersModal } from '../modals/OffersModal';
import { useOffers } from '@/contexts/OffersContext';
import Image from 'next/image';
import { Trash } from '@phosphor-icons/react';

interface OffersSectionProps {
  isVisible: boolean;
}

export function OffersSection({ isVisible }: OffersSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { selectedOffers, removeOffer, toggleOfferAvailability } = useOffers();

  if (!isVisible) return null;

  return (
    <>
      <div className="bg-white p-6 rounded-2xl border border-zinc-200">
        <h3 className="text-zinc-900 text-xl font-medium mb-2">Ofertas</h3>
        <p className="text-zinc-500 text-sm mb-4">
          Aumente o ticket médio incluindo ofertas
        </p>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="text-[#FF3F00] hover:text-[#FF3F00]/90 text-sm font-medium flex items-center gap-2"
        >
          <span>+</span> Incluir oferta(s)
        </button>

        {selectedOffers.length > 0 && (
          <div className="mt-6">
            <div className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] gap-4 text-sm text-zinc-500 px-4 mb-2">
              <div></div>
              <div>Informações</div>
              <div>Preço</div>
              <div>Preço da oferta</div>
              <div>Disponibilidade</div>
              <div>Ações</div>
            </div>

            {selectedOffers.map(offer => (
              <div 
                key={offer.id}
                className="grid grid-cols-[auto_1fr_auto_auto_auto_auto] gap-4 items-center p-4 hover:bg-zinc-50 rounded-lg"
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
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={offer.available}
                      onChange={() => toggleOfferAvailability(offer.id)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>
                <div>
                  <button
                    onClick={() => removeOffer(offer.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <OffersModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
