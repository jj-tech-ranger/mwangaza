import { Users, BookCheck, UserCheck, Award, Plus } from "lucide-react";
import AdminSidebar from "@/components/shared/AdminSidebar";
import StatCard from "@/components/shared/StatCard";
import CourseTable from "@/components/shared/CourseTable";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface AdminDashboardProps {
  onNavigate?: (screen: string) => void;
}

export default function AdminDashboard({ onNavigate }: AdminDashboardProps = {}) {
  const chartData: { id: string; day: string; lessons: number }[] = [];
  const xpDistribution: Array<{ label: string; count: number; color: string }> = [];

  return (
    <div
      className="flex"
      style={{
        width: "1440px",
        height: "900px",
        backgroundColor: "#FFFDF5",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      {/* Sidebar */}
      <AdminSidebar activeNav="overview" onNavigate={onNavigate} />

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: "32px",
          overflowY: "auto",
        }}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between" style={{ marginBottom: "28px" }}>
          <h1
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "28px",
              color: "#2D2006",
            }}
          >
            Dashboard Overview
          </h1>

          <div className="flex items-center gap-3">
            <button
              style={{
                height: "40px",
                backgroundColor: "#D4A017",
                color: "#FFFFFF",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                fontWeight: 700,
                padding: "0 20px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <Plus size={18} />
              Add Course
            </button>
          </div>
        </div>

        {/* Stat Cards */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <StatCard icon={Users} label="Total Users" value={null} />
          <StatCard icon={BookCheck} label="Lessons Completed" value={null} />
          <StatCard icon={UserCheck} label="Active Today" value={null} />
          <StatCard icon={Award} label="Certificates Issued" value={null} />
        </div>

        {/* Course Table */}
        <CourseTable />

        {/* Charts */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "2fr 1fr",
            gap: "16px",
            marginTop: "24px",
          }}
        >
          {/* Bar Chart */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(212, 160, 23, 0.15)",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 4px 16px rgba(212, 160, 23, 0.08)",
            }}
          >
            <h3
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 900,
                fontSize: "16px",
                color: "#2D2006",
                marginBottom: "16px",
              }}
            >
              Daily Lessons Completed
            </h3>
            <ResponsiveContainer width="100%" height={200} key="daily-lessons-chart">
              <BarChart data={chartData} margin={{ top: 5, right: 5, left: -15, bottom: 5 }}>
                <CartesianGrid key="grid" strokeDasharray="3 3" stroke="#FEF5D4" vertical={false} />
                <XAxis
                  key="x-axis"
                  dataKey="id"
                  tick={{ fill: "#7A6020", fontSize: 12 }}
                  axisLine={{ stroke: "#FEF5D4" }}
                  tickLine={false}
                  tickFormatter={(value) => {
                    const item = chartData.find(d => d.id === value);
                    return item ? item.day : value;
                  }}
                />
                <YAxis
                  key="y-axis"
                  tick={{ fill: "#7A6020", fontSize: 12 }}
                  axisLine={{ stroke: "#FEF5D4" }}
                  tickLine={false}
                />
                <Tooltip
                  key="tooltip"
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #D4A017",
                    borderRadius: "8px",
                    fontFamily: "Nunito, sans-serif",
                  }}
                  cursor={{ fill: "rgba(212, 160, 23, 0.1)" }}
                  labelFormatter={(value) => {
                    const item = chartData.find(d => d.id === value);
                    return item ? item.day : value;
                  }}
                />
                <Bar
                  key="lessons-bar"
                  dataKey="lessons"
                  fill="#D4A017"
                  radius={[8, 8, 0, 0]}
                  maxBarSize={50}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* XP Distribution */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(212, 160, 23, 0.15)",
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 4px 16px rgba(212, 160, 23, 0.08)",
            }}
          >
            <h3
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 900,
                fontSize: "16px",
                color: "#2D2006",
                marginBottom: "16px",
              }}
            >
              XP Distribution
            </h3>
            <div className="flex flex-col gap-3">
              {xpDistribution.length === 0 && <div style={{ height: "96px" }} />}
              {xpDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "3px",
                        backgroundColor: item.color,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "13px",
                        color: "#7A6020",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#D4A017",
                    }}
                  >
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
