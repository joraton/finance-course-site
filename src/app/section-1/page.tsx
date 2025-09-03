import BackToPlanButton from "@/components/content/BackToPlanButton";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BarChart3, DollarSign, Users } from "lucide-react";

export default function Section1() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <BackToPlanButton className="mb-6 sm:mb-8" />
        
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {"Section I - Techniques de Rachat d'Actions"}
            </h1>
            <p className="text-lg text-gray-600">
              {"Les différentes modalités de mise en œuvre des programmes de rachat"}
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"1. Programme de rachats d'actions \"au fil de l'eau\""}
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {"Principe et réglementation"}
              </h3>
              <p className="text-blue-800 mb-3">
                {"Programme de rachats d'actions sur 18 mois maximum : achat \"au fil de l'eau\" sur le marché boursier dans la limite de 10% du capital. Cette opération est décidée en Assemblée Générale Ordinaire (AGO)."}
              </p>
              <p className="text-blue-800">
                {"Le programme doit être soumis à approbation de l'AMF pour éviter les manipulations de cours."}
              </p>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-4">
                {"📋 Cas autorisés pour le programme de rachats"}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-yellow-800 space-y-2">
                  <li>• Régulation du cours de bourse</li>
                  <li>• Attribution d'actions aux salariés</li>
                  <li>• Remise d'actions dans le cadre d'opérations financières</li>
                </ul>
                <ul className="text-yellow-800 space-y-2">
                  <li>• Annulation d'actions</li>
                  <li>• Conservation des titres</li>
                  <li>• Financement d'acquisitions</li>
                </ul>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">
                  {"✅ Avantages"}
                </h4>
                <ul className="text-green-800 space-y-2">
                  <li>{"• Flexibilité temporelle"}</li>
                  <li>{"• Pas de prime à payer"}</li>
                  <li>{"• Discrétion de l'opération"}</li>
                  <li>{"• Possibilité d'ajustement"}</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-3">
                  {"❌ Inconvénients"}
                </h4>
                <ul className="text-red-800 space-y-2">
                  <li>{"• Durée d'exécution longue"}</li>
                  <li>{"• Impact limité sur le cours"}</li>
                  <li>{"• Risque de manipulation"}</li>
                  <li>{"• Limite de 10% du capital"}</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"2. Offre Publique de Rachat d'Actions (OPRA)"}
            </h2>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">
                {"Principe"}
              </h3>
              <p className="text-purple-800">
                {"L'entreprise propose à tous ses actionnaires de racheter leurs actions à un prix fixé à l'avance, généralement supérieur au cours de marché (prime de rachat)."}
              </p>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                    {"Calcul de la prime de rachat"}
                  </h3>
                  <p className="text-yellow-800 mb-2">
                    {"Prime = (Prix de rachat - Cours de marché) / Cours de marché × 100"}
                  </p>
                  <p className="text-yellow-700 text-sm">
                    {"Exemple : Si le cours est à 50€ et le prix de rachat à 55€, la prime est de 10%"}
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"3. Rachat par voie d'offre publique mixte"}
            </h2>
            
            <p className="text-gray-700 mb-6">
              {"Cette technique combine une offre publique d'échange (OPE) avec une offre publique de rachat. Les actionnaires peuvent choisir entre recevoir des actions d'une autre société ou être rachetés en numéraire."}
            </p>
            
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                    {"Mécanisme de proratisation"}
                  </h3>
                  <p className="text-indigo-800">
                    {"Si le nombre d'actions présentées dépasse l'objectif de rachat, l'entreprise applique un mécanisme de proratisation pour répartir équitablement les rachats entre tous les actionnaires participants."}
                  </p>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"4. Comparaison des techniques"}
            </h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      {"Critère"}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      {"Au fil de l'eau"}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      {"OPRA"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {"Durée"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Longue (plusieurs mois)"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Courte (quelques semaines)"}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {"Prime"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Aucune"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"5-15% généralement"}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {"Flexibilité"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Élevée"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Faible"}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {"Impact sur cours"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Progressif"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Immédiat et fort"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <Link 
            href="/introduction"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
          >
            <ArrowLeft className="w-4 h-4" />
            {"Introduction"}
          </Link>
          
          <div className="text-sm text-gray-500 order-first sm:order-none">
            {"Section I"}
          </div>
          
          <Link 
            href="/section-2"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
          >
            {"Section II"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}