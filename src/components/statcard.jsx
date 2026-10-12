import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function StatsCard({
  title,
  value,
  change,
  description,
}) {
  return (
    <motion.div
      className="stats-card"
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="stats-card-top">

        <span>{title}</span>

        <div className="stats-icon">
          <ArrowUpRight size={17} />
        </div>

      </div>

      <motion.h2
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.35,
          delay: 0.1,
        }}
      >
        {value}
      </motion.h2>

      <div className="stats-card-bottom">

        <span className="stats-change">
          {change}
        </span>

        <span className="stats-description">
          {description}
        </span>

      </div>

    </motion.div>
  );
}

export default StatsCard;