"use client";

import {
  House,
  Moped,
  Users,
  ChatText,
  Gear,
  ClockCounterClockwise,
  ClipboardText,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: House, label: "Dashboard", href: "/" },
    { icon: Moped, label: "Delivery", href: "/delivery" },
    {
      icon: ClipboardText,
      label: "Cardápio",
      href: "/cardapio",
      onClick: () => {
        router.push("/cardapio");
        return false;
      },
      submenu: [
        {
          label: "Produtos",
          href: "/cardapio/produtos",
          onClick: () => router.push("/cardapio/produtos"),
        },
        {
          label: "Categorias",
          href: "/cardapio/categorias",
          onClick: () => router.push("/cardapio/categorias"),
        },
        {
          label: "Adicionais",
          href: "/cardapio/adicionais",
          onClick: () => router.push("/cardapio/adicionais"),
        },
      ],
    },
    {
      icon: ClockCounterClockwise,
      label: "Pedidos",
      href: "/pedidos",
      submenu: [
        { label: "Em aberto", href: "/pedidos/em-aberto", count: 8 },
        { label: "Em preparo", href: "/pedidos/em-preparo" },
        { label: "Aguardando envio", href: "/pedidos/aguardando-envio" },
        { label: "Enviados", href: "/pedidos/enviados" },
        { label: "Finalizados", href: "/pedidos/finalizados" },
      ],
    },
    { icon: Users, label: "Clientes", href: "/clientes" },
    { icon: ChatText, label: "Mensagens", href: "/mensagens" },
    { icon: Gear, label: "Configurações", href: "/configuracoes" },
  ];

  const handleMenuClick = (isOrders: boolean, isMenu: boolean) => {
    if (!isOrders) setIsOrdersOpen(false);
    if (!isMenu) setIsMenuOpen(false);
  };

  return (
    <aside className="w-[240px] bg-white flex flex-col h-screen">
      <div className="p-6 flex-shrink-0">
        <Image
          src="/images/icons/Logo.png"
          alt="Cardapius"
          width={150}
          height={40}
          className="object-contain"
          quality={100}
          priority
        />
      </div>

      <nav className="flex-1 overflow-y-auto scrollbar-none px-6 min-h-0">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isOrders = item.label === "Pedidos";
            const isMenu = item.label === "Cardápio";

            if (isOrders || isMenu) {
              return (
                <div key={item.label}>
                  <button
                    onClick={() => {
                      if (isOrders) {
                        setIsOrdersOpen(!isOrdersOpen);
                        router.push(item.href);
                      }
                      if (isMenu) {
                        setIsMenuOpen(!isMenuOpen);
                        router.push(item.href);
                      }
                    }}
                    className={`
                      w-full flex items-center gap-3 p-3 rounded-lg transition-colors
                      ${
                        (isOrders && pathname.startsWith("/pedidos")) ||
                        (isMenu && pathname.startsWith("/cardapio"))
                          ? "bg-[#FF5900] text-white"
                          : "text-zinc-500 hover:bg-[#FF5900]/10 hover:text-[#FF5900]"
                      }
                    `}
                  >
                    <Icon
                      weight={
                        (isOrders && pathname.startsWith("/pedidos")) ||
                        (isMenu && pathname.startsWith("/cardapio"))
                          ? "fill"
                          : "regular"
                      }
                      className="w-5 h-5"
                    />
                    <span className="font-medium flex-1 text-left">
                      {item.label}
                    </span>
                  </button>

                  {((isOrders && isOrdersOpen) || (isMenu && isMenuOpen)) && (
                    <div className="ml-11 mt-2 space-y-2">
                      {(item?.submenu && item?.submenu?.length) ??
                        item.submenu?.map((subitem: any, index: number) => (
                          <Link
                            key={index}
                            href={subitem.href}
                            className="block text-sm text-zinc-500 hover:text-zinc-900"
                            onClick={subitem?.onClick}
                          >
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
                onClick={() => handleMenuClick(false, false)}
                className={`
                  flex items-center gap-3 p-3 rounded-lg transition-colors
                  ${
                    pathname === item.href
                      ? "bg-[#FF5900] text-white"
                      : "text-zinc-500 hover:bg-[#FF5900]/10 hover:text-[#FF5900]"
                  }
                `}
              >
                <Icon
                  weight={pathname === item.href ? "fill" : "regular"}
                  className="w-5 h-5"
                />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="mt-auto p-6 flex-shrink-0">
        <div className="bg-emerald-500 p-6 rounded-3xl relative overflow-hidden">
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
      </div>
    </aside>
  );
}
