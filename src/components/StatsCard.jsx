import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

function StatsCard({ title, value, change, description }) {
  return (
    <motion.div
      className="stats-card"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="stats-top">
        <span>{title}</span>
        <ArrowUpRight size={17} />
      </div>

      <h3>{value}</h3>

      <div className="stats-bottom">
        <span className="positive">{change}</span>
        <span className="description">{description}</span>
      </div>
    </motion.div>
  );
}

export default StatsCard;
