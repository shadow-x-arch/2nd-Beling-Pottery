import React from 'react';
import { Menu, Bell, Sun, Moon, Search } from 'lucide-react';

type HeaderProps = {
  toggleSidebar: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const Header: React.FC<HeaderProps> = ({ toggleSidebar, darkMode, toggleDarkMode }) => {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
      <div className="flex items-center justify-between h-16 px-4 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:bg-slate-700 lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="hidden lg:flex items-center gap-1">
            <span className="h-6 w-6 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">S</span>
            <span className="font-bold text-slate-800 dark:text-white">SalesDash</span>
          </div>
          
          <div className="relative hidden md:block ml-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 pl-10 pr-4 py-2 text-sm bg-slate-100 dark:bg-slate-700/50 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white dark:placeholder-slate-400"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:bg-slate-700"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          
          <button className="relative p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:bg-slate-700">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-sm overflow-hidden">
              <img src="https://i.pravatar.cc/32?img=13" alt="User avatar" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-slate-800 dark:text-white">Alex Morgan</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Sales Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;