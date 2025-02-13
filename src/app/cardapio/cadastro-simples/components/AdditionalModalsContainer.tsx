"use client"

import { useState } from 'react';
import { AdditionalsGroupModal } from './modals/AdditionalsGroupModal';
import { IncludeAdditionalsModal } from './modals/IncludeAdditionalsModal';
import { AdditionalGroupsListModal } from './modals/AdditionalGroupsListModal';

interface AdditionalModalsContainerProps {
  isOpen: boolean;
  onClose: () => void;
  isGroupsListOpen: boolean;
  onCloseGroupsList: () => void;
  onOpenGroupsList: () => void;
}

export function AdditionalModalsContainer({ 
  isOpen, 
  onClose,
  isGroupsListOpen,
  onCloseGroupsList,
  onOpenGroupsList
}: AdditionalModalsContainerProps) {
  const [isIncludeAdditionalsOpen, setIsIncludeAdditionalsOpen] = useState(false);

  // Se o modal principal não estiver aberto, não renderiza nada
  if (!isOpen) return null;

  return (
    <>
      <AdditionalsGroupModal 
        isOpen={isOpen}
        onClose={onClose}
        onOpenIncludeAdditionals={() => setIsIncludeAdditionalsOpen(true)}
        onOpenGroupsList={onOpenGroupsList}
      />
      
      <IncludeAdditionalsModal 
        isOpen={isIncludeAdditionalsOpen}
        onBack={() => setIsIncludeAdditionalsOpen(false)}
      />

      <AdditionalGroupsListModal 
        isOpen={isGroupsListOpen}
        onBack={onCloseGroupsList}
      />
    </>
  );
}
