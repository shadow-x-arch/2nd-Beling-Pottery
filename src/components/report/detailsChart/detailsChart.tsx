import SalesPerformanceOverview from './SalesReps';
function DetailsChart() {
  return (
    <div className="min-h-screen bg-pransparent flex items-center justify-center p-4 md:p-1">
      <div className="w-full max-w-4xl bg-pransparent rounded-3xl shadow-sm overflow-hidden">
        <div className="p-2 md:p-2">
         <SalesPerformanceOverview />
        </div>
      </div> 
    </div>
  );
}

export default DetailsChart;