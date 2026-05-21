import { Routes, Route } from "react-router-dom";
import AppLayout from "../Layout/AppLayout.jsx";
import Dashboard from "../Dashboard/Dashboard.jsx";
import Login from "../Login/Login.jsx";
import Register from "../Register/Register.jsx";
import ProtectedRoute from "../ProtectedRoute.jsx";

// function Dashboard() {
//   return <h1>Dashboard Page</h1>;
// }

function Community() {
  return <h1>Community Page</h1>;
}

function Profile() {
  return <h1>Profile Page</h1>;
}

function Settings() {
  return <h1>Settings Pages</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="community"
          element={
            <ProtectedRoute>
              <Community />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
