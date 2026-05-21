import { Routes, Route } from "react-router-dom";

import AppLayout from "../Layout/AppLayout.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import Community from "../Community/Community.jsx";
import Profile from "../Profile/Profile.jsx";
import Settings from "../Settings/Settings.jsx";

import ProtectedRoute from "../ProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="community" element={<Community />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;

// // function Dashboard() {
// //   return <h1>Dashboard Page</h1>;
// // }

// function Community() {
//   return <h1>Community Page</h1>;
// }

// function Profile() {
//   return <h1>Profile Page</h1>;
// }

// function Settings() {
//   return <h1>Settings Pages</h1>;
// }
