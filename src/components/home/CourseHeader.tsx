"use client";

import { GraduationCap, Clock, BookOpen, Target } from "lucide-react";

export default function CourseHeader() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 bg-white/20 rounded-full backdrop-blur-sm">
              <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent px-4">
            {"Finance d'Entreprise"}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 px-4">
            {"DSCG UE 2 - Chapitre 3: Les rachats d'actions"}
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
              <Target className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">{"Niveau Avancé"}</span>
            </div>
            
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">{"2h de cours"}</span>
            </div>
            
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">{"6 sections"}</span>
            </div>
          </div>
          
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed px-4">
            {"Maîtrisez les techniques de rachat d'actions, leurs objectifs stratégiques et leur impact sur la valeur de l'entreprise. Un cours complet avec quiz et cas pratiques."}
          </p>
        </div>
      </div>
    </div>
  );
}