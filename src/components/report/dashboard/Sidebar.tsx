
import { 
  Home,
  FileText,
  Car,
  AlertCircle,
  Wrench,
  DollarSign,
  Settings,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Home', path: '/dashboard' },
  { icon: FileText, label: 'Reports', path: '/dashboard/reports' },
  { icon: Car, label: 'Vehicles', path: '/dashboard/vehicles' },
  { icon: AlertCircle, label: 'Fines', path: '/dashboard/fines' },
  { icon: Wrench, label: 'Maintenance', path: '/dashboard/maintenance' },
  { icon: DollarSign, label: 'Expenses', path: '/dashboard/expenses' },
  { icon: Settings, label: 'Admin', path: '/dashboard/admin' },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  isVisible: boolean;
}

export default function Sidebar({ isCollapsed, setIsCollapsed, isVisible }: SidebarProps) {
  return (
    <div 
      className={`fixed md:static inset-y-0 left-0 z-20 bg-gray-900 dark:bg-gray-950 text-gray-100 flex flex-col transition-all duration-300 transform ${
        isCollapsed ? 'w-20' : 'w-64'
      } ${isVisible ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
    >
      <div className="flex items-center p-4 border-b border-gray-800">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <Car size={24} className="text-purple-400" />
            <span className="text-xl font-bold">Spike</span>
          </div>
        )}
        {isCollapsed && <Car size={24} className="text-purple-400 mx-auto" />}
      </div>

      <nav className="flex-1 py-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.path}
            className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-900 hover:text-purple-400 transition-colors"
          >
            <item.icon size={20} className="flex-shrink-0" />
            {!isCollapsed && <span className="ml-4">{item.label}</span>}
          </a>
        ))}
      </nav>

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-4 border-t border-gray-800 flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-900 transition-colors"
      >
        {isCollapsed ? (
          <ChevronRight size={20} />
        ) : (
          <ChevronLeft size={20} />
        )}
      </button>
    </div>
  );
}