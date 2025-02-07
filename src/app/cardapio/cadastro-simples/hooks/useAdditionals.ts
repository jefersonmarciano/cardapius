import { useState } from 'react';

interface Additional {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
  promoPrice: string;
  isAvailable: boolean;
  selected?: boolean;
}

// Dados mockados para exemplo
const mockAdditionals: Additional[] = [
  {
    id: 1,
    image: '/images/additionals/maionese.png',
    name: 'Maionese',
    description: 'Maionese temperada da casa',
    price: '50,00',
    promoPrice: '50,00',
    isAvailable: true,
    selected: false
  },
  {
    id: 2,
    image: '/images/additionals/maionese.png',
    name: 'Maionese',
    description: 'Maionese temperada da casa',
    price: '50,00',
    promoPrice: '50,00',
    isAvailable: true,
    selected: false
  },
  // adiconar mais dados
];

export function useAdditionals() {
  const [additionals, setAdditionals] = useState<Additional[]>(mockAdditionals);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleAvailability = (id: number) => {
    setAdditionals(additionals.map(additional => {
      if (additional.id === id) {
        return { 
          ...additional, 
          isAvailable: !additional.isAvailable,
          selected: !additional.selected
        };
      }
      return additional;
    }));
  };

  const searchAdditionals = (searchTerm: string) => {
    if (!searchTerm) {
      setAdditionals(mockAdditionals);
      return;
    }

    const filtered = mockAdditionals.filter(additional => 
      additional.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setAdditionals(filtered);
  };

  return {
    additionals,
    isLoading,
    error,
    toggleAvailability,
    searchAdditionals
  };
}
