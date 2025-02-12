"use client"

import { createContext, useContext, ReactNode, useState } from 'react';

// Interfaces
interface Additional {
  id: number;
  name: string;
  price: number;
  promoPrice: number;
  description: string;
  image: string;
  isAvailable: boolean;
  isSelected?: boolean;
}

interface AdditionalsContextType {
  additionals: Additional[];
  selectedAdditionals: Additional[];
  toggleAdditionalSelection: (additional: Additional) => void;
  searchAdditionals: (term: string) => void;
}

interface AdditionalsProviderProps {
  children: ReactNode;
}

// Dados mockados
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
    name: 'Maionese Verde',
    price: 50.00,
    promoPrice: 50.00,
    description: 'Maionese temperada da casa com ervas',
    image: '/images/products/maionese.svg',
    isAvailable: true,
    isSelected: false
  },
  {
    id: 3,
    name: 'Maionese Defumada',
    price: 50.00,
    promoPrice: 50.00,
    description: 'Maionese temperada da casa com defumados',
    image: '/images/products/maionese.svg',
    isAvailable: true,
    isSelected: false
  },
  {
    id: 4,
    name: 'Ketchup',
    price: 50.00,
    promoPrice: 50.00,
    description: 'Ketchup da casa',
    image: '/images/products/maionese.svg',
    isAvailable: true,
    isSelected: false
  },
  {
    id: 5,
    name: 'Mostarda',
    price: 50.00,
    promoPrice: 50.00,
    description: 'Mostarda da casa',
    image: '/images/products/maionese.svg',
    isAvailable: true,
    isSelected: false
  }
];

// Criação do contexto
const AdditionalsContext = createContext<AdditionalsContextType | undefined>(undefined);

// Provider
export function AdditionalsProvider({ children }: AdditionalsProviderProps) {
  const [additionals, setAdditionals] = useState<Additional[]>(mockAdditionals);
  const [selectedAdditionals, setSelectedAdditionals] = useState<Additional[]>([]);

  const toggleAdditionalSelection = (additional: Additional) => {
    setSelectedAdditionals(prev => {
      const isCurrentlySelected = prev.some(item => item.id === additional.id);
      
      if (isCurrentlySelected) {
        return prev.filter(item => item.id !== additional.id);
      } else {
        return [...prev, { ...additional, isSelected: true }];
      }
    });
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

  return (
    <AdditionalsContext.Provider 
      value={{ 
        additionals, 
        selectedAdditionals, 
        toggleAdditionalSelection, 
        searchAdditionals 
      }}
    >
      {children}
    </AdditionalsContext.Provider>
  );
}

// Hook personalizado
export function useAdditionals() {
  const context = useContext(AdditionalsContext);
  
  if (!context) {
    throw new Error('useAdditionals must be used within an AdditionalsProvider');
  }
  
  return context;
}

// Exportando a interface para uso em outros arquivos
export type { Additional };
