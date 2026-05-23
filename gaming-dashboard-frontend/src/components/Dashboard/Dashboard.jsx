import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* HERO */}
      <section className="hero">
        <div>
          <h1>Welcome Back, Gamer 🎮</h1>
          <p>Here’s your activity overview</p>
        </div>

        <button className="hero__btn">+ Start Game Session</button>
      </section>

      {/* STATS GRID */}
      <section className="stats">
        <div className="card stat">
          <h4>Games Played</h4>
          <p>128</p>
        </div>

        <div className="card stat">
          <h4>Consoles</h4>
          <p>Playstation, Xbox, Nintendo</p>
        </div>

        <div className="card stat">
          <h4>Friends</h4>
          <p>32</p>
        </div>

        <div className="card stat">
          <h4>Game Sessions this week</h4>
          <p>1</p>
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

        {/* QUICK ACTIONS */}
        <div className="card actions">
          <h3>Quick Actions</h3>

          <button>🎯 Find Squad</button>
          <button>💬 Open Community</button>
          <button>⚙️ Settings</button>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
