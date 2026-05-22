import "../Sidebar/Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">🎮 Gaming Dashboard</div>

      <nav className="sidebar__nav">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/community"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          💬 Community
        </NavLink>

        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          👤 Profile
        </NavLink>

        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          ⚙️ Settings
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
