import "../Sidebar/Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">🎮 Gaming Dashboard</div>

      <nav className="nav">
        <NavLink to="/" end className="link">
          Dashboard
        </NavLink>

        <NavLink to="/community" className="link">
          Community
        </NavLink>

        <NavLink to="/profile" className="link">
          Profile
        </NavLink>

        <NavLink to="/settings" className="link">
          Settings
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
