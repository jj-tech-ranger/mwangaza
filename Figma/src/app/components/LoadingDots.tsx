import { motion } from "motion/react";

export default function LoadingDots() {
  const dotVariants = {
    initial: { opacity: 0.3 },
    animate: { opacity: 1 },
  };

  return (
    <div className="flex items-center gap-[10px]">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: "#D4A017" }}
          variants={dotVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.15,
          }}
        />
      ))}
    </div>
  );
}
