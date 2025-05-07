import { FC } from "react";
import { Plus } from 'lucide-react';
import { ForceOpenDropdown } from "@/components/report/detailsChart/menu";

const SearchBar: FC = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between bg-fuchsia-100 dark:bg-gray-950 p-4 rounded-xl w-full">
      <input
        type="text"
        placeholder="Try searching 'insights'"
        className="px-4 py-2 rounded-full border border-input bg-background dark:bg-gray-800 dark:border-gray-700 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <div className="flex gap-4 ml-4 justify-end absolute right-0 p-2">
        <div className="flex items-center rounded-xl bg-white dark:bg-gray-800 gap-2 p-1">
          <ForceOpenDropdown />
          <div className="w-8 h-8 rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/128/11215/11215412.png"
              alt="Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <button className="w-10 h-10 bg-pink-400 dark:bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-primary/90">
          <Plus />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
