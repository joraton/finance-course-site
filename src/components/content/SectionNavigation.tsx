"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SectionNavigationProps {
  previousHref?: string;
  previousLabel?: string;
  nextHref?: string;
  nextLabel?: string;
  currentSection: string;
  previousColor?: string;
  nextColor?: string;
}

export default function SectionNavigation({
  previousHref,
  previousLabel,
  nextHref,
  nextLabel,
  currentSection,
  previousColor = "bg-gray-100 text-gray-700 hover:bg-gray-200",
  nextColor = "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700"
}: SectionNavigationProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      {previousHref && previousLabel ? (
        <Link 
          href={previousHref}
          className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 ${previousColor} font-medium rounded-lg transition-all duration-200 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start`}
        >
          <ArrowLeft className="w-4 h-4" />
          {previousLabel}
        </Link>
      ) : (
        <div></div>
      )}
      
      <div className="text-sm text-gray-500 order-first sm:order-none">
        {currentSection}
      </div>
      
      {nextHref && nextLabel ? (
        <Link 
          href={nextHref}
          className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 ${nextColor} font-medium rounded-lg transition-all duration-200 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start`}
        >
          {nextLabel}
          <ArrowRight className="w-4 h-4" />
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}