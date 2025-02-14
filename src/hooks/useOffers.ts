import { useState } from 'react';

interface Offer {
  id: number;
  name: string;
  description: string;
  price: number;
  promoPrice: number;
  image: string;
}

export function useOffers() {
  const [offers, setOffers] = useState<Offer[]>([
    {
      id: 1,
      name: 'Coca-cola 2L',
      description: 'Refrigerante Coca-cola 2L',
      price: 50.00,
      promoPrice: 50.00,
      image: '/images/icons/burgerplaceholder.svg'
    },
    // Mais ofertas mockadas aqui...
  ]);

  const searchOffers = (term: string) => {
    if (!term) return offers;
    return offers.filter(offer => 
      offer.name.toLowerCase().includes(term.toLowerCase()) ||
      offer.description.toLowerCase().includes(term.toLowerCase())
    );
  };

  return {
    offers,
    searchOffers
  };
}
