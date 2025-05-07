import React from 'react';
import { MoreHorizontal, ArrowUp, ArrowDown, TrendingUp } from 'lucide-react';
import { formatCurrency, formatPercent } from '../../utils/formatters';

const TeamPerformance: React.FC = () => {
  const teamMembers = [
    { 
      id: 1, 
      name: 'Mikasa Ackerman', 
      avatar: 'https://i.pravatar.cc/32?img=12',
      sales: 72, 
      value: 248000, 
      change: 12.5 
    },
    { 
      id: 2, 
      name: 'Eren Yeager', 
      avatar: 'https://i.pravatar.cc/32?img=11',
      sales: 64, 
      value: 210000, 
      change: 8.2 
    },
    { 
      id: 3, 
      name: 'Armin Arlert', 
      avatar: 'https://i.pravatar.cc/32?img=10',
      sales: 56, 
      value: 186000, 
      change: 5.7 
    },
    { 
      id: 4, 
      name: 'Levi Ackerman', 
      avatar: 'https://i.pravatar.cc/32?img=9',
      sales: 48, 
      value: 152000, 
      change: -2.3 
    },
    { 
      id: 5, 
      name: 'Historia Reiss', 
      avatar: 'https://i.pravatar.cc/32?img=8',
      sales: 42, 
      value: 136000, 
      change: 3.8 
    },
  ];
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">Team Performance</h2>
        <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <div 
            key={member.id} 
            className={`relative p-3 rounded-lg transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-700/50 ${
              index === 0 ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''
            }`}
          >
            {index === 0 && (
              <div className="absolute top-1 right-1">
                <TrendingUp className="h-4 w-4 text-blue-500" />
              </div>
            )}
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="w-10 h-10 rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full text-white text-xs flex items-center justify-center font-medium">
                  {index + 1}
                </div>
              </div>
              
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-800 dark:text-white">{member.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-slate-500 dark:text-slate-400">{member.sales} sales</span>
                  <div className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{formatCurrency(member.value)}</span>
                </div>
              </div>
              
              <div className={`flex items-center gap-1 text-xs font-medium ${
                member.change >= 0 ? 'text-green-500' : 'text-red-500'
              }`}>
                {member.change >= 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                <span>{formatPercent(Math.abs(member.change))}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 text-center">
        <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
          View all team members
        </button>
      </div>
    </div>
  );
};

export default TeamPerformance;