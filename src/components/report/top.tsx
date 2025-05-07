import { useState } from 'react';

import { Download, MoreHorizontal, Share2, ChevronDown, ArrowUpIcon, ArrowDownIcon, Users } from 'lucide-react';
import  RevenueBar from "@/components/report/details"
import DashboardCards from"@/components/report/cards"
import Avatars from './avatar/avatars';
import MetricCardsRow from "@/components/report/cards/MetricCardsRow"
import DetailsChart from "@/components/report/detailsChart/detailsChart"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

// Types
interface User {
  id: string;
  name: string;
  avatar: string;
  initials: string;
}

interface TimeframeOption {
  id: string;
  label: string;
  startDate: string;
  endDate: string;
}


interface RevenueData {
  current: {
    amount: number;
    percentage: number;
    timeframe: string;
  };
  previous: {
    amount: number;
    timeframe: string;
  };
}

// Mock Data
const users: User[] = [
  {
    id: '1',
    name: 'Armin A.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    initials: 'AA',
  },
  {
    id: '2',
    name: 'Eren Y.',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    initials: 'EY',
  },
  {
    id: '3',
    name: 'Mikasa A.',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
    initials: 'MA',
  },
];

const revenueData: RevenueData = {
  current: {
    amount: 528976.82,
    percentage: 7.9,
    timeframe: 'Sep 1 - Nov 30, 2023',
  },
  previous: {
    amount: 501641.73,
    timeframe: 'Jun 1 - Aug 31, 2023',
  },
};

const timeframeOptions: TimeframeOption[] = [
  {
    id: 'current',
    label: 'Sep 1 - Nov 30, 2023',
    startDate: '2023-09-01',
    endDate: '2023-11-30',
  },
  {
    id: 'previous',
    label: 'Jun 1 - Aug 31, 2023',
    startDate: '2023-06-01',
    endDate: '2023-08-31',
  },
  {
    id: 'yearToDate',
    label: 'Year to date',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
  },
];

// Utility
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
};

// Components

const AvatarGroup = ({ users, max = 3 }: { users: User[]; max?: number }) => {
  const remainingCount = users.length - max;

  return (
    <div className="flex space-2">
        <span> 
            <Avatars/>
             </span>

      {remainingCount > 0 && (
        <div className="w-10 h-10 flex items-center justify-center bg-slate-200 text-slate-600 rounded-full border-2 border-white dark:text-gray-100 dark:bg-gray-900">
          <Users size={16} /> 
        </div>
       
      )}
    </div>
  );
};

const Badge = ({ text, type }: { text: string; type: 'success' | 'warning' | 'error' }) => {
  const isPositive = !text.includes('-');
  const arrow = isPositive ? <ArrowUpIcon size={12} /> : <ArrowDownIcon size={12} />;

  const badgeClassMap = {
    success: 'bg-pink-500 text-white',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
  };

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${badgeClassMap[type]}`}>
      {arrow}
      {text}
    </span>
  );
};


const Dashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState(timeframeOptions[0].label);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showTimeframeDropdown, setShowTimeframeDropdown] = useState(false);

  return (
    <div className="bg-transparent py-6 px-4 sm:px-6 lg:px-0 dark:text-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <AvatarGroup users={users} />  

          <div className="flex items-center space-x-2">
  <button className="p-2 text-slate-600 hover:text-primary-600 hover:bg-slate-100 rounded-full transition-colors transform hover:scale-110 duration-300 dark:text-gray-100 dark:bg-gray-700">
    <Download size={20} />
  </button>
  <button className="p-2 text-slate-600 hover:text-primary-600 hover:bg-slate-100 rounded-full transition-colors transform hover:scale-110 duration-300 dark:text-gray-100 dark:bg-gray-700">
    <Share2 size={20} />
  </button>
  <div className="relative">
    <button
      className="p-2 text-slate-600 hover:text-primary-600 hover:bg-slate-100 rounded-full transition-colors transform hover:scale-110 duration-300 dark:text-gray-100 dark:bg-gray-700"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <MoreHorizontal size={20} />
    </button>

    {showDropdown && (
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 dark:text-gray-100 dark:bg-gray-900 ">
        <div className="py-1">
          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-gray-900 dark:text-gray-100">
            Export as PDF
          </button>
          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:text-gray-900 dark:text-gray-100">
            Export as CSV
          </button>
        </div>
      </div>
    )}
  </div>
</div>

        </header>

        {/* Title and Timeframe */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-300">New report</h1>
          <div className="flex items-center mt-4 md:mt-0">
          <div className="flex items-center space-x-2 mr-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode ">Time frame</Label>
    </div>
            <div className="relative">
              <button
                onClick={() => setShowTimeframeDropdown(!showTimeframeDropdown)}
                className="flex items-center justify-between px-3 py-2 border border-slate-200 rounded-md bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 w-52 dark:text-gray-100 dark:bg-gray-900"
              >
                <span>{selectedTimeframe}</span>
                <ChevronDown size={16} className={`ml-2 transition-transform ${showTimeframeDropdown ? 'rotate-180' : ''}`} />
              </button>

              {showTimeframeDropdown && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-md shadow-lg z-10 dark:text-gray-100 dark:bg-gray-900">
                  {timeframeOptions.map((option) => (
                   
                    <button
                      key={option.id}
                      onClick={() => {
                        setSelectedTimeframe(option.label);
                        setShowTimeframeDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:hover:text-gray-900 dark:text-gray-100"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-2 ">
          {/* Revenue */}
          <div className="flex-0.5 bg-pransparent p-6 ">
            <h2 className="text-xl font-medium text-slate-700 mb-4">Revenue</h2>
            <div className="flex items-end gap-2 mb-3">
              <div className="text-3xl font-bold text-slate-800">
                {formatCurrency(revenueData.current.amount)}
              </div>
              <Badge
                text={`${revenueData.current.percentage}%`}
                type="success"
              />
            </div>
            <div className="text-sm text-slate-500">
              vs prev. {formatCurrency(revenueData.previous.amount)}
              <span className="mx-1">•</span>
              {revenueData.previous.timeframe}
            </div>
          </div>

          {/* Metrics */}
          <div className="flex justify-end float-right ml-auto">
           
              <MetricCardsRow />
          
          </div>
        </div>
      </div>
      <RevenueBar />
      <div className="flex gap-4">
  <div className="flex-1">
    <DashboardCards />
  </div>
  <div className="flex">
    <DetailsChart />
  </div>
</div>
    </div>
  );
};

export default Dashboard;
