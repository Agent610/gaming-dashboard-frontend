import "./Dashboard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameSessionModal from "../GameSessionModal/GameSessionModal";
import Hero from "../Hero/Hero";
import SearchBar from "../SearchBar/SearchBar";
import StatsGrid from "../StatsGrid/StatsGrid";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import { useEffect } from "react";
import {
  loadDashboardData,
  saveDashboardData,
} from "../../utils/dashboardStorage";

function Dashboard() {
  const navigate = useNavigate();
  //User Data
  const [username] = useState("Alex");
  const [avatar] = useState("");

  // const [recentGame, setRecentGame] = useState("");

  const saved = loadDashboardData();

  // Search
  const [recentGame, setRecentGame] = useState(saved?.recentGame || "");
  const [searchedGame, setSearchedGame] = useState("");

  //Modal
  const [showSessionModal, setShowSessionModal] = useState(false);

  //Stats
  const [stats, setStats] = useState(
    saved?.stats || {
      gamesPlayed: 0,
      consoles: "",
      friends: 0,
      achievements: 0,
      sessionsThisWeek: 0,
      hoursPlayed: 0,
      winRate: 0,
      favoriteGenre: "",
    },
  );

  //Activity
  // const [activities, setActivites] = useState(saved?.activities || []);

  //Save
  useEffect(() => {
    saveDashboardData({
      recentGame,
      stats,
      activities,
    });
  }, [recentGame, stats, activities]);

  return (
    <div className="dashboard">
      <section className="hero">
        <div className="hero__left">
          <div className="hero__user">
            <div className="hero__avatar">
              {avatar ? (
                <img src={avatar} alt="avatar" />
              ) : (
                <span>{username.charAt(0)}</span>
              )}
            </div>

            <div>
              <h1>Welcome Back, {username} 🎮</h1>
              <p>Here’s your activity overview</p>
            </div>
          </div>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search for a game..."
              value={searchedGame}
              onChange={(e) => setSearchedGame(e.target.value)}
            />

            {searchedGame && (
              <p className="searched-game">Recently searched: {searchedGame}</p>
            )}
          </div>
        </div>

        <button className="hero__btn" onClick={() => setShowSessionModal(true)}>
          + Start Game Session
        </button>
        {showSessionModal && (
          <GameSessionModal onClose={() => setShowSessionModal(false)} />
        )}
      </section>

      {/* STATS GRID */}
      <section className="stats">
        <div className="card stat">
          <h4>Games Played</h4>
          <p>{stats.gamesPlayed || "—"}</p>
        </div>

        <div className="card stat">
          <h4>Consoles</h4>
          <p>{stats.consoles || "—"}</p>
        </div>

        <div className="card stat">
          <h4>Friends</h4>
          <p>{stats.friends || "—"}</p>
        </div>

        <div className="card stat">
          <h4>Achievements</h4>
          <p>{stats.achievements || "—"}</p>
        </div>

        <div className="card stat">
          <h4>Game Sessions this week</h4>
          <p>{stats.sessionsThisWeek || "—"}</p>
        </div>

        <div className="card stat">
          <h4>Hours Played</h4>
          <p>{stats.hoursPlayed || "—"}</p>
        </div>

        <div className="card stat">
          <h4>Win Rate</h4>
          <p>{stats.winRate || "—"}</p>
        </div>

        <div className="card stat">
          <h4>Favorite Genre</h4>
          <p>{stats.favoriteGenre || "—"}</p>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="main">
        {/* ACTIVITY FEED */}
        <div className="card feed">
          <h3>Recent Activity</h3>

          <div className="feed-item">
            <span>🔥</span>
            <p>You won a match in Valorant</p>
          </div>

          <div className="feed-item">
            <span>🏆</span>
            <p>Achievement unlocked: Sharpshooter</p>
          </div>

          <div className="feed-item">
            <span>🎮</span>
            <p>Joined a new squad</p>
          </div>
        </div>

        <div className="card actions">
          <h3>Quick Actions</h3>

          <button onClick={() => navigate("/dashboard/community")}>
            🎯 Find Squad
          </button>
          <button onClick={() => navigate("/dashboard/community")}>
            💬 Open Community
          </button>
          <button onClick={() => navigate("/dashboard/settings")}>
            ⚙️ Settings
          </button>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
