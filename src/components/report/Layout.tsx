import React from 'react';
import Sidebar from './Sidebar';
import { ThemeProvider } from "@/context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
  setActiveView: React.Dispatch<React.SetStateAction<"sales" | "reportHeader" | "application">>;
}

const Layout: React.FC<LayoutProps> = ({ children, setActiveView }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col md:flex-row bg-fuchsia-100 dark:bg-gray-950 transition-colors duration-200">
        <Sidebar setActiveView={setActiveView} />
        <main className="flex-1 p-4 md:p-0 transition-all duration-300">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
