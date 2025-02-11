"use client"

import { MagnifyingGlass, WhatsappLogo, ShareNetwork, PencilSimple, Trash } from "@phosphor-icons/react";
import Image from "next/image";
import { useCardapio } from "./hooks/useCardapio";
import Link from "next/link";

export default function CardapioPage() {
  const { 
    products, 
    selectedProducts,
    searchProducts,
    filterByCategory,
    setOrderBy,
    toggleProductSelection
  } = useCardapio();

  return (
    <div className="flex-1 h-screen bg-[#F8F8F8] overflow-hidden">
      <div className="h-full overflow-y-auto scrollbar-none p-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-[32px] font-bold text-zinc-900">Cardápio</h1>
          <Link 
            href="/cardapio/produtos" 
            className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90"
          >
            Cadastrar produto
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
              className="w-full pl-12 pr-4 py-3 rounded-full border border-zinc-200 outline-none text-sm"
            />
          </div>
          <select 
            onChange={(e) => filterByCategory(e.target.value)}
            className="px-4 py-3 rounded-full border border-zinc-200 outline-none text-sm min-w-[180px] text-zinc-500"
          >
            <option value="">Categorias</option>
            <option value="Lanches">Lanches</option>
            <option value="Hamburguer">Hamburguer</option>
          </select>
          <select 
            onChange={(e) => setOrderBy(e.target.value)}
            className="px-4 py-3 rounded-full border border-zinc-200 outline-none text-sm min-w-[200px] text-zinc-500"
            defaultValue="Mais novos"
          >
            <option value="Mais novos">Ordenar por: Mais novos</option>
          </select>
        </div>

        {/* Table Headers */}
        <div className="grid grid-cols-[auto_1fr_180px_180px_200px_150px] px-6 py-4 text-sm text-zinc-400">
          <div className="w-6">
            <input type="checkbox" className="w-4 h-4 rounded border-zinc-300" />
          </div>
          <div>Produto</div>
          <div className="text-center">Preço</div>
          <div className="text-center">Preço promocional</div>
          <div className="text-center">Categoria</div>
          <div className="text-center">Ações</div>
        </div>

        {/* Products List */}
        {products.map((product) => (
          <div 
            key={product.id}
            className="bg-white rounded-xl mb-2 px-6 py-4"
          >
            <div className="grid grid-cols-[auto_1fr_180px_180px_200px_150px] items-center">
              <div>
                <input 
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => toggleProductSelection(product.id)}
                  className="w-4 h-4 rounded border-zinc-300" 
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
              <div className="flex justify-center">
                <div className="text-zinc-700 whitespace-nowrap rounded-lg border border-zinc-100 px-4 py-2">
                  R$ {product.price}
                </div>
              </div>
              <div className="flex justify-center">
                <div className="text-zinc-700 whitespace-nowrap rounded-lg border border-zinc-100 px-4 py-2">
                  R$ {product.promoPrice}
                </div>
              </div>
              <div className="text-zinc-500 text-center">{product.category}</div>
              <div className="flex items-center justify-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center text-emerald-500 hover:bg-emerald-50 rounded-lg">
                  <WhatsappLogo className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-blue-500 hover:bg-blue-50 rounded-lg">
                  <ShareNetwork className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-[#FF5900] hover:bg-[#FFF1EC] rounded-lg">
                  <PencilSimple className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-lg">
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}