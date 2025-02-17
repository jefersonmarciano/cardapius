import { create } from 'zustand';

interface AdditionalItem {
  id: string;
  name: string;
}

interface AdditionalGroup {
  id: string;
  name: string;
  items: AdditionalItem[];
}

interface AdditionalGroupsStore {
  groups: AdditionalGroup[];
  addGroup: (group: Omit<AdditionalGroup, 'id'>) => void;
  updateGroup: (id: string, group: Partial<AdditionalGroup>) => void;
  deleteGroup: (id: string) => void;
}

export const useAdditionalGroups = create<AdditionalGroupsStore>((set) => ({
  groups: [
    {
      id: '1',
      name: 'Adicionais para hamburguer',
      items: [
        { id: '1-1', name: 'Maionese' },
        { id: '1-2', name: 'Maionese' },
        { id: '1-3', name: 'Maionese' },
        { id: '1-4', name: 'Maionese' },
      ]
    },
    // Repetindo o mesmo grupo para simular os dados da imagem
    {
      id: '2',
      name: 'Adicionais para hamburguer',
      items: [
        { id: '2-1', name: 'Maionese' },
        { id: '2-2', name: 'Maionese' },
        { id: '2-3', name: 'Maionese' },
        { id: '2-4', name: 'Maionese' },
      ]
    },
  ],

  addGroup: (newGroup) => 
    set((state) => ({
      groups: [...state.groups, { ...newGroup, id: crypto.randomUUID() }]
    })),

  updateGroup: (id, updatedGroup) =>
    set((state) => ({
      groups: state.groups.map(group => 
        group.id === id ? { ...group, ...updatedGroup } : group
      )
    })),

  deleteGroup: (id) =>
    set((state) => ({
      groups: state.groups.filter(group => group.id !== id)
    })),
}));
