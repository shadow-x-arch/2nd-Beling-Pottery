import { Toaster } from '@/components/ui/toaster';
import DashboardHeader from './components/dashboard-header';
import KpiCards from './components/kpi-cards';
import RevenueChart from './components/revenue-chart';
import TransactionsTable from './components/transactions-table';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 rounded-2xl">
      <div className="container mx-auto px-4 py-6">
        <DashboardHeader />
        <KpiCards />
        <RevenueChart />
        <TransactionsTable />
      </div>
      <Toaster />
    </div>
  );
}