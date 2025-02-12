import { useState } from 'react';

export interface Additional {
  id: number;
  name: string;
  price: number;
  promoPrice: number;
  description: string;
  image: string;
  isSelected?: boolean;
  isAvailable?: boolean;
}

// Dados mockados para exemplo
const mockAdditionals: Additional[] = [
  {
    id: 1,
    name: 'Maionese',
    price: 50.00,
    promoPrice: 50.00,
    description: 'Maionese temperada da casa',
    image: '/images/products/maionese.svg',
    isAvailable: true,
    isSelected: false
  },
  {
    id: 2,
    name: 'Maionese',
    price: 50.00,
    promoPrice: 45.00,
    description: 'Maionese temperada da casa',
    image: '/images/products/maionese.svg',
    isAvailable: true,
    isSelected: false
  },
  {
    id: 3,
    name: 'Maionese',
    price: 50.00,
    promoPrice: 45.00,
    description: 'Maionese temperada da casa',
    image: '/images/products/maionese.svg',
    isAvailable: true,
    isSelected: false
  },
  {
    id: 4,
    name: 'Maionese',
    price: 50.00,
    promoPrice: 45.00,
    description: 'Maionese temperada da casa',
    image: '/images/products/maionese.svg',
    isAvailable: true,
    isSelected: false
  },
  {
    id: 5,
    name: 'Maionese',
    price: 50.00,
    promoPrice: 45.00,
    description: 'Maionese caseira',
    image: '/images/products/maionese.svg',
    isAvailable: true,
    isSelected: false
  }
];

export function useAdditionals() {
  const [additionals, setAdditionals] = useState<Additional[]>(mockAdditionals);
  const [selectedAdditionals, setSelectedAdditionals] = useState<Additional[]>([]);

  const toggleAdditionalSelection = (additional: Additional) => {
    setSelectedAdditionals(prev => {
      const isCurrentlySelected = prev.some(item => item.id === additional.id);
      
      if (isCurrentlySelected) {
        return prev.filter(item => item.id !== additional.id);
      } else {
        const newAdditional = {
          ...additional,
          isSelected: true
        };
        return [...prev, newAdditional];
      }
    });

    setAdditionals(prev => 
      prev.map(item => 
        item.id === additional.id 
          ? { ...item, isSelected: !item.isSelected }
          : item
      )
    );
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
    selectedAdditionals,
    toggleAdditionalSelection,
    searchAdditionals
  };
}
