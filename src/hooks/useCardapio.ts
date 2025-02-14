import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  promoPrice: string;
  category: string;
  image: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Cheese Burger',
    description: 'O Cheeseburger é um clássico irresistível da culinária fast food, composto por um suculento hambúrguer de carne bovina grelhada na perfeição, coberto com uma fatia de q...',
    price: '50,00',
    promoPrice: '50,00',
    category: 'Lanches > Hamburguer',
    image: '/images/products/cheeseburger.png'
  },
  {
    id: 2,
    name: 'Cheese Burger',
    description: 'O Cheeseburger é um clássico irresistível da culinária fast food, composto por um suculento hambúrguer de carne bovina grelhada na perfeição, coberto com uma fatia de q...',
    price: '50,00',
    promoPrice: '50,00',
    category: 'Lanches > Hamburguer',
    image: '/images/products/cheeseburger.png'
  },
  {
    id: 3,
    name: 'Cheese Burger',
    description: 'O Cheeseburger é um clássico irresistível da culinária fast food, composto por um suculento hambúrguer de carne bovina grelhada na perfeição, coberto com uma fatia de q...',
    price: '50,00',
    promoPrice: '50,00',
    category: 'Lanches > Hamburguer',
    image: '/images/products/cheeseburger.png'
  },
  {
    id: 4,
    name: 'Cheese Burger',
    description: 'O Cheeseburger é um clássico irresistível da culinária fast food, composto por um suculento hambúrguer de carne bovina grelhada na perfeição, coberto com uma fatia de q...',
    price: '50,00',
    promoPrice: '50,00',
    category: 'Lanches > Hamburguer',
    image: '/images/products/cheeseburger.png'
  },
  {
    id: 5,
    name: 'Cheese Burger',
    description: 'O Cheeseburger é um clássico irresistível da culinária fast food, composto por um suculento hambúrguer de carne bovina grelhada na perfeição, coberto com uma fatia de q...',
    price: '50,00',
    promoPrice: '50,00',
    category: 'Lanches > Hamburguer',
    image: '/images/products/cheeseburger.png'
  },
  {
    id: 6,
    name: 'Cheese Burger',
    description: 'O Cheeseburger é um clássico irresistível da culinária fast food, composto por um suculento hambúrguer de carne bovina grelhada na perfeição, coberto com uma fatia de q...',
    price: '50,00',
    promoPrice: '50,00',
    category: 'Lanches > Hamburguer',
    image: '/images/products/cheeseburger.png'
  },
  {
    id: 7,
    name: 'Cheese Burger',
    description: 'O Cheeseburger é um clássico irresistível da culinária fast food, composto por um suculento hambúrguer de carne bovina grelhada na perfeição, coberto com uma fatia de q...',
    price: '50,00',
    promoPrice: '50,00',
    category: 'Lanches > Hamburguer',
    image: '/images/products/cheeseburger.png'
  },
  {
    id: 8,
    name: 'Cheese Burger',
    description: 'O Cheeseburger é um clássico irresistível da culinária fast food, composto por um suculento hambúrguer de carne bovina grelhada na perfeição, coberto com uma fatia de q...',
    price: '50,00',
    promoPrice: '50,00',
    category: 'Lanches > Hamburguer',
    image: '/images/products/cheeseburger.png'
  },
  {
    id: 9,
    name: 'Cheese Burger',
    description: 'O Cheeseburger é um clássico irresistível da culinária fast food, composto por um suculento hambúrguer de carne bovina grelhada na perfeição, coberto com uma fatia de q...',
    price: '50,00',
    promoPrice: '50,00',
    category: 'Lanches > Hamburguer',
    image: '/images/products/cheeseburger.png'
  },
  {
    id: 10,
    name: 'Cheese Burger',
    description: 'O Cheeseburger é um clássico irresistível da culinária fast food, composto por um suculento hambúrguer de carne bovina grelhada na perfeição, coberto com uma fatia de q...',
    price: '50,00',
    promoPrice: '50,00',
    category: 'Lanches > Hamburguer',
    image: '/images/products/cheeseburger.png'
  }
];

export function useCardapio() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [orderBy, setOrderBy] = useState('Mais novos');

  const searchProducts = (term: string) => {
    setSearchTerm(term);
    if (!term) {
      setProducts(mockProducts);
      return;
    }

    const filtered = mockProducts.filter(item => 
      item.name.toLowerCase().includes(term.toLowerCase()) ||
      item.description.toLowerCase().includes(term.toLowerCase())
    );
    setProducts(filtered);
  };

  const filterByCategory = (category: string) => {
    setCategoryFilter(category);
    if (!category) {
      setProducts(mockProducts);
      return;
    }

    const filtered = mockProducts.filter(item => 
      item.category.includes(category)
    );
    setProducts(filtered);
  };

  const toggleProductSelection = (id: number) => {
    setSelectedProducts(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return {
    products,
    selectedProducts,
    searchTerm,
    categoryFilter,
    orderBy,
    searchProducts,
    filterByCategory,
    setOrderBy,
    toggleProductSelection
  };
}
