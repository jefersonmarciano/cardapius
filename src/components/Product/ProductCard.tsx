"use client"

import { useCart } from "@/hooks/useCart";
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-zinc-900 rounded-lg overflow-hidden">
      <Image 
        src={product.image} 
        alt={product.name} 
        width={100}
        height={100}
        className="w-full h-48 object-cover"

      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <p className="text-zinc-400 mt-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg">
            R$ {product.price.toFixed(2)}
          </span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
