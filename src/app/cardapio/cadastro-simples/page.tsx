"use client"

import { useState } from 'react';
import { Header } from './components/Header';
import { SimpleRegistrationCard } from './components/SimpleRegistrationCard';
import { CategorySection } from './components/sections/CategorySection';
import { ProductSection } from './components/sections/ProductSection';
import { AdditionalsSection } from './components/sections/AdditionalsSection';
import { CategoryModal } from './components/modals/CategoryModal';
import { AdditionalsGroupModal } from './components/modals/AdditionalsGroupModal';
import { IncludeAdditionalsModal } from './components/modals/IncludeAdditionalsModal';

export default function CadastroSimplesPage() {
  // Estados de navegação
  const [showProductSection, setShowProductSection] = useState(false);
  const [isProductEditing, setIsProductEditing] = useState(true);
  const [showAdditionals, setShowAdditionals] = useState(false);

  // Estados dos modais
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isAdditionalsModalOpen, setIsAdditionalsModalOpen] = useState(false);
  const [isIncludeAdditionalsModalOpen, setIsIncludeAdditionalsModalOpen] = useState(false);

  // Estados de dados
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Dados estáticos de exemplo
  const additionals = [
    {
      id: 1,
      image: '/images/produtos/maionese.jpg',
      name: 'Maionese',
      description: 'Maionese temperada da casa',
      price: '50,00',
      promoPrice: '50,00',
      isAvailable: true
    }
  ];

  // Handlers
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleContinue = () => {
    if (!showProductSection) {
      setShowProductSection(true);
    } else if (isProductEditing) {
      setIsProductEditing(false);
      setShowAdditionals(true);
    }
  };

  return (
    <div className="p-8">
      <Header />
      
      <div className="max-w-[100%] ">
        <div className="bg-white rounded-2xl border border-zinc-100 mb-2">
          <SimpleRegistrationCard />
        </div>

        <div className="bg-white rounded-2xl border border-zinc-100 mb-2">
          <CategorySection 
            selectedCategories={selectedCategories}
            onOpenModal={() => setIsCategoryModalOpen(true)}
          />
        </div>

        {showProductSection && (
          <div className="bg-white rounded-2xl border border-zinc-100 mb-2">
            <ProductSection 
              isEditing={isProductEditing}
              onEdit={() => setIsProductEditing(true)}
            />
          </div>
        )}

        <div className="bg-white rounded-2xl border border-zinc-100 mb-2">
          <AdditionalsSection 
            isVisible={showAdditionals}
            onOpenAdditionalsModal={() => setIsAdditionalsModalOpen(true)}
          />
        </div>

        {/* Botão de Continuar/Finalizar */}
        <div className="flex justify-end pt-4">
          <button 
            onClick={handleContinue}
            className="bg-[#FF5900] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#FF5900]/90"
          >
            {showAdditionals ? 'Finalizar' : 'Continuar'}
          </button>
        </div>

        {/* Modais */}
        <CategoryModal 
          isOpen={isCategoryModalOpen}
          onClose={() => setIsCategoryModalOpen(false)}
          selectedCategories={selectedCategories}
          onCategoryChange={handleCategoryChange}
        />

        <AdditionalsGroupModal 
          isOpen={isAdditionalsModalOpen}
          onClose={() => setIsAdditionalsModalOpen(false)}
          onOpenIncludeAdditionals={() => {
            setIsAdditionalsModalOpen(false);
            setIsIncludeAdditionalsModalOpen(true);
          }}
        />

        <IncludeAdditionalsModal 
          isOpen={isIncludeAdditionalsModalOpen}
          onClose={() => setIsIncludeAdditionalsModalOpen(false)}
          additionals={additionals}
        />
      </div>
    </div>
  );
}



