"use client"

import { createContext, useContext, useState } from 'react';


// Interface unificada com todas as propriedades necessárias
export interface Additional {
  id: number;
  name: string;
  description?: string;
  price?: number;
  promoPrice?: number;
  available?: boolean;
  image?: string | any;
}

export interface AdditionalGroup {
  id: number;
  name: string;
  additionals: Additional[];
  additionalsCount: number;
  min: number;
  max: number;
}

interface AdditionalsContextType {
  selectedGroups: AdditionalGroup[];
  selectedAdditionals: Additional[];
  addGroup: (group: AdditionalGroup) => void;
  removeGroup: (groupId: number) => void;
  addAdditional: (additional: Additional) => void;
  removeAdditional: (additionalId: number) => void;
}

export const AdditionalsContext = createContext({} as AdditionalsContextType);

export function AdditionalsProvider({ children }: { children: React.ReactNode }) {
  const [selectedGroups, setSelectedGroups] = useState<AdditionalGroup[]>([]);
  const [selectedAdditionals, setSelectedAdditionals] = useState<Additional[]>([]);

  const addGroup = (group: AdditionalGroup) => {
    setSelectedGroups(prev => {
      if (prev.some(g => g.id === group.id)) return prev;
      return [...prev, group];
    });
  };

  const removeGroup = (groupId: number) => {
    setSelectedGroups(prev => prev.filter(group => group.id !== groupId));
  };

  const addAdditional = (additional: Additional) => {
    setSelectedAdditionals(prev => {
      if (prev.some(a => a.id === additional.id)) return prev;
      return [...prev, additional];
    });
  };

  const removeAdditional = (additionalId: number) => {
    setSelectedAdditionals(prev => prev.filter(add => add.id !== additionalId));
  };

  return (
    <AdditionalsContext.Provider value={{
      selectedGroups,
      selectedAdditionals,
      addGroup,
      removeGroup,
      addAdditional,
      removeAdditional,
    }}>
      {children}
    </AdditionalsContext.Provider>
  );
}

export const useAdditionals = () => useContext(AdditionalsContext);
