"use client"

export function MenuPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-medium text-zinc-900">Cardápio</h1>
        <a 
          href="/cardapio/novo-produto" 
          className="bg-[#FF5900] text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          + Novo produto
        </a>
      </div>

      {/* Aqui você pode adicionar a lista de produtos quando necessário */}
    </div>
  );
}
