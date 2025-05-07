import React, { useState } from 'react';
import { Download, MoreHorizontal, Share2 } from 'lucide-react';
import AvatarGroup from '../ui/AvatarGroup';
import { User } from '../../types/dashboard';
import { motion } from 'framer-motion';

interface HeaderProps {
  users: User[];
}

const Header: React.FC<HeaderProps> = ({ users }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="flex justify-between items-center mb-6">
      <div className="flex items-center">
        <AvatarGroup users={users} />
      </div>
      
      <div className="flex items-center space-x-2">
        <button 
          className="p-2 text-slate-600 hover:text-primary-600 hover:bg-slate-100 rounded-full transition-colors duration-250"
          title="Download report"
        >
          <Download size={20} />
        </button>
        
        <button 
          className="p-2 text-slate-600 hover:text-primary-600 hover:bg-slate-100 rounded-full transition-colors duration-250"
          title="Share report"
        >
          <Share2 size={20} />
        </button>
        
        <div className="dropdown">
          <button 
            className="p-2 text-slate-600 hover:text-primary-600 hover:bg-slate-100 rounded-full transition-colors duration-250"
            onClick={() => setShowDropdown(!showDropdown)}
            title="More options"
          >
            <MoreHorizontal size={20} />
          </button>
          
          {showDropdown && (
            <motion.div 
              className="dropdown-content"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <button className="dropdown-item">Print report</button>
              <button className="dropdown-item">Export as PDF</button>
              <button className="dropdown-item">Export as CSV</button>
              <button className="dropdown-item">Report settings</button>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;