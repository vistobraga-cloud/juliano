import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, CheckCircle2, MessageCircle, Sparkles, Syringe } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';
import { openWhatsApp } from '@/lib/whatsapp';

interface QuizSectionProps {
  onOpenDialog: () => void;
}

function getRecommendedPlanIndex(goalAnswer: number): number {
  // Step 0 options: 0=lose small, 1=lose medium, 2=lose large, 3=maintain, 4=undecided
  switch (goalAnswer) {
    case 0: return 0; // Dose Inicial (2.5 mg)
    case 1: return 1; // Dose Manutenção (5-10 mg)
    case 2: return 2; // Dose Máxima (12.5-15 mg)
    case 3: return 0; // Manter → Dose Inicial
    case 4: return 0; // Indeciso → Dose Inicial
    default: return 0;
  }
}

export function QuizSection({ onOpenDialog }: QuizSectionProps) {
  const { t, r } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);

  const steps = t.quiz.steps;
  const totalSteps = steps.length;
  const progress = showResult ? 100 : ((currentStep + 1) / (totalSteps + 1)) * 100;

  const selectOption = (optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: optionIndex }));
  };

  const goNext = () => {
    if (answers[currentStep] === undefined) return;
    if (currentStep < totalSteps - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      setShowResult(true);
    }
  };

  const goBack = () => {
    if (showResult) {
      setShowResult(false);
    } else if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const goalText = steps[0]?.options[answers[0] ?? 0] ?? '';
  const planIndex = getRecommendedPlanIndex(answers[0] ?? 0);
  const plan = r.plans[planIndex];

  const handleWhatsApp = () => {
    const summary = steps
      .map((step, i) => `${step.question}: ${step.options[answers[i] ?? 0]}`)
      .join('\n');
    openWhatsApp(
      `${t.quiz.resultWhatsApp}\n\n${summary}\n\n${t.quiz.resultDose}: ${plan.name} (${plan.price})`
    );
  };

  return (
    <section id="quiz" className="py-24 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="bg-purple-100 text-purple-700 border-0 mb-4">{t.quiz.badge}</Badge>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{t.quiz.title}</h2>
          <p className="text-gray-600">{t.quiz.subtitle}</p>
        </div>

        <Card className="shadow-2xl border-0 overflow-hidden">
          <div className="h-2 bg-gray-100">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <CardContent className="p-8 sm:p-10">
            {!showResult ? (
              <>
                <p className="text-xs text-gray-400 mb-6 text-center">
                  {t.quiz.stepOf.replace('{current}', String(currentStep + 1)).replace('{total}', String(totalSteps))}
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
                  {steps[currentStep].question}
                </h3>

                <div className="space-y-3 mb-8">
                  {steps[currentStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectOption(idx)}
                      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 ${
                        answers[currentStep] === idx
                          ? 'border-blue-500 bg-blue-50 text-blue-700 font-semibold shadow-md'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            answers[currentStep] === idx
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300'
                          }`}
                        >
                          {answers[currentStep] === idx && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={goBack}
                    disabled={currentStep === 0}
                    className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      currentStep === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {t.quiz.back}
                  </button>

                  <Button
                    onClick={goNext}
                    disabled={answers[currentStep] === undefined}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-8 py-5 disabled:opacity-40"
                  >
                    {t.quiz.next}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-2">{t.quiz.resultTitle}</h3>
                  <p className="text-gray-600 text-sm">{t.quiz.resultSubtitle}</p>
                </div>

                {/* Resumo das respostas */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">
                      <strong>{t.quiz.resultGoal}:</strong> {goalText}
                    </span>
                  </div>
                  {answers[2] !== undefined && (
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">
                        <strong>{steps[2]?.question.replace('?', '')}:</strong> {steps[2]?.options[answers[2]]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card da dosagem recomendada */}
                <div className="border-2 border-blue-500 rounded-2xl overflow-hidden shadow-lg">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 flex items-center justify-between">
                    <span className="text-white font-bold text-sm">{t.quiz.resultDose}</span>
                    <Syringe className="w-4 h-4 text-white/70" />
                  </div>
                  <div className="p-5 bg-white">
                    <div className="flex items-baseline justify-between mb-1">
                      <h4 className="text-lg font-bold text-gray-900">{plan.name}</h4>
                      <span className="text-2xl font-extrabold text-blue-600">{plan.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{plan.desc}</p>
                    <ul className="space-y-2 mb-5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-2">
                      <Button
                        onClick={onOpenDialog}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5"
                      >
                        {plan.btn}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button
                        variant="outline"
                        onClick={handleWhatsApp}
                        className="w-full font-semibold py-4 text-sm"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {t.quiz.resultWhatsAppBtn}
                      </Button>
                    </div>
                  </div>
                </div>

                <button onClick={restart} className="block mx-auto text-sm text-gray-400 hover:text-gray-600 transition-colors">
                  {t.quiz.back}
                </button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
