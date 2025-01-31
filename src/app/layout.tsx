import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartWrapper } from "@/components/CartWrapper";
import { Sidebar } from "@/components/Sidebar";
import { RecentOrders } from "@/components/Orders/RecentOrders";
import { Header } from "@/components/Header";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Cardapius",
  description: "Seu cardápio digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={poppins.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 bg-zinc-50">
            <CartWrapper>
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-8">
                <h1 className="text-[24px] font-bold text-zinc-900">Olá, Allan!</h1>
                  <Header />
                </div>
                <div className="flex flex-1">
                  <div className="flex-1 px-8">
                    {children}
                  </div>
                  <RecentOrders />
                </div>
              </div>
            </CartWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}
