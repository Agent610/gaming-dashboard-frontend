import { useState } from "react";
import API from "../../services/api.js";
import "../../styles/auth.css";
import { Navigate, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth.js";

function Login() {
  const navigate = useNavigate();

  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      alert("Login successful");

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={form.email}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await API.post("/auth/login", {
//         email,
//         password,
//       });

//       localStorage.setItem("token", res.data.token);

//       alert("Login successful");
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

// return (
//   <form onSubmit={handleLogin}>
//     <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />

//     <input
//       placeholder="password"
//       type="password"
//       onChange={(e) => setPassword(e.target.value)}
//     />

//     <button type="submit">Login</button>
//   </form>
// );
