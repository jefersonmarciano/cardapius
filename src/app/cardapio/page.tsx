"use client"

import { MagnifyingGlass, WhatsappLogo, ShareNetwork, PencilSimple, Trash, DotsThree } from "@phosphor-icons/react";
import Image from "next/image";
import { useCardapio } from "./hooks/useCardapio";
import Link from "next/link";
import { useState } from "react";
import { Button } from '@/components/Button';

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
    <div className="w-full h-full overflow-y-scroll scrollbar-hidden custom-scroll">
      <div className="min-w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
          <h1 className="text-2xl font-medium text-zinc-900">Cardápio</h1>
          <Button href="/cardapio/produtos" className="mt-4 sm:mt-0">
            Cadastrar produto
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
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
          <div className="w-full overflow-y-auto scrollbar-hidden">
            <table className="w-full min-w-full">
              <thead>
                <tr className="text-sm text-zinc-400 border-b border-zinc-100">
                  <th className="w-[40px] py-4 text-left">
                    <input type="checkbox" className="w-4 h-4 rounded border-zinc-300" />
                  </th>
                  <th className=" py-4 text-left">Produto</th>
                  <th className="w-[180px]  py-4 text-center">Preço</th>
                  <th className="w-[180px]  py-4 text-center">Preço promocional</th>
                  <th className="w-[200px]  py-4 text-center">Categoria</th>
                  <th className="w-[150px]  py-4 text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-zinc-100 last:border-b-0">
                    <td className=" py-4">
                      <input 
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => toggleProductSelection(product.id)}
                        className="w-4 h-4 rounded border-zinc-300" 
                      />
                    </td>
                    <td className=" py-4">
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
                    <td className=" py-4 text-center">
                      <div className="inline-block text-zinc-700 whitespace-nowrap rounded-lg border border-zinc-100 px-4 py-2">
                        R$ {product.price}
                      </div>
                    </td>
                    <td className=" py-4 text-center">
                      <div className="inline-block text-zinc-700 whitespace-nowrap rounded-lg border border-zinc-100 px-4 py-2">
                        R$ {product.promoPrice}
                      </div>
                    </td>
                    <td className=" py-4 text-center text-zinc-500">{product.category}</td>
                    <td className=" py-4">
                      <div className="flex items-center gap-4">
                        <button className="text-[#25D366] hover:opacity-80">
                          <WhatsappLogo size={24} weight="regular" />
                        </button>
                        <button className="text-[#FF5900] hover:opacity-80">
                          <ShareNetwork size={24} weight="fill" />
                        </button>
                        <button className="text-[#FFB800] hover:opacity-80">
                          <PencilSimple size={24} weight="fill" />
                        </button>
                        <button className="text-[#FF3838] hover:opacity-80">
                          <Trash size={24} weight="fill" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Paginação */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          <Button 
            variant="secondary"
            className="!p-2 !min-w-0 text-zinc-400"
          >
            &lt;
          </Button>
          {[1, 2, 3].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? 'primary' : 'secondary'}
              className={`!p-2 !min-w-0 ${
                page === 1 
                  ? 'bg-[#FF5900] text-white' 
                  : 'text-zinc-400'
              }`}
            >
              {page}
            </Button>
          ))}
          <Button 
            variant="secondary"
            className="!p-2 !min-w-0 text-zinc-400"
          >
            &gt;
          </Button>
        </div>
      </div>
    </div>
  );
}