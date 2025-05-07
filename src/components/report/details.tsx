import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RevenueBar() {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 p-2 bg-gray-100 rounded-xl dark:text-gray-100 dark:bg-gray-900">
        <div className="flex items-center gap-4 bg-gray-300 p-1 rounded-full dark:text-gray-100 dark:bg-gray-950">
      {/* Revenue Items */}
      <div className="flex items-center gap-2 bg-white rounded-full px-1 py-1 dark:text-gray-100 dark:bg-gray-800">
        <Avatar className="h-6 w-6">
          <AvatarImage src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <AvatarFallback>AA</AvatarFallback>
        </Avatar>
        <div className="flex ">
          <span className=" flex text-sm font-semibold pr-25">$209,633</span>
          <span className="text-xs text-muted-foreground">39.63%</span>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-white rounded-full px-1 py-1 dark:text-gray-100 dark:bg-gray-800">
        <Avatar className="h-6 w-6">
          <AvatarImage src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <AvatarFallback>BB</AvatarFallback>
        </Avatar>
        <div className="flex">
          <span className=" flex text-sm font-semibold pr-25">$156,841</span>
          <span className="text-xs text-muted-foreground">29.65%</span>
        </div>
      </div>

      <div className="flex items-center gap-2 bg-white rounded-full px-1 py-1 dark:text-gray-100 dark:bg-gray-800">
        <Avatar className="h-6 w-6">
          <AvatarImage src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <AvatarFallback>CC</AvatarFallback>
        </Avatar>
        <div className="flex">
          <span className="flex text-sm font-semibold pr-25">$117,115</span>
          <span className="text-xs text-muted-foreground">22.14%</span>
        </div>
      </div>

      <div className="flex items-center gap-2  text-black rounded-full px-1 py-1 ">
        <Avatar className="h-6 w-6 dark:bg-gray-800">
          <AvatarImage src="" />
          <AvatarFallback>C</AvatarFallback>
        </Avatar>
        <div className="flex dark:text-gray-100">
        <span className="flex text-sm font-semibold pr-5">$117,115</span>
          <span className="text-xs text-muted-foreground">8.58%</span>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />
      </div>
      {/* Details Button */}
      <Button className="rounded-full px-6">Details</Button>
    </div>
  );
}
export default RevenueBar;