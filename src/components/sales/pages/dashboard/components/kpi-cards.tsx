import { Card, CardContent } from '@/components/ui/card';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    positive: boolean;
  };
  additionalInfo?: string;
  className?: string;
}

function StatCard({ title, value, change, additionalInfo, className }: StatCardProps) {
  return (
    <Card className={cn(className)}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h2 className="text-3xl font-bold mt-2">{value}</h2>
          </div>
          <div className="flex items-center bg-muted/30 px-2.5 py-1 rounded-md">
            {change.positive ? (
              <ArrowUpIcon className="h-4 w-4 text-green-500 mr-1" />
            ) : (
              <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
            )}
            <span
              className={cn(
                'text-sm font-medium',
                change.positive ? 'text-green-500' : 'text-red-500'
              )}
            >
              {change.value}
            </span>
          </div>
        </div>
        {additionalInfo && (
          <p className="text-xs text-muted-foreground mt-2">{additionalInfo}</p>
        )}
      </CardContent>
    </Card>
  );
}

export default function KpiCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <StatCard
        title="Total Sales"
        value="$1.92M"
        change={{
          value: '+15%',
          positive: true,
        }}
        additionalInfo="Increased +$251.2K from last week"
        className="bg-gray-900 text-white dark:bg-black"
      />
      <StatCard
        title="Conversion Rate"
        value="8.5%"
        change={{
          value: '2.3%',
          positive: true,
        }}
        additionalInfo="Increased +0.32% from last week"
      />
      <StatCard
        title="Deals Closed"
        value="24"
        change={{
          value: '18%',
          positive: true,
        }}
        additionalInfo="Increased +3 deals this week"
      />
      <StatCard
        title="Revenue Growth"
        value="+15%"
        change={{
          value: '+2.7%',
          positive: true,
        }}
        additionalInfo="Increased +0.5% from last week"
      />
    </div>
  );
}
