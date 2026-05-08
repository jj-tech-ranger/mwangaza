import GoalSelector from "./GoalSelector";

export default function DailyGoalIllustration() {
  const goalOptions = [
    { label: "5 min", value: 5 },
    { label: "10 min", value: 10 },
    { label: "20 min", value: 20 },
  ];

  return (
    <div className="flex items-center justify-center" style={{ width: "310px", height: "240px" }}>
      <GoalSelector options={goalOptions} defaultValue={10} />
    </div>
  );
}
