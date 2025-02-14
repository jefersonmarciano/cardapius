"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

interface Offer {
  id: number;
  name: string;
  description: string;
  price: number;
  promoPrice: number;
  image: string;
  available?: boolean;
}

interface OffersContextData {
  selectedOffers: Offer[];
  availableOffers: Offer[];
  addOffer: (offer: Offer) => void;
  removeOffer: (offerId: number) => void;
  toggleOfferAvailability: (offerId: number) => void;
  searchOffers: (term: string) => Offer[];
}

const OffersContext = createContext({} as OffersContextData);

export function OffersProvider({ children }: { children: ReactNode }) {
  const [selectedOffers, setSelectedOffers] = useState<Offer[]>([]);
  const [availableOffers] = useState<Offer[]>([
    {
      id: 1,
      name: 'Coca-cola 2L',
      description: 'Refrigerante Coca-cola 2L',
      price: 50.00,
      promoPrice: 50.00,
      image: '/images/icons/burgerplaceholder.svg'
    },
    // Adicione mais ofertas mockadas aqui se necessário
  ]);

  const addOffer = (offer: Offer) => {
    setSelectedOffers(prev => [...prev, { ...offer, available: true }]);
  };

  const removeOffer = (offerId: number) => {
    setSelectedOffers(prev => prev.filter(offer => offer.id !== offerId));
  };

  const toggleOfferAvailability = (offerId: number) => {
    setSelectedOffers(prev => prev.map(offer => 
      offer.id === offerId 
        ? { ...offer, available: !offer.available }
        : offer
    ));
  };

  const searchOffers = (term: string) => {
    if (!term) return availableOffers;
    return availableOffers.filter(offer => 
      offer.name.toLowerCase().includes(term.toLowerCase()) ||
      offer.description.toLowerCase().includes(term.toLowerCase())
    );
  };

  return (
    <OffersContext.Provider value={{ 
      selectedOffers,
      availableOffers, 
      addOffer, 
      removeOffer,
      toggleOfferAvailability,
      searchOffers
    }}>
      {children}
    </OffersContext.Provider>
  );
}

export const useOffers = () => useContext(OffersContext);
