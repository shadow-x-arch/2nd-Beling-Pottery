import React from 'react';
import { ArrowUpRight, ArrowDownRight, Star, Users, DollarSign, Percent, ShoppingBag } from 'lucide-react';
import MetricCard from './MetricCard';
import { TimeRange } from '../../types';
import { formatCurrency, formatNumber, formatPercent } from '../../utils/formatters';
import { useMetricData } from '../../hooks/useMetricData';

type MetricCardsRowProps = {
  timeRange: TimeRange;
};

const MetricCardsRow: React.FC<MetricCardsRowProps> = ({ timeRange }) => {
  const { metrics } = useMetricData(timeRange);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      <MetricCard
        title="Top sales"
        value={formatNumber(metrics.topSales.value)}
        icon={<ShoppingBag className="text-blue-500" />}
        secondary={
          <div className="flex items-center">
            <img 
              src="https://i.pravatar.cc/32?img=12" 
              alt="Avatar" 
              className="w-6 h-6 rounded-full mr-2" 
            />
            <span>{metrics.topSales.name}</span>
          </div>
        }
        accentColor="blue"
      />
      
      <MetricCard
        title="Best deal"
        value={formatCurrency(metrics.bestDeal.value)}
        icon={<Star className="text-amber-500" />}
        secondary={
          <div className="flex items-center justify-between w-full">
            <span>{metrics.bestDeal.company}</span>
            <div className="rounded-full bg-slate-200 dark:bg-slate-700 w-6 h-6 flex items-center justify-center">
              <ArrowUpRight className="h-3 w-3" />
            </div>
          </div>
        }
        accentColor="black"
        featured={true}
      />
      
      <MetricCard
        title="Deals"
        value={formatNumber(metrics.deals.value)}
        icon={<ShoppingBag className="text-slate-500" />}
        secondary={
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-slate-400" />
            <span>{metrics.deals.count}</span>
          </div>
        }
        accentColor="slate"
      />
      
      <MetricCard
        title="Value"
        value={metrics.value.formatted}
        icon={<DollarSign className="text-pink-500" />}
        secondary={
          <div className="flex items-center gap-1">
            <ArrowUpRight className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">{formatPercent(metrics.value.percentChange)}</span>
          </div>
        }
        accentColor="pink"
      />
      
      <MetricCard
        title="Win rate"
        value={formatPercent(metrics.winRate.value)}
        icon={<Percent className="text-slate-500" />}
        secondary={
          <div className="flex items-center gap-1">
            <ArrowUpRight className="h-4 w-4 text-green-500" />
            <span className="text-green-500 font-medium">{formatPercent(metrics.winRate.change)}</span>
          </div>
        }
        accentColor="slate"
      />
    </div>
  );
};

export default MetricCardsRow;