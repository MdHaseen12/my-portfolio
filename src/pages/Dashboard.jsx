import { useState } from "react";
import { motion } from "framer-motion";


import StatsCard from "../components/StatsCard";
import RevenueChart from "../components/RevenueChart";
import InvoiceTable from "../components/InvoiceTable";
import InvoiceDetails from "../components/InvoiceDetails";
import RecentActivity from "../components/RecentActivity";
import PaymentOverview from "../components/PaymentOverview";

function Dashboard() {
  const [selectedInvoice, setSelectedInvoice] = useState(
    null
  );
  
<div className="stats-grid"></div>

useEffect(() => {
  getHealth()
    .then((data) => {
      setBackendStatus(data.status);
    })
    .catch(() => {
      setBackendStatus("offline");
    });
}, []);
<div className="stats-grid">
  
</div>

  return (
    <motion.section
  className="dashboard"
  initial={{
    opacity: 0,
    y: 10,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.35,
  }}
>
    


      <div className="stats-grid">

        <StatsCard
          title="Overdue"
          value="₹24,850"
          change="+12.5%"
          description="from last month"
        />

        <StatsCard
          title="Due within next month"
          value="₹142,560"
          change="+8.2%"
          description="from last month"
        />

        <StatsCard
          title="Average payment time"
          value="16 days"
          change="-3 days"
          description="from last month"
        />

        <StatsCard
          title="Available for payout"
          value="₹186,540"
          change="+14.8%"
          description="from last month"
        />

      </div>


      <RevenueChart />


      <div className="invoice-layout">

        <InvoiceTable
          selectedInvoice={selectedInvoice}
          onSelectInvoice={setSelectedInvoice}
        />

        <InvoiceDetails
          invoice={selectedInvoice}
          onClose={() => setSelectedInvoice(null)}
        />

      </div>
      <div className="analytics-bottom">

  <RecentActivity />

  <PaymentOverview />

</div>

    </motion.section>
  );
}

export default Dashboard;
