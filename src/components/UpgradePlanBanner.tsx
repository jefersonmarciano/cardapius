export function UpgradePlanBanner() {
  return (
    <div className="mb-8 relative overflow-hidden">
      <div className="bg-emerald-500 rounded-3xl p-8 relative">
        {/* Pontos decorativos */}
        <div className="absolute top-4 right-4 grid grid-cols-4 gap-1">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white/20 rounded-full" />
          ))}
        </div>
        
        {/* Círculo decorativo */}
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-emerald-400/30 rounded-full translate-x-16 translate-y-16" />
        
        {/* Conteúdo */}
        <div className="relative z-10">
          <h2 className="text-white text-3xl font-bold max-w-[280px] leading-tight mb-6">
            Garanta mais recursos subindo seu plano
          </h2>
          
          <button className="bg-white text-zinc-900 px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors">
            DESCONTO AQUI!
          </button>
        </div>
      </div>
    </div>
  );
}
