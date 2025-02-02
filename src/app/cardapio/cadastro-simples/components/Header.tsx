import { CaretLeft } from "@phosphor-icons/react";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex items-center gap-2 mb-8">
      <Link href="/" className="text-zinc-500 hover:text-zinc-600">
        <CaretLeft className="w-5 h-5" />
      </Link>
      <h1 className="text-2xl font-medium text-zinc-900">Novo produto</h1>
    </div>
  );
}
