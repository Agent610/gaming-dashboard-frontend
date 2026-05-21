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

import { useEffect, useState } from "react";
import API from "../../services/api.js";

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get("/posts");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      {posts.map((post) => (
        <div key={post._id} style={{ marginBottom: "10px" }}>
          <h4>{post.user.username}</h4>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
