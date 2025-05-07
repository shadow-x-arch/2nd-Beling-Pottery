"use client"

import { Card } from "@/components/ui/card-chart"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  CardContent,

} from "@/components/ui/card-chart"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", behance: 186, dribbble: 80 },
  { month: "February", behance: 305, dribbble: 200 },
  { month: "March", behance: 237, dribbble: 120 },
  { month: "April", behance: 73, dribbble: 190 },
  { month: "May", behance: 209, dribbble: 130 },
  { month: "June", behance: 214, dribbble: 140 },
]

const chartConfig = {
  behance: {
    label: "Behance",
    color: "#FF5F8EDD",
  },
  dribbble: {
    label: "Dribbble",
    color: "#76bfde",
  },
} satisfies ChartConfig

export function SalesChart() {
  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillBehance" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-behance)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="90%"
                  stopColor="var(--color-behance)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillDribbble" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-dribbble)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-dribbble)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="dribbble"
              type="natural"
              fill="url(#fillDribbble)"
              fillOpacity={0.4}
              stroke="var(--color-dribbble)"
              stackId="a"
            />
            <Area
              dataKey="behance"
              type="natural"
              fill="url(#fillBehance)"
              fillOpacity={0.4}
              stroke="var(--color-behance)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}


export default SalesChart;