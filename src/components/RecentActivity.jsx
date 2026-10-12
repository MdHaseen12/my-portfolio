import {
  CheckCircle2,
  FilePlus2,
  AlertCircle,
  Clock3,
} from "lucide-react";
import { motion } from "framer-motion";

const activities = [
  {
    icon: CheckCircle2,
    title: "Invoice paid",
    description: "TechNova Solutions • ₹48,500",
    time: "2 hours ago",
    type: "success",
  },
  {
    icon: FilePlus2,
    title: "New invoice created",
    description: "Vertex Digital • ₹72,600",
    time: "5 hours ago",
    type: "info",
  },
  {
    icon: AlertCircle,
    title: "Payment overdue",
    description: "BluePeak Labs • ₹32,800",
    time: "Yesterday",
    type: "danger",
  },
  {
    icon: Clock3,
    title: "Payment pending",
    description: "Orbit Systems • ₹56,750",
    time: "Yesterday",
    type: "warning",
  },
];

function RecentActivity() {
  return (
    <section className="activity-card">

      <div className="section-heading">
        <div>
          <h2>Recent Activity</h2>
          <p>Latest updates from your business</p>
        </div>

        <button className="view-all-button">
          View all
        </button>
      </div>

      <div className="activity-list">

        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <motion.div
              className="activity-item"
              key={activity.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.25,
                delay: index * 0.05,
              }}
            >

              <div
                className={`activity-icon ${activity.type}`}
              >
                <Icon size={16} />
              </div>

              <div className="activity-content">
                <strong>{activity.title}</strong>

                <span>{activity.description}</span>
              </div>

              <time>{activity.time}</time>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}

export default RecentActivity;