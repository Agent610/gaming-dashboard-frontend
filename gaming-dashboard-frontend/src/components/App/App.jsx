import { Routes, Route } from "react-router-dom";
import AppLayout from "../Layout/AppLayout.jsx";

function Dashboard() {
  return <h1>Dashboard Page</h1>;
}

function Community() {
  return <h1>Community Page</h1>;
}

function Profile() {
  return <h1>Profile Page</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="community" element={<Community />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
