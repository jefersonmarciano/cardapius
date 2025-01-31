"use client"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ShoppingCart } from "@phosphor-icons/react";
import { useState } from "react";
import Image from 'next/image';

import { useCart } from "@/hooks/useCart";

export function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items } = useCart();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const itemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex justify-end p-6 border-b border-zinc-100">
      <button className="flex items-center gap-3">
        <Image 
          src="/images/avatars/user.png" 
          alt="Foto do usuário" 
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        <span className="text-xl text-zinc-700">Minha conta</span>
      </button>
    </div>
  );
}
