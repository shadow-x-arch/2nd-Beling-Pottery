import React from 'react';
import Badge from '../ui/Badge';
import Avatar from '../ui/Avatar';
import { MetricCard as MetricCardType } from '../../types/dashboard';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  data: MetricCardType;
}

const MetricCard: React.FC<MetricCardProps> = ({ data }) => {
  const { title, value, badge, footer, isStarred, assignedTo } = data;

  return (
    <motion.div 
      className="card-metric card-interactive"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="title-small">{title}</h3>
        {isStarred && (
          <Star size={16} className="text-warning-400 fill-warning-400" />
        )}
      </div>
      
      <div className="flex justify-between items-end">
        <div>
          <div className="value-large mb-1">{value}</div>
          {footer && <div className="text-sm text-slate-500">{footer}</div>}
        </div>
        
        <div className="flex items-center">
          {badge && <Badge text={badge.text} type={badge.type} />}
          {assignedTo && <Avatar user={assignedTo} size="sm" />}
        </div>
      </div>
    </motion.div>
  );
};

export default MetricCard;