import React from 'react';
import { formatCurrency } from '../../utils/formatters';
import { RevenueData } from '../../types/dashboard';
import Badge from '../ui/Badge';
import { motion } from 'framer-motion';

interface RevenueCardProps {
  data: RevenueData;
}

const RevenueCard: React.FC<RevenueCardProps> = ({ data }) => {
  const { current, previous } = data;
  
  return (
    <motion.div 
      className="card p-6 mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-4">
        <h2 className="title-medium mb-1">Revenue</h2>
      </div>
      
      <div className="flex items-end gap-2 mb-3">
        <div className="title-large">{formatCurrency(current.amount)}</div>
        <Badge 
          text={`${current.percentage.toFixed(1)}%`} 
          type="success"
          showArrow={true}
        />
      </div>
      
      <div className="text-sm text-slate-500">
        <span>vs prev. {formatCurrency(previous.amount)}</span>
        <span className="mx-1">•</span>
        <span>{previous.timeframe}</span>
      </div>
    </motion.div>
  );
};

export default RevenueCard;