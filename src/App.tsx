import { useState } from "react";
import Layout from "@/components/report/Layout";
import Search from "@/components/report/search";
import Sales from "@/components/pages/sales";
import ReportHeader from "@/components/report/top";
import Application from "@/components/pages/appUser";

function Report() {
  const [activeView, setActiveView] = useState<"sales" | "reportHeader" | "application">("sales");


  if (activeView === "application") {
    return <Application />;
  }

  return (
    <Layout setActiveView={setActiveView}>
      <Search />
      <div className="flex-1 p-0 md:p-2 transition-all duration-300 bg-gray-100 rounded-4xl dark:text-gray-100 dark:bg-gray-900 m-3">
        {activeView === "sales" && <Sales />}
        {activeView === "reportHeader" && <ReportHeader />}
      </div>
    </Layout>
  );
}

export default Report;
