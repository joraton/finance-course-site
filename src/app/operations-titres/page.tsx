import BackToPlanButton from "@/components/content/BackToPlanButton";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calculator, TrendingUp, Users, DollarSign } from "lucide-react";

export default function OperationsTitres() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton className="mb-8" />
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full">
                <Calculator className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {"Section IV - Opérations Affectant le Nombre de Titres"}
            </h1>
            <p className="text-lg text-gray-600">
              {"Incorporation de réserves et division du nominal : impact sur la valeur des actions"}
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {"Principe général"}
              </h3>
              <p className="text-blue-800">
                {"L'entreprise peut agir sur la valeur de l'action en augmentant le nombre d'actions en circulation. Ces opérations n'affectent pas la valeur globale de l'entreprise mais modifient la valeur unitaire des titres."}
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"1. L'incorporation de réserves au capital"}
            </h2>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    {"Mécanisme"}
                  </h3>
                  <p className="text-green-800 mb-4">
                    {"L'entreprise augmente son capital en y incorporant une partie de ses réserves. La valeur de l'entreprise ne change pas puisqu'il n'y a aucun nouvel apport."}
                  </p>
                  <div className="bg-white border border-green-300 rounded p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Conséquences :</h4>
                    <ul className="text-green-800 space-y-1">
                      <li>• Création de nouvelles actions gratuites</li>
                      <li>• Diminution de la valeur unitaire de l'action</li>
                      <li>• Valeur patrimoniale de l'actionnaire inchangée</li>
                      <li>• Aucun impact sur la trésorerie</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-yellow-900 mb-4">
                {"📊 Exemple pratique : INTERPARFUM (2016)"}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-yellow-300 rounded p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Données initiales :</h4>
                  <ul className="text-yellow-800 space-y-1 text-sm">
                    <li>• Actions au 31/12/2015 : 32 171 732</li>
                    <li>• Valeur nominale : 3€</li>
                    <li>• Cours au 31/12/2015 : 20,64€</li>
                    <li>• Attribution : 1 action gratuite pour 10 anciennes</li>
                  </ul>
                </div>
                <div className="bg-white border border-yellow-300 rounded p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Résultats :</h4>
                  <ul className="text-yellow-800 space-y-1 text-sm">
                    <li>• Actions créées : 3 219 038</li>
                    <li>• Total actions 2016 : 35 527 432</li>
                    <li>• Cours au 31/12/2016 : 27,40€</li>
                    <li>• Capitalisation : +70% malgré dilution</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"2. Le split : division du nominal"}
            </h2>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">
                    {"Objectif du split"}
                  </h3>
                  <p className="text-purple-800 mb-4">
                    {"Lorsqu'un cours de bourse devient très élevé, cela pose un problème de liquidité. Les investisseurs préfèrent diversifier leur portefeuille en achetant plusieurs actions de moindre valeur."}
                  </p>
                  <div className="bg-white border border-purple-300 rounded p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Avantages du split :</h4>
                    <ul className="text-purple-800 space-y-1">
                      <li>• Amélioration de la liquidité du titre</li>
                      <li>• Accessibilité pour nouveaux investisseurs</li>
                      <li>• Facilitation des transactions</li>
                      <li>• Signal positif au marché</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-indigo-900 mb-4">
                {"📊 Exemple pratique : AURES TECHNOLOGIES (2016)"}
              </h3>
              <div className="space-y-4">
                <div className="bg-white border border-indigo-300 rounded p-4">
                  <h4 className="font-semibold text-indigo-900 mb-2">Opération réalisée :</h4>
                  <p className="text-indigo-800 text-sm mb-2">
                    {"Division par 4 du nominal : de 1€ à 0,25€"}
                  </p>
                  <p className="text-indigo-800 text-sm">
                    {"Échange : 1 action de 1€ → 4 actions de 0,25€"}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border border-indigo-300 rounded p-4">
                    <h4 className="font-semibold text-indigo-900 mb-2">Avant split :</h4>
                    <ul className="text-indigo-800 space-y-1 text-sm">
                      <li>• 1 000 000 actions</li>
                      <li>• Nominal : 1€</li>
                      <li>• Cours : 83€ (30/06/2016)</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-indigo-300 rounded p-4">
                    <h4 className="font-semibold text-indigo-900 mb-2">Après split :</h4>
                    <ul className="text-indigo-800 space-y-1 text-sm">
                      <li>• 4 000 000 actions</li>
                      <li>• Nominal : 0,25€</li>
                      <li>• Cours théorique : 20,75€</li>
                      <li>• Cours réel : 19,31€ (23/12/2016)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {"⚖️ Comparaison des deux opérations"}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2 px-3 font-semibold text-gray-900">Critère</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900">Incorporation de réserves</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-900">Split</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3 font-medium">Objectif principal</td>
                      <td className="py-2 px-3">Renforcer les fonds propres</td>
                      <td className="py-2 px-3">Améliorer la liquidité</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3 font-medium">Impact sur le capital</td>
                      <td className="py-2 px-3">Augmentation du capital social</td>
                      <td className="py-2 px-3">Capital social inchangé</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3 font-medium">Valeur nominale</td>
                      <td className="py-2 px-3">Inchangée</td>
                      <td className="py-2 px-3">Divisée</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3 font-medium">Assemblée requise</td>
                      <td className="py-2 px-3">AGO</td>
                      <td className="py-2 px-3">AGE</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-3">
                {"⚠️ Points d'attention"}
              </h3>
              <ul className="text-red-800 space-y-2">
                <li>• Ces opérations n'affectent pas la valeur intrinsèque de l'entreprise</li>
                <li>• L'effet sur le cours peut être temporaire</li>
                <li>• La liquidité réelle dépend de l'intérêt des investisseurs</li>
                <li>• Les droits de vote peuvent être affectés différemment</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            href="/cas-pratiques" 
            className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {"Cas Pratiques"}
          </Link>
          
          <Link 
            href="/" 
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {"Retour au plan"}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}