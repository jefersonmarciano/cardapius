"use client"

import { Heart } from "@phosphor-icons/react";

export function MostOrderedProducts() {
  const products = [
    {
      id: 1,
      name: "Cheese Burger",
      price: 50.00,
      image: "/images/products/burger.png",
      discount: 15
    },
    {
      id: 2,
      name: "Cheese Burger",
      price: 50.00,
      image: "/images/products/burger.png",
      discount: 15
    },
    {
      id: 3,
      name: "Cheese Burger",
      price: 50.00,
      image: "/images/products/burger.png",
      discount: 15
    }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-zinc-900">Produtos mais pedidos</h3>
        <button className="text-[#FF3F00] font-medium flex items-center gap-1">
          Ver mais
          <span className="text-lg">›</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl p-3 shadow-sm">
            <div className="relative">
              <div className="absolute top-3 left-3 bg-[#F04949] text-white px-3 py-1 rounded-lg text-sm font-medium z-10">
                {product.discount}% Off
              </div>
              <button className="absolute top-3 right-3 z-10">
                <Heart size={24} weight="fill" className="text-[#EB5757]" />
              </button>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-44 object-cover"
                />
              </div>
            </div>
            <div className="pt-3">
              <h4 className="text-lg font-medium text-zinc-900 mb-2">{product.name}</h4>
              <div className="flex items-center gap-2">
                <span className="text-zinc-300 line-through">R$ {product.price.toFixed(2)}</span>
                <span className="text-[#FF3F00] font-bold">R$ {(product.price * (1 - product.discount/100)).toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
