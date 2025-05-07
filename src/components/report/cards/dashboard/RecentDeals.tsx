import React from 'react';
import { MoreHorizontal, ArrowUpRight, Clock, CheckCircle, XCircle } from 'lucide-react';


const RecentDeals: React.FC = () => {
  const deals = [
    { 
      id: 1, 
      company: 'Rolf Inc.', 
      value: 42300, 
      status: 'won', 
      date: new Date('2025-05-10'),
      contact: 'Emma Thompson',
      avatar: 'https://i.pravatar.cc/32?img=1',
    },
    { 
      id: 2, 
      company: 'TechGrowth', 
      value: 28500, 
      status: 'pending', 
      date: new Date('2025-05-09'),
      contact: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/32?img=2',
    },
    { 
      id: 3, 
      company: 'EcoSolutions', 
      value: 18750, 
      status: 'lost', 
      date: new Date('2025-05-08'),
      contact: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/32?img=3',
    },
    { 
      id: 4, 
      company: 'Global Media', 
      value: 35000, 
      status: 'won', 
      date: new Date('2025-05-07'),
      contact: 'David Rodriguez',
      avatar: 'https://i.pravatar.cc/32?img=4',
    },
    { 
      id: 5, 
      company: 'Innovate AI', 
      value: 22600, 
      status: 'pending', 
      date: new Date('2025-05-06'),
      contact: 'Jessica Kim',
      avatar: 'https://i.pravatar.cc/32?img=5',
    },
  ];
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'won':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'lost':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-amber-500" />;
      default:
        return null;
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case 'won':
        return 'Won';
      case 'lost':
        return 'Lost';
      case 'pending':
        return 'Pending';
      default:
        return '';
    }
  };
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">Recent Deals</h2>
        <button className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="pb-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400">Company</th>
              <th className="pb-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400">Contact</th>
              <th className="pb-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400">Value</th>
              <th className="pb-3 text-center text-xs font-medium text-slate-500 dark:text-slate-400">Status</th>
              <th className="pb-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400">Date</th>
              <th className="pb-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400"></th>
            </tr>
          </thead>
          <tbody>
            {deals.map((deal) => (
              <tr key={deal.id} className="group border-b border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                <td className="py-4 text-sm font-medium text-slate-800 dark:text-white">{deal.company}</td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <img 
                      src={deal.avatar} 
                      alt={deal.contact} 
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm text-slate-600 dark:text-slate-300">{deal.contact}</span>
                  </div>
                </td>
                <td className="py-4 text-right text-sm font-medium text-slate-800 dark:text-white"></td>
                <td className="py-4">
                  <div className="flex items-center justify-center gap-1">
                    {getStatusIcon(deal.status)}
                    <span className={`text-xs font-medium ${
                      deal.status === 'won' 
                        ? 'text-green-500' 
                        : deal.status === 'lost' 
                          ? 'text-red-500' 
                          : 'text-amber-500'
                    }`}>
                      {getStatusText(deal.status)}
                    </span>
                  </div>
                </td>
                <td className="py-4 text-right text-sm text-slate-600 dark:text-slate-400"></td>
                <td className="py-4 text-right">
                  <button className="invisible group-hover:visible text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-center">
        <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
          View all deals
        </button>
      </div>
    </div>
  );
};

export default RecentDeals;