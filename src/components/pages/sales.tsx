import { ThemeProvider } from '@/components/theme-provider';
import Dashboard from '@/components/sales/pages/dashboard';
function sales() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Dashboard />
    </ThemeProvider>
  );
}

export default sales;