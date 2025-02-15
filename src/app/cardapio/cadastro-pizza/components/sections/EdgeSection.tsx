"use client"

import { useState } from 'react';
import { Trash, PencilSimple } from "@phosphor-icons/react";
import { Edge } from '../../types';

export function EdgeSection() {
  const [isEditing, setIsEditing] = useState(true);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [forms, setForms] = useState<any[]>([]);
  const [showFields, setShowFields] = useState(false);

  const handleAddEdge = () => {
    setShowFields(true);
    const newId = forms.length;
    setForms(prev => [...prev, { id: newId, flavor: '', price: '', available: "true" }]);
  };

  const handleDeleteEdge = (id: number) => {
    setForms(prev => prev.filter(form => form.id !== id));
  };

  const handleEdit = () => {
    const newForms = edges.map((edge, index) => ({
      id: index,
      flavor: edge.flavor,
      price: edge.price,
      available: edge.available.toString()
    }));
    setForms(newForms);
    setIsEditing(true);
  };

  const handleConfirm = () => {
    const newEdges = forms.map(form => ({
      flavor: form.flavor,
      price: form.price,
      available: form.available === "true"
    }));
    setEdges(newEdges);
    setIsEditing(false);
    setForms([]);
  };

  if (!isEditing && edges.length > 0) {
    return (
      <div className="bg-white p-6 rounded-2xl border border-zinc-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-zinc-900 font-medium mb-2">Bordas</h3>
            <p className="text-zinc-500 text-sm">
              Ofereça aos seus clientes opções de borda recheada.
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
            <span className="text-zinc-500 text-sm">Sabor</span>
            <span className="text-zinc-500 text-sm">Disp.</span>
          </div>
          {edges.map((edge, index) => (
            <div key={index} className="grid grid-cols-[1fr_auto] gap-4 mt-4">
              <span className="text-zinc-900">{edge.flavor}</span>
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full ${edge.available ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-200">
      <div>
        <h3 className="text-zinc-900 font-medium mb-2">Bordas</h3>
        <p className="text-zinc-500 text-sm">
          Ofereça aos seus clientes opções de borda recheada.
        </p>
      </div>

      <button 
        onClick={handleAddEdge}
        className="mt-4 flex items-center gap-2 text-[#FF5900] hover:text-[#FF5900]/90"
      >
        <span className="text-lg">+</span>
        <span className="text-sm">Adicionar borda</span>
      </button>

      {showFields && (
        <>
          <div className="mt-4 grid grid-cols-[2fr_2fr_2fr_auto] gap-4">
            <span className="text-zinc-500 text-sm">Sabor</span>
            <span className="text-zinc-500 text-sm">Valor</span>
            <span className="text-zinc-500 text-sm">Disponibilidade</span>
            <span></span>
          </div>

          {forms.map((form) => (
            <div key={form.id} className="mt-4 grid grid-cols-[2fr_2fr_2fr_auto] gap-4 items-center">
              <input
                type="text"
                placeholder="Requeijão"
                value={form.flavor}
                onChange={(e) => {
                  setForms(prev => prev.map(f => 
                    f.id === form.id ? { ...f, flavor: e.target.value } : f
                  ));
                }}
                className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-sm text-zinc-900 placeholder:text-[#BABEC6]"
              />
              <input
                type="text"
                placeholder="R$ 0,00"
                value={form.price}
                onChange={(e) => {
                  setForms(prev => prev.map(f => 
                    f.id === form.id ? { ...f, price: e.target.value } : f
                  ));
                }}
                className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-sm text-zinc-900 placeholder:text-[#BABEC6]"
              />
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
                onClick={() => handleDeleteEdge(form.id)}
                className="h-[46px] w-[46px] flex items-center justify-center rounded-lg border border-red-200 hover:bg-red-50"
              >
                <Trash size={20} className="text-red-500" />
              </button>
            </div>
          ))}

          {forms.length > 0 && (
            <div className="flex justify-end mt-6">
              <button 
                onClick={handleConfirm}
                className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90"
              >
                Confirmar
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
