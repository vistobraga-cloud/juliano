import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useTranslation } from '@/lib/i18n';

export function ComparisonSection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useIntersectionObserver();

  const rowLabels = [
    t.comparison.mechanism,
    t.comparison.weightLoss,
    t.comparison.frequency,
    t.comparison.approval,
    t.comparison.dualAction,
  ];

  return (
    <section id="comparativo" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge className="bg-orange-100 text-orange-700 border-0 mb-4">{t.comparison.badge}</Badge>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-5">{t.comparison.title}</h2>
          <p className="text-gray-600">{t.comparison.subtitle}</p>
        </div>

        <div
          ref={ref}
          className={`overflow-x-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr>
                {t.comparison.headers.map((h, i) => (
                  <th
                    key={i}
                    className={`py-4 px-4 text-left font-bold ${
                      i === 1
                        ? 'bg-blue-600 text-white rounded-t-2xl text-center'
                        : i === 0
                        ? 'text-gray-500'
                        : 'text-gray-700 text-center'
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.comparison.rows.map((row, ri) => (
                <tr key={ri} className="border-b border-gray-100">
                  <td className="py-4 px-4 font-semibold text-gray-700">{rowLabels[ri]}</td>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`py-4 px-4 text-center ${
                        ci === 0 ? 'bg-blue-50 font-semibold text-blue-900' : 'text-gray-600'
                      }`}
                    >
                      {cell.startsWith('\u2705') ? (
                        <span className="inline-flex items-center gap-1 text-green-600 font-semibold">
                          <CheckCircle2 className="w-5 h-5" /> {cell.replace('\u2705 ', '')}
                        </span>
                      ) : cell.startsWith('\u274C') ? (
                        <span className="inline-flex items-center gap-1 text-red-400">
                          <XCircle className="w-5 h-5" /> {cell.replace('\u274C ', '')}
                        </span>
                      ) : (
                        cell
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-400 text-xs text-center mt-6">{t.comparison.footnote}</p>
      </div>
    </section>
  );
}
