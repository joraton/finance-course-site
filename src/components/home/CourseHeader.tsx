"use client";

import { GraduationCap, Clock, BookOpen, Target } from "lucide-react";

export default function CourseHeader() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
              <GraduationCap className="w-12 h-12" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
            {"Finance d'Entreprise"}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            {"DSCG UE 2 - Chapitre 3: Les rachats d'actions"}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">{"Niveau Avancé"}</span>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">{"2h de cours"}</span>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">{"6 sections"}</span>
            </div>
          </div>
          
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            {"Maîtrisez les techniques de rachat d'actions, leurs objectifs stratégiques et leur impact sur la valeur de l'entreprise. Un cours complet avec quiz et cas pratiques."}
          </p>
        </div>
      </div>
    </div>
  );
}