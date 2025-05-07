import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { ChevronDown, PlusCircle, Search } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Welcome back, Henry! 👋</h1>
          </div>
          <p className="text-muted-foreground">Ready to smash your sales goals?</p>
        </div>
        <div className="flex items-center gap-2">
      
          <div className="relative w-full md:w-64 lg:w-80">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Type to search here..."
              className="w-full pl-8 bg-background"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="hidden md:flex gap-1">
                Generate Report <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Daily Report</DropdownMenuItem>
              <DropdownMenuItem>Weekly Report</DropdownMenuItem>
              <DropdownMenuItem>Monthly Report</DropdownMenuItem>
              <DropdownMenuItem>Custom Date Range</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="gap-1">
            <PlusCircle className="h-4 w-4" />
            <span className="hidden md:inline">Add New Lead</span>
            <span className="md:hidden">Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
}