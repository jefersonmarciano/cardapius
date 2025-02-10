"use client"

import { createContext, useContext, ReactNode, useState } from 'react';

interface Additional {
  id: number;
  name: string;
  description: string;
  price: number;
  promoPrice: number;
  image: string;
  isAvailable: boolean;
}

interface AdditionalsContextData {
  additionals: Additional[];
  selectedAdditionals: Additional[];
  addAdditional: (additional: Additional) => void;
  removeAdditional: (additionalId: number) => void;
  clearAdditionals: () => void;
}

const AdditionalsContext = createContext<AdditionalsContextData>({} as AdditionalsContextData);

interface AdditionalsProviderProps {
  children: ReactNode;
}

export function AdditionalsProvider({ children }: AdditionalsProviderProps) {
  const [additionals] = useState<Additional[]>([
    {
      id: 1,
      name: 'Maionese',
      description: 'Maionese caseira',
      price: 2.5,
      promoPrice: 2.0,
      image: '/maionese.jpg',
      isAvailable: true
    },
  ]);

  const [selectedAdditionals, setSelectedAdditionals] = useState<Additional[]>([]);

  const addAdditional = (additional: Additional) => {
    setSelectedAdditionals(prev => {
      const exists = prev.some(item => item.id === additional.id);
      if (exists) return prev;
      return [...prev, additional];
    });
  };

  const removeAdditional = (additionalId: number) => {
    setSelectedAdditionals(prev => 
      prev.filter(item => item.id !== additionalId)
    );
  };

  const clearAdditionals = () => {
    setSelectedAdditionals([]);
  };

  return (
    <AdditionalsContext.Provider 
      value={{
        additionals,
        selectedAdditionals,
        addAdditional,
        removeAdditional,
        clearAdditionals
      }}
    >
      {children}
    </AdditionalsContext.Provider>
  );
}

export function useAdditionals() {
  const context = useContext(AdditionalsContext);

  if (!context) {
    throw new Error('useAdditionals must be used within an AdditionalsProvider');
  }

  return context;
}
