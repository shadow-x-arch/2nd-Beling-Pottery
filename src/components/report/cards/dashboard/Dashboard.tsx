import React, { useState } from 'react';
import { Calendar, Filter } from 'lucide-react';
import MetricCardsRow from './MetricCardsRow';
import SalesChart from './SalesChart';
import RecentDeals from './RecentDeals';
import SalesFunnel from './SalesFunnel';
import TeamPerformance from './TeamPerformance';
import { TimeRange } from '../../types';

const Dashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('month');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Sales Dashboard</h1>
        
        <div className="flex items-center space-x-2">
          <div className="relative inline-block">
            <select 
              className="appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as TimeRange)}
            >
              <option value="day">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
            <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          </div>
          
          <button className="flex items-center space-x-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <MetricCardsRow timeRange={timeRange} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <SalesChart timeRange={timeRange} />
        </div>
        <div>
          <SalesFunnel />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentDeals />
        </div>
        <div>
          <TeamPerformance />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;