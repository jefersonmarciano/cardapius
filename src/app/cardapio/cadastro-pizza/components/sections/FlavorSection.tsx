"use client"

import { useState } from 'react';
import { PencilSimple, Trash, MagnifyingGlass } from "@phosphor-icons/react";
import { AddFlavorModal } from '../modals/AddFlavorModal';

interface FlavorSize {
  size: string;
  price: string;
  promotionalPrice: string;
  available: boolean;
}

interface Flavor {
  id: string;
  name: string;
  description: string;
  image: string;
  sizes: FlavorSize[];
}

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
        <div>
          <h3 className="text-zinc-900 font-medium mb-2">Sabores</h3>
          <p className="text-zinc-500 text-sm">
            Sabores de pizzas disponíveis.
          </p>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="mt-4 flex items-center gap-2 text-[#FF5900] hover:text-[#FF5900]/90"
        >
          <span className="text-lg">+</span>
          <span className="text-sm">Adicionar sabor</span>
        </button>

        {flavors.length > 0 && (
          <>
            <div className="mt-6 relative">
              <MagnifyingGlass size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Buscar sabor"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
              />
            </div>

            <div className="mt-6">
              <div className="grid grid-cols-[auto_1fr_150px_1fr_1fr_100px_100px] items-center gap-4 pb-4 border-b border-zinc-100">
                <div></div>
                <span className="text-zinc-500 text-sm">Sabor</span>
                <span className="text-zinc-500 text-sm">Tamanho</span>
                <span className="text-zinc-500 text-sm">Preço</span>
                <span className="text-zinc-500 text-sm">Preço promocional</span>
                <span className="text-zinc-500 text-sm text-center">Disponibilidade</span>
                <span className="text-zinc-500 text-sm text-center">Ações</span>
              </div>

              {flavors.map((flavor) => (
                <div key={flavor.id}>
                  {flavor.sizes.map((size, index) => (
                    <div key={`${flavor.id}-${size.size}`} 
                      className="grid grid-cols-[auto_1fr_150px_1fr_1fr_100px_100px] items-center gap-4 py-4 border-b border-zinc-100"
                    >
                      {index === 0 && (
                        <>
                          <img src={flavor.image} alt="" className="w-12 h-12 rounded object-cover row-span-2" />
                          <div className="row-span-2">
                            <p className="text-[#FF5900] font-medium">{flavor.name}</p>
                            <p className="text-zinc-500 text-sm">{flavor.description}</p>
                          </div>
                        </>
                      )}
                      {index !== 0 && <div className="col-span-2" />}
                      <span className="text-zinc-900 whitespace-nowrap">{size.size}</span>
                      <span className="text-zinc-900">R$ {size.price}</span>
                      <span className="text-zinc-900">R$ {size.promotionalPrice}</span>
                      <div className="flex justify-center">
                        <div className={`w-2 h-2 rounded-full ${size.available ? 'bg-emerald-500' : 'bg-red-500'}`} />
                      </div>
                      {index === 0 && (
                        <div className="row-span-2 flex items-center justify-center gap-2">
                          <button className="p-2 rounded-lg hover:bg-zinc-50 border border-zinc-200">
                            <PencilSimple size={16} className="text-zinc-500" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-red-50 border border-red-200">
                            <Trash size={16} className="text-red-500" />
                          </button>
                        </div>
                      )}
                      {index !== 0 && <div />}
                    </div>
                  ))}
                </div>
              ))}
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
