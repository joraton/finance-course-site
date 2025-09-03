"use client";

import BackToPlanButton from "@/components/content/BackToPlanButton";
import Link from "next/link";
import { ArrowLeft, Calculator, TrendingUp, BarChart3, Lightbulb, CheckCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";

interface CasePractique {
  id: number;
  title: string;
  context: string;
  data: { [key: string]: string | number };
  questions: string[];
  solution: {
    calculations: { step: string; formula: string; result: string }[];
    analysis: string;
    conclusion: string;
  };
}

const casPratiques: CasePractique[] = [
  {
    id: 1,
    title: "Interparfum - Cas réel de rachat d'actions (2019)",
    context: "En 2019, Interparfum a mis en place un programme de rachat d'actions pour optimiser sa structure financière et soutenir son cours de bourse. Cette opération illustre parfaitement l'utilisation stratégique des rachats d'actions dans le secteur des cosmétiques et parfums.",
    data: {
      "Nombre d'actions en circulation": "48 000 000",
      "Cours de l'action avant rachat": "25,50 €",
      "Capitalisation boursière": "1 224 M€",
      "Montant du programme de rachat": "50 M€",
      "Pourcentage du capital visé": "4,1%",
      "Durée du programme": "18 mois",
      "Cours moyen de rachat réalisé": "27,20 €",
      "Bénéfice net annuel": "45 M€"
    },
    questions: [
      "Calculez le nombre d'actions rachetées par Interparfum",
      "Quel est l'impact sur le BPA avant et après le rachat ?",
      "Analysez la prime de rachat payée par rapport au cours initial",
      "Évaluez l'efficacité de cette opération pour les actionnaires"
    ],
    solution: {
      calculations: [
        {
          step: "Nombre d'actions rachetées",
          formula: "Montant du programme / Cours moyen de rachat",
          result: "50 000 000 € / 27,20 € = 1 838 235 actions"
        },
        {
          step: "BPA avant rachat",
          formula: "Bénéfice net / Actions en circulation",
          result: "45 000 000 € / 48 000 000 = 0,9375 € par action"
        },
        {
          step: "BPA après rachat",
          formula: "Bénéfice net / (Actions initiales - Actions rachetées)",
          result: "45 000 000 € / (48 000 000 - 1 838 235) = 0,975 € par action"
        },
        {
          step: "Prime de rachat",
          formula: "(Cours moyen de rachat - Cours initial) / Cours initial",
          result: "(27,20 € - 25,50 €) / 25,50 € = 6,67%"
        }
      ],
      analysis: "Le programme d'Interparfum a permis d'améliorer le BPA de 4,0% (de 0,9375€ à 0,975€) tout en payant une prime raisonnable de 6,67%. Le rachat de 1,84 million d'actions représente effectivement 3,83% du capital, proche de l'objectif de 4,1%. Cette opération témoigne d'une gestion active du capital et d'une confiance dans les perspectives de l'entreprise.",
      conclusion: "Le rachat d'actions d'Interparfum illustre une utilisation efficace de la trésorerie pour créer de la valeur actionnariale. La prime modérée et l'amélioration du BPA démontrent l'efficacité de cette stratégie financière dans un contexte de marché favorable."
    }
  },
  {
    id: 2,
    title: "Société TechCorp - Analyse d'un programme de rachat",
    context: "TechCorp envisage un programme de rachat d'actions pour optimiser sa structure financière. L'entreprise dispose d'importantes liquidités et souhaite améliorer la rentabilité pour ses actionnaires.",
    data: {
      "Cours actuel": "45€",
      "Nombre d'actions": "1 000 000",
      "Bénéfice net": "5 000 000€",
      "Liquidités disponibles": "10 000 000€",
      "Objectif de rachat": "10% du capital",
      "Taux d'impôt": "25%"
    },
    questions: [
      "Calculez le BPA avant et après le rachat d'actions",
      "Déterminez l'impact sur la capitalisation boursière",
      "Analysez la rentabilité de l'opération pour les actionnaires restants"
    ],
    solution: {
      calculations: [
        {
          step: "BPA initial",
          formula: "BPA = Bénéfice net / Nombre d'actions",
          result: "5 000 000€ / 1 000 000 = 5€ par action"
        },
        {
          step: "Actions rachetées",
          formula: "10% × 1 000 000 actions",
          result: "100 000 actions"
        },
        {
          step: "Coût du rachat",
          formula: "100 000 × 45€",
          result: "4 500 000€"
        },
        {
          step: "BPA après rachat",
          formula: "5 000 000€ / (1 000 000 - 100 000)",
          result: "5 000 000€ / 900 000 = 5,56€ par action (+11,1%)"
        }
      ],
      analysis: "Le rachat d'actions améliore mécaniquement le BPA de 11,1% grâce à la réduction du nombre d'actions en circulation. La capitalisation boursière passe de 45M€ à 40,5M€ (900 000 × 45€), mais chaque action restante représente une part plus importante de l'entreprise.",
      conclusion: "L'opération est favorable aux actionnaires restants qui bénéficient d'une amélioration significative du BPA. TechCorp utilise efficacement ses liquidités excédentaires pour créer de la valeur."
    }
  },
   {
     id: 3,
     title: "Aures Technologies - OPRA et optimisation fiscale",
     context: "Aures Technologies, spécialiste des solutions de point de vente, a lancé une Offre Publique de Rachat d'Actions (OPRA) en 2020 pour optimiser sa structure de capital et offrir une sortie attractive à ses actionnaires.",
     data: {
       "Nombre d'actions en circulation": "2 100 000",
       "Cours de référence": "45,00 €",
       "Prix d'offre OPRA": "52,00 €",
       "Nombre d'actions visées": "420 000",
       "Pourcentage du capital visé": "20%",
       "Taux de souscription réalisé": "85%",
       "Capitalisation avant OPRA": "94,5 M€",
       "Montant total de l'opération": "18,564 M€"
     },
     questions: [
       "Calculez la prime d'offre proposée aux actionnaires",
       "Déterminez le nombre d'actions effectivement rachetées",
       "Analysez l'impact sur la capitalisation boursière",
       "Évaluez les avantages fiscaux pour les actionnaires participants"
     ],
     solution: {
       calculations: [
         {
           step: "Prime d'offre OPRA",
           formula: "(Prix d'offre - Cours de référence) / Cours de référence",
           result: "(52,00 € - 45,00 €) / 45,00 € = 15,56%"
         },
         {
           step: "Actions effectivement rachetées",
           formula: "Actions visées × Taux de souscription",
           result: "420 000 × 85% = 357 000 actions"
         },
         {
           step: "Montant effectivement décaissé",
           formula: "Actions rachetées × Prix d'offre",
           result: "357 000 × 52,00 € = 18,564 M€"
         },
         {
           step: "Nouvelle capitalisation",
           formula: "(Actions restantes × Cours de référence)",
           result: "(2 100 000 - 357 000) × 45,00 € = 78,435 M€"
         }
       ],
       analysis: "L'OPRA d'Aures Technologies offre une prime attractive de 15,56%, permettant aux actionnaires de monétiser une partie de leur participation à un prix supérieur au marché. Le taux de souscription de 85% témoigne de l'attractivité de l'offre. Cette opération permet également une optimisation fiscale pour les actionnaires, l'OPRA étant soumise au régime des plus-values mobilières.",
       conclusion: "L'OPRA d'Aures Technologies illustre parfaitement l'utilisation de cette technique pour offrir une liquidité premium aux actionnaires tout en optimisant la structure de capital. La prime significative et le fort taux de participation démontrent le succès de cette stratégie."
     }
   },
   {
     id: 4,
     title: "Groupe IndustriePlus - Rachat financé par endettement",
    context: "IndustriePlus souhaite lancer une OPRA financée par endettement pour optimiser sa structure de capital et envoyer un signal positif au marché.",
    data: {
      "Cours actuel": "80€",
      "Nombre d'actions": "500 000",
      "Prix de rachat proposé": "88€",
      "Objectif de rachat": "15% du capital",
      "Taux d'intérêt de la dette": "4%",
      "Taux d'impôt": "25%",
      "EBIT annuel": "3 200 000€"
    },
    questions: [
      "Calculez la prime de rachat offerte aux actionnaires",
      "Déterminez le coût total de l'opération",
      "Analysez l'impact de l'endettement sur la rentabilité",
      "Évaluez l'économie d'impôt générée"
    ],
    solution: {
      calculations: [
        {
          step: "Prime de rachat",
          formula: "(Prix de rachat - Cours) / Cours × 100",
          result: "(88€ - 80€) / 80€ × 100 = 10%"
        },
        {
          step: "Actions à racheter",
          formula: "15% × 500 000 actions",
          result: "75 000 actions"
        },
        {
          step: "Coût total",
          formula: "75 000 × 88€",
          result: "6 600 000€"
        },
        {
          step: "Intérêts annuels",
          formula: "6 600 000€ × 4%",
          result: "264 000€"
        },
        {
          step: "Économie d'impôt",
          formula: "264 000€ × 25%",
          result: "66 000€ par an"
        }
      ],
      analysis: "La prime de 10% est attractive pour les actionnaires participants. L'endettement de 6,6M€ génère des charges d'intérêts de 264k€ mais permet une économie d'impôt de 66k€, soit un coût net de 198k€. Le nombre d'actions passe de 500 000 à 425 000.",
      conclusion: "L'opération optimise la structure financière en introduisant l'effet de levier fiscal. Les actionnaires restants bénéficient d'une concentration de la propriété et d'une amélioration potentielle de la rentabilité par action."
    }
  }
];

export default function CasPratiques() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const handleCaseSelect = (caseId: number) => {
    setSelectedCase(caseId);
    setShowSolution(false);
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  if (selectedCase === null) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <BackToPlanButton className="mb-8" />
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {"Cas Pratiques"}
              </h1>
              <p className="text-lg text-gray-600">
                {"Exercices concrets d'application des concepts de rachats d'actions"}
              </p>
            </div>
            
            <div className="grid gap-6">
              {casPratiques.map((cas) => (
                <div 
                  key={cas.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-200 cursor-pointer"
                  onClick={() => handleCaseSelect(cas.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {cas.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {cas.context}
                      </p>
                      <div className="flex items-center gap-2 text-purple-600 font-medium">
                        <span>{"Résoudre ce cas"}</span>
                        <ArrowLeft className="w-4 h-4 rotate-180" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {"Méthodologie recommandée"}
                  </h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>{"1. Analysez attentivement les données fournies"}</li>
                    <li>{"2. Identifiez les formules et ratios pertinents"}</li>
                    <li>{"3. Effectuez les calculs étape par étape"}</li>
                    <li>{"4. Interprétez les résultats dans le contexte"}</li>
                    <li>{"5. Formulez une conclusion argumentée"}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <Link 
              href="/quiz"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              {"Quiz"}
            </Link>
            
            <div className="text-sm text-gray-500">
              {"Cas pratiques"}
            </div>
            
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200"
            >
              {"Retour à l'accueil"}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentCase = casPratiques.find(c => c.id === selectedCase)!;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton className="mb-8" />
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => setSelectedCase(null)}
              className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {currentCase.title}
            </h1>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {"Contexte"}
            </h2>
            <p className="text-gray-700 mb-6">
              {currentCase.context}
            </p>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {"Données"}
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(currentCase.data).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                    <span className="font-medium text-gray-700">{key} :</span>
                    <span className="text-gray-900 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {"Questions à résoudre"}
            </h3>
            <ol className="list-decimal list-inside space-y-2 mb-8">
              {currentCase.questions.map((question, index) => (
                <li key={index} className="text-gray-700">
                  {question}
                </li>
              ))}
            </ol>
            
            <div className="flex justify-center mb-8">
              <button
                onClick={toggleSolution}
                className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                  showSolution 
                    ? "bg-gray-100 text-gray-700 hover:bg-gray-200" 
                    : "bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700"
                }`}
              >
                {showSolution ? "Masquer la solution" : "Afficher la solution"}
              </button>
            </div>
            
            {showSolution && (
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calculator className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-900">
                      {"Calculs détaillés"}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {currentCase.solution.calculations.map((calc, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-green-100">
                        <h4 className="font-semibold text-green-900 mb-2">
                          {`${index + 1}. ${calc.step}`}
                        </h4>
                        <p className="text-green-800 mb-2">
                          <span className="font-medium">{"Formule : "}</span>
                          {calc.formula}
                        </p>
                        <p className="text-green-800">
                          <span className="font-medium">{"Résultat : "}</span>
                          {calc.result}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-900">
                      {"Analyse"}
                    </h3>
                  </div>
                  <p className="text-blue-800">
                    {currentCase.solution.analysis}
                  </p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                    <h3 className="text-lg font-semibold text-purple-900">
                      {"Conclusion"}
                    </h3>
                  </div>
                  <p className="text-purple-800">
                    {currentCase.solution.conclusion}
                  </p>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                        {"Points clés à retenir"}
                      </h3>
                      <ul className="text-yellow-800 space-y-1">
                        <li>{"• L'amélioration du BPA est mécanique mais significative"}</li>
                        <li>{"• La prime de rachat doit être attractive mais raisonnable"}</li>
                        <li>{"• L'endettement peut créer de la valeur via l'effet fiscal"}</li>
                        <li>{"• L'analyse doit considérer l'impact sur tous les actionnaires"}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <button
            onClick={() => setSelectedCase(null)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            {"Retour aux cas"}
          </button>
          
          <div className="text-sm text-gray-500">
            {`Cas ${selectedCase} sur ${casPratiques.length}`}
          </div>
          
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200"
          >
            {"Retour à l'accueil"}
          </Link>
        </div>
      </div>
    </div>
  );
}