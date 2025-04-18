import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import Top from "./components/top/top";
import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex fixed w-full h-screen overflow-hidden top-0 left-0">
        <Sidebar show={sidebarOpen} toggle={toggleSidebar} />
        <div className="flex flex-col flex-1 p-0 bg-gray-900 overflow-auto">
          <Top />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
