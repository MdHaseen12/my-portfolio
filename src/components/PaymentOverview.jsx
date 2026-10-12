import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const paymentData = [
  {
    name: "Paid",
    value: 140000,
    color: "#6255e7",
  },
  {
    name: "Pending",
    value: 129350,
    color: "#a9a3f5",
  },
  {
    name: "Overdue",
    value: 32800,
    color: "#e57373",
  },
];

function formatAmount(value) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function PaymentTooltip({ active, payload }) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  return (
    <div className="payment-tooltip">
      <strong>{payload[0].name}</strong>
      <span>{formatAmount(payload[0].value)}</span>
    </div>
  );
}

function PaymentOverview() {
  return (
    <section className="payment-card">

      <div className="section-heading">
        <div>
          <h2>Payment Overview</h2>
          <p>Current payment distribution</p>
        </div>
      </div>

      <div className="payment-content">

        <div className="donut-wrapper">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>

              <Pie
                data={paymentData}
                dataKey="value"
                nameKey="name"
                innerRadius={62}
                outerRadius={88}
                paddingAngle={3}
                stroke="none"
              >
                {paymentData.map((item) => (
                  <Cell
                    key={item.name}
                    fill={item.color}
                  />
                ))}
              </Pie>

              <Tooltip
                content={<PaymentTooltip />}
              />

            </PieChart>
          </ResponsiveContainer>

          <div className="donut-center">
            <span>Total</span>
            <strong>₹3.02L</strong>
          </div>

        </div>

        <div className="payment-legend">

          {paymentData.map((item) => (
            <div
              className="payment-legend-item"
              key={item.name}
            >
              <div className="payment-label">

                <span
                  className="legend-dot"
                  style={{
                    background: item.color,
                  }}
                />

                <span>{item.name}</span>

              </div>

              <strong>
                {formatAmount(item.value)}
              </strong>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default PaymentOverview;