import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, MoreHorizontal, Share2, ChevronDown, Star, ArrowUpIcon } from 'lucide-react';

const users = [
  { id: '1', name: 'Armin A.', avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { id: '2', name: 'Eren Y.', avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { id: '3', name: 'Mikasa A.', avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150' }
];

const metrics = [
  { title: 'Top sales', value: 72, assignedTo: users[2] },
  { title: 'Best deal', value: '$42,300', isStarred: true, footer: 'Reif Inc.' },
  { title: 'Deals', value: 255, badge: { text: '25%', type: 'success' } },
  { title: 'Value', value: '528k', badge: { text: '7.9%', type: 'success' } },
  { title: 'Win rate', value: '44%', badge: { text: '1.2%', type: 'success' } }
];

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [timeframe, setTimeframe] = useState('Sep 1 - Nov 30, 2023');
  const [showTimeframe, setShowTimeframe] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <div className="flex -space-x-2">
            {users.map(user => (
              <img 
                key={user.id} 
                src={user.avatar} 
                alt={user.name} 
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 text-slate-600 hover:text-primary-600 hover:bg-slate-100 rounded-full">
              <Download size={20} />
            </button>
            <button className="p-2 text-slate-600 hover:text-primary-600 hover:bg-slate-100 rounded-full">
              <Share2 size={20} />
            </button>
            <div className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="p-2 text-slate-600 hover:text-primary-600 hover:bg-slate-100 rounded-full"
              >
                <MoreHorizontal size={20} />
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Export as PDF
                  </button>
                  <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Export as CSV
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-slate-800">New report</h1>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-slate-500 mr-2">Timeframe</span>
            <div className="relative">
              <button
                onClick={() => setShowTimeframe(!showTimeframe)}
                className="flex items-center justify-between px-3 py-2 border border-slate-200 rounded-md bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 w-52"
              >
                <span>{timeframe}</span>
                <ChevronDown size={16} className={`ml-2 transition-transform ${showTimeframe ? 'rotate-180' : ''}`} />
              </button>
              {showTimeframe && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-md shadow-lg z-10">
                  {['Sep 1 - Nov 30, 2023', 'Jun 1 - Aug 31, 2023', 'Year to date'].map(option => (
                    <button
                      key={option}
                      onClick={() => {
                        setTimeframe(option);
                        setShowTimeframe(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-medium text-slate-700 mb-4">Revenue</h2>
            <div className="flex items-end gap-2 mb-3">
              <div className="text-3xl font-bold text-slate-800">$528,976</div>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success-100 text-success-700">
                <ArrowUpIcon size={12} />7.9%
              </span>
            </div>
            <div className="text-sm text-slate-500">
              vs prev. $501,641
              <span className="mx-1">•</span>
              Jun 1 - Aug 31, 2023
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-4 hover:shadow-lg transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wide">
                    {metric.title}
                  </h3>
                  {metric.isStarred && (
                    <Star size={16} className="text-warning-400 fill-warning-400" />
                  )}
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-2xl font-bold mb-1">{metric.value}</div>
                    {metric.footer && (
                      <div className="text-sm text-slate-500">{metric.footer}</div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {metric.badge && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success-100 text-success-700">
                        <ArrowUpIcon size={12} />{metric.badge.text}
                      </span>
                    )}
                    {metric.assignedTo && (
                      <img 
                        src={metric.assignedTo.avatar} 
                        alt={metric.assignedTo.name}
                        className="w-8 h-8 rounded-full border-2 border-white" 
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;