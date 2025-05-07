import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// Sample data for the chart
const data = [
  { name: 'Monday', value: 400 },
  { name: 'Tuesday', value: 300 },
  { name: 'Wednesday', value: 500 },
  { name: 'Thursday', value: 450 },
  { name: 'Friday', value: 470 },
  { name: 'Saturday', value: 520 },
  { name: 'Sunday', value: 580 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-3 border shadow-sm rounded-lg">
        <p className="text-sm font-semibold">Saturday, 9:00 PM</p>
        <p className="text-lg font-bold">${Number(payload[0].value).toLocaleString()}</p>
      </div>
    );
  }

  return null;
};

export default function RevenueChart() {
  return (
    <Card className="mb-8 ">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium mt-8">Revenue Breakdown</CardTitle>
        <Select defaultValue="7days">
          <SelectTrigger className="w-36 h-8">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent className="dark:bg-gray-900">
            <SelectItem value="24hours">Last 24 hours</SelectItem>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="custom">Custom range</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <Separator />
      <CardContent className="p-0 pt-6">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%" >
            <AreaChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}