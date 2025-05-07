import React from 'react';
import { cn } from '../../utils/cn';

type MetricCardProps = {
  title: string;
  value: string;
  secondary: React.ReactNode;
  icon: React.ReactNode;
  accentColor: 'blue' | 'pink' | 'amber' | 'green' | 'slate' | 'black';
  featured?: boolean;
};

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  secondary, 
  icon,
  accentColor,
  featured = false
}) => {
  const cardClasses = cn(
    "relative rounded-xl p-5 transition-all duration-200 hover:shadow-md",
    featured 
      ? "bg-black text-white dark:bg-slate-800" 
      : "bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700"
  );

  return (
    <div className={cardClasses}>
      <div className="flex items-center justify-between mb-2">
        <h3 className={cn(
          "text-sm font-medium",
          featured ? "text-slate-300" : "text-slate-500 dark:text-slate-400"
        )}>
          {title}
        </h3>
        {featured && (
          <Star className="h-5 w-5 text-amber-400" />
        )}
      </div>
      
      <div className="flex items-center gap-2 mb-2">
        <div className="text-2xl font-bold">{value}</div>
        <div className="mt-1">{icon}</div>
      </div>
      
      <div className={cn(
        "text-sm",
        featured ? "text-slate-300" : "text-slate-600 dark:text-slate-400"
      )}>
        {secondary}
      </div>
    </div>
  );
};

const Star = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

export default MetricCard;