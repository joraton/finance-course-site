import BackToPlanButton from "@/components/content/BackToPlanButton";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calculator, TrendingUp, DollarSign, BarChart, AlertCircle, CheckCircle } from "lucide-react";

export default function Section3() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton className="mb-8" />
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {"Section III - Impact sur la Structure Financière"}
            </h1>
            <p className="text-lg text-gray-600">
              {"Analyse de l'effet des rachats d'actions sur la valeur et les ratios financiers"}
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"1. Impact sur les ratios financiers"}
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <div className="flex items-start gap-3">
                <Calculator className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">
                    {"Effet sur le Bénéfice Par Action (BPA)"}
                  </h3>
                  <p className="text-blue-800 mb-3">
                    {"La réduction du nombre d'actions en circulation améliore mécaniquement le BPA, créant un effet d'accroissement apparent de la rentabilité."}
                  </p>
                  <div className="bg-blue-100 rounded-lg p-4">
                    <p className="text-blue-900 font-medium text-sm">
                      {"Exemple : 1M€ de bénéfice / 100k actions = 10€ par action"}
                    </p>
                    <p className="text-blue-900 font-medium text-sm">
                      {"Après rachat de 10k actions : 1M€ / 90k actions = 11,11€ par action (+11%)"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <h4 className="text-lg font-semibold text-green-900">
                    {"Ratios améliorés"}
                  </h4>
                </div>
                <ul className="text-green-800 space-y-2">
                  <li>{"• BPA (Bénéfice par action)"}</li>
                  <li>{"• ROE (Rentabilité des capitaux propres)"}</li>
                  <li>{"• Dividende par action"}</li>
                  <li>{"• Price-to-Book ratio"}</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-orange-600" />
                  <h4 className="text-lg font-semibold text-orange-900">
                    {"Ratios dégradés"}
                  </h4>
                </div>
                <ul className="text-orange-800 space-y-2">
                  <li>{"• Ratio d'endettement (si financé par dette)"}</li>
                  <li>{"• Ratio de liquidité"}</li>
                  <li>{"• Couverture des intérêts"}</li>
                  <li>{"• Autonomie financière"}</li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"2. Modes de financement et leurs conséquences"}
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">
                  {"A. Financement par liquidités excédentaires"}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-purple-800 mb-2">{"Avantages :"}</h4>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>{"• Pas d'impact sur l'endettement"}</li>
                      <li>{"• Utilisation optimale des liquidités"}</li>
                      <li>{"• Pas de coût financier supplémentaire"}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 mb-2">{"Inconvénients :"}</h4>
                    <ul className="text-purple-700 text-sm space-y-1">
                      <li>{"• Réduction de la flexibilité financière"}</li>
                      <li>{"• Moins de réserves pour opportunités"}</li>
                      <li>{"• Risque de sous-investissement"}</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-lg font-semibold text-red-900 mb-3">
                  {"B. Financement par endettement"}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-red-800 mb-2">{"Avantages :"}</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>{"• Effet de levier fiscal"}</li>
                      <li>{"• Optimisation de la structure du capital"}</li>
                      <li>{"• Signal fort au marché"}</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-800 mb-2">{"Inconvénients :"}</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>{"• Augmentation du risque financier"}</li>
                      <li>{"• Coût des intérêts"}</li>
                      <li>{"• Contraintes d'endettement"}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"3. Théorie de Modigliani-Miller et rachats d'actions"}
            </h2>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <BarChart className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                    {"Proposition I (sans impôts)"}
                  </h3>
                  <p className="text-yellow-800 mb-3">
                    {"Dans un monde sans impôts ni coûts de transaction, la valeur de l'entreprise est indépendante de sa structure de financement. Les rachats d'actions n'affectent pas la valeur totale."}
                  </p>
                  <div className="bg-yellow-100 rounded-lg p-3">
                    <p className="text-yellow-900 text-sm font-medium">
                      {"V = VU (valeur de l'entreprise non endettée)"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <DollarSign className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-green-900 mb-3">
                    {"Proposition II (avec impôts)"}
                  </h3>
                  <p className="text-green-800 mb-3">
                    {"Avec la déductibilité fiscale des intérêts, l'endettement crée de la valeur. Un rachat financé par dette peut donc accroître la valeur de l'entreprise."}
                  </p>
                  <div className="bg-green-100 rounded-lg p-3">
                    <p className="text-green-900 text-sm font-medium">
                      {"V = VU + T × D (où T = taux d'impôt, D = dette)"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"4. Analyse empirique des effets"}
            </h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      {"Effet"}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      {"Court terme"}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      {"Long terme"}
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      {"Commentaire"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {"Cours de l'action"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Hausse (+2 à +4%)"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Variable"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      {"Effet d'annonce positif"}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {"BPA"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Amélioration mécanique"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Dépend de la rentabilité"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      {"Effet comptable"}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {"ROE"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Amélioration"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Risque accru si surendetté"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      {"Réduction des capitaux propres"}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">
                      {"Liquidité"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Réduction"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3">
                      {"Contrainte de financement"}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm">
                      {"Moins de flexibilité"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"5. Conditions de création de valeur"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">
                  {"✅ Conditions favorables"}
                </h4>
                <ul className="text-blue-800 space-y-2">
                  <li>{"• Action sous-évaluée"}</li>
                  <li>{"• Excès de liquidités"}</li>
                  <li>{"• Absence de projets rentables"}</li>
                  <li>{"• Structure financière sous-optimale"}</li>
                  <li>{"• Avantage fiscal de la dette"}</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-3">
                  {"❌ Conditions défavorables"}
                </h4>
                <ul className="text-red-800 space-y-2">
                  <li>{"• Action surévaluée"}</li>
                  <li>{"• Besoins de financement futurs"}</li>
                  <li>{"• Projets d'investissement rentables"}</li>
                  <li>{"• Endettement déjà élevé"}</li>
                  <li>{"• Environnement économique incertain"}</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">
                {"🎯 Règle d'or"}
              </h3>
              <p className="text-indigo-800">
                {"Un rachat d'actions crée de la valeur si et seulement si le rendement attendu de l'action rachetée est supérieur au coût du capital utilisé pour financer l'opération."}
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {"6. Limites et inconvénients des rachats d'actions"}
            </h2>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-900 mb-4">
                {"⚠️ Limites et inconvénients des rachats d'actions"}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Risques financiers</h4>
                  <ul className="text-red-700 space-y-1 ml-4">
                    <li>• Augmentation du risque financier par l'endettement</li>
                    <li>• Réduction de la flexibilité financière</li>
                    <li>• Impact négatif sur la notation de crédit</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Opportunités manquées</h4>
                  <ul className="text-red-700 space-y-1 ml-4">
                    <li>• Renoncement à des investissements potentiellement rentables</li>
                    <li>• Limitation de la croissance future</li>
                    <li>• Perte d'avantages concurrentiels</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Risques de marché</h4>
                  <ul className="text-red-700 space-y-1 ml-4">
                    <li>• Mauvais timing d'achat (cours surévalué)</li>
                    <li>• Signal négatif envoyé au marché</li>
                    <li>• Manipulation potentielle du cours</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            href="/section-2"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            {"Section II"}
          </Link>
          
          <div className="text-sm text-gray-500">
            {"Section III"}
          </div>
          
          <Link 
            href="/quiz"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200"
          >
            {"Quiz"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}