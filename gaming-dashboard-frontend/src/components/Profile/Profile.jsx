import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <section className="profile__header">
        <div className="profile__avatar">
          <div className="avatar-circle">🎮</div>
        </div>

        <div className="profile__info">
          <h1>Alex Johnson</h1>
          <p>Pro Gamer • Valorant / FPS Enthusiast</p>

          <button>Edit Profile</button>
        </div>
      </section>

      <section className="profile__stats">
        <div className="card">
          <h4>Wins</h4>
          <p>74</p>
        </div>

        <div className="card">
          <h4>Matches</h4>
          <p>128</p>
        </div>

        <div className="card">
          <h4>Rank</h4>
          <p>Diamond III</p>
        </div>

        <div className="card">
          <h4>Friends</h4>
          <p>32</p>
        </div>
      </section>

      <section className="profile__bio card">
        <h3>About Me</h3>
        <p>
          Competitive FPS player focused on climbing ranked ladders and
          improving aim mechanics. Always looking for squadmates for ranked
          matches.
        </p>
      </section>

      <section className="profile__activity card">
        <h3>Recent Activity</h3>

        <div className="activity-item">🎯 Won 3 ranked matches in a row</div>

        <div className="activity-item">🏆 Reached Diamond Rank</div>

        <div className="activity-item">💬 Joined Community discussion</div>
      </section>
    </div>
  );
}

export default Profile;
