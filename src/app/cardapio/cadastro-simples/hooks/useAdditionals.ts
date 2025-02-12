import { useState } from 'react';

interface Additional {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

// Dados mockados para exemplo
const mockAdditionals: Additional[] = [
  {
    id: 1,
    name: 'Maionese',
    price: 50.00,
    description: 'Maionese temperada da casa',
    imageUrl: '/images/products/maionese.svg'
  },
  {
    id: 2,
    name: 'Maionese',
    price: 50.00,
    description: 'Maionese temperada da casa',
    imageUrl: '/images/products/maionese.svg'
  },
  {
    id: 3,
    name: 'Maionese',
    price: 50.00,
    description: 'Maionese temperada da casa',
    imageUrl: '/images/products/maionese.svg'
  },
  {
    id: 4,
    name: 'Maionese',
    price: 50.00,
    description: 'Maionese temperada da casa',
    imageUrl: '/images/products/maionese.svg'
  },
  {
    id: 5,
    name: 'Maionese',
    price: 50.00,
    description: 'Maionese caseira',
    imageUrl: '/images/products/maionese.svg'
  }
];

export function useAdditionals() {
  const [additionals, setAdditionals] = useState<Additional[]>(mockAdditionals);
  const [selectedAdditionals, setSelectedAdditionals] = useState<number[]>([]);

  const toggleAdditionalSelection = (id: number) => {
    setSelectedAdditionals(prev => 
      prev.includes(id) 
        ? prev.filter(additionalId => additionalId !== id)
        : [...prev, id]
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
