"use client"

interface OffersSectionProps {
  onOpenOffersModal: () => void;
}

export function OffersSection({ onOpenOffersModal }: OffersSectionProps) {
  return (
    <div className="p-8">
      <h2 className="text-zinc-900 font-medium mb-2">Ofertas</h2>
      <p className="text-zinc-500 text-sm mb-4">
        Aumente o ticket médio incluindo ofertas
      </p>

      <button 
        onClick={onOpenOffersModal}
        className="text-[#FF5900] hover:text-[#FF5900]/80 text-sm flex items-center gap-1"
      >
        <span>+</span>
        Incluir oferta(s)
      </button>
    </div>
  );
}
