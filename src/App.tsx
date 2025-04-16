import { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import Top from "./components/top/top";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex fixed w-full h-screen overflow-hidden top-0 left-0">
      <Sidebar show={sidebarOpen} toggle={toggleSidebar} />

      <div className="flex flex-col flex-1 p-0 bg-gray-900 overflow-auto">
        <Top />
      </div>
    </div>
  );
}

export default App;
