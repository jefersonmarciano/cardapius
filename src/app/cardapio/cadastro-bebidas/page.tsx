"use client"

import { useState } from 'react';
import Image from 'next/image';
import { ProductSection } from "./components/sections/ProductSection";
import { ProductList } from "./components/sections/ProductList";
import { CategorySection } from "./components/sections/CategorySection";
import { CategoryModal } from "./components/modal/CategoryModal";
import { Product } from './types';

export default function CadastroBebidaPage() {
  const [showProductSection, setShowProductSection] = useState(true);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (product: Product) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === product.id ? product : p));
      setEditingProduct(null);
    } else {
      setProducts([...products, product]);
    }
    setShowProductSection(false);
  };

  const handleDelete = (id: string) => {
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
    
    // Se não houver mais produtos, mostra o ProductSection
    if (updatedProducts.length === 0) {
      setShowProductSection(true);
    }
  };

  return (
    <div className="p-8">
      <div className="max-w-[1000px] space-y-4">
        {/* Header Card */}
        <div className="bg-white p-6 rounded-2xl border border-zinc-200">
          <div className="flex gap-4">
            <div className="w-16 h-16 relative">
              <div 
                className="absolute -inset-2 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(255,89,0,0.15) 0%, rgba(255,89,0,0.1) 40%, rgba(255,89,0,0) 70%)'
                }}
              />
              <Image 
                src="/images/icons/bebidas.png"
                alt="Bebidas" 
                width={64}
                height={64}
                className="object-contain relative z-10"
              />
            </div>
            <div>
              <h2 className="text-lg font-medium text-zinc-900">Cadastro de bebidas</h2>
              <p className="text-zinc-500">Inclua em seu cardápio sucos, refrigerantes, cervejas, etc.</p>
            </div>
          </div>
        </div>

        {/* Category Section */}
        <div className="bg-white p-6 rounded-2xl border border-zinc-200">
          <div>
            <h3 className="text-zinc-900 font-medium mb-2">Categorias</h3>
            <p className="text-zinc-500 text-sm">
              As categorias ajudam seus clientes a encontrarem os produtos mais rápido.
            </p>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="mt-4 flex items-center gap-2 text-[#FF5900] hover:text-[#FF5900]/90"
          >
            <span className="text-lg">+</span>
            <span className="text-sm">Adicionar categoria(s)</span>
          </button>
        </div>

        {showProductSection && (
          <ProductSection 
            onSave={handleSave}
            editingProduct={editingProduct || undefined}
            onCancel={() => {
              setShowProductSection(false);
              setEditingProduct(null);
            }}
          />
        )}
        {products.length > 0 && (
          <ProductList 
            products={products}
            onEdit={(product) => {
              setEditingProduct(product);
              setShowProductSection(true);
            }}
            onDelete={handleDelete}
          />
        )}

        {/* Continue Button */}
        <div className="flex justify-end pt-4">
          <button 
            className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90 transition-colors"
          >
            Continuar
          </button>
        </div>
      </div>

      <CategoryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
