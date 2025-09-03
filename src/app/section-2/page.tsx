import BackToPlanButton from "@/components/content/BackToPlanButton";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Target, TrendingUp, Shield, Zap, Brain, AlertTriangle } from "lucide-react";

export default function Section2() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <BackToPlanButton className="mb-6 sm:mb-8" />
        
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {"Section II - Objectifs selon la Théorie Financière"}
            </h1>
            <p className="text-lg text-gray-600">
              {"Les motivations théoriques et empiriques des programmes de rachat d'actions"}
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"1. Signalisation et asymétrie d'information"}
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <div className="flex items-start gap-3">
                <Brain className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    {"Théorie du signal"}
                  </h3>
                  <p className="text-blue-800 mb-3">
                    {"Les dirigeants disposent d'informations privilégiées sur les perspectives de l'entreprise. Un rachat d'actions constitue un signal positif envoyé au marché."}
                  </p>
                  <div className="bg-blue-100 rounded-lg p-4">
                    <p className="text-blue-900 font-medium">
                      {"💡 Logique : Si les dirigeants rachètent, c'est qu'ils estiment que l'action est sous-évaluée"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">
                  {"Signal positif"}
                </h4>
                <ul className="text-green-800 space-y-2">
                  <li>{"• Confiance des dirigeants"}</li>
                  <li>{"• Sous-évaluation perçue"}</li>
                  <li>{"• Perspectives favorables"}</li>
                  <li>{"• Excès de liquidités"}</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">
                  {"Réaction du marché"}
                </h4>
                <ul className="text-orange-800 space-y-2">
                  <li>{"• Hausse du cours (généralement)"}</li>
                  <li>{"• Réduction de l'asymétrie"}</li>
                  <li>{"• Amélioration de la liquidité"}</li>
                  <li>{"• Confiance renforcée"}</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"2. Optimisation de la structure financière"}
            </h2>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">
                {"Théorie du compromis (Trade-off Theory)"}
              </h3>
              <p className="text-purple-800">
                {"L'entreprise cherche à atteindre un ratio d'endettement optimal en arbitrant entre les avantages fiscaux de la dette et les coûts de détresse financière."}
              </p>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                    {"Impact sur les ratios financiers"}
                  </h3>
                  <p className="text-yellow-800 mb-3">
                    {"Le rachat d'actions financé par endettement permet d'augmenter le levier financier et d'optimiser la structure du capital."}
                  </p>
                  <div className="bg-yellow-100 rounded-lg p-3">
                    <p className="text-yellow-900 text-sm font-medium">
                      {"Ratio d'endettement = Dette / (Dette + Capitaux propres)"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"3. Théorie de l'agence"}
            </h2>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-3">
                    {"Conflits d'agence"}
                  </h3>
                  <p className="text-red-800 mb-3">
                    {"Les dirigeants peuvent être tentés d'investir dans des projets non rentables plutôt que de distribuer les liquidités excédentaires aux actionnaires."}
                  </p>
                  <div className="bg-red-100 rounded-lg p-4">
                    <p className="text-red-900 font-medium">
                      {"⚠️ Problème : Surinvestissement et destruction de valeur"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-2">
                    {"Solution par les rachats"}
                  </h3>
                  <p className="text-green-800">
                    {"Les rachats d'actions permettent de restituer les liquidités excédentaires aux actionnaires et de discipliner les dirigeants en réduisant les ressources disponibles pour des investissements non optimaux."}
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"4. Flexibilité par rapport aux dividendes"}
            </h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      {"Critère"}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      {"Dividendes"}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      {"Rachats d'actions"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {"Engagement"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Fort (politique de dividende)"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Faible (programmes ponctuels)"}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {"Fiscalité"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Imposition immédiate"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Imposition différée (plus-values)"}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {"Choix actionnaire"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Aucun (distribution automatique)"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Total (participation volontaire)"}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {"Impact sur BPA"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Aucun"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Amélioration mécanique"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                    {"Mécanisme d'amélioration du BPA"}
                  </h3>
                  <p className="text-indigo-800 mb-3">
                    {"La réduction du nombre d'actions en circulation améliore mécaniquement le bénéfice par action, même si le bénéfice total reste constant."}
                  </p>
                  <div className="bg-indigo-100 rounded-lg p-3">
                    <p className="text-indigo-900 text-sm font-medium">
                      {"BPA = Bénéfice net / Nombre d'actions en circulation"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"5. Synthèse des motivations"}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">{"📊"}</div>
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  {"Signalisation"}
                </h4>
                <p className="text-blue-800 text-sm">
                  {"Communiquer la confiance des dirigeants"}
                </p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">{"⚖️"}</div>
                <h4 className="text-lg font-semibold text-purple-900 mb-2">
                  {"Optimisation"}
                </h4>
                <p className="text-purple-800 text-sm">
                  {"Améliorer la structure financière"}
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">{"🎯"}</div>
                <h4 className="text-lg font-semibold text-green-900 mb-2">
                  {"Flexibilité"}
                </h4>
                <p className="text-green-800 text-sm">
                  {"Alternative souple aux dividendes"}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <Link 
            href="/section-1"
            className="inline-flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            {"Section I"}
          </Link>
          
          <div className="text-xs sm:text-sm text-gray-500 order-first sm:order-none">
            {"Section II"}
          </div>
          
          <Link 
            href="/section-3"
            className="inline-flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
          >
            {"Section III"}
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}