"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Settings,
  LayoutDashboard,
  CheckSquare,
  FileText,
  BarChart2,
  File,
  Folder,
  Menu,
  X,
} from "lucide-react";

type SidebarProps = {
  show: boolean;
  toggle: () => void;
};

export default function Sidebar({ show, toggle }: SidebarProps) {
  return (
    <>

      {/* Sidebar Toggle Button */}
      <Button
        className="block sm:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white rounded-full p-2"
        onClick={toggle}
      >
        {show ? <X size={18} /> : <Menu size={18} />}
      </Button>

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full w-64 p-2 bg-gray-100 dark:bg-gray-800 shadow-md z-40 transform transition-transform duration-300 ease-in-out
          ${show ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 sm:static sm:shadow-none
        `}
      >
        <div className="p-4 space-y-4 h-full overflow-y-auto rounded-md bg-gray-200 dark:bg-gray-900">
          {/* User Info */}
          <div className="flex items-center mb-4">
            <div className="bg-gray-500 dark:bg-gray-700 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mr-3">
              JM
            </div>
            <div>
              <div className="font-semibold dark:text-gray-300">Judha Maygustya</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">judha@emura.studio</div>
            </div>
          </div>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* Search Section */}
          <div className="relative flex items-center">
            <Input
              placeholder="Search..."
              className="pl-8 pr-8 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            />
            <Search className="absolute right-8 w-4 h-4 text-gray-500 dark:text-gray-400" />
            <Settings className="absolute right-2 w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* Main Menu */}
          <div>
            <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
              MAIN MENU
            </h5>
            <SidebarItem icon={<LayoutDashboard />} label="Dashboard" />
            <SidebarItem icon={<CheckSquare />} label="My To-Do" />
            <SidebarItem icon={<FileText />} label="Request Form" />
            <a href="/report" className="text-blue-600 hover:underline">
            <SidebarItem icon={<BarChart2 />} label="Reports" />
           </a>
          </div>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* Projects Section */}
          <div>
            <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-2">
              MY PROJECT’S
            </h5>
            <SidebarItem icon={<Folder />} label="Emura Project" />
            <SidebarItem icon={<Folder />} label="Daily Exploration" />
            <SidebarItem icon={<Folder />} label="Dashboard" />
            <SidebarItem icon={<File />} label="Data" />
            <SidebarItem icon={<File />} label="Info" />
          </div>
        </div>
      </div>
    </>
  );
}

function SidebarItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Button
      variant="ghost"
      className="w-full justify-start text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
    </Button>
  );
}
