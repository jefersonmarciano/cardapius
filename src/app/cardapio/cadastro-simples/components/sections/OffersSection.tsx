"use client"

import { useState } from 'react';
import { OffersModal } from '@/app/cardapio/cadastro-simples/components/modals/OffersModal';
import { useOffers } from '@/hooks/useOffers';
import { FaTrash, FaInfoCircle } from 'react-icons/fa';

interface OffersSectionProps {
  onOpenOffersModal: () => void;
}

export function OffersSection({ onOpenOffersModal }: OffersSectionProps) {
  const { offers } = useOffers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffers, setSelectedOffers] = useState<string[]>([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddOffer = (offerId: string) => {
    if (!selectedOffers.includes(offerId)) {
      setSelectedOffers([...selectedOffers, offerId]);
    }
  };

  const handleRemoveOffer = (offerId: string) => {
    setSelectedOffers(selectedOffers.filter(id => id !== offerId));
  };

  return (
    <div className="p-8">
      <h2 className="text-zinc-900 font-medium mb-2">Ofertas</h2>
      <p className="text-zinc-500 text-sm mb-4">
        Aumente o ticket médio incluindo 
      </p>

      <button 
        onClick={handleOpenModal}
        className="text-[#FF5900] hover:text-[#FF5900]/80 text-sm flex items-center gap-1"
      >
        <span>+</span>
        Incluir oferta(s)
      </button>

      {isModalOpen && (
        <OffersModal 
          onClose={handleCloseModal} 
          onAddOffer={handleAddOffer}
        />
      )}

      <div className="mt-4">
        {selectedOffers.length > 0 && (
          <div className="flex justify-between font-semibold text-sm text-gray-500 mb-2">
            <div className="flex items-center">
              <FaInfoCircle className="mr-1" />
              <span>Informações</span>
            </div>
            <span className="w-1/4 text-center">Preço</span>
            <span className="w-1/4 text-center">Preço promocional</span>
            <span className="w-1/4 text-center">Disponível</span>
            <span className="w-1/4 text-center">Ações</span>
          </div>
        )}

        {selectedOffers.length > 0 ? (
          selectedOffers.map(offerId => {
            const offer = offers.find(o => o.id === offerId);
            return (
              <div key={offerId} className="flex justify-between items-center border-b border-zinc-200 pb-2 mb-2">
                <div className="ml-2 w-1/4 flex items-center">
                  <img src={offer?.imageUrl} alt={offer?.name} className="w-16 h-16 object-cover rounded" />
                  <div className="ml-2">
                    <h3 className="font-medium" style={{ color: '#FF5900' }}>{offer?.name}</h3>
                    <p className="text-sm text-zinc-600">{offer?.description}</p>
                  </div>
                </div>
                <span className="font-semibold text-center border border-gray-300 rounded-lg px-2 py-1">R$ {offer?.price.toFixed(2)}</span>
                <span className="line-through text-zinc-400 text-center border border-gray-300 rounded-lg px-2 py-1">R$ {offer?.promotionalPrice.toFixed(2)}</span>
                
                <div className="flex items-center">
                  <label className="relative inline-flex items-center cursor-pointer ">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-14 h-8 bg-[#2CA69C] rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-[#2CA69C]"></div>
                    <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-6"></div>
                  </label>
                </div>

                <button onClick={() => handleRemoveOffer(offerId)} className="text-red-500">
                  <FaTrash />
                </button>
              </div>
            );
          })
        ) : null}
      </div>
    </div>
  );
}
