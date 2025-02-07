"use client"

import Image from "next/image";

export function PizzaRegistrationCard() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-zinc-200">
      <div className="flex gap-4">
        <div className="w-16 h-16 relative flex items-center justify-center">
          <div 
            className="absolute -inset-2 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,89,0,0.15) 0%, rgba(255,89,0,0.1) 40%, rgba(255,89,0,0) 70%)'
            }}
          />
          <Image 
            src="/images/icons/pizza.png"
            alt="Pizza" 
            width={48}
            height={48}
            className="object-contain relative z-10"
          />
        </div>
        <div>
          <h2 className="text-lg font-medium text-zinc-900">Cadastro de pizza</h2>
          <p className="text-zinc-500">Defina com clareza a quantidade de sabores, bordas e tipo de massa.</p>
        </div>
      </div>
    </div>
  );
}
