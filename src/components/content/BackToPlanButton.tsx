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
      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 ${className}`}
    >
      <ArrowLeft className="w-4 h-4" />
      {"Retour au plan du cours"}
    </Link>
  );
}