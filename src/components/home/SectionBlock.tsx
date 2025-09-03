"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  buttonText?: string;
}

export default function SectionBlock({ 
  title, 
  description, 
  href, 
  icon: Icon, 
  color,
  buttonText = "Commencer"
}: SectionBlockProps) {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
    purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
    orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
    red: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
    indigo: "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
    teal: "from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className="group"
    >
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">
            <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} text-white flex-shrink-0`}>
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
                {title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
          
          <Link
            href={href}
            className={`px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200 transform group-hover:scale-105 text-sm sm:text-base text-center flex-shrink-0`}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}