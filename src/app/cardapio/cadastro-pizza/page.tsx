"use client"

import { useState } from 'react';
import { CaretLeft } from "@phosphor-icons/react";
import Link from "next/link";
import { PizzaRegistrationCard } from "./components/PizzaRegistrationCard";
import { PizzaCategorySection } from "./components/sections/PizzaCategorySection";
import { SizeSection } from "./components/sections/SizeSection";
import { EdgeSection } from "./components/sections/EdgeSection";
import { FlavorSection } from "./components/sections/FlavorSection";
import { Button } from "@/components/Button";

export default function CadastroPizzaPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleAddCategory = () => {
    // Lógica para adicionar categoria
    console.log('Adicionar categoria');
  };

  const handleConfirm = () => {
    setIsConfirmed(true);
    setCurrentStep(prev => prev + 1);
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
        {currentStep >= 2 && <SizeSection />}
        {currentStep >= 3 && <EdgeSection />}
        {currentStep >= 4 && <FlavorSection />}

        {/* Botão Continuar */}
        <div className="flex justify-end pt-4">
          <Button onClick={handleConfirm}>
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
} 