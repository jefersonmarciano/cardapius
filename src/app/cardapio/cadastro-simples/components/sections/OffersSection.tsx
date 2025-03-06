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
    <div className="p-8 bg-white border border-[#E8E8E8] rounded-xl mb-2">
      <h2 className="text-zinc-900 font-medium mb-2">Ofertas</h2>
      <p className="text-zinc-500 text-sm mb-4">
        Aumente o ticket médio incluindo 
      </p>

      <button 
        onClick={handleOpenModal}
        className="text-[#FF5900] hover:text-[#FF5900]/80 text-sm flex items-center gap-1 mb-2"
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
            <div className="flex flex-col items-start mr-2">
              <img src="/images/icons/imageIncon.svg" alt="Imagem" className="w-4 h-4 mb-2" />
              {selectedOffers.map(offerId => {
                const offer = offers.find(o => o.id === offerId);
                return (
                  <div key={offerId} className="mb-1">
                    {offer?.imageUrl && (
                      <img src={offer.imageUrl} alt={offer.name} className="w-10 h-10 rounded" />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-start">
              <span>Informações</span>
              {selectedOffers.map(offerId => {
                const offer = offers.find(o => o.id === offerId);
                return (
                  <div key={offerId}>
                    <h3 className="font-medium text-[#FF5900] mt-2 w-full">{offer?.name}</h3>
                    <p className="text-zinc-500 text-xs">{offer?.description}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-center">
              <span>Preço</span>
              {selectedOffers.map(offerId => {
                const offer = offers.find(o => o.id === offerId);
                return (
                  <span key={offerId} className="font-semibold mb-3 mt-3">
                    R$ {offer?.price.toFixed(2)}
                  </span>
                );
              })}
            </div>
            <div className="flex flex-col items-center">
              <span>Preço promocional</span>
              {selectedOffers.map(offerId => {
                const offer = offers.find(o => o.id === offerId);
                return (
                  <span key={offerId} className="line-through text-zinc-400 mb-3 mt-3">
                    R$ {offer?.promotionalPrice.toFixed(2)}
                  </span>
                );
              })}
            </div>
            <div className="flex flex-col items-center w-24">
              <span>Disponível</span>
              {selectedOffers.map(offerId => {
                const offer = offers.find(o => o.id === offerId);
                return (
                  <div key={offerId} className="flex items-center">
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer " />
                      <div className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#2CAFA0] dark:peer-checked:bg-[#2CAFA0] mb-3 mt-3"></div>
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col items-center">
              <span>Ações</span>
              {selectedOffers.map(offerId => (
                <button key={offerId} onClick={() => handleRemoveOffer(offerId)} className="text-red-500 mb-4 mt-4">
                  <FaTrash />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
