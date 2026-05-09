import { ArrowLeft, Search, BookOpen, FileText, Award } from "lucide-react";
import { useState } from "react";
import BottomNav from "@/components/shared/BottomNav";

interface SearchResultsScreenProps {
  onNavigate?: (screen: string) => void;
}

type FilterId = "all" | "lessons" | "courses" | "articles";

type LessonResult = {
  id: number;
  type: "lesson";
  title: string;
  course: string;
  module: string;
  duration: string;
  completed: boolean;
};

type CourseResult = {
  id: number;
  type: "course";
  title: string;
  emoji: string;
  lessons: number;
  enrolled: boolean;
  progress: number;
};

type ArticleResult = {
  id: number;
  type: "article";
  title: string;
  category: string;
  readTime: string;
};

type SearchResult = LessonResult | CourseResult | ArticleResult;

export default function SearchResultsScreen({ onNavigate }: SearchResultsScreenProps = {}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const results: { lessons: LessonResult[]; courses: CourseResult[]; articles: ArticleResult[] } = {
    lessons: [],
    courses: [],
    articles: [],
  };

  const allResults = [
    ...results.courses,
    ...results.lessons,
    ...results.articles,
  ];

  const filteredResults: SearchResult[] =
    activeFilter === "all"
      ? allResults
      : activeFilter === "lessons"
      ? results.lessons
      : activeFilter === "courses"
      ? results.courses
      : results.articles;

  const totalResults = filteredResults.length;

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
          backgroundColor: "#FFFFFF",
          padding: "16px 20px",
          borderBottom: "1px solid rgba(212, 160, 23, 0.15)",
        }}
      >
        <div className="flex items-center gap-3" style={{ marginBottom: "16px" }}>
          <button
            onClick={() => onNavigate?.("catalog")}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: "#FEF5D4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <ArrowLeft size={20} color="#A67C00" />
          </button>
          <h1
            style={{
              fontFamily: "Nunito, sans-serif",
              fontWeight: 900,
              fontSize: "20px",
              color: "#2D2006",
            }}
          >
            Search Results
          </h1>
        </div>

        {/* Search Bar */}
        <div style={{ position: "relative" }}>
          <Search
            size={18}
            color="#A67C00"
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search lessons, courses..."
            style={{
              width: "100%",
              height: "48px",
              backgroundColor: "#FEF5D4",
              border: "none",
              borderRadius: "24px",
              paddingLeft: "48px",
              paddingRight: "16px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "15px",
              color: "#2D2006",
              outline: "none",
            }}
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "12px 20px",
          borderBottom: "1px solid rgba(212, 160, 23, 0.15)",
          display: "flex",
          gap: "8px",
          overflowX: "auto",
        }}
      >
        {([
          { id: "all", label: "All", count: allResults.length },
          { id: "courses", label: "Courses", count: results.courses.length },
          { id: "lessons", label: "Lessons", count: results.lessons.length },
          { id: "articles", label: "Articles", count: results.articles.length },
        ] as Array<{ id: FilterId; label: string; count: number }>).map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            style={{
              padding: "8px 16px",
              backgroundColor: activeFilter === filter.id ? "#D4A017" : "#FEF5D4",
              color: activeFilter === filter.id ? "#FFFFFF" : "#A67C00",
              border: "none",
              borderRadius: "100px",
              fontFamily: "Nunito, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {filter.label} ({filter.count})
          </button>
        ))}
      </div>

      {/* Results Count */}
      {searchQuery && (
        <div style={{ padding: "16px 20px" }}>
          <p
            style={{
              fontFamily: "Nunito, sans-serif",
              fontSize: "14px",
              color: "#7A6020",
            }}
          >
            {totalResults} results for &quot;{searchQuery}&quot;
          </p>
        </div>
      )}

      {/* Results List */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "0 20px 20px",
        }}
      >
        <div className="flex flex-col gap-3">
          {filteredResults.map((result) => {
            if (result.type === "course") {
              return (
                <div
                  key={`course-${result.id}`}
                  onClick={() => onNavigate?.("courseDetails")}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1.5px solid rgba(212, 160, 23, 0.2)",
                    borderRadius: "16px",
                    padding: "16px",
                    cursor: "pointer",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      style={{
                        fontSize: "36px",
                        width: "56px",
                        height: "56px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#FEF5D4",
                        borderRadius: "12px",
                      }}
                    >
                      {result.emoji}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="flex items-center gap-2" style={{ marginBottom: "4px" }}>
                        <BookOpen size={14} color="#A67C00" />
                        <span
                          style={{
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "#A67C00",
                            textTransform: "uppercase",
                          }}
                        >
                          Course
                        </span>
                      </div>
                      <h3
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontSize: "16px",
                          fontWeight: 900,
                          color: "#2D2006",
                          marginBottom: "6px",
                        }}
                      >
                        {result.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontSize: "13px",
                          color: "#7A6020",
                        }}
                      >
                        {result.lessons} lessons
                        {result.enrolled && ` • ${result.progress}% complete`}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            if (result.type === "lesson") {
              return (
                <div
                  key={`lesson-${result.id}`}
                  onClick={() => onNavigate?.("lesson")}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1.5px solid rgba(212, 160, 23, 0.2)",
                    borderRadius: "16px",
                    padding: "16px",
                    cursor: "pointer",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: result.completed ? "#D4A017" : "#FEF5D4",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {result.completed ? (
                        <Award size={20} color="#FFFFFF" />
                      ) : (
                        <FileText size={20} color="#A67C00" />
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="flex items-center gap-2" style={{ marginBottom: "4px" }}>
                        <span
                          style={{
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "#A67C00",
                            textTransform: "uppercase",
                          }}
                        >
                          Lesson
                        </span>
                        {result.completed && (
                          <span
                            style={{
                              fontFamily: "Nunito, sans-serif",
                              fontSize: "11px",
                              fontWeight: 700,
                              color: "#22C55E",
                            }}
                          >
                            ✓ Completed
                          </span>
                        )}
                      </div>
                      <h3
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontSize: "15px",
                          fontWeight: 900,
                          color: "#2D2006",
                          marginBottom: "6px",
                        }}
                      >
                        {result.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontSize: "13px",
                          color: "#7A6020",
                        }}
                      >
                        {result.course} • {result.module} • {result.duration}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            if (result.type === "article") {
              return (
                <div
                  key={`article-${result.id}`}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1.5px solid rgba(212, 160, 23, 0.2)",
                    borderRadius: "16px",
                    padding: "16px",
                    cursor: "pointer",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#FEF5D4",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FileText size={20} color="#A67C00" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="flex items-center gap-2" style={{ marginBottom: "4px" }}>
                        <span
                          style={{
                            fontFamily: "Nunito, sans-serif",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "#A67C00",
                            textTransform: "uppercase",
                          }}
                        >
                          Article
                        </span>
                      </div>
                      <h3
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontSize: "15px",
                          fontWeight: 900,
                          color: "#2D2006",
                          marginBottom: "6px",
                        }}
                      >
                        {result.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "Nunito, sans-serif",
                          fontSize: "13px",
                          color: "#7A6020",
                        }}
                      >
                        {result.category} • {result.readTime}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            return null;
          })}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab="learn" onNavigate={onNavigate} />
    </div>
  );
}
