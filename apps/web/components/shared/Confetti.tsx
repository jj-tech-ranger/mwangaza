import { motion } from "motion/react";

export default function Confetti() {
  const colors = ["#D4A017", "#FDF0C2", "#C8930A", "#FFFFFF"];

  const confettiPieces = Array.from({ length: 30 }, (_, i) => {
    const type = i % 3 === 0 ? "circle" : i % 3 === 1 ? "rect" : "star";
    const color = colors[i % colors.length];
    const left = Math.random() * 100;
    const delay = Math.random() * 2;
    const duration = 3 + Math.random() * 2;
    const rotation = Math.random() * 360;

    return { type, color, left, delay, duration, rotation, id: i };
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          initial={{ y: -20, x: 0, rotate: piece.rotation }}
          animate={{
            y: 900,
            x: [0, Math.random() * 40 - 20, 0],
            rotate: piece.rotation + 360,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: `${piece.left}%`,
            top: 0,
          }}
        >
          {piece.type === "circle" && (
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: piece.color,
              }}
            />
          )}
          {piece.type === "rect" && (
            <div
              style={{
                width: "4px",
                height: "10px",
                backgroundColor: piece.color,
              }}
            />
          )}
          {piece.type === "star" && (
            <svg width="8" height="8" viewBox="0 0 8 8">
              <polygon points="4,0 5,3 8,4 5,5 4,8 3,5 0,4 3,3" fill={piece.color} />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}
