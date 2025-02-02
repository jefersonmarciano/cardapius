interface IncludeAdditionalsModalProps {
  isOpen: boolean;
  onClose: () => void;
  additionals: Array<{
    id: number;
    image: string;
    name: string;
    description: string;
    price: string;
    promoPrice: string;
    isAvailable: boolean;
  }>;
}

export function IncludeAdditionalsModal({ isOpen }: IncludeAdditionalsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      {/* ... código do modal de incluir adicionais ... */}
    </div>
  );
}