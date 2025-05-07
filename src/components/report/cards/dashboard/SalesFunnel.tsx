import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { formatCurrency, formatNumber } from '../../utils/formatters';

const SalesFunnel: React.FC = () => {
  const stages = [
    { id: 1, name: 'Lead', count: 582, value: 1872000, color: 'bg-slate-200 dark:bg-slate-700' },
    { id: 2, name: 'Qualified', count: 345, value: 1250000, color: 'bg-blue-200 dark:bg-blue-800' },
    { id: 3, name: 'Proposal', count: 182, value: 874000, color: 'bg-blue-400 dark:bg-blue-600' },
    { id: 4, name: 'Negotiation', count: 89, value: 652000, color: 'bg-blue-500 dark:bg-blue-500' },
    { id: 5, name: 'Closed', count: 72, value: 528000, color: 'bg-blue-600 dark:bg-blue-400' },
  ];
  
  // Calculate max count for relative sizing
  const maxCount = Math.max(...stages.map(stage => stage.count));
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">Sales Funnel</h2>
        <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-5">
        {stages.map((stage) => (
          <div key={stage.id} className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{stage.name}</span>
              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-500 dark:text-slate-400">{formatNumber(stage.count)}</span>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{formatCurrency(stage.value)}</span>
              </div>
            </div>
            
            <div className="relative h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
              <div 
                className={`absolute left-0 top-0 bottom-0 ${stage.color} rounded-full transition-all duration-500 ease-out`}
                style={{ width: `${(stage.count / maxCount) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-700">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Conversion Rate</p>
            <p className="text-xl font-bold text-slate-800 dark:text-white">12.3%</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Avg. Deal Size</p>
            <p className="text-xl font-bold text-slate-800 dark:text-white">{formatCurrency(7333)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesFunnel;