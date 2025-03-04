"use client";

import Image from "next/image";

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  isNegative: boolean;
  iconPath: string;
}

export function StatCard({ label, value, change, isNegative, iconPath }: StatCardProps) {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl p-6 shadow-sm w-full">
      <div className="text-[14px] text-zinc-400 mb-4 text-center">
        <span className="block text-center">{label}</span>
      </div>
      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <div className="shrink-0">
          <Image
            src={iconPath}
            alt={label}
            width={32}
            height={32}
            className="text-primary"
          />
        </div>
        <span className="text-[24px] lg:text-[30px] font-bold text-primary break-words">
          {value}
        </span>
      </div>
      <div
        className={`text-[14px] text-center ${
          isNegative ? "text-[#F04949]" : "text-emerald-500"
        }`}
      >
        {change}
      </div>
    </div>
  );
}
