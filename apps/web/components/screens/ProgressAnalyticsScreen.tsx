import { ArrowLeft } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import BottomNav from "@/components/shared/BottomNav";
import type { ComponentType, CSSProperties } from "react";

interface ProgressAnalyticsScreenProps {
  onNavigate?: (screen: string) => void;
}

type WeeklyXpPoint = { day: string; xp: number };

type MonthlyProgressPoint = { week: string; lessons: number };

type StatItem = {
  icon: ComponentType<{ size?: number; color?: string; style?: CSSProperties }>;
  value: string;
  label: string;
};

type Insight = { label: string; value: string; sublabel: string };

type MonthlyGoal = { percent: number; label: string };

export default function ProgressAnalyticsScreen({ onNavigate }: ProgressAnalyticsScreenProps = {}) {
  const weeklyXP: WeeklyXpPoint[] = [];
  const monthlyProgress: MonthlyProgressPoint[] = [];
  const stats: StatItem[] = [];
  const insights: Insight[] = [];
  let weeklyXpSummary: string | null = null;
  let monthlyGoal: MonthlyGoal | null = null;

  return (
    <div
      style={{
        width: "390px",
        height: "844px",
        backgroundColor: "#FFFDF5",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Nunito, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#D4A017",
          padding: "16px 20px 24px",
        }}
      >
        <div className="flex items-center gap-3" style={{ marginBottom: "20px" }}>
          <button
            onClick={() => onNavigate?.("profile")}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={20} color="#FFFFFF" />
          </button>
          <h1
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "22px",
              color: "#FFFFFF",
            }}
          >
            Your Progress
          </h1>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "16px",
                  padding: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <Icon size={24} color="#FFFFFF" style={{ marginBottom: "8px" }} />
                <h3
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "24px",
                    fontWeight: 900,
                    color: "#FFFFFF",
                    marginBottom: "4px",
                  }}
                >
                  {stat.value}
                </h3>
                <p
                  style={{
                    fontFamily: "Nunito, sans-serif",
                    fontSize: "12px",
                    color: "rgba(255, 255, 255, 0.9)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
        }}
      >
        {/* Weekly XP Chart */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1.5px solid rgba(212, 160, 23, 0.2)",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "16px",
          }}
        >
          <div className="flex items-center justify-between" style={{ marginBottom: "16px" }}>
            <h2
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 900,
                fontSize: "16px",
                color: "#2D2006",
              }}
            >
              Weekly XP
            </h2>
            {weeklyXpSummary && (
              <div
                style={{
                  backgroundColor: "#FEF5D4",
                  color: "#A67C00",
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  padding: "4px 12px",
                  borderRadius: "100px",
                }}
              >
                {weeklyXpSummary}
              </div>
            )}
          </div>
          <ResponsiveContainer width="100%" height={180} key="weekly-xp-chart">
            <BarChart data={weeklyXP} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid key="wxp-grid" strokeDasharray="3 3" stroke="#FEF5D4" vertical={false} />
              <XAxis
                key="wxp-xaxis"
                dataKey="day"
                tick={{ fill: "#7A6020", fontSize: 12 }}
                axisLine={{ stroke: "#FEF5D4" }}
                tickLine={false}
              />
              <YAxis
                key="wxp-yaxis"
                tick={{ fill: "#7A6020", fontSize: 12 }}
                axisLine={{ stroke: "#FEF5D4" }}
                tickLine={false}
              />
              <Tooltip
                key="wxp-tooltip"
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D4A017",
                  borderRadius: "8px",
                  fontFamily: "Nunito, sans-serif",
                }}
                cursor={{ fill: "rgba(212, 160, 23, 0.1)" }}
              />
              <Bar key="wxp-bar" dataKey="xp" fill="#D4A017" radius={[8, 8, 0, 0]} maxBarSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Lessons */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1.5px solid rgba(212, 160, 23, 0.2)",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "16px",
          }}
        >
          <h2
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "16px",
              color: "#2D2006",
              marginBottom: "16px",
            }}
          >
            Monthly Lessons
          </h2>
          <ResponsiveContainer width="100%" height={180} key="monthly-lessons-chart">
            <BarChart data={monthlyProgress} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
              <CartesianGrid key="ml-grid" strokeDasharray="3 3" stroke="#FEF5D4" vertical={false} />
              <XAxis
                key="ml-xaxis"
                dataKey="week"
                tick={{ fill: "#7A6020", fontSize: 12 }}
                axisLine={{ stroke: "#FEF5D4" }}
                tickLine={false}
              />
              <YAxis
                key="ml-yaxis"
                tick={{ fill: "#7A6020", fontSize: 12 }}
                axisLine={{ stroke: "#FEF5D4" }}
                tickLine={false}
              />
              <Tooltip
                key="ml-tooltip"
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D4A017",
                  borderRadius: "8px",
                  fontFamily: "Nunito, sans-serif",
                }}
              />
              <Bar
                key="ml-bar"
                dataKey="lessons"
                fill="#C8930A"
                radius={[8, 8, 0, 0]}
                maxBarSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Study Insights */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1.5px solid rgba(212, 160, 23, 0.2)",
            borderRadius: "20px",
            padding: "20px",
            marginBottom: "16px",
          }}
        >
          <h2
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "16px",
              color: "#2D2006",
              marginBottom: "16px",
            }}
          >
            Study Insights
          </h2>
          <div className="flex flex-col gap-3">
            {insights.length === 0 && <div style={{ height: "96px" }} />}
            {insights.map((insight, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#FEF5D4",
                  borderRadius: "12px",
                  padding: "16px",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "13px",
                        color: "#7A6020",
                        marginBottom: "4px",
                      }}
                    >
                      {insight.label}
                    </p>
                    <h3
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "18px",
                        fontWeight: 900,
                        color: "#2D2006",
                        marginBottom: "2px",
                      }}
                    >
                      {insight.value}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontSize: "12px",
                        color: "#A67C00",
                      }}
                    >
                      {insight.sublabel}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Goal */}
        <div
          style={{
            backgroundColor: "#FFFFFF",
            border: "1.5px solid rgba(212, 160, 23, 0.2)",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <div className="flex items-center justify-between" style={{ marginBottom: "12px" }}>
            <h2
              style={{
                fontFamily: "Nunito, sans-serif",
                fontWeight: 900,
                fontSize: "16px",
                color: "#2D2006",
              }}
            >
              Monthly Goal
            </h2>
            {monthlyGoal && (
              <span
                style={{
                  fontFamily: "Nunito, sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#D4A017",
                }}
              >
                {monthlyGoal.percent}%
              </span>
            )}
          </div>
          <div
            style={{
              width: "100%",
              height: "12px",
              backgroundColor: "#FEF5D4",
              borderRadius: "100px",
              overflow: "hidden",
              marginBottom: "8px",
            }}
          >
            {monthlyGoal && (
              <div
                style={{
                  width: `${monthlyGoal.percent}%`,
                  height: "100%",
                  backgroundColor: "#D4A017",
                  borderRadius: "100px",
                }}
              />
            )}
          </div>
          {monthlyGoal && (
            <p
              style={{
                fontFamily: "Nunito, sans-serif",
                fontSize: "13px",
                color: "#7A6020",
              }}
            >
              {monthlyGoal.label}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="profile" onNavigate={onNavigate} />
    </div>
  );
}
