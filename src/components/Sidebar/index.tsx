"use client"

import { House, Moped, StarHalf, List, Users, ChatText, Gear, ClockCounterClockwise } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Sidebar() {
  const pathname = usePathname();
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);

  const menuItems = [
    { icon: House, label: 'Dashboard', href: '/' },
    { icon: Moped, label: 'Delivery', href: '/delivery' },
    { icon: StarHalf, label: 'Cardápio', href: '/cardapio' },
    { icon: ClockCounterClockwise, label: 'Pedidos', href: '/pedidos',
      submenu: [
        { label: "Em aberto", href: "/pedidos/em-aberto", count: 8 },
        { label: "Em preparo", href: "/pedidos/em-preparo" },
        { label: "Aguardando envio", href: "/pedidos/aguardando-envio" },
        { label: "Enviados", href: "/pedidos/enviados" },
        { label: "Finalizados", href: "/pedidos/finalizados" }
      ]
    },
    { icon: Users, label: 'Clientes', href: '/clientes' },
    { icon: ChatText, label: 'Mensagens', href: '/mensagens' },
    { icon: Gear, label: 'Configurações', href: '/configuracoes' },
  ];

  const handleMenuClick = (isOrders: boolean) => {
    if (!isOrders) {
      setIsOrdersOpen(false);
    }
  };

  return (
    <aside className="w-[240px] bg-white p-6 flex flex-col">
      <div className="mb-8">
        <img 
          src="/images/icons/Logo.png" 
          alt="Cardapius" 
          className="h-8"
        />
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isOrders = item.label === 'Pedidos';

          if (isOrders) {
            return (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setIsOrdersOpen(!isOrdersOpen)}
                  className={`
                    w-full flex items-center gap-3 p-3 rounded-lg transition-colors
                    ${pathname.startsWith('/pedidos') ? 'bg-[#FF5900] text-white' : 'text-zinc-500 hover:bg-[#FF5900]/10 hover:text-[#FF5900]'}
                  `}
                >
                  <Icon weight={pathname.startsWith('/pedidos') ? "fill" : "regular"} className="w-5 h-5" />
                  <span className="font-medium flex-1 text-left">{item.label}</span>
                </Link>
                
                {isOrdersOpen && (
                  <div className="ml-11 mt-2 space-y-2">
                    {item.submenu?.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className={`
                          flex items-center py-2 px-3 rounded-lg text-sm transition-colors
                          ${pathname === subitem.href 
                            ? 'text-[#FF5900] font-medium' 
                            : 'text-zinc-500 hover:text-[#FF5900]'
                          }
                        `}
                      >
                        {subitem.count && (
                          <span className="mr-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                            {subitem.count}
                          </span>
                        )}
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => handleMenuClick(false)}
              className={`
                flex items-center gap-3 p-3 rounded-lg transition-colors
                ${pathname === item.href ? 'bg-[#FF5900] text-white' : 'text-zinc-500 hover:bg-[#FF5900]/10 hover:text-[#FF5900]'}
              `}
            >
              <Icon weight={pathname === item.href ? "fill" : "regular"} className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
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
