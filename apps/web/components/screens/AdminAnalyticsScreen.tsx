import { TrendingUp, Users, BookOpen, Award, Download } from "lucide-react";
import AdminSidebar from "@/components/shared/AdminSidebar";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface AdminAnalyticsScreenProps {
  onNavigate?: (screen: string) => void;
}

export default function AdminAnalyticsScreen({ onNavigate }: AdminAnalyticsScreenProps = {}) {
  const userGrowthData = [
    { id: "jan", month: "Jan", users: 245 },
    { id: "feb", month: "Feb", users: 412 },
    { id: "mar", month: "Mar", users: 687 },
    { id: "apr", month: "Apr", users: 921 },
    { id: "may", month: "May", users: 1248 },
  ];

  const engagementData = [
    { id: "mon", day: "Mon", active: 180, completed: 420 },
    { id: "tue", day: "Tue", active: 210, completed: 580 },
    { id: "wed", day: "Wed", active: 245, completed: 710 },
    { id: "thu", day: "Thu", active: 198, completed: 650 },
    { id: "fri", day: "Fri", active: 267, completed: 820 },
    { id: "sat", day: "Sat", active: 189, completed: 590 },
    { id: "sun", day: "Sun", active: 145, completed: 480 },
  ];

  const courseDistribution = [
    { name: "Mathematics", value: 1248, color: "#D4A017" },
    { name: "English", value: 0, color: "#C8930A" },
    { name: "Kiswahili", value: 0, color: "#A67C00" },
    { name: "Life Skills", value: 0, color: "#FDF0C2" },
  ];

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
      <AdminSidebar activeNav="analytics" onNavigate={onNavigate} />

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
          <div>
            <h1
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 900,
                fontSize: "28px",
                color: "#2D2006",
              }}
            >
              Analytics Dashboard
            </h1>
            <p
              style={{
                marginTop: "4px",
                fontFamily: "Nunito, sans-serif",
                fontSize: "14px",
                color: "#7A6020",
              }}
            >
              Platform insights and performance metrics
            </p>
          </div>

          <button
            style={{
              height: "44px",
              backgroundColor: "#D4A017",
              color: "#FFFFFF",
              fontFamily: "Nunito, sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              padding: "0 24px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Download size={18} />
            Export Report
          </button>
        </div>

        {/* KPI Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          {[
            { icon: Users, label: "Total Users", value: "1,248", trend: "+12%", color: "#D4A017" },
            { icon: BookOpen, label: "Lessons Completed", value: "8,402", trend: "+8%", color: "#22C55E" },
            { icon: TrendingUp, label: "Active Today", value: "234", trend: "+5%", color: "#C8930A" },
            { icon: Award, label: "Certificates Issued", value: "89", trend: "+15%", color: "#A67C00" },
          ].map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(212, 160, 23, 0.15)",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: "0 4px 16px rgba(212, 160, 23, 0.08)",
                }}
              >
                <div className="flex items-start justify-between" style={{ marginBottom: "12px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      backgroundColor: "#FEF5D4",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Icon size={22} color={kpi.color} />
                  </div>
                  <span
                    style={{
                      fontFamily: "Nunito, sans-serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#22C55E",
                    }}
                  >
                    {kpi.trend}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "28px",
                    fontWeight: 900,
                    color: kpi.color,
                    marginBottom: "4px",
                  }}
                >
                  {kpi.value}
                </h3>
                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "13px",
                    color: "#7A6020",
                  }}
                >
                  {kpi.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Charts Row 1 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          {/* User Growth Chart */}
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
              User Growth (Last 5 Months)
            </h3>
            <ResponsiveContainer width="100%" height={200} key="user-growth-chart">
              <LineChart data={userGrowthData} margin={{ top: 5, right: 5, left: -15, bottom: 5 }}>
                <CartesianGrid key="ug-grid" strokeDasharray="3 3" stroke="#FEF5D4" vertical={false} />
                <XAxis
                  key="ug-xaxis"
                  dataKey="id"
                  tick={{ fill: "#7A6020", fontSize: 12 }}
                  axisLine={{ stroke: "#FEF5D4" }}
                  tickLine={false}
                  tickFormatter={(value) => {
                    const item = userGrowthData.find(d => d.id === value);
                    return item ? item.month : value;
                  }}
                />
                <YAxis
                  key="ug-yaxis"
                  tick={{ fill: "#7A6020", fontSize: 12 }}
                  axisLine={{ stroke: "#FEF5D4" }}
                  tickLine={false}
                />
                <Tooltip
                  key="ug-tooltip"
                  contentStyle={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #D4A017",
                    borderRadius: "8px",
                    fontFamily: "Nunito, sans-serif",
                  }}
                />
                <Line
                  key="ug-line"
                  type="monotone"
                  dataKey="users"
                  stroke="#D4A017"
                  strokeWidth={3}
                  dot={{ fill: "#D4A017", strokeWidth: 2, r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Course Distribution */}
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
              Course Enrollment
            </h3>
            <div className="flex flex-col gap-3">
              {courseDistribution.map((course, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between" style={{ marginBottom: "6px" }}>
                    <span
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "13px",
                        color: "#7A6020",
                      }}
                    >
                      {course.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: course.color,
                      }}
                    >
                      {course.value}
                    </span>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "8px",
                      backgroundColor: "#FEF5D4",
                      borderRadius: "100px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${(course.value / 1248) * 100}%`,
                        height: "100%",
                        backgroundColor: course.color,
                        borderRadius: "100px",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engagement Chart */}
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
            Daily Engagement (This Week)
          </h3>
          <ResponsiveContainer width="100%" height={220} key="engagement-chart">
            <BarChart data={engagementData} margin={{ top: 5, right: 5, left: -15, bottom: 5 }}>
              <CartesianGrid key="eng-grid" strokeDasharray="3 3" stroke="#FEF5D4" vertical={false} />
              <XAxis
                key="eng-xaxis"
                dataKey="id"
                tick={{ fill: "#7A6020", fontSize: 12 }}
                axisLine={{ stroke: "#FEF5D4" }}
                tickLine={false}
                tickFormatter={(value) => {
                  const item = engagementData.find(d => d.id === value);
                  return item ? item.day : value;
                }}
              />
              <YAxis
                key="eng-yaxis"
                tick={{ fill: "#7A6020", fontSize: 12 }}
                axisLine={{ stroke: "#FEF5D4" }}
                tickLine={false}
              />
              <Tooltip
                key="eng-tooltip"
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D4A017",
                  borderRadius: "8px",
                  fontFamily: "Nunito, sans-serif",
                }}
              />
              <Legend
                key="eng-legend"
                wrapperStyle={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "12px",
                }}
              />
              <Bar key="eng-bar-active" dataKey="active" fill="#C8930A" radius={[8, 8, 0, 0]} maxBarSize={50} name="Active Users" />
              <Bar key="eng-bar-completed" dataKey="completed" fill="#D4A017" radius={[8, 8, 0, 0]} maxBarSize={50} name="Lessons Completed" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
