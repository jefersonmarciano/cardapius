"use client"

import { useState } from 'react';
import { MagnifyingGlass, NotePencil, Plus } from '@phosphor-icons/react';
import { useAdditionalGroups } from '@/hooks/useAdditionalGroups';

export default function GrupoAdicionaisPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const { groups } = useAdditionalGroups();

  return (
    <div className="p-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-medium text-zinc-900">Grupos de Adicionais</h1>
          
          <button
            className="flex items-center gap-2 bg-[#FF5900] text-white px-4 py-2 rounded-full"
          >
            <Plus size={20} weight="bold" />
            <span>Cadastrar grupo de adicional</span>
          </button>
        </div>

        <div className="relative mb-6">
          <MagnifyingGlass 
            size={20} 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <input
            type="text"
            placeholder="Buscar grupo de adicionais"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-white border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
          />
        </div>

        <div className="bg-white rounded-2xl divide-y divide-zinc-100">
          {groups.map(group => (
            <div key={group.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-zinc-900 font-medium">Informações</h3>
                  <p className="text-zinc-700">{group.name}</p>
                </div>

                <div>
                  <h3 className="text-zinc-900 font-medium text-right mb-2">Ações</h3>
                  <button className="text-[#FF5900]">
                    <NotePencil size={24} />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item, index) => (
                  <span 
                    key={item.id} 
                    className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm"
                  >
                    {item.name}
                  </span>
                ))}
                {group.items.length > 4 && (
                  <span className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-sm">
                    +{group.items.length - 4}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
