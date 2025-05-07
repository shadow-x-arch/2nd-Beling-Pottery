import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors duration-200 
        ${theme === 'dark' 
          ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} 
        ${className}`}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'dark' ? (
        <Sun size={18} className="transition-transform duration-200 ease-in-out hover:rotate-12" />
      ) : (
        <Moon size={18} className="transition-transform duration-200 ease-in-out hover:rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;