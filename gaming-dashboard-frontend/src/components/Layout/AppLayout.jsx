import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <div style={{ flex: 1, background: "#1a1a1a", color: "white" }}>
        <div style={{ padding: "20px", borderBottom: "1px solid #333" }}>
          <Navbar />
        </div>

        <div style={{ padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
