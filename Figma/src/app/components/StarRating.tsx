import { motion } from "motion/react";
import { Star } from "lucide-react";

interface StarRatingProps {
  filled: number;
  total: number;
}

export default function StarRating({ filled, total }: StarRatingProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: total }, (_, i) => {
        const isFilled = i < filled;
        return (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: i * 0.15,
              duration: 0.3,
              type: "spring",
              stiffness: 200,
            }}
          >
            <Star
              size={28}
              fill={isFilled ? "#D4A017" : "none"}
              stroke={isFilled ? "#D4A017" : "rgba(212, 160, 23, 0.3)"}
              strokeWidth={2}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
