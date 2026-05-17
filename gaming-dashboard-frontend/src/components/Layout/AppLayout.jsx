import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "250px",
          background: "#111",
          color: "white",
          padding: "20px",
        }}
      >
        <h2>Gaming UI</h2>
        <p>Dashboard</p>
        <p>Community</p>
        <p>Profile</p>
      </div>

      <div style={{ flex: 1, background: "#1a1a1a", color: "white" }}>
        <div style={{ padding: "20px", borderBottom: "1px solid #333" }}>
          Navbar
        </div>

        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
