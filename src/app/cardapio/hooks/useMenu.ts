import { useState } from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  promoPrice: string;
  category: string;
  image: string;
}

const mockMenuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Cheese Burger',
    description: 'O Cheeseburger é um clássico irresistível da culinária fast food, composto por um suculento hambúrguer de carne bovina grelhada na perfeição, coberto com uma fatia de q...',
    price: '50,00',
    promoPrice: '50,00',
    category: 'Lanches > Hamburguer',
    image: '/images/products/cheeseburger.png'
  },
  // Adicione mais itens mock aqui...
];

export function useMenu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(mockMenuItems);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [orderBy, setOrderBy] = useState('Mais novos');

  const searchProducts = (term: string) => {
    setSearchTerm(term);
    if (!term) {
      setMenuItems(mockMenuItems);
      return;
    }

    const filtered = mockMenuItems.filter(item => 
      item.name.toLowerCase().includes(term.toLowerCase()) ||
      item.description.toLowerCase().includes(term.toLowerCase())
    );
    setMenuItems(filtered);
  };

  const filterByCategory = (category: string) => {
    setCategoryFilter(category);
    if (!category) {
      setMenuItems(mockMenuItems);
      return;
    }

    const filtered = mockMenuItems.filter(item => 
      item.category.includes(category)
    );
    setMenuItems(filtered);
  };

  const toggleItemSelection = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return {
    menuItems,
    selectedItems,
    searchTerm,
    categoryFilter,
    orderBy,
    searchProducts,
    filterByCategory,
    setOrderBy,
    toggleItemSelection
  };
}
