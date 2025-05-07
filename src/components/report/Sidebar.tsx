import React, { useState } from 'react';
import {
  Home,
  Settings,
  Users,
  BarChart,
  FileText,
  Menu,
  X,
  ChevronRight,
  DollarSign,
  FileBarChart2,
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface SidebarProps {
  setActiveView: React.Dispatch<React.SetStateAction<"sales" | "reportHeader" | "application">>;
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
  action?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveView }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => setIsExpanded(!isExpanded);
  const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);

  // Updated navItems to include actions for switching views
  const navItems: NavItem[] = [
    { icon: <Home size={20} />, label: 'Dashboard', action: () => setActiveView("application") },
    { icon: <DollarSign size={20} />, label: 'Sales', action: () => setActiveView("sales") },
    { icon: <FileBarChart2 size={20} />, label: 'Report Header', action: () => setActiveView("reportHeader") },
    { icon: <FileText size={20} />, label: 'Documents', href: '#' },
    { icon: <Users size={20} />, label: 'Team', href: '#' },
    { icon: <BarChart size={20} />, label: 'Analytics', href: '#' },
    { icon: <Settings size={20} />, label: 'Settings', href: '#' },
  ];

  const renderItem = (item: NavItem, index: number) => {
    const baseClass = "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800";
    const content = (
      <>
        {item.icon}
        {isExpanded && <span>{item.label}</span>}
      </>
    );

    return (
      <li key={index}>
        {item.action ? (
          <button onClick={item.action} className={baseClass + " w-full text-left"}>
            {content}
          </button>
        ) : (
          <a href={item.href} className={baseClass}>
            {content}
          </a>
        )}
      </li>
    );
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-fuchsia-200 dark:bg-gray-950">
        <button onClick={toggleMobileSidebar} className="p-2">
          <Menu size={24} />
        </button>
        <div className="text-lg font-semibold">Dashboard</div>
        <ThemeToggle />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-20" onClick={toggleMobileSidebar} />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed md:hidden top-0 left-0 h-full w-64 bg-fuchsia-200 dark:bg-gray-950 z-30 shadow-lg transform transition-transform duration-300 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <div className="font-semibold">Menu</div>
          <button onClick={toggleMobileSidebar}>
            <X size={20} />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map(renderItem)}
          </ul>
        </nav>
        <div className="absolute bottom-4 left-4">
          <ThemeToggle />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={`hidden md:flex flex-col h-screen ${isExpanded ? 'w-47' : 'w-20'} sticky top-0 bg-fuchsia-100 dark:bg-gray-950 transition-all`}
      >
        <div className={`flex items-center ${isExpanded ? 'justify-between' : 'justify-center'} p-4`}>
          {isExpanded && (
            <>
              <span className="flex w-8 h-8 items-center justify-center rounded-full bg-black text-white text-lg font-bold shadow-md">
                C
              </span>
              <span className="font-semibold">Application</span>
            </>
          )}
          <button onClick={toggleSidebar} className={`${!isExpanded ? 'rotate-180' : ''}`}>
            <ChevronRight size={20} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map(renderItem)}
          </ul>
        </nav>

        <div className={`p-4 flex ${isExpanded ? 'justify-between' : 'justify-center'}`}>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
