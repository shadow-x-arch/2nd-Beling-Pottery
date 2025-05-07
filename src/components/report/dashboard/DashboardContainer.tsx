import React, { useState } from 'react';
import Header from './Header';
import TimeframeSelector from './TimeframeSelector';
import RevenueCard from './RevenueCard';
import MetricsGrid from './MetricsGrid';
import { 
  metricCards, 
  revenueData, 
  timeframeOptions, 
  users 
} from '../../data/mockData';
import { TimeframeOption } from '../../types/dashboard';

const DashboardContainer: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState(timeframeOptions[0].label);

  const handleTimeframeSelect = (option: TimeframeOption) => {
    setSelectedTimeframe(option.label);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <Header users={users} />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
        <h1 className="text-3xl font-bold text-slate-800">New report</h1>
        <div className="flex items-center">
          <span className="text-slate-500 mr-2">Timeframe</span>
          <TimeframeSelector 
            options={timeframeOptions}
            selected={selectedTimeframe}
            onSelect={handleTimeframeSelect}
          />
        </div>
      </div>
      
      <RevenueCard data={revenueData} />
      
      <MetricsGrid metrics={metricCards} />
    </div>
  );
};

export default DashboardContainer;