"use client"

import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import Image from 'next/image';
import { useState } from 'react';

export default function CadastroSimplesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['bebidas', 'refrigerantes']);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  return (
    <div className="p-8">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/cardapio" className="text-zinc-500 hover:text-zinc-600">
          <CaretLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-2xl font-medium text-zinc-900">Novo produto</h1>
      </div>

      <div className="max-w-[100%]">
        {/* Tipo selecionado */}
        <div className="bg-white p-4 rounded-2xl mb-6">
          <div className="flex gap-4 items-center">
            <Image 
              src="/images/icons/burgeCadastro.png"
              alt="Burger" 
              width={48}
              height={48}
              className="object-contain"
            />
            <div>
              <h2 className="text-lg font-medium text-zinc-900">Cadastro simples</h2>
              <p className="text-zinc-500">Ideal para lanches, pratos, sobremesas, bebidas, etc.</p>
            </div>
          </div>
        </div>

        {/* Categorias */}
        <div className="bg-white p-6 rounded-2xl mb-6">
          <h3 className="text-zinc-900 font-medium mb-2">Categorias</h3>
          <p className="text-zinc-500 text-sm mb-4">As categorias ajudam seus clientes a encontrarem os produtos mais rápido.</p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-[#FF5900] text-sm font-medium flex items-center gap-2"
          >
            + Adicionar categoria(s)
          </button>
        </div>

        {/* Modal de Categorias */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl w-full max-w-[600px]">
              {/* Header */}
              <div className="flex items-center gap-2 p-4 border-b border-zinc-100">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-zinc-500 hover:text-zinc-600"
                >
                  <CaretLeft className="w-5 h-5" />
                </button>
                <span className="text-zinc-900">Adicionar categoria(s)</span>
              </div>

              <div className="p-4">
                {/* Campo de busca */}
                <div className="relative mb-4">
                  <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
                  <input 
                    type="text"
                    placeholder="Buscar categoria"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-zinc-200 outline-none text-sm placeholder:text-zinc-400"
                  />
                </div>

                {/* Criar nova categoria */}
                <button className="text-[#FF5900] text-sm mb-6">
                  + Criar nova categoria
                </button>

                {/* Lista de categorias */}
                <div>
                  <p className="text-sm text-zinc-400 mb-4">Categorias cadastradas:</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-zinc-100">
                      <span className="text-zinc-900">Lanches</span>
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes('lanches')}
                        onChange={() => handleCategoryChange('lanches')}
                        className="w-5 h-5 accent-[#FF5900] cursor-pointer" 
                      />
                    </div>
                    
                    <div className="flex items-center justify-between py-3 border-b border-zinc-100">
                      <span className="text-zinc-900">Bebidas</span>
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes('bebidas')}
                        onChange={() => handleCategoryChange('bebidas')}
                        className="w-5 h-5 accent-[#FF5900] cursor-pointer" 
                      />
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-zinc-100 pl-4">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-400">Bebidas</span>
                        <span className="text-zinc-900">› Refrigerantes</span>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes('refrigerantes')}
                        onChange={() => handleCategoryChange('refrigerantes')}
                        className="w-5 h-5 accent-[#FF5900] cursor-pointer" 
                      />
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-zinc-100 pl-4">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-400">Bebidas</span>
                        <span className="text-zinc-900">› Cervejas</span>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes('cervejas')}
                        onChange={() => handleCategoryChange('cervejas')}
                        className="w-5 h-5 accent-[#FF5900] cursor-pointer" 
                      />
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-zinc-100">
                      <span className="text-zinc-900">Combos</span>
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes('combos')}
                        onChange={() => handleCategoryChange('combos')}
                        className="w-5 h-5 accent-[#FF5900] cursor-pointer" 
                      />
                    </div>

                    <div className="flex items-center justify-between py-3 border-b border-zinc-100">
                      <span className="text-zinc-900">Promoções</span>
                      <input 
                        type="checkbox" 
                        checked={selectedCategories.includes('promocoes')}
                        onChange={() => handleCategoryChange('promocoes')}
                        className="w-5 h-5 accent-[#FF5900] cursor-pointer" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-end p-4 mt-4">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90"
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <button className="bg-[#FF5900] text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#FF5900]/90">
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}
