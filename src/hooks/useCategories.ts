import { create } from 'zustand';

interface Category {
  id: string;
  name: string;
  parentId?: string;
  subcategories?: Category[];
}

interface CategoriesStore {
  categories: Category[];
  addCategory: (category: Omit<Category, 'id'>) => void;
  addSubcategory: (parentId: string, subcategory: Omit<Category, 'id'>) => void;
}

export const useCategories = create<CategoriesStore>((set) => ({
  categories: [
    { 
      id: '1', 
      name: 'Entradas',
    },
    { 
      id: '2', 
      name: 'Lanches',
      subcategories: [
        { id: '2-1', name: 'Pizzas', parentId: '2' }
      ]
    },
    { id: '3', name: 'Combos' },
    { id: '4', name: 'Promoções' },
  ],

  addCategory: (newCategory) => set((state) => ({
    categories: [...state.categories, { ...newCategory, id: crypto.randomUUID() }]
  })),

  addSubcategory: (parentId, newSubcategory) => set((state) => ({
    categories: state.categories.map(category => {
      if (category.id === parentId) {
        return {
          ...category,
          subcategories: [
            ...(category.subcategories || []),
            { ...newSubcategory, id: crypto.randomUUID(), parentId }
          ]
        };
      }
      return category;
    })
  }))
}));
