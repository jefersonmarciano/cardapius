"use client";

import Image from "next/image";
import { useState } from "react";
import { useAdditionals } from "@/hooks/useAdditionals";
import { AdditionalModal } from "@/components/AdditionalModal";

export default function AdicionaisPage() {
  const { adicionais, addAdicional, removeAdicional, updateAdicional } = useAdditionals();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAdicional, setEditingAdicional] = useState<any>(null);

  const handleSave = (data: any) => {
    if (editingAdicional) {
      updateAdicional(editingAdicional.id, data);
    } else {
      addAdicional(data);
    }
    setIsModalOpen(false);
    setEditingAdicional(null);
  };

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Adicionais</h1>
        <button 
          className="bg-[#FF5900] text-white px-4 py-2 rounded-lg flex items-center gap-2"
          onClick={() => {
            setEditingAdicional(null);
            setIsModalOpen(true);
          }}
        >
          + Cadastrar adicional
        </button>
      </div>

      <div className="bg-white rounded-lg p-4">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Buscar categoria ou subcategoria"
            className="w-full p-3 border border-gray-200 rounded-lg"
          />
        </div>

        <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 items-center p-4 text-gray-500">
          <div className="w-6"></div>
          <div>Adicional</div>
          <div>Preço</div>
          <div>Preço promocional</div>
          <div>Ações</div>
        </div>

        {adicionais.map((adicional) => (
          <div
            key={adicional.id}
            className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 items-center bg-white rounded-lg p-4 mb-4 shadow-sm"
          >
            <input type="checkbox" className="w-5 h-5 border-gray-300 rounded" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <Image
                  src={adicional.imagem}
                  alt={adicional.nome}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-[#FF5900] font-medium">{adicional.nome}</h3>
                <p className="text-sm text-gray-500">{adicional.descricao}</p>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-2 rounded-lg text-gray-700">
              R$ {adicional.preco.toFixed(2)}
            </div>
            <div className="bg-gray-50 px-4 py-2 rounded-lg text-gray-700">
              R$ {adicional.precoPromocional.toFixed(2)}
            </div>
            <div className="flex gap-2">
              <button 
                className="text-yellow-500 hover:text-yellow-600 p-2"
                onClick={() => {
                  setEditingAdicional(adicional);
                  setIsModalOpen(true);
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button 
                className="text-red-500 hover:text-red-600 p-2"
                onClick={() => removeAdicional(adicional.id)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <AdditionalModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingAdicional(null);
        }}
        onSave={handleSave}
        initialData={editingAdicional}
      />
    </div>
  );
}
