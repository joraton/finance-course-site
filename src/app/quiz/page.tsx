"use client";

import BackToPlanButton from "@/components/content/BackToPlanButton";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react";
import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle est la limite réglementaire pour les rachats d'actions 'au fil de l'eau' en France ?",
    options: [
      "5% du capital",
      "10% du capital",
      "15% du capital",
      "20% du capital"
    ],
    correct: 1,
    explanation: "En France, l'AMF limite les programmes de rachat 'au fil de l'eau' à 10% du capital de l'entreprise."
  },
  {
    id: 2,
    question: "Quel est l'effet mécanique principal d'un rachat d'actions sur le BPA ?",
    options: [
      "Diminution du BPA",
      "Aucun effet",
      "Augmentation du BPA",
      "Effet variable selon le contexte"
    ],
    correct: 2,
    explanation: "La réduction du nombre d'actions en circulation améliore mécaniquement le BPA, même si le bénéfice total reste constant."
  },
  {
    id: 3,
    question: "Selon la théorie du signal, que communique un rachat d'actions ?",
    options: [
      "L'action est surévaluée",
      "L'entreprise manque de liquidités",
      "L'action est sous-évaluée",
      "L'entreprise va distribuer des dividendes"
    ],
    correct: 2,
    explanation: "Un rachat d'actions signale que les dirigeants estiment que l'action est sous-évaluée par le marché."
  },
  {
    id: 4,
    question: "Quel avantage fiscal peut offrir un rachat financé par endettement ?",
    options: [
      "Réduction de l'impôt sur les sociétés",
      "Déductibilité des intérêts",
      "Exonération de plus-values",
      "Crédit d'impôt recherche"
    ],
    correct: 1,
    explanation: "Les intérêts de la dette sont déductibles fiscalement, créant un avantage fiscal selon la théorie de Modigliani-Miller avec impôts."
  },
  {
    id: 5,
    question: "Quelle est la principale différence entre dividendes et rachats d'actions pour l'actionnaire ?",
    options: [
      "Le montant reçu",
      "Le choix de participation",
      "La fiscalité",
      "L'impact sur le cours"
    ],
    correct: 1,
    explanation: "Contrairement aux dividendes qui s'imposent à tous, les rachats d'actions permettent aux actionnaires de choisir s'ils souhaitent participer ou non."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(selectedAnswers[currentQuestion - 1] !== -1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(-1));
    setShowResults(false);
    setShowExplanation(false);
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  const scorePercentage = Math.round((score / questions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <BackToPlanButton className="mb-8" />
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full">
                <Trophy className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {"Quiz terminé !"}
            </h1>
            
            <div className="text-6xl font-bold mb-4">
              <span className={scorePercentage >= 80 ? "text-green-500" : scorePercentage >= 60 ? "text-yellow-500" : "text-red-500"}>
                {scorePercentage}{""}
              </span>
              <span className="text-gray-400 text-4xl">{""}</span>
            </div>
            
            <p className="text-xl text-gray-600 mb-6">
              {`Vous avez obtenu ${score} bonnes réponses sur ${questions.length} questions`}
            </p>
            
            <div className="mb-8">
              {scorePercentage >= 80 && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">
                    {"🎉 Excellent ! Vous maîtrisez parfaitement les rachats d'actions."}
                  </p>
                </div>
              )}
              {scorePercentage >= 60 && scorePercentage < 80 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 font-medium">
                    {"👍 Bien joué ! Quelques révisions vous permettront d'atteindre l'excellence."}
                  </p>
                </div>
              )}
              {scorePercentage < 60 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-medium">
                    {"📚 Il serait bon de revoir les sections du cours avant de continuer."}
                  </p>
                </div>
              )}
            </div>
            
            <div className="flex justify-center gap-4">
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-200"
              >
                <RotateCcw className="w-4 h-4" />
                {"Recommencer"}
              </button>
              
              <Link
                href="/cas-pratiques"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200"
              >
                {"Cas pratiques"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== -1;
  const isCorrect = selectedAnswers[currentQuestion] === question.correct;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton className="mb-8" />
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <div className="text-sm text-gray-500">
              {`Question ${currentQuestion + 1} sur ${questions.length}`}
            </div>
            <div className="text-sm text-gray-500">
              {`Score: ${score}/${questions.length}`}
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div 
              className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {question.question}
          </h2>
          
          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => {
              let buttonClass = "w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ";
              
              if (!isAnswered) {
                buttonClass += "border-gray-200 hover:border-orange-300 hover:bg-orange-50";
              } else {
                if (index === question.correct) {
                  buttonClass += "border-green-500 bg-green-50 text-green-800";
                } else if (index === selectedAnswers[currentQuestion]) {
                  buttonClass += "border-red-500 bg-red-50 text-red-800";
                } else {
                  buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                }
              }
              
              return (
                <button
                  key={index}
                  onClick={() => !isAnswered && handleAnswerSelect(index)}
                  disabled={isAnswered}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {isAnswered && (
                      <div>
                        {index === question.correct && (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        )}
                        {index === selectedAnswers[currentQuestion] && index !== question.correct && (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
          
          {showExplanation && (
            <div className={`p-6 rounded-lg mb-8 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                )}
                <div>
                  <h3 className={`font-semibold mb-2 ${isCorrect ? 'text-green-900' : 'text-red-900'}`}>
                    {isCorrect ? "Correct !" : "Incorrect"}
                  </h3>
                  <p className={isCorrect ? 'text-green-800' : 'text-red-800'}>
                    {question.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-4 h-4" />
              {"Précédent"}
            </button>
            
            <button
              onClick={nextQuestion}
              disabled={!isAnswered}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? "Terminer" : "Suivant"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}