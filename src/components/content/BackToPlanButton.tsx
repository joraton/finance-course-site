"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackToPlanButtonProps {
  className?: string;
}

export default function BackToPlanButton({ className = "" }: BackToPlanButtonProps) {
  return (
    <Link 
      href="/" 
      className={`inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 ${className}`}
    >
      <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
      <span className="hidden xs:inline">{"Retour au plan du cours"}</span>
      <span className="xs:hidden">{"Retour"}</span>
    </Link>
  );
}