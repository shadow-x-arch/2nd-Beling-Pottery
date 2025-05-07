import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { TimeframeOption } from '../../types/dashboard';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeframeSelectorProps {
  options: TimeframeOption[];
  selected: string;
  onSelect: (option: TimeframeOption) => void;
}

const TimeframeSelector: React.FC<TimeframeSelectorProps> = ({
  options,
  selected,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(option => option.label === selected) || options[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between px-3 py-2 border border-slate-200 rounded-md bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-colors duration-250 w-52"
      >
        <span>{selectedOption.label}</span>
        <ChevronDown size={16} className={`ml-2 transition-transform duration-250 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-1 w-52 bg-white rounded-md shadow-lg z-10 overflow-hidden"
          >
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    onSelect(option);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    selectedOption.id === option.id
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimeframeSelector;