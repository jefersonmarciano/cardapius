"use client"

import { useState } from 'react';
import { Trash, PencilSimple } from "@phosphor-icons/react";

interface Size {
  name: string;
  slices: string;
  flavors: string;
  available: boolean;
}

export function SizeSection() {
  const [isEditing, setIsEditing] = useState(true);
  const [sizes, setSizes] = useState<Size[]>([]);
  const [forms, setForms] = useState<any[]>([]);
  const [showFields, setShowFields] = useState(false);

  const handleConfirm = () => {
    const newSizes = forms.map(form => ({
      name: form.name,
      slices: form.slices,
      flavors: form.flavors,
      available: form.available === "true"
    }));
    setSizes(newSizes);
    setIsEditing(false);
    setForms([]);
  };

  const handleEdit = () => {
    const newForms = sizes.map((size, index) => ({
      id: index,
      name: size.name,
      slices: size.slices,
      flavors: size.flavors,
      available: size.available.toString()
    }));
    setForms(newForms);
    setIsEditing(true);
  };

  if (!isEditing && sizes.length > 0) {
    return (
      <div className="bg-white p-6 rounded-2xl border border-zinc-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-zinc-900 font-medium mb-2">Tamanhos</h3>
            <p className="text-zinc-500 text-sm">
              Informe os tamanhos de pizzas, quantidade de fatias e quantidade de sabores de forma individual.
            </p>
          </div>
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 text-[#FF5900] text-sm font-medium border border-[#FF5900] rounded-lg px-4 py-2"
          >
            <PencilSimple size={16} />
            Alterar
          </button>
        </div>

        <div className="mt-4">
          <div className="grid grid-cols-[1fr_auto] gap-4">
            <span className="text-zinc-500 text-sm">Tamanho</span>
            <span className="text-zinc-500 text-sm">Disp.</span>
          </div>
          {sizes.map((size, index) => (
            <div key={index} className="grid grid-cols-[1fr_auto] gap-4 mt-4">
              <span className="text-zinc-900">{size.name}</span>
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full ${size.available ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const handleAddSize = () => {
    setShowFields(true);
    const newId = forms.length;
    setForms(prev => [...prev, { id: newId, name: '', slices: '', flavors: '', available: "true" }]);
  };

  const handleDeleteSize = (id: number) => {
    setForms(prev => prev.filter(form => form.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-200">
      <div>
        <h3 className="text-zinc-900 font-medium mb-2">Tamanhos</h3>
        <p className="text-zinc-500 text-sm">
          Informe os tamanhos de pizzas, quantidade de fatias e quantidade de sabores de forma individual.
        </p>
      </div>

      <button 
        onClick={handleAddSize}
        className="mt-4 flex items-center gap-2 text-[#FF5900] hover:text-[#FF5900]/90"
      >
        <span className="text-lg">+</span>
        <span className="text-sm">Adicionar tamanho</span>
      </button>

      {showFields && (
        <div className="mt-4 grid grid-cols-[2fr_2fr_2fr_2fr_auto] gap-4">
          <span className="text-zinc-500 text-sm">Nome</span>
          <span className="text-zinc-500 text-sm">Fatias</span>
          <span className="text-zinc-500 text-sm">Sabores</span>
          <span className="text-zinc-500 text-sm">Disponibilidade</span>
          <span></span>
        </div>
      )}

      {forms.map((form) => (
        <div key={form.id} className="mt-4 grid grid-cols-[2fr_2fr_2fr_2fr_auto] gap-4 items-center">
          <input
            type="text"
            placeholder="Grande"
            value={form.name}
            onChange={(e) => {
              setForms(prev => prev.map(f => 
                f.id === form.id ? { ...f, name: e.target.value } : f
              ));
            }}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-sm text-zinc-900 placeholder:text-[#BABEC6]"
          />
          <select
            value={form.slices}
            onChange={(e) => {
              setForms(prev => prev.map(f => 
                f.id === form.id ? { ...f, slices: e.target.value } : f
              ));
            }}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-sm text-zinc-900"
          >
            <option value="">8 fatias</option>
            <option value="6">6 fatias</option>
            <option value="8">8 fatias</option>
            <option value="10">10 fatias</option>
            <option value="12">12 fatias</option>
          </select>
          <select
            value={form.flavors}
            onChange={(e) => {
              setForms(prev => prev.map(f => 
                f.id === form.id ? { ...f, flavors: e.target.value } : f
              ));
            }}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-sm text-zinc-900"
          >
            <option value="">Até 2 sabores</option>
            <option value="1">1 sabor</option>
            <option value="2">2 sabores</option>
            <option value="3">3 sabores</option>
            <option value="4">4 sabores</option>
          </select>
          <select
            value={form.available}
            onChange={(e) => {
              setForms(prev => prev.map(f => 
                f.id === form.id ? { ...f, available: e.target.value } : f
              ));
            }}
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-sm text-zinc-900"
          >
            <option value="true">Disponível</option>
            <option value="false">Indisponível</option>
          </select>
          <button
            onClick={() => handleDeleteSize(form.id)}
            className="h-[46px] w-[46px] flex items-center justify-center rounded-lg border border-red-200 hover:bg-red-50"
          >
            <Trash size={20} className="text-red-500" />
          </button>
        </div>
      ))}

      {showFields && forms.length > 0 && (
        <div className="flex justify-end mt-6">
          <button 
            onClick={handleConfirm}
            className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90"
          >
            Confirmar
          </button>
        </div>
      )}
    </div>
  );
}
