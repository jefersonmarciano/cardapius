"use client"

import { createContext, useState, ReactNode } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextData {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(product: Product) {
    setItems(state => {
      const existingItem = state.find(item => item.id === product.id);
      
      if (existingItem) {
        return state.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...product, quantity: 1 }];
    });
  }

  function removeFromCart(productId: number) {
    setItems(state => state.filter(item => item.id !== productId));
  }

  function updateQuantity(productId: number, quantity: number) {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    
    setItems(state =>
      state.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
