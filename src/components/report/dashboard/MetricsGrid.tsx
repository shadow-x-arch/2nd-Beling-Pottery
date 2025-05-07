import React from 'react';
import MetricCard from './MetricCard';
import { MetricCard as MetricCardType } from '../../types/dashboard';

interface MetricsGridProps {
  metrics: MetricCardType[];
}

const MetricsGrid: React.FC<MetricsGridProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {metrics.map((metric, index) => (
        <MetricCard key={index} data={metric} />
      ))}
    </div>
  );
};

export default MetricsGrid;