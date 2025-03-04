"use client";

import { useState } from "react";
import Image from "next/image";

import { useCart } from "@/hooks/useCart";

export function Header() {
  const { items } = useCart();

  return (
    <div className="flex justify-end p-6 border-b border-zinc-100 bg-[#F5F5F5]">
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
