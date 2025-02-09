import { useState } from 'react';

interface AdditionalGroup {
  id: number;
  name: string;
  additionalsCount: number;
  min: number;
  max: number;
}

const mockGroups: AdditionalGroup[] = [
  {
    id: 1,
    name: 'Adicionais para lanches',
    additionalsCount: 3,
    min: 1,
    max: 3
  },
  // Adicione mais grupos mockados aqui se necessário
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
