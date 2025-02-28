import { PencilSimple } from "@phosphor-icons/react";

interface EditButtonProps {
  onClick: () => void;
}

export function EditButton({ onClick }: EditButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-[#FF3838] border border-[#FF3838] rounded-lg px-4 py-2 hover:bg-[#FF3838]/5"
    >
      <PencilSimple size={16} />
      <span className="text-sm font-medium">Alterar</span>
    </button>
  );
}
