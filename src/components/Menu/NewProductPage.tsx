"use client"

import { CaretLeft } from "@phosphor-icons/react";
import Link from "next/link";
import Image from 'next/image';

export function NewProductPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/cardapio" className="text-zinc-500 hover:text-zinc-600">
          <CaretLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-medium text-zinc-900">Novo produto</h1>
      </div>

      <div className="max-w-[600px] space-y-6">
        <div className="bg-white p-6 rounded-lg border border-zinc-100">
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-[#FF5900]/10 rounded-lg flex items-center justify-center">
              <Image 
                src="/images/icons/burger.png" 
                alt="Burger" 
                width={48}
                height={48}
                className="object-contain relative z-10"

              />
            </div>
            <div>
              <h2 className="text-lg font-medium text-zinc-900 mb-1">Cadastro simples</h2>
              <p className="text-zinc-500">Ideal para lanches, pratos, sobremesas, bebidas, etc.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-zinc-100">
          <h2 className="text-lg font-medium text-zinc-900 mb-2">Categorias</h2>
          <p className="text-zinc-500 mb-4">As categorias ajudam seus clientes a encontrarem os produtos mais rápido.</p>
          
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
