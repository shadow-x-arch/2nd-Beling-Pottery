import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from 'lucide-react';
export function Avatars() {
  return ( 
    <>
    <div className="flex items-center gap-2 rounded-full px-4 py-2" >
  <div className="flex items-center bg-white rounded-full  border-gray-200 dark:text-gray-100 dark:bg-gray-900 dark:border-gray-700 border-2">
  <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/10 hover:text-white">
          <Plus />
        </button>
</div>

<div className="flex items-center gap-2 bg-white rounded-full px-2 py-1 border-2 border-gray-200 dark:text-gray-100 dark:bg-gray-900 dark:border-gray-700">
<Avatar className="h-6 w-6">
  <AvatarImage src="https://t4.ftcdn.net/jpg/06/06/47/89/240_F_606478940_p1InKoo7yM7FZs3ZVNACeATvKuejHh47.jpg" />
  <AvatarFallback>BB</AvatarFallback>
</Avatar>
<div className="flex flex-col">
  <span className="text-sm font-semibold">Armin A</span>
</div>
</div>

<div className="flex items-center gap-2 bg-white rounded-full px-2 py-1 border-2 border-gray-200 dark:text-gray-100 dark:bg-gray-900 dark:border-gray-700">
<Avatar className="h-6 w-6">
  <AvatarImage src="https://t3.ftcdn.net/jpg/05/68/47/12/240_F_568471299_oRWnpImJScckS68iWVyhS1v5WCZW17O3.jpg" />
  <AvatarFallback>EE</AvatarFallback>
</Avatar>
<div className="flex flex-col">
  <span className="text-sm font-semibold">Eren Y</span>
</div>
</div>

<div className="flex items-center gap-2 bg-white rounded-full px-2 py-1 border-2 border-gray-200 dark:text-gray-100 dark:bg-gray-900 dark:border-gray-700">
<Avatar className="h-6 w-6">
  <AvatarImage src="https://t4.ftcdn.net/jpg/05/40/62/43/240_F_540624331_koFaCm57r3X4Vi7wdGmtthrw5oB0H6Ye.jpg" />
  <AvatarFallback>MM</AvatarFallback>
</Avatar>
<div className="flex flex-col">
  <span className="text-sm font-semibold">Mikasa A</span>
</div>
</div>


</div>
</>
);
}
export default Avatars;