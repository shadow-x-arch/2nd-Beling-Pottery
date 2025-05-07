import React from 'react';
import { X, LayoutDashboard, Users, ShoppingBag, FileText, Settings, BarChart3, Headphones } from 'lucide-react';

type SidebarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen }) => {
  const links = [
    { name: 'Dashboard', icon: <LayoutDashboard className="h-5 w-5" />, active: true },
    { name: 'Deals', icon: <ShoppingBag className="h-5 w-5" /> },
    { name: 'Contacts', icon: <Users className="h-5 w-5" /> },
    { name: 'Reports', icon: <BarChart3 className="h-5 w-5" /> },
    { name: 'Documents', icon: <FileText className="h-5 w-5" /> },
    { name: 'Support', icon: <Headphones className="h-5 w-5" /> },
    { name: 'Settings', icon: <Settings className="h-5 w-5" /> },
  ];
  
  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
      
      <aside className={`fixed top-0 left-0 bottom-0 w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 z-30 lg:z-0 transition-transform duration-300 ease-out lg:translate-x-0 ${
        open ? 'translate-x-0' : '-translate-x-full'
      } lg:static`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between h-16 px-4 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-1">
              <span className="h-6 w-6 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">S</span>
              <span className="font-bold text-slate-800 dark:text-white">SalesDash</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:bg-slate-700 lg:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <nav className="flex-1 py-6 px-3 overflow-y-auto">
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href="#"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
                      link.active 
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' 
                        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                    {link.active && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 ml-auto"></div>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 mt-auto">
            <div className="bg-blue-50 dark:bg-slate-700/30 rounded-lg p-4">
              <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300 mb-2">Pro Features</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Unlock premium features to boost your sales productivity</p>
              <button className="w-full py-2 px-3 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;