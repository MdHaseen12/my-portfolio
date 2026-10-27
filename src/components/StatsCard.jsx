import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function StatsCard({ title, value, change, description }) {
  return (
    <motion.div
      className="stats-card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="stats-card-top">
        <span>{title}</span>
        <div className="stats-icon">
          <ArrowUpRight size={17} />
        </div>
      </div>

      <h2>{value}</h2>

      <div className="stats-card-bottom">
        <span className="stats-change">{change}</span>
        <span className="stats-description">{description}</span>
      </div>
    </motion.div>
  );
}

export default StatsCard;
