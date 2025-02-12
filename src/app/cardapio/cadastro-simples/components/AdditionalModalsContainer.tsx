"use client"

import { useState } from 'react';
import { AdditionalsGroupModal } from './modals/AdditionalsGroupModal';
import { IncludeAdditionalsModal } from './modals/IncludeAdditionalsModal';
import { AdditionalGroupsListModal } from './modals/AdditionalGroupsListModal';

interface AdditionalModalsContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdditionalModalsContainer({ 
  isOpen, 
  onClose 
}: AdditionalModalsContainerProps) {
  const [isIncludeAdditionalsOpen, setIsIncludeAdditionalsOpen] = useState(false);
  const [isGroupsListOpen, setIsGroupsListOpen] = useState(false);

  const handleOpenIncludeAdditionals = () => {
    setIsIncludeAdditionalsOpen(true);
  };

  const handleCloseIncludeAdditionals = () => {
    setIsIncludeAdditionalsOpen(false);
  };

  const handleOpenGroupsList = () => {
    setIsGroupsListOpen(true);
  };

  const handleCloseGroupsList = () => {
    setIsGroupsListOpen(false);
  };

  // Se o modal principal não estiver aberto, não renderiza nada
  if (!isOpen) return null;

  return (
    <>
      <AdditionalsGroupModal 
        isOpen={isOpen}
        onClose={onClose}
        onOpenIncludeAdditionals={handleOpenIncludeAdditionals}
        onOpenGroupsList={handleOpenGroupsList}
      />
      
      <IncludeAdditionalsModal 
        isOpen={isIncludeAdditionalsOpen}
        onBack={handleCloseIncludeAdditionals}
      />

      <AdditionalGroupsListModal 
        isOpen={isGroupsListOpen}
        onBack={handleCloseGroupsList}
      />
    </>
  );
}
