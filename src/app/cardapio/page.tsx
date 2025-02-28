"use client"

import { MagnifyingGlass, WhatsappLogo, ShareNetwork, PencilSimple, Trash, DotsThree } from "@phosphor-icons/react";
import Image from "next/image";
import { useCardapio } from "./hooks/useCardapio";
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
    { id: 'grupo-adicionais', label: 'Grupo de adicionais' },
    { id: 'excluir', label: 'Excluir', className: 'text-red-600' }
  ];

  return (
    <div className="w-full h-full overflow-x-hidden">
      <div className="p-6 min-w-full">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-medium text-zinc-900">Cardápio</h1>
            <Link 
              href="/cardapio/produtos" 
              className="flex items-center gap-2 bg-[#FF5900] text-white px-4 py-2 rounded-full whitespace-nowrap"
            >
              Cadastrar produto
            </Link>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <MagnifyingGlass 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" 
                />
                <input 
                  type="text"
                  placeholder="Buscar produtos por nome, referência ou tags"
                  onChange={(e) => searchProducts(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
                />
              </div>
            </div>
            <select 
              onChange={(e) => filterByCategory(e.target.value)}
              className="px-4 py-3 rounded-lg border border-zinc-200 outline-none text-sm w-full sm:w-auto min-w-[180px] text-zinc-500 bg-white"
            >
              <option value="">Categorias</option>
              <option value="Lanches">Lanches</option>
              <option value="Hamburguer">Hamburguer</option>
            </select>
            <select 
              onChange={(e) => setOrderBy(e.target.value)}
              className="px-4 py-3 rounded-lg border border-zinc-200 outline-none text-sm w-full sm:w-auto min-w-[200px] text-zinc-500 bg-white"
              defaultValue="Mais novos"
            >
              <option value="Mais novos">Ordenar por: Mais novos</option>
            </select>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-2xl overflow-hidden">
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[1000px]">
                <thead>
                  <tr className="text-sm text-zinc-400 border-b border-zinc-100">
                    <th className="w-[40px] px-6 py-4 text-left">
                      <input type="checkbox" className="w-4 h-4 rounded border-zinc-300" />
                    </th>
                    <th className="px-6 py-4 text-left">Produto</th>
                    <th className="w-[180px] px-6 py-4 text-center">Preço</th>
                    <th className="w-[180px] px-6 py-4 text-center">Preço promocional</th>
                    <th className="w-[200px] px-6 py-4 text-center">Categoria</th>
                    <th className="w-[150px] px-6 py-4 text-center">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b border-zinc-100 last:border-b-0">
                      <td className="px-6 py-4">
                        <input 
                          type="checkbox"
                          checked={selectedProducts.includes(product.id)}
                          onChange={() => toggleProductSelection(product.id)}
                          className="w-4 h-4 rounded border-zinc-300" 
                        />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 relative rounded-lg overflow-hidden flex-shrink-0">
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
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="inline-block text-zinc-700 whitespace-nowrap rounded-lg border border-zinc-100 px-4 py-2">
                          R$ {product.price}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="inline-block text-zinc-700 whitespace-nowrap rounded-lg border border-zinc-100 px-4 py-2">
                          R$ {product.promoPrice}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center text-zinc-500">{product.category}</td>
                      <td className="px-6 py-4">
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
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}