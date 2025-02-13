"use client"

import { useState } from 'react';
import { Header } from './components/Header';
import { SimpleRegistrationCard } from './components/SimpleRegistrationCard';
import { CategorySection } from './components/sections/CategorySection';
import { ProductSection } from './components/sections/ProductSection';
import { AdditionalsSection } from './components/sections/AdditionalsSection';
import { CategoryModal } from './components/modals/CategoryModal';
import { AdditionalModalsContainer } from './components/AdditionalModalsContainer';
import { AdditionalsProvider } from '@/contexts/AdditionalsContexts';

export default function CadastroSimplesPage() {
  // Estados de navegação
  const [showProductSection, setShowProductSection] = useState(false);
  const [isProductEditing, setIsProductEditing] = useState(true);
  const [showAdditionals, setShowAdditionals] = useState(false);

  // Estados dos modais
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isAdditionalsModalOpen, setIsAdditionalsModalOpen] = useState(false);
  const [isGroupsListOpen, setIsGroupsListOpen] = useState(false);

  // Estados de dados
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

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

  const handleOpenGroupsList = () => setIsGroupsListOpen(true);
  const handleCloseGroupsList = () => setIsGroupsListOpen(false);

  return (
    <AdditionalsProvider>
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
              onOpenGroupsList={handleOpenGroupsList}
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

          <AdditionalModalsContainer 
            isOpen={isAdditionalsModalOpen}
            onClose={() => setIsAdditionalsModalOpen(false)}
            isGroupsListOpen={isGroupsListOpen}
            onCloseGroupsList={handleCloseGroupsList}
            onOpenGroupsList={handleOpenGroupsList}
          />
        </div>
      </div>
    </AdditionalsProvider>
  );
}



