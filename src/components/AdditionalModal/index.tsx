"use client";

import { useState } from "react";
import Image from "next/image";

interface AdditionalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  initialData?: {
    nome: string;
    descricao: string;
    preco: number;
    precoPromocional: number;
    minimo: number;
    maximo: number;
    obrigatorio: "Sim" | "Não";
    disponibilidade: "Disponível" | "Indisponível";
  };
}

export function AdditionalModal({ isOpen, onClose, onSave, initialData }: AdditionalModalProps) {
  const [formData, setFormData] = useState(initialData || {
    nome: "",
    descricao: "",
    preco: 0,
    precoPromocional: 0,
    minimo: 1,
    maximo: 1,
    obrigatorio: "Não",
    disponibilidade: "Disponível"
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#F5F5F5] rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <h2 className="text-2xl font-bold mb-6">Adicional</h2>
        <p className="text-gray-600 mb-6">Adicione as informações do adicional.</p>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Nome do adicional</label>
              <input
                type="text"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full p-3 border border-gray-200 rounded-lg"
                placeholder="Batata palha"
              />
            </div>

            <div className="mb-4">
              <label className="block font-medium mb-2">Descrição</label>
              <textarea
                value={formData.descricao}
                onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
                className="w-full p-3 border border-gray-200 rounded-lg h-[170px] resize-none"
                placeholder="Descrição"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Valor</label>
                <input
                  type="text"
                  value={formData.preco}
                  onChange={(e) => setFormData({ ...formData, preco: parseFloat(e.target.value) || 0 })}
                  className="w-full p-3 border border-gray-200 rounded-lg"
                  placeholder="R$ 49,90"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Valor promocional</label>
                <input
                  type="text"
                  value={formData.precoPromocional}
                  onChange={(e) => setFormData({ ...formData, precoPromocional: parseFloat(e.target.value) || 0 })}
                  className="w-full p-3 border border-gray-200 rounded-lg"
                  placeholder="R$ 39,90"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Mínimo</label>
                <div className="flex border border-gray-200 rounded-lg">
                  <button 
                    className="px-4 py-2 text-gray-500"
                    onClick={() => setFormData({ ...formData, minimo: Math.max(0, formData.minimo - 1) })}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={formData.minimo}
                    onChange={(e) => setFormData({ ...formData, minimo: parseInt(e.target.value) || 0 })}
                    className="w-full text-center border-x border-gray-200"
                  />
                  <button 
                    className="px-4 py-2 text-gray-500"
                    onClick={() => setFormData({ ...formData, minimo: formData.minimo + 1 })}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <label className="block font-medium mb-1">Máximo</label>
                <div className="flex border border-gray-200 rounded-lg">
                  <button 
                    className="px-4 py-2 text-gray-500"
                    onClick={() => setFormData({ ...formData, maximo: Math.max(0, formData.maximo - 1) })}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={formData.maximo}
                    onChange={(e) => setFormData({ ...formData, maximo: parseInt(e.target.value) || 0 })}
                    className="w-full text-center border-x border-gray-200"
                  />
                  <button 
                    className="px-4 py-2 text-gray-500"
                    onClick={() => setFormData({ ...formData, maximo: formData.maximo + 1 })}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-2">Imagem do produto</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <div className="flex flex-col items-center">
                  {imagePreview ? (
                    <div className="relative w-32 h-32 mb-4">
                      <Image
                        src={imagePreview}
                        alt="Preview"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="mb-4">
                      <Image
                        src="/images/icons/food-icon.png"
                        alt="Food icon"
                        width={80}
                        height={80}
                        className="opacity-30"
                      />
                    </div>
                  )}
                  
                  <button 
                    onClick={() => document.getElementById('imageInput')?.click()}
                    className="flex items-center gap-2 text-[#FF5900] font-medium border border-[#FF5900] rounded-full px-6 py-2"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    Enviar foto
                  </button>
                  <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500">
                <p>Formatos: jpg, jpeg ou png</p>
                <p>Tamanhos: até 1 MB</p>
                <p>Resolução mínima recomendada: 500x500</p>
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Obrigatório</label>
              <select
                value={formData.obrigatorio}
                onChange={(e) => setFormData({ ...formData, obrigatorio: e.target.value as "Sim" | "Não" })}
                className="w-full p-3 border border-gray-200 rounded-lg"
              >
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Disponibilidade</label>
              <select
                value={formData.disponibilidade}
                onChange={(e) => setFormData({ ...formData, disponibilidade: e.target.value as "Disponível" | "Indisponível" })}
                className="w-full p-3 border border-gray-200 rounded-lg"
              >
                <option value="Disponível">Disponível</option>
                <option value="Indisponível">Indisponível</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancelar
          </button>
          <button
            onClick={() => onSave(formData)}
            className="px-6 py-2 bg-[#FF5900] text-white rounded-lg hover:bg-[#FF5900]/90"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
