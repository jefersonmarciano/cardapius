import { useState } from 'react';
import { Category } from '@/app/cardapio/cadastro-pizza/types';

export function useCategories() {
  const [categories] = useState<Category[]>([
    { id: 1, name: 'Lanches' },
    { id: 2, name: 'Bebidas' },
    { id: 3, name: 'Refrigerantes', parentId: 2 },
    { id: 4, name: 'Cervejas', parentId: 2 },
    { id: 5, name: 'Combos' },
    { id: 6, name: 'Promoções' },
  ]);

  const searchCategories = (term: string) => {
    if (!term) return categories;
    return categories.filter(category => 
      category.name.toLowerCase().includes(term.toLowerCase())
    );
  };

  return {
    categories,
    searchCategories
  };
}
