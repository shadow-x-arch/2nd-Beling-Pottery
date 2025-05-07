import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown } from "lucide-react";
import { AmountComponent } from "@/components/report/detailsChart/amountchart"

const platforms = [
  { name: "Dribbble", amount: "$227,459", percentage: "43%", image: "https://cdn-icons-png.flaticon.com/128/179/179316.png" },
  { name: "Instagram", amount: "$142,823", percentage: "27%", image: "https://cdn-icons-png.flaticon.com/128/1409/1409946.png" },
  { name: "Behance", amount: "$89,935", percentage: "17%", image: "https://cdn-icons-png.flaticon.com/128/3536/3536806.png" },
  { name: "Google", amount: "$37,028", percentage: "7%", image: "https://cdn-icons-png.flaticon.com/128/281/281764.png" },
];



export function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
      {/* Card 1: Platform Value List */}
      <Card className="rounded-2xl p-4 ">
        <CardHeader className="flex flex-row justify-between items-center p-0 mb-4">
          <CardTitle className="text-base font-semibold ">Dribbble</CardTitle>
          <Button variant="outline" className="h-8 px-3 rounded-full text-xs">
            Filters
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="flex flex-col gap-3 p-0">
          {platforms.map((platform, index) => (
            <div key={index} className="flex items-center justify- bg-white rounded-xl p-1 w-50 dark:text-gray-100 dark:bg-gray-800">
              <div className="flex items-center gap-3">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={platform.image} />
                  <AvatarFallback>{platform.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{platform.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold">{platform.amount}</span>
                <span className="text-xs text-muted-foreground">{platform.percentage}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Card 2: Bar Chart by Category */}
      <Card className="rounded-2xl p-1 flex flex-col">
        <CardHeader className="flex flex-row justify-between items-center  mb-1">
          <CardTitle className="text-base font-semibold">Deals Amount</CardTitle>
          <Button variant="outline" className="h-8 px-3 rounded-full text-xs">
            Filters
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent className="flex-1 p-1   mt-10">
          <AmountComponent  />
        </CardContent>
      </Card>

      {/* Card 3: Platform Value + Tabs + Revenue Chart */}
      <Card className="rounded-2xl p-0 col-span-1 md:col-span-2 xl:col-span-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 p-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://cdn-icons-png.flaticon.com/128/3670/3670074.png" />
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Platform value</p>
              <h2 className="text-lg font-semibold">Dribbble</h2>
            </div>
          </div>

          <Tabs defaultValue="revenue" className="w-full md:w-auto">
            <TabsList className="bg-muted rounded-full p-1 flex justify-center md:justify-start">
              <TabsTrigger value="revenue" className="rounded-full text-xs px-4">Revenue</TabsTrigger>
              <TabsTrigger value="leads" className="rounded-full text-xs px-4">Leads</TabsTrigger>
              <TabsTrigger value="wl" className="rounded-full text-xs px-4">W/L</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row gap-1">
            {/* Left Side */}
            <div className="bg-pink-500 text-white rounded-tr-2xl rounded-bl-2xl p-4 w-full md:w-1/4">
              <div className="text-xs uppercase mb-2">Average monthly</div>
              <div className="text-2xl font-bold">$18,552</div>
              <div className="text-xs mt-4">Leads<br />373 yr / 276</div>
              <div className="text-xs mt-4">Win/Loss<br />16% 51/318</div>
            </div>

            {/* Right Side */}
            <div className="flex-1 mb-1">
            <AmountComponent />
            </div>
          </div>
        </CardContent>

      </Card>
    </div>
  );
}

export default DashboardCards;
