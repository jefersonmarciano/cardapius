"use client"

import { House, Truck, List, Users, ChatText, Gear } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: House, label: "Dashboard", href: "/" },
    { icon: Truck, label: "Delivery", href: "/delivery" },
    { icon: List, label: "Cardápio", href: "/cardapio" },
    { icon: Users, label: "Clientes", href: "/clientes" },
    { icon: ChatText, label: "Mensagens", href: "/mensagens" },
    { icon: Gear, label: "Configurações", href: "/configuracoes" },
  ];

  return (
    <aside className="w-[240px] bg-white h-screen p-6 flex flex-col">
      <div className="mb-8">
        <img 
          src="/images/icons/Logo.png" 
          alt="Cardapius" 
          className="h-8"
        />
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 p-3 rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-[#FF5900] text-white' 
                      : 'text-zinc-500 hover:bg-[#FF5900]/10 hover:text-[#FF5900]'
                    }
                  `}
                >
                  <Icon weight={isActive ? "fill" : "regular"} className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto bg-emerald-500 p-6 rounded-3xl relative overflow-hidden">
        {/* Pontos decorativos */}
        <div className="absolute top-4 right-4 grid grid-cols-4 gap-1">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white/20 rounded-full" />
          ))}
        </div>
        
        {/* Círculo decorativo */}
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-400/30 rounded-full translate-x-8 translate-y-8" />
        
        <h3 className="text-white text-lg font-bold leading-tight mb-4 relative z-10">
          Garanta mais recursos subindo seu plano
        </h3>
        <button className="bg-white text-zinc-900 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white/90 transition-colors relative z-10">
          DESCONTO AQUI!
        </button>
      </div>
    </aside>
  );
}
