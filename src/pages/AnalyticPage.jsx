import Header from "../components/Header";

import OverviewCards from "../components/OverviewCards";
import RevenueChart from "../components/RevenueChart";
import ChannelPerformance from "../components/ChannelPerformance";
import ProductPerformance from "../components/ProductPerformance";

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Analytics"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <OverviewCards />
        <RevenueChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ChannelPerformance />
          <ProductPerformance />
        </div>
      </main>
    </div>
  );
};
export default AnalyticsPage;
