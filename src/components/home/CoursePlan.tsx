"use client";

import { Target, Rocket, TrendingUp, BarChart3, Brain, Award, Calculator } from "lucide-react";
import SectionBlock from "./SectionBlock";

export default function CoursePlan() {
  const sections = [
    {
      title: "Introduction",
      description: "Découvrez les concepts fondamentaux des rachats d'actions et leur place dans la stratégie financière d'entreprise.",
      href: "/introduction",
      icon: Rocket,
      color: "blue"
    },
    {
      title: "Section I - Le rachat d'actions, alternative aux dividendes",
      description: "Analysez les avantages du rachat d'actions par rapport à la distribution de dividendes et les techniques de mise en œuvre.",
      href: "/section-1",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "Section II - Réglementation et modalités",
      description: "Maîtrisez le cadre réglementaire des programmes de rachat et les offres publiques de rachat (OPRA).",
      href: "/section-2",
      icon: BarChart3,
      color: "purple"
    },
    {
      title: "Section III - Objectifs stratégiques",
      description: "Comprenez les objectifs financiers et stratégiques des rachats d'actions selon la théorie financière moderne.",
      href: "/section-3",
      icon: Target,
      color: "indigo"
    },
    {
      title: "Section IV - Opérations sur le nombre de titres",
      description: "Maîtrisez l'incorporation de réserves et la division du nominal : impact sur la valeur des actions.",
      href: "/operations-titres",
      icon: Calculator,
      color: "teal"
    },
    {
      title: "Quiz Interactif",
      description: "Testez vos connaissances avec des questions interactives et obtenez un feedback immédiat sur vos réponses.",
      href: "/quiz",
      icon: Brain,
      color: "orange",
      buttonText: "Commencer le quiz"
    },
    {
      title: "Cas Pratiques",
      description: "Appliquez vos connaissances sur des cas concrets d'entreprises avec corrections détaillées et méthodologie.",
      href: "/cas-pratiques",
      icon: Award,
      color: "red",
      buttonText: "Voir les cas"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
            <Target className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {"Plan du Cours"}
        </h2>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {"Suivez un parcours structuré pour maîtriser tous les aspects des rachats d'actions en finance d'entreprise."}
        </p>
      </div>
      
      <div className="space-y-6">
        {sections.map((section, index) => (
          <SectionBlock
            key={index}
            title={section.title}
            description={section.description}
            href={section.href}
            icon={section.icon}
            color={section.color}
            buttonText={section.buttonText}
          />
        ))}
      </div>
    </div>
  );
}