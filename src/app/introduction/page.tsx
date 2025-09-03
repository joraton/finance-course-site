import BackToPlanButton from "@/components/content/BackToPlanButton";
import Link from "next/link";
import { ArrowRight, Lightbulb, Target } from "lucide-react";

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <BackToPlanButton className="mb-6 sm:mb-8" />
        
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {"Introduction aux Rachats d'Actions"}
            </h1>
            <p className="text-lg text-gray-600">
              {"Découvrez les fondements théoriques et pratiques des rachats d'actions en finance d'entreprise"}
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {"Objectifs d'apprentissage"}
                  </h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>{"• Comprendre les mécanismes des rachats d'actions"}</li>
                    <li>{"• Analyser les avantages par rapport aux dividendes"}</li>
                    <li>{"• Maîtriser les aspects réglementaires"}</li>
                    <li>{"• Évaluer l'impact sur la valeur de l'entreprise"}</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {"Qu'est-ce qu'un rachat d'actions ?"}
            </h2>
            
            <p className="text-gray-700 mb-6">
              {"Le rachat d'actions consiste pour une entreprise à racheter ses propres titres sur le marché financier. Cette opération permet à l'entreprise de réduire le nombre d'actions en circulation et constitue une alternative à la distribution de dividendes pour rémunérer les actionnaires."}
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-4">
                {"💡 Avantages du rachat d'actions vs dividendes"}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-green-800">
                    <strong>Flexibilité pour l'actionnaire :</strong> L'actionnaire choisit le moment où il récupère sa trésorerie en vendant ou non ses titres, contrairement aux dividendes qui s'imposent à lui.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-green-800">
                    <strong>Éviter l'effet cliquet :</strong> Un dividende exceptionnel crée des attentes pour l'année suivante. Sa baisse envoie un signal négatif, ce qui n'est pas le cas pour les rachats d'actions.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-green-800">
                    <strong>Redistribution exceptionnelle :</strong> Permet de redistribuer la trésorerie excédentaire de manière ponctuelle sans créer d'engagement récurrent.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-green-900 mb-3">
                {"💡 Point clé"}
              </h3>
              <p className="text-green-800">
                {"Les rachats d'actions permettent aux actionnaires de choisir le moment où ils souhaitent être rémunérés, contrairement aux dividendes qui s'imposent à tous."}
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {"Contexte réglementaire"}
            </h2>
            
            <p className="text-gray-700 mb-6">
              {"En France, les rachats d'actions sont encadrés par l'Autorité des Marchés Financiers (AMF) et doivent respecter certaines limites, notamment celle de 10% du capital pour les programmes de rachat 'au fil de l'eau'."}
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                {"⚖️ Cadre légal"}
              </h3>
              <p className="text-yellow-800">
                {"Les rachats d'actions doivent être approuvés en Assemblée Générale et respecter les règles de transparence et d'égalité entre actionnaires."}
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <div className="text-xs sm:text-sm text-gray-500 order-first sm:order-none">
            {"Introduction"}
          </div>
          
          <Link 
            href="/section-1"
            className="inline-flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
          >
            {"Section I"}
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}