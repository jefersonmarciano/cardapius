import { useState } from 'react';

interface Additional {
  id: number;
  name: string;
}

interface AdditionalGroup {
  id: number;
  name: string;
  additionals: Additional[];
  additionalsCount: number;
  min: number;
  max: number;
}

const mockGroups: AdditionalGroup[] = [
  {
    id: 1,
    name: 'Adicionais para hamburguer',
    additionals: [
      { id: 1, name: 'Maionese' },
      { id: 2, name: 'Creme de cebola' },
      { id: 3, name: 'Maionese' },
      { id: 4, name: 'Maionese' },
      { id: 5, name: 'Maionese' },
      { id: 6, name: 'Maionese' },
      { id: 7, name: 'Maionese' },
      { id: 8, name: 'Maionese' },
    ],
    additionalsCount: 8,
    min: 1,
    max: 3
  },
  {
    id: 2,
    name: 'Adicionais para hamburguer',
    additionals: [
      { id: 9, name: 'Maionese' },
      { id: 10, name: 'Maionese' },
      { id: 11, name: 'Maionese' },
      { id: 12, name: 'Maionese' },
      { id: 13, name: 'Maionese' },
      { id: 14, name: 'Maionese' },
      { id: 15, name: 'Maionese' },
      { id: 16, name: 'Maionese' },
    ],
    additionalsCount: 8,
    min: 1,
    max: 3
  }
];

export function useAdditionalGroups() {
  const [groups, setGroups] = useState<AdditionalGroup[]>(mockGroups);
  const [selectedGroups, setSelectedGroups] = useState<number[]>([]);

  const toggleGroupSelection = (id: number) => {
    setSelectedGroups(prev => 
      prev.includes(id) 
        ? prev.filter(groupId => groupId !== id)
        : [...prev, id]
    );
  };

  const searchGroups = (searchTerm: string) => {
    if (!searchTerm) {
      setGroups(mockGroups);
      return;
    }

    const filtered = mockGroups.filter(group => 
      group.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setGroups(filtered);
  };

  return {
    groups,
    selectedGroups,
    toggleGroupSelection,
    searchGroups
  };
}
