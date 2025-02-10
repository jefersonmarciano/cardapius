"use client"

import { CaretLeft } from "@phosphor-icons/react";
import Link from "next/link";
import Image from 'next/image';

export default function CardapioPage() {
  return (
    <div className="p-8">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/" className="text-zinc-500 hover:text-zinc-600">
          <CaretLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-medium text-zinc-900">Novo produto</h1>
      </div>

      <div className="max-w-[100%] space-y-2">
        {/* Cadastro simples */}
        <Link href="/cardapio/cadastro-simples">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 cursor-pointer hover:bg-zinc-50 hover:border-[#FF5900] group">
            <div className="flex gap-4">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/images/icons/burgeCadastro.png"
                  alt="Burger" 
                  width={64}
                  height={64}
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-200"
                />
              </div>
              <div>
                <h2 className="text-lg font-medium text-zinc-400 group-hover:text-zinc-900">Cadastro simples</h2>
                <p className="text-zinc-400 group-hover:text-zinc-500">Ideal para lanches, pratos, sobremesas, etc.</p>
              </div>
            </div>
          </div>
        </Link>

        {/* Cadastro de bebidas */}
        <div className="bg-white p-6 rounded-2xl border border-zinc-200 cursor-pointer hover:bg-zinc-50 hover:border-[#FF5900] group">
          <div className="flex gap-4">
            <div className="w-16 h-16 relative">
              <Image 
                src="/images/icons/bebidas.png"
                alt="Drinks" 
                width={64}
                height={64}
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-200"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium text-zinc-400 group-hover:text-zinc-900">Cadastro de bebidas</h2>
              <p className="text-zinc-400 group-hover:text-zinc-500">Inclua em seu cardápio sucos, refrigerantes, cervejas, etc.</p>
            </div>
          </div>
        </div>

        {/* Cadastro de pizza */}
        <Link href="/cardapio/cadastro-pizza" className="block">
          <div className="bg-white p-6 rounded-2xl border border-zinc-200 cursor-pointer hover:bg-zinc-50 hover:border-[#FF5900] group">
            <div className="flex gap-4">
              <div className="w-16 h-16 relative">
                <div 
                  className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,89,0,0.15) 0%, rgba(255,89,0,0.1) 40%, rgba(255,89,0,0) 70%)'
                  }}
                />
                <Image 
                  src="/images/icons/pizza.png"
                  alt="Pizza" 
                  width={64}
                  height={64}
                  className="object-contain relative z-10 grayscale group-hover:grayscale-0 transition-all duration-200"
                />
              </div>
              <div>
                <h2 className="text-lg font-medium text-zinc-400 group-hover:text-zinc-900">Cadastro de pizza</h2>
                <p className="text-zinc-400 group-hover:text-zinc-500">Defina com clareza a quantidade de sabores, bordas e tipo de massa.</p>
              </div>
            </div>
          </div>
        </Link>

        <div className="flex justify-end pt-4">
          <button 
            className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90 transition-colors"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}