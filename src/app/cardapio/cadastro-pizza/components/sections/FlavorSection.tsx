"use client"

import { useState } from 'react';
import { PencilSimple, Trash, MagnifyingGlass } from "@phosphor-icons/react";
import { AddFlavorModal } from '../modals/AddFlavorModal';
import { Flavor, FlavorSize } from '../../types';

export function FlavorSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [flavors, setFlavors] = useState<Flavor[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddFlavor = (newFlavor: Flavor) => {
    setFlavors(prev => [...prev, newFlavor]);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-2xl border border-zinc-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-zinc-900 font-medium mb-2">Sabores</h3>
            <p className="text-zinc-500 text-sm">
              Sabores de pizzas disponíveis.
            </p>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 text-[#FF5900] px-4 py-2 rounded-lg border border-[#FF5900]"
          >
            <span className="text-lg">+</span>
            <span className="text-sm">Adicionar sabor</span>
          </button>
        </div>

        {flavors.length > 0 && (
          <>
            <div className="relative mb-6">
              <MagnifyingGlass size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Buscar sabor"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px]">
                <thead>
                  <tr className="border-b border-zinc-200">
                    <th className="text-left py-4 px-6 text-sm font-medium text-zinc-700">Sabor</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-zinc-700">Tamanho</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-zinc-700">Preço</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-zinc-700">Preço promocional</th>
                    <th className="text-center py-4 px-6 text-sm font-medium text-zinc-700">Disponibilidade</th>
                    <th className="text-center py-4 px-6 text-sm font-medium text-zinc-700">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200">
                  {flavors.map((flavor) => (
                    flavor.sizes.map((size, index) => (
                      <tr key={`${flavor.id}-${size.size}`}>
                        {index === 0 ? (
                          <td className="py-4 px-6" rowSpan={flavor.sizes.length}>
                            <div className="flex items-center gap-3">
                              <img src={flavor.image} alt="" className="w-12 h-12 rounded object-cover" />
                              <div>
                                <p className="text-[#FF5900] font-medium">{flavor.name}</p>
                                <p className="text-zinc-500 text-sm">{flavor.description}</p>
                              </div>
                            </div>
                          </td>
                        ) : null}
                        <td className="py-4 px-6 text-zinc-900">{size.size}</td>
                        <td className="py-4 px-6 text-zinc-900">R$ {size.price}</td>
                        <td className="py-4 px-6 text-zinc-900">R$ {size.promotionalPrice}</td>
                        <td className="py-4 px-6">
                          <div className="flex justify-center">
                            <div className={`w-2 h-2 rounded-full ${size.available ? 'bg-emerald-500' : 'bg-red-500'}`} />
                          </div>
                        </td>
                        {index === 0 ? (
                          <td className="py-4 px-6" rowSpan={flavor.sizes.length}>
                            <div className="flex items-center justify-center gap-2">
                              <button className="p-2 rounded-lg hover:bg-zinc-50 border border-zinc-200">
                                <PencilSimple size={16} className="text-zinc-500" />
                              </button>
                              <button className="p-2 rounded-lg hover:bg-red-50 border border-red-200">
                                <Trash size={16} className="text-red-500" />
                              </button>
                            </div>
                          </td>
                        ) : null}
                      </tr>
                    ))
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      <AddFlavorModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddFlavor}
      />
    </>
  );
}
