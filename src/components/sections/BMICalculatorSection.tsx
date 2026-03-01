import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calculator, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

interface BMICalculatorSectionProps {
  onOpenDialog: () => void;
}

export function BMICalculatorSection({ onOpenDialog }: BMICalculatorSectionProps) {
  const { t, region } = useTranslation();
  const isUS = region === 'us';

  const [heightA, setHeightA] = useState('');
  const [heightB, setHeightB] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculate = () => {
    if (isUS) {
      const ft = parseFloat(heightA) || 0;
      const inches = parseFloat(heightB) || 0;
      const totalInches = ft * 12 + inches;
      const lbs = parseFloat(weight) || 0;
      if (totalInches > 0 && lbs > 0) {
        setBmi(Math.round(((lbs / (totalInches * totalInches)) * 703) * 10) / 10);
      }
    } else {
      const cm = parseFloat(heightA) || 0;
      const kg = parseFloat(weight) || 0;
      const m = cm / 100;
      if (m > 0 && kg > 0) {
        setBmi(Math.round((kg / (m * m)) * 10) / 10);
      }
    }
  };

  const getCategory = (val: number) => {
    if (val < 18.5) return { label: t.bmi.underweight, color: 'text-blue-600 bg-blue-50 border-blue-200' };
    if (val < 25) return { label: t.bmi.normal, color: 'text-green-600 bg-green-50 border-green-200' };
    if (val < 30) return { label: t.bmi.overweight, color: 'text-yellow-600 bg-yellow-50 border-yellow-200' };
    return { label: t.bmi.obese, color: 'text-red-600 bg-red-50 border-red-200' };
  };

  return (
    <section id="bmi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-orange-100 text-orange-700 border-0 mb-4">{t.bmi.badge}</Badge>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{t.bmi.title}</h2>
            <p className="text-gray-600 mb-8">{t.bmi.subtitle}</p>

            <Card className="shadow-xl border-0">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-5">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">{t.bmi.heightLabel}</label>
                    {isUS ? (
                      <div className="flex gap-3">
                        <div className="relative flex-1">
                          <input
                            type="number"
                            value={heightA}
                            onChange={(e) => setHeightA(e.target.value)}
                            placeholder="5"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">ft</span>
                        </div>
                        <div className="relative flex-1">
                          <input
                            type="number"
                            value={heightB}
                            onChange={(e) => setHeightB(e.target.value)}
                            placeholder="7"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                          />
                          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">in</span>
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <input
                          type="number"
                          value={heightA}
                          onChange={(e) => setHeightA(e.target.value)}
                          placeholder="170"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">cm</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-2 block">{t.bmi.weightLabel}</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder={isUS ? '180' : '80'}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-lg"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                        {isUS ? 'lbs' : 'kg'}
                      </span>
                    </div>
                  </div>

                  <Button
                    onClick={calculate}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 text-base"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    {t.bmi.calculate}
                  </Button>
                </div>

                {bmi !== null && (
                  <div className="mt-6 space-y-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-500 mb-1">{t.bmi.yourBmi}</p>
                      <p className="text-5xl font-extrabold text-gray-900">{bmi}</p>
                      <div className={`inline-block mt-2 px-4 py-1.5 rounded-full border text-sm font-semibold ${getCategory(bmi).color}`}>
                        {getCategory(bmi).label}
                      </div>
                    </div>

                    {bmi >= 25 && (
                      <div className="bg-blue-50 rounded-xl p-4 text-center">
                        <p className="text-sm text-gray-700 mb-3">{t.bmi.recommendation}</p>
                        <Button
                          onClick={onOpenDialog}
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                        >
                          {t.bmi.cta}
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center">
            <div className="w-full max-w-xs space-y-4">
              {[
                { range: '< 18.5', label: t.bmi.underweight, color: 'bg-blue-100 text-blue-700 border-blue-200', bar: 'w-1/4 bg-blue-400' },
                { range: '18.5 – 24.9', label: t.bmi.normal, color: 'bg-green-100 text-green-700 border-green-200', bar: 'w-2/4 bg-green-400' },
                { range: '25 – 29.9', label: t.bmi.overweight, color: 'bg-yellow-100 text-yellow-700 border-yellow-200', bar: 'w-3/4 bg-yellow-400' },
                { range: '≥ 30', label: t.bmi.obese, color: 'bg-red-100 text-red-700 border-red-200', bar: 'w-full bg-red-400' },
              ].map((cat) => (
                <div key={cat.range} className={`rounded-xl p-4 border ${cat.color}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm">{cat.label}</span>
                    <span className="text-xs font-mono opacity-70">{cat.range}</span>
                  </div>
                  <div className="h-2 bg-white/50 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${cat.bar}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
