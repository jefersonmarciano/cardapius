interface AlterarButtonProps {
  onClick: () => void;
}

export function AlterarButton({ onClick }: AlterarButtonProps) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 text-[#FF5900] border border-[#FF5900] rounded-lg hover:bg-[#FF5900]/5 transition-colors"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.1 3.5H3.5C3.23478 3.5 2.98043 3.60536 2.79289 3.79289C2.60536 3.98043 2.5 4.23478 2.5 4.5V12.5C2.5 12.7652 2.60536 13.0196 2.79289 13.2071C2.98043 13.3946 3.23478 13.5 3.5 13.5H11.5C11.7652 13.5 12.0196 13.3946 12.2071 13.2071C12.3946 13.0196 12.5 12.7652 12.5 12.5V7.9M11.8 2.8L13.2 4.2M13.85 3.55L12.45 2.15C12.3565 2.05633 12.2462 1.98188 12.1256 1.93106C12.005 1.88024 11.8767 1.85407 11.7475 1.85407C11.6183 1.85407 11.49 1.88024 11.3694 1.93106C11.2488 1.98188 11.1385 2.05633 11.045 2.15L6.5 6.7V9.5H9.3L13.85 4.95C13.9437 4.85653 14.0181 4.74621 14.0689 4.62561C14.1198 4.50502 14.1459 4.37672 14.1459 4.2475C14.1459 4.11828 14.1198 3.98998 14.0689 3.86939C14.0181 3.74879 13.9437 3.63847 13.85 3.55Z" stroke="#FF5900" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-sm font-medium">Alterar</span>
    </button>
  );
}
