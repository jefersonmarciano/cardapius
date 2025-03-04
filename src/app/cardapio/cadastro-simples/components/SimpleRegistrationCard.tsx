import Image from 'next/image';

export function SimpleRegistrationCard() {
  return (
    <div className="bg-[#F5F5F5] p-6 rounded-2xl border border-zinc-200">
      <div className="flex gap-4">
        <div className="w-16 h-16 relative">
          <Image 
            src="/images/icons/burgeCadastro.png"
            alt="Burger" 
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="text-lg font-medium text-zinc-900">Cadastro simples</h2>
          <p className="text-zinc-500">Ideal para lanches, pratos, sobremesas, bebidas, etc.</p>
        </div>
      </div>
    </div>
  );
}
