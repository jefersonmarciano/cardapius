"use client"

import { useState } from 'react';
import { CaretLeft } from "@phosphor-icons/react";
import { FlavorModalProps, Flavor } from '../../types';
import { PIZZA_SIZES, AVAILABILITY_OPTIONS, ALLOWED_FILE_TYPES, MAX_FILE_SIZE, MIN_IMAGE_RESOLUTION } from '../../constants';

interface FlavorSize {
  size: string;
  price: string;
  promotionalPrice: string;
  available: boolean;
}

interface AddFlavorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (flavor: Flavor) => void;
}

export function AddFlavorModal({ isOpen, onClose, onAdd }: FlavorModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('/burger-icon.svg');
  
  // Estados para Pizza Pequena
  const [smallPrice, setSmallPrice] = useState('');
  const [smallPromotionalPrice, setSmallPromotionalPrice] = useState('');
  const [smallAvailable, setSmallAvailable] = useState('available');

  // Estados para Pizza Grande
  const [largePrice, setLargePrice] = useState('');
  const [largePromotionalPrice, setLargePromotionalPrice] = useState('');
  const [largeAvailable, setLargeAvailable] = useState('available');

  const handleAdd = () => {
    const newFlavor = {
      id: Math.random().toString(),
      name,
      description,
      image: imageUrl,
      sizes: [
        {
          size: 'Pizza pequena',
          price: smallPrice,
          promotionalPrice: smallPromotionalPrice,
          available: smallAvailable === 'available'
        },
        {
          size: 'Pizza grande',
          price: largePrice,
          promotionalPrice: largePromotionalPrice,
          available: largeAvailable === 'available'
        }
      ]
    };
    
    onAdd(newFlavor);
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setImageUrl('/burger-icon.svg');
    setSmallPrice('');
    setSmallPromotionalPrice('');
    setSmallAvailable('available');
    setLargePrice('');
    setLargePromotionalPrice('');
    setLargeAvailable('available');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-start z-50 [margin-top:0!important]">
      <div className="bg-white w-full max-w-[900px] rounded-2xl shadow-lg mt-4">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <button onClick={onClose} className="hover:bg-zinc-100 rounded-lg">
              <CaretLeft size={24} weight="bold" className="text-zinc-900" />
            </button>
            <h2 className="text-zinc-900 text-lg font-medium">Adicionar sabor</h2>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Coluna da esquerda */}
            <div className="space-y-6">
              <div>
                <label className="block text-zinc-900 mb-2">Nome do sabor</label>
                <input
                  type="text"
                  placeholder="Mussarela"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
                />
              </div>

              <div>
                <label className="block text-zinc-900 mb-2">Descrição</label>
                <textarea
                  placeholder="Pizza de mussarela com molho de tomate e orégano."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400 min-h-[140px] resize-none"
                />
              </div>
            </div>

            {/* Coluna da direita */}
            <div>
              <label className="block text-zinc-900 mb-2">Nome do sabor</label>
              <div className="border-2 border-dashed border-zinc-200 rounded-lg p-6">
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="w-20 h-20 bg-zinc-100 rounded-lg flex items-center justify-center">
                    <img src={imageUrl} alt="" className="w-12 h-12 opacity-30" />
                  </div>
                  <button className="text-[#FF5900] text-sm font-medium px-4 py-2 rounded-full border border-[#FF5900] flex items-center gap-2">
                    <span className="text-lg">↑</span>
                    Enviar foto
                  </button>
                  <div className="text-center space-y-1">
                    <p className="text-zinc-500 text-sm">Formatos: jpg, jpeg, png ou heic</p>
                    <p className="text-zinc-500 text-sm">Tamanhos: até 5 MB</p>
                    <p className="text-zinc-500 text-sm">Resolução mínima recomendada: 500x500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preços */}
          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Tamanho</label>
                <input
                  type="text"
                  value={PIZZA_SIZES[0].label}
                  disabled
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900"
                />
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Valor</label>
                <input
                  type="text"
                  placeholder="R$ 49,90"
                  value={smallPrice}
                  onChange={(e) => setSmallPrice(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
                />
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Valor promocional</label>
                <input
                  type="text"
                  placeholder="R$ 39,90"
                  value={smallPromotionalPrice}
                  onChange={(e) => setSmallPromotionalPrice(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
                />
              </div>
              <div>
                <label className="block text-zinc-400 text-sm mb-2">Disponibilidade</label>
                <select 
                  value={smallAvailable}
                  onChange={(e) => setSmallAvailable(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 appearance-none bg-white"
                >
                  {AVAILABILITY_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div>
                <input
                  type="text"
                  value="Pizza grande"
                  disabled
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="R$ 79,90"
                  value={largePrice}
                  onChange={(e) => setLargePrice(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="R$ 59,90"
                  value={largePromotionalPrice}
                  onChange={(e) => setLargePromotionalPrice(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 placeholder:text-zinc-400"
                />
              </div>
              <div>
                <select 
                  value={largeAvailable}
                  onChange={(e) => setLargeAvailable(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-200 outline-none text-zinc-900 appearance-none bg-white"
                >
                  <option value="available">Disponível</option>
                  <option value="unavailable">Indisponível</option>
                </select>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end mt-8">
            <button 
              onClick={handleAdd}
              className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90"
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
