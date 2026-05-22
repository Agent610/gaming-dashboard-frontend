// import "../Dashboard/Dashboard.css";
// function Dashboard() {
//   return (
//     <div className="dashboard">
//       <div className="stats">
//         <div className="card">🎮 Games played</div>
//         <div className="card">🔥 Active users</div>
//         <div className="card">💬 Posts</div>
//         <div className="card">🏆 Achievements</div>
//       </div>

//       <div className="grid">
//         <div className="box large">Recent Activity</div>
//         <div className="box">Trending Games</div>
//         <div className="box">Community Feed</div>
//       </div>
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import API from "../../services/api.js";

// function Dashboard() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const res = await API.get("/posts");
//         setPosts(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <h2>Dashboard Page</h2>

//       {posts.map((post) => (
//         <div key={post._id} style={{ marginBottom: "10px" }}>
//           <h4>{post.user.username}</h4>
//           <p>{post.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Dashboard;

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Welcome Section */}
      <section className="dashboard__hero">
        <div>
          <h1>Welcome Back Gamer 🎮</h1>
          <p>Track activity, connect with players, and explore communities.</p>
        </div>

        <button className="dashboard__hero-btn">Explore Games</button>
      </section>

      {/* Stats Cards */}
      <section className="dashboard__stats">
        <div className="stat-card">
          <h3>Games Played</h3>
          <p>128</p>
        </div>

        <div className="stat-card">
          <h3>Friends Online</h3>
          <p>24</p>
        </div>

        <div className="stat-card">
          <h3>Achievements</h3>
          <p>52</p>
        </div>
      </section>

      {/* Activity Feed */}
      <section className="dashboard__feed">
        <div className="feed-card">
          <h3>Recent Activity</h3>

          <div className="feed-item">
            <p>🔥 Alex reached Diamond Rank</p>
          </div>

          <div className="feed-item">
            <p>🎯 Sarah unlocked a new achievement</p>
          </div>

          <div className="feed-item">
            <p>⚡ Mike joined your gaming squad</p>
          </div>
        </div>

        <div className="feed-card">
          <h3>Trending Games</h3>

          <div className="feed-item">
            <p>Cyberpunk 2077</p>
          </div>

          <div className="feed-item">
            <p>Valorant</p>
          </div>

          <div className="feed-item">
            <p>Elden Ring</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
