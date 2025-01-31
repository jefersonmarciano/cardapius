"use client"

import { ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
import { Cart } from "../Cart";
import { useCart } from "@/hooks/useCart";

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();

  const itemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex justify-end py-4 px-6">
      <button className="flex items-center gap-3">
        <img 
          src="/images/avatars/user.png" 
          alt="Foto do usuário" 
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-xl text-zinc-700">Minha conta</span>
      </button>
    </div>
  );
}
