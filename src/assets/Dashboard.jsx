import {
  IndianRupee,
  FileText,
  CheckCircle,
  Clock
} from "lucide-react";

import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="stats-grid">

        <StatCard
          title="Total Revenue"
          value="₹4,86,540"
          change="+12.8%"
          description="vs last month"
          icon={IndianRupee}
        />

        <StatCard
          title="Total Invoices"
          value="1,284"
          change="+8.4%"
          description="vs last month"
          icon={FileText}
        />

        <StatCard
          title="Paid Invoices"
          value="₹3,72,860"
          change="+14.2%"
          description="vs last month"
          icon={CheckCircle}
        />

        <StatCard
          title="Outstanding"
          value="₹1,13,680"
          change="-5.6%"
          description="vs last month"
          icon={Clock}
        />

      </div>

    </div>
  );
}

export default Dashboard;

.dashboard {
  width: 100%;
}

.stats-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 17px;

  margin-bottom: 20px;
}

.stat-card {
  background: white;

  border: 1px solid #e8e9ef;

  border-radius: 15px;

  padding: 20px;

  min-height: 165px;

  box-shadow:
    0 5px 20px rgba(25, 25, 40, 0.03);

  transition: box-shadow 0.2s ease;
}

.stat-card:hover {
  box-shadow:
    0 12px 30px rgba(25, 25, 40, 0.08);
}

.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #9296a4;

  margin-bottom: 15px;
}

.stat-icon {
  width: 34px;
  height: 34px;

  border-radius: 9px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f0eeff;

  color: #6255e7;
}

.stat-title {
  color: #858a99;

  font-size: 12px;

  margin-bottom: 7px;
}

.stat-value {
  font-size: 24px;

  font-weight: 700;

  letter-spacing: -0.7px;

  margin-bottom: 9px;
}

.stat-footer {
  display: flex;
  gap: 6px;

  font-size: 10px;

  color: #a0a4af;
}

.stat-change {
  color: #2da76b;

  font-weight: 700;
}