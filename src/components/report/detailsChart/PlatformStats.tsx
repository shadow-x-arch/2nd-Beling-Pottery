import React from 'react';
import { ArrowUp } from 'lucide-react';

type PlatformItemProps = {
  icon: React.ReactNode;
  name: string;
  percentage?: string;
  value?: string;
  color?: string;
};

const PlatformItem: React.FC<PlatformItemProps> = ({ 
  icon, 
  name, 
  percentage, 
  value,
  color = "bg-white dark:bg-gray-950" 
}) => {
  return (
    <div className= {`p-4 h-20 rounded-xl ${color} relative overflow-hidden`}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className="font-medium text-gray-800">{name}</span>
      </div>
      {percentage && (
        <div className="text-lg font-bold text-gray-700">{percentage}</div>
      )}
      {value && (
        <div className="text-gray-500 ">{value}</div>
      )}
    </div>
  );
};

const DribbbleIcon = () => (
  <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center">
    <img
      src="https://cdn-icons-png.flaticon.com/128/2504/2504897.png"
      alt="Dribbble"
      className="w-5 h-5"
    />
  </div>
);


const GoogleIcon = () => (
  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <img
      src="https://cdn-icons-png.flaticon.com/128/281/281764.png"
      alt="Dribbble"
      className="w-5 h-5"
    />
  </div>
);

const OtherIcon = () => (
  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-gray-200 dark:border-gray-700 dark:bg-gray-300 dark:text-gray-100">
        <img
      src="https://cdn-icons-png.flaticon.com/128/8979/8979335.png"
      alt="Dribbble"
      className="w-5 h-5"
    />
  </div>
);

const InstagramIcon = () => (
  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-gray-200 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100">
        <img
      src="https://cdn-icons-png.flaticon.com/128/174/174855.png"
      alt="Dribbble"
      className="w-5 h-5"
    />
  </div>
);

const PlatformStats: React.FC = () => {
  return (
    <>
    <span className="h-10 flex items-center justify-between w-full px-2 py-0 text-sm font-medium text-black">
    <span className="flex items-center gap-1 dark:text-gray-100">
      Work with platforms
    </span>
  
    <span className="flex items-center gap-2">
      <span className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-white">
        <ArrowUp size={14}/></span>
      <span className="w-20 h-6 rounded-xl  bg-pink-500 flex items-center justify-center text-white ">$11,135</span>
    </span>
  </span>

    <div className="mt-2 grid grid-cols-2 gap-2">
      <div className="p-4 rounded-xl bg-gradient-to-br bg-white  relative overflow-hidden flex flex-col justify-between h-full dark:text-gray-100 dark:bg-gray-950">
        <div className="flex items-center gap-2 ">
          <DribbbleIcon />
          <span className="font-medium text-gray-500">Dribbble</span>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="text-3xl font-bold text-gray-700">45.3%</div>
          <div className="text-2xl text-gray-400">$71,048</div>
        </div>
      </div>
      <div className="grid grid-rows-2 gap-4 ">
      <div className="mt-2 grid grid-cols-2 gap-2">
        <PlatformItem 
          icon={<InstagramIcon/>}
          name="Instagram"
          percentage="28.1%"
          value="$44,072"
        />
        <div className=" grid grid-col-2 gap-2 ">
        <PlatformItem 
          icon={<GoogleIcon />}
          name="Google"
          percentage="14.1%"
          value="$22,114"
        />


        </div>
      </div>
      <span className="h-10 flex items-center justify-between w-full px-2 py-0 rounded-xl bg-white shadow-sm text-sm font-medium text-black dark:text-gray-100 dark:bg-gray-950">
      <span className="flex items-center gap-1">
      <span className="w-5 h-5 text-black">
      <OtherIcon />
    </span>
    Other
  </span>

  <span className="flex items-center gap-2">
    <span className="font-semibold">7.1%</span>
    <span className="text-gray-400">$11,135</span>
  </span>
</span>


        
      </div>
    </div>
    </>
  );
};

export default PlatformStats;