import React from 'react';
import { Trophy, Flame, ThumbsUp } from 'lucide-react';

type AchievementProps = {
  icon: React.ReactNode;
  text: string;
  iconBackground: string;
};

const Achievement: React.FC<AchievementProps> = ({ icon, text, iconBackground }) => {
  return (
    <div className="flex items-center gap-2 bg-white rounded-full py-2 px-4 shadow-sm">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${iconBackground}`}>
        {icon}
      </div>
      <span className="text-gray-700 text-sm font-medium">{text}</span>
    </div>
  );
};

const Achievements: React.FC = () => {
  return (
    <div className="my-4 bg-pink-50 rounded-2xl p-4">
      <div className="flex flex-wrap gap-3">
        <Achievement 
          icon={<Trophy className="w-3 h-3 text-yellow-500" />} 
          text="Top sales 💪" 
          iconBackground="bg-yellow-100"
        />
        <Achievement 
          icon={<Flame className="w-3 h-3 text-orange-500" />} 
          text="Sales streak 🔥" 
          iconBackground="bg-orange-100"
        />
        <Achievement 
          icon={<ThumbsUp className="w-3 h-3 text-yellow-500" />} 
          text="Top review 👍" 
          iconBackground="bg-yellow-100"
        />
      </div>
      
      <div className="flex justify-between items-center mt-4">
        <div className="text-gray-700 font-medium">Work with platforms</div>
        <div className="flex items-center gap-2">
          <div className="bg-pink-500 text-white text-sm font-medium rounded-full px-3 py-1 flex items-center gap-1">
            <span className="text-xs">×</span>
            <span>3</span>
          </div>
          <div className="bg-pink-500 text-white text-sm font-medium rounded-full px-3 py-1">
            $156,841
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;