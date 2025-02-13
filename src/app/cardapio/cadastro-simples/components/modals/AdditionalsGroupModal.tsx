"use client"

import { useState } from 'react';
import Image from 'next/image';
import { useAdditionals } from '@/contexts/AdditionalsContexts';
import { CaretLeft, MagnifyingGlass } from "@phosphor-icons/react";

interface Additional {
  id: number;
  name: string;
  description?: string;
  price?: number;
  promoPrice?: number;
  available?: boolean;
  image?: string | any;
}

interface AdditionalGroup {
  id: number;
  name: string;
  additionals: Additional[];
  additionalsCount: number;
  min: number;
  max: number;
}

interface AdditionalsGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenIncludeAdditionals: () => void;
  onOpenGroupsList: () => void;
}

export function AdditionalsGroupModal({
  isOpen,
  onClose,
  onOpenIncludeAdditionals,
  onOpenGroupsList
}: AdditionalsGroupModalProps) {
  const { selectedAdditionals } = useAdditionals();
  const [groupName, setGroupName] = useState('');
  const [isRequired, setIsRequired] = useState(true);
  const [minQuantity, setMinQuantity] = useState(1);
  const [maxQuantity, setMaxQuantity] = useState(3);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-[32px] w-full max-w-[800px] flex flex-col">
        <div className="p-8">
          {/* Header atualizado */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <button onClick={onClose} className="text-zinc-400 hover:text-zinc-600">
                <CaretLeft size={24} weight="bold" />
              </button>
              <h2 className="text-2xl font-medium text-zinc-900">Novo grupo de adicionais</h2>
            </div>
            <button 
              onClick={onOpenGroupsList}
              className="bg-[#FF5900] text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1"
            >
              <span>+</span>
              Incluir grupo de adicional
            </button>
          </div>

          {/* Form */}
          <div className="space-y-8">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-900 mb-2">
                  Nome do grupo
                </label>
                <input
                  type="text"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full px-4 py-3 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF5900]"
                  placeholder="Adicionais para lanches"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-900 mb-2">
                  Obrigatório
                </label>
                <select
                  value={isRequired ? "true" : "false"}
                  onChange={(e) => setIsRequired(e.target.value === "true")}
                  className="w-full px-4 py-3 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF5900] appearance-none bg-white"
                >
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-900 mb-2">
                  Mínimo
                </label>
                <div className="relative flex items-center">
                  <button 
                    onClick={() => setMinQuantity(prev => Math.max(0, prev - 1))}
                    className="absolute left-4 text-zinc-400 hover:text-zinc-600"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={minQuantity}
                    onChange={(e) => setMinQuantity(Number(e.target.value))}
                    className="w-full px-4 py-3 text-center border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF5900]"
                  />
                  <button 
                    onClick={() => setMinQuantity(prev => prev + 1)}
                    className="absolute right-4 text-[#FF5900] hover:text-[#FF5900]/80"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-900 mb-2">
                  Máximo
                </label>
                <div className="relative flex items-center">
                  <button 
                    onClick={() => setMaxQuantity(prev => Math.max(0, prev - 1))}
                    className="absolute left-4 text-zinc-400 hover:text-zinc-600"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={maxQuantity}
                    onChange={(e) => setMaxQuantity(Number(e.target.value))}
                    className="w-full px-4 py-3 text-center border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF5900]"
                  />
                  <button 
                    onClick={() => setMaxQuantity(prev => prev + 1)}
                    className="absolute right-4 text-[#FF5900] hover:text-[#FF5900]/80"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Adicionais Section */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base text-zinc-900">Adicionais neste grupo</h3>
                <button 
                  onClick={onOpenIncludeAdditionals}
                  className="text-[#FF5900] hover:text-[#FF5900]/80 flex items-center gap-1 text-sm"
                >
                  <span>+</span>
                  Incluir adicional
                </button>
              </div>

              {selectedAdditionals.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16">
                  <Image
                    src="/images/icons/prato.svg"
                    alt="Sem adicionais"
                    width={80}
                    height={80}
                    className="mb-4"
                  />
                  <p className="text-zinc-400 text-center mb-2">
                    Ops! Este grupo ainda não possui adicionais.
                  </p>
                  <p className="text-zinc-400 text-center">
                    Clique em <span className="text-[#FF5900]">incluir adicional</span> e ofereça mais opções para turbinar seu produto!
                  </p>
                </div>
              ) : (
                <>
                  {/* Table Header */}
                  <div className="grid grid-cols-[40px_2fr_1fr_1fr_100px_80px] gap-4 mb-2 px-4">
                    <div></div>
                    <div className="text-sm text-zinc-500">Informações</div>
                    <div className="text-sm text-zinc-500">Preço</div>
                    <div className="text-sm text-zinc-500">Preço promocional</div>
                    <div className="text-sm text-zinc-500">Disponibilidade</div>
                    <div className="text-sm text-zinc-500 text-right">Ações</div>
                  </div>

                  {/* Table Content */}
                  <div className="space-y-2">
                    {selectedAdditionals.map((additional) => (
                      <div
                        key={additional.id}
                        className="grid grid-cols-[40px_2fr_1fr_1fr_100px_80px] gap-4 items-center px-4 py-2"
                      >
                        <div>
                          <input
                            type="checkbox"
                            checked
                            readOnly
                            className="w-4 h-4 rounded border-zinc-300"
                          />
                        </div>
                        <div className="flex items-center gap-3">
                          {additional.image && (
                            <div className="w-10 h-10 relative rounded-lg overflow-hidden shrink-0">
                              <Image
                                src={additional.image}
                                alt={additional.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                          <div>
                            <h4 className="text-[#FF5900] font-medium">{additional.name}</h4>
                            <p className="text-sm text-zinc-500">{additional.description}</p>
                          </div>
                        </div>
                        <div className="text-zinc-900">
                          R$ {additional.price?.toFixed(2).replace('.', ',') || 'Não disponível'}
                        </div>
                        <div className="text-zinc-900">
                          R$ {additional.promoPrice?.toFixed(2).replace('.', ',') || 'Não disponível'}
                        </div>
                        <div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={additional.available}
                              readOnly
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-end gap-1">
                          <button className="text-red-500 hover:text-red-600">
                            ⊖
                          </button>
                          <button className="text-[#FF5900] hover:text-[#FF5900]/80">
                            ✎
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-zinc-100 p-4">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90"
            >
              Finalizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
