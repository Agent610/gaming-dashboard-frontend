import "./Community.css";

function Community() {
  return (
    <div className="community">
      <div className="community__header">
        <h1>Community</h1>
        <p>Share posts, connect with gamers, and join discussions</p>
      </div>

      <div className="create-post">
        <textarea placeholder="What's on your mind?" />
        <button>Post</button>
      </div>

      <div className="feed">
        <div className="post-card">
          <div className="post-user">
            <div className="avatar"></div>
            <div>
              <h4>Alex</h4>
              <span>2h ago</span>
            </div>
          </div>

          <p>Just hit Diamond rank in Valorant 🔥</p>

          <div className="post-actions">
            <button>👍 Like</button>
            <button>💬 Comment</button>
            <button>🔁 Share</button>
          </div>
        </div>

        <div className="post-card">
          <div className="post-user">
            <div className="avatar"></div>
            <div>
              <h4>Sarah</h4>
              <span>5h ago</span>
            </div>
          </div>

          <p>Anyone up for a squad tonight? 🎮</p>

          <div className="post-actions">
            <button>👍 Like</button>
            <button>💬 Comment</button>
            <button>🔁 Share</button>
          </div>
        </div>

        <div className="post-card">
          <div className="post-user">
            <div className="avatar"></div>
            <div>
              <h4>Mike</h4>
              <span>1d ago</span>
            </div>
          </div>

          <p>Cyberpunk 2077 update is actually insane now 💯</p>

          <div className="post-actions">
            <button>👍 Like</button>
            <button>💬 Comment</button>
            <button>🔁 Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
