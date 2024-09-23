import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import StatCards from "../components/StatCards";
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import SalesPageOverviewChart from "../components/SalesPageOverviewChart";
import DailSaleTrend from "../components/DailSaleTrend";
import SalesByCategoryChart from "../components/SalesByCategoryChart";

const salesStats = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversionRate: "3.45%",
  salesGrowth: "12.3%",
};

const SalePage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 ">
      <Header title="Sales" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCards
            name="Total Revenue"
            icon={DollarSign}
            value={salesStats.totalRevenue}
            color="#6366F1"
          />
          <StatCards
            name="Avg. Order Value"
            icon={ShoppingCart}
            value={salesStats.averageOrderValue}
            color="#10B981"
          />
          <StatCards
            name="Conversion Rate"
            icon={TrendingUp}
            value={salesStats.conversionRate}
            color="#F59E0B"
          />
          <StatCards
            name="Sales Growth"
            icon={CreditCard}
            value={salesStats.salesGrowth}
            color="#EF4444"
          />
        </motion.div>
        <SalesPageOverviewChart />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesByCategoryChart />
          <DailSaleTrend />
        </div>
      </main>
    </div>
  );
};

export default SalePage;
