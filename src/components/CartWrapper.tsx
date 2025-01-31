"use client"

import { CartProvider } from "@/contexts/CartContext";
import { ReactNode } from "react";

export function CartWrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
