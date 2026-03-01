import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useCountUp } from '@/hooks/useCountUp';
import { Users, TrendingDown, FlaskConical, ThumbsUp } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

function StatCard({
  icon,
  target,
  suffix,
  prefix,
  label,
  color,
  isVisible,
}: {
  icon: React.ReactNode;
  target: number;
  suffix: string;
  prefix?: string;
  label: string;
  color: string;
  isVisible: boolean;
}) {
  const count = useCountUp(target, 2200, isVisible);
  return (
    <div className="text-center group">
      <div
        className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <div className="text-4xl font-extrabold text-gray-900">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="text-gray-500 mt-1 text-sm font-medium">{label}</p>
    </div>
  );
}

export function StatsSection() {
  const { t } = useTranslation();
  const { ref, isVisible } = useIntersectionObserver(0.3);

  const stats = [
    {
      icon: <Users className="w-7 h-7" />,
      target: 3200,
      suffix: '+',
      label: t.stats.patientsLabel,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <TrendingDown className="w-7 h-7" />,
      target: 20,
      suffix: '%',
      prefix: t.stats.prefix,
      label: t.stats.weightLabel,
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: <FlaskConical className="w-7 h-7" />,
      target: 72,
      suffix: '',
      label: t.stats.weeksLabel,
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <ThumbsUp className="w-7 h-7" />,
      target: 98,
      suffix: '%',
      label: t.stats.satisfactionLabel,
      color: 'from-orange-500 to-amber-600',
    },
  ];

  return (
    <section id="stats" className="py-20 bg-white border-b border-gray-100">
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
