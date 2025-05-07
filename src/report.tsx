
import Layout from "@/components/report/Layout";
function Report() {
  return (
    <Layout >
      <div className="">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border dark:border-gray-700">
            <h2 className="text-lg font-medium mb-4">Welcome Back</h2>
            <p className="text-gray-600 dark:text-gray-300">
              This is your new dashboard with a beautiful responsive sidebar and dark mode support.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border dark:border-gray-700">
            <h2 className="text-lg font-medium mb-4">Quick Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <div className="text-blue-600 dark:text-blue-400 text-lg font-semibold">125</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">New Users</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="text-green-600 dark:text-green-400 text-lg font-semibold">$12,550</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Revenue</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border dark:border-gray-700">
          <h2 className="text-lg font-medium mb-4">Features</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Responsive sidebar</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Dark mode toggle</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Smooth transitions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✓</span>
              <span>Mobile-friendly navigation</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Report;
