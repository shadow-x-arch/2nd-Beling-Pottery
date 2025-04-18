"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Bookmark,
  Share2,
  MoreHorizontal,
  KanbanSquare,
  BarChart2,
  List,
  Baseline as Timeline,
} from "lucide-react";
import AvatarI from "@/components/top/avatar";
import BreadcrumbWithCustomSeparator from "@/components/top/Breadcrumb";
import TaskBoard from "@/components/Card/TaskBoard";
import { DatePickerDemo } from "@/components/Card/Calendar";
function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Button
      onClick={toggleDarkMode}
      className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-white rounded-lg text-sm dark:bg-gray-200 dark:text-black hover:bg-gray-700 dark:hover:bg-gray-300"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}

function Top() {
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 p-2 md:p-4">
      <div className="bg-white dark:bg-gray-800 rounded-t-xl shadow-md overflow-hidden">
        <nav className="px-3 py-2 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-white dark:bg-gray-800">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1">
              <Button className="flex items-center gap-1 px-3 py-2 bg-white dark:bg-gray-800 text-black dark:text-white text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <ChevronLeft className="w-5 h-5 text-black dark:text-white" />
              </Button>
              <Button className="p-1 bg-white dark:bg-gray-800 text-black dark:text-white rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                <ChevronRight className="w-5 h-5 text-black dark:text-white" />
              </Button>
            </div>
            <div className="flex items-center gap-2 flex-wrap text-sm text-gray-500 dark:text-gray-400">
              <BreadcrumbWithCustomSeparator />
            </div>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <DarkModeToggle />
            <Button variant="top" className="dark:text-gray-300">
              <Plus className="w-4 h-4 dark:text-white" />
              <span>New Tab</span>
            </Button>
            <Button variant="top" className="dark:text-gray-300">
              <Bookmark />
            </Button>
            <Button variant="top" className="dark:text-gray-300">
              <Share2 className="w-5 h-5 text-gray-600 dark:text-white" />
            </Button>
            <Button variant="top" className="dark:text-gray-300">
              <MoreHorizontal className="w-5 h-5 text-gray-600 dark:text-white" />
            </Button>
          </div>
        </nav>

        <div className="px-4 py-5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start md:items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 dark:bg-gray-700 rounded-lg">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/17545/17545822.png"
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-semibold dark:text-white">
                    Beling-Pottery
                  </h1>
                  <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <span>Timeline: Aug 16, 2025 - Sep 16, 2025</span>
                  <span>Client: Ben Barlow</span>
                  <span className="flex items-center">
                    Status:{" "}
                    <span className="text-yellow-500 dark:text-yellow-300 ml-1">
                      In Progress
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <AvatarI />
              </div>
              <Button className="px-4 py-2 bg-blue-700 dark:bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-100 dark:hover:bg-gray-700 hover:text-black">
                Invite
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 flex flex-wrap gap-2 sm:gap-4">
        <div className="px-4 py-3 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-wrap gap-2 sm:gap-4 items-white">
          <span className="px-1 py-1 border rounded-md border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex flex-wrap gap-2 sm:gap-4 items-white">
            <Button variant="second">
              <KanbanSquare className="w-5 h-5" />
              <span>Kanban</span>
            </Button>
            <DatePickerDemo />
            <Button variant="second">
              <BarChart2 className="w-5 h-5" />
              <span>Gantt</span>
            </Button>
            <Button variant="second">
              <List className="w-5 h-5" />
              <span>List</span>
            </Button>
            <Button variant="second">
              <Timeline className="w-5 h-5" />
              <span>Timeline</span>
            </Button>
          </span>
        </div>
        <div className="flex items-center gap-2 h-10 w-50 mt-4 mb-3 px-1 py-3 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 rounded-md ml-35 ">
          <span className="flex items-center gap-2 cursor-pointer hover:scale-110 transition-transform">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5537/5537401.png"
              alt="Logo 1"
              className="h-4 w-4 object-cover rounded-md"
            />
            Integrate

            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968929.png"
              alt="Logo 1"
              className="h-4 w-4 object-cover rounded-md"
            />
          </span>
          <span className="text-gray-500 dark:text-gray-400">|</span>
          <span className="flex items-center cursor-pointer hover:scale-110 transition-transform">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968534.png"
              alt="Logo 2"
              className="h-5 w-5 object-cover rounded-md"
            />
          </span>
          <span className="text-gray-500 dark:text-gray-400">|</span>
          <span className="flex items-center cursor-pointer hover:scale-110 transition-transform">
            <img
              src="https://cdn-icons-png.flaticon.com/128/888/888846.png"
              alt="Logo 3"
              className="h-5 w-5 object-cover rounded-md"
            />
          </span>
        </div>
      </div>
      <hr className="border-t border-gray-300 dark:border-gray-700" />
      <div className="mt-0 bg-[url('https://hd.wallpaperswide.com/thumbs/white_forest_2-t2.jpg')]">
        <TaskBoard />
      </div>
    </div>
  );
}

export default Top;
