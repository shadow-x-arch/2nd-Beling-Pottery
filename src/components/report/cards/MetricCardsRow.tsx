import { ArrowUpRight } from 'lucide-react';

const MetricCardsRow = () => {
  return (
    <div className="grid grid-cols-3 gap-2 items-center justify-between">
      {/* Top sales */}
      <div className="bg-white rounded-xl p-4 shadow-sm dark:text-gray-100 dark:bg-gray-950">
        <div className="text-sm text-slate-500 mb-2">Top sales</div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold mb-2">72</div>
            <div className="flex items-center gap-2">
              <img src="https://i.pravatar.cc/32?img=12" alt="Avatar" className="w-6 h-6 rounded-full" />
              <span className="text-sm">Mikasa</span>
            </div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-slate-400" />
        </div>
      </div>

      {/* Best deal */}
      <div className="bg-black rounded-xl p-4 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm text-slate-400">Best deal</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-400">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-white mb-2">$42,300</div>
            <div className="text-sm text-slate-400">Rolf Inc.</div>
          </div>
          <ArrowUpRight className="h-5 w-5 text-white" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 items-center justify-between">
      {/* Deals */}
      <div className="bg-white rounded-xl p-4 shadow-sm dark:text-gray-100 dark:bg-gray-950">
        <div className="text-sm text-slate-500 mb-2">Deals</div>
        <div className="items-center text-white justify-between bg-gray-400 rounded-xl p-2 mb-1 dark:text-gray-100 dark:bg-gray-800">256</div>
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-slate-400">
            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
          </svg>
          <span className="text-sm text-slate-500">5</span>
        </div>
      </div>

      {/* Value */}
      <div className="bg-white rounded-xl p-4 shadow-sm border-2 border-pink-500 dark:text-gray-100 dark:bg-gray-950">
        <div className="text-sm text-slate-500 mb-2">Value</div>
        <div className="text-white items-center justify-between bg-pink-400 rounded-xl p-2 mb-1 dark:text-gray-100 dark:bg-gray-800">25k</div>
        <div className="flex items-center gap-1">
          <ArrowUpRight className="h-4 w-4 text-green-500" />
          <span className="text-sm text-green-500">7.9%</span>
        </div>
      </div>

      {/* Win rate */}
      <div className="bg-white rounded-xl p-4 shadow-sm dark:text-gray-100 dark:bg-gray-950">
        <div className="text-sm text-slate-500 mb-2">Win rate</div>
        <div className="text-white items-center justify-between bg-gray-400 rounded-xl p-2 dark:text-gray-100 dark:bg-gray-800">44%</div>
        <div className="flex items-center gap-1">
          <ArrowUpRight className="h-4 w-4 text-green-500" />
          <span className="text-sm text-green-500">1.2%</span>
        </div>
      </div>
    </div></div>
  );
};

export default MetricCardsRow;