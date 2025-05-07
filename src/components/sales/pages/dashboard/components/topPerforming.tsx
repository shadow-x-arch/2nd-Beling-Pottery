
interface SalesRep {
  name: string;
  earnings: string;
  sales: number;
  avatar: string;
}

const salesReps: SalesRep[] = [
  {
    name: "Josh Brown",
    earnings: "$15,291",
    sales: 8,
    avatar: "https://i.pravatar.cc/64?img=4",
  },
  {
    name: "Sarah Williams",
    earnings: "$12,500",
    sales: 7,
    avatar: "https://i.pravatar.cc/64?img=2",
  },
  {
    name: "Michael Lee",
    earnings: "$15,291",
    sales: 4,
    avatar: "https://i.pravatar.cc/64?img=3",
  },
];

const Leaderboard = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-950 rounded-xl shadow-lg w-full max-w-md h-full max-h-md">
           <div className="grid grid-cols-1 md:grid-cols-[15%_85%]">
            <div>
            <img src={salesReps[1].avatar}
              className="w-10 h-10 rounded-full p-1 "
            />
            </div>
            <div>
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-100">
        Top Performing Sales Reps
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Who's leading this week?
      </p>
      </div>
      </div>

      <div className="flex items-end justify-center gap-4">
        {/* 2nd Place */}
        <div className="flex flex-col items-center mt-25">
          <div className="relative">
            <img
              src={salesReps[1].avatar}
              alt={salesReps[1].name}
              className="w-16 h-16 rounded-full border-4 border-blue-500 "
            />
            <span className="absolute -top-2 -right-2 text-yellow-500 text-xl">🥈</span>
          </div>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-100 mt-2">
            {salesReps[1].name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {salesReps[1].earnings}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            👁 {salesReps[1].sales}
          </p>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center mb-15">
          <div className="relative">
            <img
              src={salesReps[0].avatar}
              alt={salesReps[0].name}
              className="w-20 h-20 rounded-full border-4 border-yellow-500"
            />
            <span className="absolute -top-2 -right-2 text-yellow-500 text-xl">🏅</span>
          </div>
          <p className="text-sm font-bold text-gray-700 dark:text-gray-100 mt-2">
            {salesReps[0].name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {salesReps[0].earnings}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            👁 {salesReps[0].sales}
          </p>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={salesReps[2].avatar}
              alt={salesReps[2].name}
              className="w-16 h-16 rounded-full border-4 border-gray-500"
            />
            <span className="absolute -top-2 -right-2 text-yellow-500 text-xl">🥉</span>
          </div>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-100 mt-2">
            {salesReps[2].name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {salesReps[2].earnings}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            👁 {salesReps[2].sales}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
