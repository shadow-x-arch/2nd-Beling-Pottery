import React from 'react';
import { ArrowUp, Trophy, Flame, ThumbsUp } from 'lucide-react';
import PlatformStats from './PlatformStats';
import SalesChart from "./SalesChart"
// Sales Rep Component
type SalesRepProps = {
  avatar: string;
  name: string;
  revenue: string;
  leadsCount: number;
  leadsTotal: number;
  kpi: string;
  winPercentage: string;
  winCount: number;
  lossCount: number;
  highlight?: boolean;
};

const SalesRep: React.FC<SalesRepProps> = ({
  avatar, name, revenue, leadsCount, leadsTotal, kpi, winPercentage, winCount, lossCount, highlight = false,
}) => (
  <div className="flex items-center justify-between py-1 relative text-sm dark:bg-gray-950 dark:text-gray-100 dark:bg-gray-950 dark:rounded-4xl">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white ">
        {avatar === 'A' ? <span className="text-gray-600 font-medium bg-blue rounded">A</span> : <span className="text-white font-medium bg-blue-500 rounded-full w-full h-full flex items-center justify-center">M</span>}
      </div>
      <span className="font-medium text-gray-500">{name}</span>
    </div>

    <div className="font-semibold">{revenue}</div>
    <div className="flex items-center gap-1">
      <span className="bg-gray-900 text-white px-2 py-1 rounded-full dark:bg-gray-800 dark:text-gray-100">{leadsCount}</span>
      <span className="bg-gray-200 px-2 py-1 rounded-full dark:bg-gray-600 dark:text-gray-100">{leadsTotal}</span>
    </div>

    <div className="font-medium text-purple-400">{kpi}</div>

    <div className="flex items-center gap-1 ">
      <span>{winPercentage}</span>
      <span className="bg-gray-900 text-white px-2 py-1 rounded-full dark:bg-gray-800 dark:text-gray-100">{winCount}</span>
      <span className="bg-gray-200 px-2 py-1 rounded-full dark:bg-gray-800 dark:text-gray-100">{lossCount}</span>
    </div>

    {highlight && (
      <button className="absolute right-0 w-9 h-9 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-md">
        <ArrowUp size={14} />
      </button>
    )}
  </div>
);

// Achievements Component
const Achievement: React.FC<{ icon: React.ReactNode; text: string; iconBackground: string }> = ({ icon, text, iconBackground }) => (
  <div className="flex items-center gap-2 mt-2 bg-white rounded-full py-2 px-3 shadow-sm text-xs dark:bg-gray-950 dark:text-gray-100">
    <div className={`w-5 h-5 rounded-full flex items-center justify-center dark:text-gray-100 ${iconBackground}`}>
      {icon}
    </div>
    <span className="text-gray-700 dark:text-gray-100">{text}</span>
  </div>
);



// Main Combined Component
const SalesPerformanceOverview: React.FC = () => (
 <>
 <div className="w-140 border-none bg-transparent dark:text-gray-100">
    {/* Sales Reps */}
    <div className="mb-1 ">
      <div className="grid grid-cols-5 text-gray-500 text-xs dark:text-gray-100 p-1 ml-9">
        <div>Sales</div>
        <div>Revenue</div>
        <div>Leads</div>
        <div>KPI</div>
        <div>W/L</div>
      </div>
      <div className="bg-white p-0 rounded-full">
        <SalesRep avatar="A" name="Armin A." revenue="$209,633" leadsCount={41} leadsTotal={118} kpi="0.84" winPercentage="31%" winCount={12} lossCount={29} />
      </div></div>

    {/* Achievements */}
    <div className="bg-gradient-to-br from-blue-200 via-fuchsia-100 to-fuchsia-300 rounded-xl p-1 dark:bg-slate-to-br dark:from-slate-950 dark:via-rose-950 dark:to-rose-700">
      
 <SalesRep avatar="M" name="Mikasa A." revenue="$156,841" leadsCount={54} leadsTotal={103} kpi="0.89" winPercentage="39%" winCount={21} lossCount={33} highlight />
    
    <div className=" dark:text-gray-100">
      <div className="flex flex-wrap gap-2 ">
        <Achievement icon={<Trophy size={14} className="text-yellow-500" />} text="Top sales 💪" iconBackground="bg-yellow-100" />
        <Achievement icon={<Flame size={14} className="text-orange-500" />} text="Sales streak 🔥" iconBackground="bg-orange-100" />
        <Achievement icon={<ThumbsUp size={14} className="text-yellow-500" />} text="Top review 👍" iconBackground="bg-yellow-100" />
      </div>
    </div>

    {/* Platform Stats */}
    <div className="">
      <PlatformStats />
       </div>
       
    {/* Sales Chart */}
    <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-gray-800 font-semibold text-lg dark:text-gray-100">Sales dynamic</h2>
              <button className="text-gray-500 transition-transform duration-200 ease-in-out hover:scale-110">
  <img
    src="https://cdn-icons-png.flaticon.com/128/15281/15281978.png"
    alt="Icon"
    className="w-5 h-5"
  />
</button>

            </div>
            <SalesChart />
          </div>
  </div>  
  </div>      
  </>
);

export default SalesPerformanceOverview;
