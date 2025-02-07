"use client"

import { CaretLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { PizzaRegistrationCard } from "./components/PizzaRegistrationCard";
import { PizzaCategorySection } from "./components/sections/PizzaCategorySection";

export default function CadastroPizzaPage() {
  const handleAddCategory = () => {
    // Lógica para adicionar categoria
    console.log('Adicionar categoria');
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <Link href="/cardapio" className="text-zinc-500 hover:text-zinc-600">
          <CaretLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-medium text-zinc-900">Novo produto</h1>
      </div>

      <div className="max-w-[100%] space-y-4">
        <PizzaRegistrationCard />
        <PizzaCategorySection onAddCategory={handleAddCategory} />

        {/* Botão Continuar */}
        <div className="flex justify-end pt-4">
          <button 
            className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
} 