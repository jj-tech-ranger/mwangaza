interface PodiumUserProps {
  rank: 1 | 2 | 3;
  name: string;
  xp: number;
  avatar: string;
}

function PodiumUser({ rank, name, xp, avatar }: PodiumUserProps) {
  const heights = { 1: 80, 2: 60, 3: 44 };
  const avatarSizes = { 1: 52, 2: 44, 3: 44 };
  const platformColors = { 1: "#D4A017", 2: "#FDF0C2", 3: "#FEF5D4" };
  const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };
  const borders = { 1: "3px solid #D4A017", 2: "2px solid #FEF5D4", 3: "2px solid #FEF5D4" };

  return (
    <div className="flex flex-col items-center" style={{ flex: 1 }}>
      {/* Crown for 1st place */}
      {rank === 1 && <div style={{ fontSize: "24px", marginBottom: "4px" }}>👑</div>}
      {rank !== 1 && <div style={{ height: "28px" }} />}

      {/* Avatar */}
      <div
        style={{
          width: `${avatarSizes[rank]}px`,
          height: `${avatarSizes[rank]}px`,
          borderRadius: "50%",
          border: borders[rank],
          backgroundColor: "#FEF5D4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Nunito, sans-serif",
          fontWeight: 900,
          fontSize: rank === 1 ? "20px" : "16px",
          color: "#A67C00",
          marginBottom: "8px",
        }}
      >
        {avatar}
      </div>

      {/* Name */}
      <span
        style={{
          fontFamily: "Nunito, sans-serif",
          fontWeight: 700,
          fontSize: rank === 1 ? "13px" : "12px",
          color: "#2D2006",
          textAlign: "center",
          marginBottom: "4px",
        }}
      >
        {name}
      </span>

      {/* XP */}
      <span
        style={{
          fontFamily: "Nunito, sans-serif",
          fontSize: "12px",
          color: "#A67C00",
          marginBottom: "8px",
        }}
      >
        {xp.toLocaleString()} XP
      </span>

      {/* Platform */}
      <div
        style={{
          width: "100%",
          height: `${heights[rank]}px`,
          backgroundColor: platformColors[rank],
          borderRadius: "12px 12px 0 0",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: "12px",
          fontSize: "20px",
        }}
      >
        {medals[rank]}
      </div>
    </div>
  );
}

export default function Podium() {
  const users = [
    { rank: 2 as const, name: "Kwame", xp: 980, avatar: "KO" },
    { rank: 1 as const, name: "Njeri", xp: 1240, avatar: "NM" },
    { rank: 3 as const, name: "Fatima", xp: 856, avatar: "FA" },
  ];

  return (
    <div className="flex items-end gap-2" style={{ alignItems: "flex-end" }}>
      {users.map((user) => (
        <PodiumUser key={user.rank} {...user} />
      ))}
    </div>
  );
}
