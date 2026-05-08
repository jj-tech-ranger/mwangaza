import { motion } from "motion/react";
import { useEffect } from "react";
const logoSvg = "/imports/mwangaza_logo_final.svg";

interface SplashScreenProps {
  onComplete?: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps = {}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        width: "390px",
        height: "844px",
        backgroundColor: "#FFFDF5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Nunito, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "2px solid #D4A017",
          opacity: 0.3,
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 2,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "2px solid #C8930A",
          opacity: 0.2,
        }}
      />

      {/* Logo */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        style={{ zIndex: 1 }}
      >
        <img src="/imports/mwangaza_logo_final.svg" alt="Mwangaza" style={{ height: "160px", width: "auto" }} />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.5,
        }}
        style={{
          marginTop: "24px",
          fontFamily: "Nunito, sans-serif",
          fontSize: "16px",
          fontWeight: 700,
          color: "#A67C00",
          letterSpacing: "0.5px",
          zIndex: 1,
        }}
      >
        Light Up Your Learning
      </motion.p>

      {/* Loading indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "80px",
          display: "flex",
          gap: "8px",
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
              repeat: Infinity,
            }}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#D4A017",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
