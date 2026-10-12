import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 85000 },
  { month: "Feb", revenue: 110000 },
  { month: "Mar", revenue: 98000 },
  { month: "Apr", revenue: 145000 },
  { month: "May", revenue: 132000 },
  { month: "Jun", revenue: 168000 },
  { month: "Jul", revenue: 155000 },
  { month: "Aug", revenue: 190000 },
  { month: "Sep", revenue: 178000 },
  { month: "Oct", revenue: 215000 },
  { month: "Nov", revenue: 202000 },
  { month: "Dec", revenue: 238000 },
];

function formatCurrency(value) {
  return `₹${(value / 1000).toFixed(0)}K`;
}

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="chart-tooltip">
      <p>{label}</p>
      <strong>
        ₹{payload[0].value.toLocaleString("en-IN")}
      </strong>
    </div>
  );
}

function RevenueChart() {
  return (
    <section className="revenue-card">

      <div className="revenue-header">

        <div>
          <h2>Revenue Analytics</h2>
          <p>Monthly revenue performance</p>
        </div>

        <select className="year-select" defaultValue="2026">
          <option value="2026">2026</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>

      </div>

      <div className="revenue-summary">
        <div>
          <span>Total Revenue</span>
          <strong>₹18.26L</strong>
        </div>

        <div className="revenue-growth">
          <span>+18.6%</span>
          <small>vs last year</small>
        </div>
      </div>

      <div className="chart-wrapper">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart
            data={revenueData}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >

            <defs>
              <linearGradient
                id="revenueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#6255e7"
                  stopOpacity={0.28}
                />

                <stop
                  offset="100%"
                  stopColor="#6255e7"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#ececf2"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#9295a1",
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#9295a1",
                fontSize: 12,
              }}
              tickFormatter={formatCurrency}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#c9c5f8",
                strokeDasharray: "4 4",
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#6255e7"
              strokeWidth={3}
              fill="url(#revenueGradient)"
              dot={false}
              activeDot={{
                r: 6,
                strokeWidth: 3,
                stroke: "#ffffff",
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </section>
  );
}

export default RevenueChart;
