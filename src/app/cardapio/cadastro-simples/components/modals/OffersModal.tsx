"use client"

import { useOffers } from '@/hooks/useOffers';
import { Button } from '@/components/Button'; // Mantendo o import correto
import { FaInfoCircle, FaPlus, FaCheck } from 'react-icons/fa'; // Importando os ícones
import { useState } from 'react';

interface OffersModalProps {
  onClose: () => void;
  onAddOffer: (offerId: string) => void;
}

export function OffersModal({ onClose, onAddOffer }: OffersModalProps) {
  const { offers, isLoading, error } = useOffers();
  const [addedItems, setAddedItems] = useState<string[]>([]); // Estado para itens adicionados

  const handleAddItem = (offerId: string) => {
    if (!addedItems.includes(offerId)) {
      setAddedItems([...addedItems, offerId]);
      onAddOffer(offerId);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50  z-[1]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[800px] modal-container max-w-2xl max-h-[70vh] overflow-y-scroll custom-scroll">
        <h2 className="text-xl font-semibold mb-4" style={{ color: '#2E2E2E' }}>Incluir oferta</h2>
        
        <input
          type="text"
          placeholder="Buscar produto"
          className="border border-zinc-300 rounded-lg p-2 mb-4 w-full"
        />

        {isLoading && <p>Carregando ofertas...</p>}
        {error && <p className="text-red-500">{error}</p>}
        
        <h3 className="text-lg font-medium mb-2" style={{ color: '#AE9D98' }}>Ofertas disponíveis:</h3>

        {/* Cabeçalho dos itens */}
        <div className="flex justify-between font-semibold text-sm text-gray-500 mb-2">
          <div className="flex items-center">
            <FaInfoCircle className="mr-1" /> {/* Ícone ao lado de "Informações" */}
            <span>Informações</span>
          </div>
          <span className="w-1/4 text-center">Preço</span>
          <span className="w-1/4 text-center">Preço promocional</span>
          <span className="w-1/4 text-center">Ações</span>
        </div>
        
        
        <div className="space-y-4 ">
          {offers.map(offer => (
            <div key={offer.id} className="flex justify-between items-center border-b border-zinc-200 pb-2 mb-2 z-[1]">
              <div className="ml-2 w-1/4 flex items-center"> 
                <img src={offer.imageUrl} alt={offer.name} className="w-16 h-16 object-cover rounded" /> 
                <div className="ml-2"> 
                  <h3 className="font-medium" style={{ color: '#FF5900' }}>{offer.name}</h3>
                  <p className="text-sm text-zinc-600">{offer.description}</p>
                </div>
              </div>
              <span className="font-semibold text-center border border-gray-300 rounded-lg px-2 py-1">R$ {offer.price.toFixed(2)}</span>
              <span className="line-through text-zinc-400 text-center border border-gray-300 rounded-lg px-2 py-1">R$ {offer.promotionalPrice.toFixed(2)}</span>
              <button 
                className="flex items-center justify-center w-5 h-5 rounded-full bg-[#00BB9C] text-white"
                onClick={() => handleAddItem(offer.id)}
              >
                {addedItems.includes(offer.id) ? <FaCheck size={10} /> : <FaPlus size={10} />}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-end">
          <Button onClick={onClose} className="bg-[#FF5900] text-white px-4 py-2">Continuar</Button>
        </div>
      </div>
    </div>
  );
}
