"use client"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UserCircle, ShoppingCart } from "@phosphor-icons/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Cart } from "@/components/Cart";
import { useState } from "react";
import Image from "next/image";
import { Money, Users, ArrowsClockwise, LockKey } from "@phosphor-icons/react";
import { MostOrderedProducts } from "@/components/Product/MostOrderedProducts";
import { LastOrderedProducts } from "@/components/Product/LastOrderedProducts";  

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isCartOpen, setIsCartOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const itemsCount = 2;

  const stats = [
    {
      label: "Faturamento",
      value: "R$1.5k",
      change: "-10.80%",
      isNegative: true,
      icon: Money,
      color: "#FF3F00"
    },
    {
      label: "Novos clientes",
      value: "44",
      change: "+10.80%",
      isNegative: false,
      icon: Users,
      color: "#FF3F00"
    },
    {
      label: "Recorrência",
      value: "11%",
      change: "+10.80%",
      isNegative: false,
      icon: ArrowsClockwise,
      color: "#FF3F00"
    },
    {
      label: "Desistências",
      value: "20",
      change: "-10.80%",
      isNegative: true,
      icon: LockKey,
      color: "#FF3F00"
    }
  ];

  return (
    <div className="p-1">
      <div className="max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
        
        {/* Banner promocional */}
        <div className="bg-[#FF5900] text-white rounded-[32px] p-8 mb-8 relative overflow-hidden h-[240px] lg:h-[200px]">
          {/* Círculos decorativos */}
          <div className="absolute top-[-20%] right-[-5%] w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] bg-[#FF7A33]/30 rounded-full" />
          <div className="absolute bottom-[-50%] left-[20%] w-[400px] h-[400px] lg:w-[300px] lg:h-[300px] bg-[#FF7A33]/20 rounded-full" />
          
          <div className="flex items-center justify-between h-full relative">
            <div className="max-w-[600px] lg:max-w-[500px] z-10 relative">
              <h2 className="text-[42px] lg:text-[36px] md:text-[32px] font-bold leading-tight mb-2">50% de desconto</h2>
              <h3 className="text-[32px] lg:text-[28px] md:text-[24px] font-bold mb-4">para subir seu plano</h3>
              <div className="space-y-1 text-[14px] lg:text-[12px] text-white/90 max-w-[80%] md:max-w-full">
                <p>Garanta ainda mais recursos para turbinar o seu delivery!</p>
                <p>Cupom de 50% para garantir agora sua nova assinatura.</p>
              </div>
            </div>

            <div className="absolute right-[-2.75rem] top-[-40px] lg:top-[-30px] h-[280px] lg:h-[220px] w-[400px] lg:w-[320px] md:block hidden">
              <Image 
                src="/images/banners/mulher.png" 
                alt="Mulher segurando donuts" 
                fill
                className="object-contain z-10 scale-90 lg:scale-85"
                priority
              />
            </div>

            {/* Versão mobile da imagem */}
            <div className="absolute right-0 top-0 h-full w-full opacity-20 md:hidden">
              <Image 
                src="/images/banners/mulher.png" 
                alt="Mulher segurando donuts" 
                fill
                className="object-contain z-0"
                priority
              />
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[20px] font-bold text-zinc-900">Desempenho nos últimos 7 dias</h3>
            <button className="text-[#FF3F00] font-medium flex items-center gap-1">
              Mais dados
              <span className="text-[18px]">›</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm w-full">
                  <div className="text-[14px] text-zinc-400 mb-4">{stat.label}</div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <div className="p-3 rounded-full bg-[#FF3F00]/10 shrink-0">
                      <Icon size={24} className="text-[#FF3F00]" weight="bold" />
                    </div>
                    <span className="text-[24px] lg:text-[30px] font-bold text-[#FF5900] break-words">{stat.value}</span>
                  </div>
                  <div className={`text-[14px] ${stat.isNegative ? 'text-[#F04949]' : 'text-emerald-500'}`}>
                    {stat.change}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-[14px] text-zinc-400 mt-2 text-right">
            *Dados comparados à semana anterior
          </div>
        </div>

        {/* Produtos mais pedidos */}
        <MostOrderedProducts />
        <LastOrderedProducts />
      </div>
    </div>
  );
}
