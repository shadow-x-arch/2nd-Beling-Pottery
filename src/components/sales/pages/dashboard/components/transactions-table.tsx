import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import {
  ArrowRightLeft,
  ArrowUpDown,
  CreditCard,
  Filter,
  MoreVertical,
  Search,
} from 'lucide-react';
import  Leaderboard from "@/components/sales/pages/dashboard/components/topPerforming";

interface Transaction {
  id: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
  };
  amount: number;
  status: 'completed' | 'failed' | 'pending';
  method: 'card' | 'transfer' | 'paypal';
  date: string;
}

// Sample transactions data
const transactions: Transaction[] = [
  {
    id: 't1',
    customer: {
      name: 'John Brown',
      email: 'john@example.com',
      avatar: 'JB',
    },
    amount: 1800,
    status: 'completed',
    method: 'card',
    date: 'February 12, 2025',
  },
  {
    id: 't2',
    customer: {
      name: 'Kevin Taylor',
      email: 'kevin@example.com',
      avatar: 'KT',
    },
    amount: 950,
    status: 'completed',
    method: 'card',
    date: 'February 12, 2025',
  },
  {
    id: 't3',
    customer: {
      name: 'Chloe Moore',
      email: 'chloe@example.com',
      avatar: 'CM',
    },
    amount: 1000,
    status: 'completed',
    method: 'transfer',
    date: 'February 13, 2025',
  },
  {
    id: 't4',
    customer: {
      name: 'Andrew Roberts',
      email: 'andrew@example.com',
      avatar: 'AR',
    },
    amount: 2000,
    status: 'failed',
    method: 'paypal',
    date: 'February 15, 2025',
  },
  {
    id: 't5',
    customer: {
      name: 'Josh Smith',
      email: 'josh@example.com',
      avatar: 'JS',
    },
    amount: 1200,
    status: 'completed',
    method: 'card',
    date: 'February 17, 2025',
  },
];

const methodIcons = {
  card: <CreditCard className="h-4 w-4 text-muted-foreground" />,
  transfer: <ArrowRightLeft className="h-4 w-4 text-muted-foreground" />,
  paypal: <i className="h-4 w-4 text-muted-foreground">P</i>,
};

export default function TransactionsTable() {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-[70%_30%]">
    <div className="p-1">
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 mt-5">
        <CardTitle className="text-base font-medium">Recent Transactions</CardTitle>
        <div className="flex items-center gap-2">
          <div className="relative w-64 hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="rounded-md border border-input bg-background pl-8 py-2 text-sm w-full dark:bg-gray-900"
            />
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            <span className="hidden sm:inline">Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <ArrowUpDown className="h-4 w-4" />
            <span className="hidden sm:inline">Sort By</span>
          </Button>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-xs text-muted-foreground font-medium">
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Customer Information</th>
                <th className="py-3 px-4 text-left">Amount</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4 whitespace-nowrap">
                    {transaction.date}
                    <div className="text-xs text-muted-foreground">09:00 AM</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="" alt={transaction.customer.name} />
                        <AvatarFallback>{transaction.customer.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{transaction.customer.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {transaction.customer.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium">${transaction.amount}</div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      {methodIcons[transaction.method]}
                      <span className="ml-1 capitalize">
                        {transaction.method === 'card'
                          ? 'Credit Card'
                          : transaction.method === 'transfer'
                          ? 'Bank Transfer'
                          : 'PayPal'}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge
                      variant="outline"
                      className={cn(
                        'rounded-sm capitalize',
                        transaction.status === 'completed'
                          ? 'border-green-500/50 bg-green-500/10 text-green-700'
                          : transaction.status === 'failed'
                          ? 'border-red-500/50 bg-red-500/10 text-red-700'
                          : 'border-yellow-500/50 bg-yellow-500/10 text-yellow-700'
                      )}
                    >
                      {transaction.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="h-8 w-8 p-0"
                          aria-label="Open menu"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Edit transaction</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Cancel transaction
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
    </div>
    <div className="bg-muted p-1">
      <Leaderboard />
      </div>
    </div>

    </>
  );
}