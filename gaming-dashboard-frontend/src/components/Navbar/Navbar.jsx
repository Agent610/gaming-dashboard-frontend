import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="search">
        <input type="text" placeholder="Search posts, and users" />
      </div>

      <div className="right">
        <div className="right">
          <div className="icon">🔔</div>
          <div className="profile">
            <div className="avatar"></div>
            <span>User</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
