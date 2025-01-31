"use client"

import { CaretLeft } from "@phosphor-icons/react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchMenuData } from "../mocks/menu";



type MenuData = {
  simpleRegister: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
  categories: {
    id: number;
    title: string;
    description: string;
    items: string[];
  };
};

export default function Cardapio() {
  const [menuData, setMenuData] = useState<MenuData | null>(null);

  useEffect(() => {
    async function loadMenuData() {
      const data = await fetchMenuData();
      setMenuData(data);
    }

    loadMenuData();
  }, []);

  if (!menuData) return null; // ou um loading spinner

  return (
    <div className="p-8">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/cardapio" className="text-zinc-500 hover:text-zinc-600">
          <CaretLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-medium text-zinc-900">Novo produto</h1>
      </div>

      <div className="max-w-[800px] mx-auto space-y-6">
        <div className="bg-white p-6 rounded-lg border border-zinc-100 hover:border-zinc-200 transition-colors cursor-pointer">
          <div className="flex gap-4 items-center">
            <div className="w-20 h-20 bg-[#FF5900]/5 rounded-lg flex items-center justify-center relative shrink-0">
              <div className="absolute inset-0 bg-[#FF5900]/5 rounded-full blur-xl"></div>
              <Image 
                src={menuData.simpleRegister.icon}
                alt={menuData.simpleRegister.title} 
                width={64}
                height={64}
                className="object-contain relative z-10"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-lg font-medium text-zinc-900 mb-1">{menuData.simpleRegister.title}</h2>
              <p className="text-zinc-500">{menuData.simpleRegister.description}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-zinc-100">
          <h2 className="text-lg font-medium text-zinc-900 mb-2">{menuData.categories.title}</h2>
          <p className="text-zinc-500 mb-4">{menuData.categories.description}</p>
          
          <button className="text-[#FF5900] hover:text-[#FF5900]/90 text-sm font-medium flex items-center gap-1">
            + Adicionar categoria(s)
          </button>
        </div>

        <div className="flex justify-end">
          <button className="bg-[#FF5900] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#FF5900]/90">
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
