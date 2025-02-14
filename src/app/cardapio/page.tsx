"use client"

import { MagnifyingGlass, WhatsappLogo, ShareNetwork, PencilSimple, Trash, DotsThree } from "@phosphor-icons/react";
import Image from "next/image";
import { useCardapio } from "../../hooks/useCardapio";
import Link from "next/link";
import { useState } from "react";

export default function CardapioPage() {
  const { 
    products, 
    selectedProducts,
    searchProducts,
    filterByCategory,
    setOrderBy,
    toggleProductSelection
  } = useCardapio();

  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = (id: number) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setOpenDropdownId(null); // Fecha o dropdown após selecionar
  };

  const dropdownOptions = [
    { id: 'pedidos', label: 'Pedidos' },
    { id: 'produtos', label: 'Produtos' },
    { id: 'categorias', label: 'Categorias' },
    { id: 'adicionais', label: 'Adicionais' },
    { id: 'excluir', label: 'Excluir', className: 'text-red-600' }
  ];

  return (
    <div className="max-h-screen overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-medium text-zinc-900">Cardápio</h1>
        <Link 
          href="/cardapio/produtos" 
          className="bg-[#FF5900] text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          + Cadastrar produto
        </Link>
      </div>

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <MagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
          <input 
            type="text"
            placeholder="Buscar produtos por nome, referência ou tags"
            onChange={(e) => searchProducts(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-zinc-100 outline-none text-sm"
          />
        </div>
        
        <div className="relative">
          <select 
            onChange={(e) => filterByCategory(e.target.value)}
            className="appearance-none bg-white border border-zinc-100 rounded-lg px-4 py-3 pr-10 text-sm text-zinc-500 outline-none min-w-[180px]"
          >
            <option value="">Categorias</option>
            <option value="Lanches">Lanches</option>
            <option value="Hamburguer">Hamburguer</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="#71717A" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        <div className="relative">
          <select 
            onChange={(e) => setOrderBy(e.target.value)}
            className="appearance-none bg-white border border-zinc-100 rounded-lg px-4 py-3 pr-10 text-sm text-zinc-500 outline-none min-w-[200px]"
            defaultValue="Mais novos"
          >
            <option value="Mais novos">Ordenar por: Mais novos</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1L6 6L11 1" stroke="#71717A" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-zinc-100">
        {/* Table Headers */}
        <div className="grid grid-cols-[auto_1fr_180px_180px_200px_150px] gap-4 p-4 border-b border-zinc-100 text-sm">
          <div className="flex items-center">
            <input type="checkbox" className="rounded border-zinc-300" />
          </div>
          <div className="text-zinc-400 font-medium">Produto</div>
          <div className="text-zinc-400 font-medium text-center">Preço</div>
          <div className="text-zinc-400 font-medium text-center">Preço promocional</div>
          <div className="text-zinc-400 font-medium text-center">Categoria</div>
          <div className="text-zinc-400 font-medium text-center">Ações</div>
        </div>

        {/* Products List */}
        {products.map((product) => (
          <div 
            key={product.id}
            className="grid grid-cols-[auto_1fr_180px_180px_200px_150px] gap-4 p-4 border-b border-zinc-100 text-sm items-center"
          >
            <div className="flex items-center">
              <input 
                type="checkbox"
                checked={selectedProducts.includes(product.id)}
                onChange={() => toggleProductSelection(product.id)}
                className="rounded border-zinc-300" 
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-[#FF5900] font-medium">{product.name}</h4>
                <p className="text-sm text-zinc-400 line-clamp-2 max-w-[400px]">{product.description}</p>
              </div>
            </div>
            <div className="text-zinc-700 text-center whitespace-nowrap">
              R$ {product.price}
            </div>
            <div className="text-zinc-700 text-center whitespace-nowrap">
              R$ {product.promoPrice}
            </div>
            <div className="text-zinc-500 text-center">{product.category}</div>
            <div className="flex items-center justify-center gap-2">
              <button className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-lg transition-colors">
                <WhatsappLogo className="w-5 h-5" />
              </button>
              <button className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">
                <ShareNetwork className="w-5 h-5" />
              </button>
              <button className="p-2 text-[#FF5900] hover:bg-[#FFF1EC] rounded-lg transition-colors">
                <PencilSimple className="w-5 h-5" />
              </button>
              <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                <Trash className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}