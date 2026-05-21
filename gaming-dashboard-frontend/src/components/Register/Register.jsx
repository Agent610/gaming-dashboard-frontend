import { useState } from "react";
import API from "../../services/api.js";
import { useNavigate, Navigate } from "react-router-dom";
import "../../styles/auth.css";
import { isAuthenticated } from "../../utils/auth.js";

function Register() {
  const navigate = useNavigate();

  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }

  const [form, setForm] = useState({
    username: "",
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
      await API.post("/auth/register", form);

      alert("Account created successfully");

      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={form.username}
          />

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
            value={form.password}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;

// return (
//   <div style={{ padding: "20px" }}>
//     <h2>Register</h2>

//     <form onSubmit={handleSubmit}>
//       <input name="username" placeholder="Username" onChange={handleChange} />
//       <input name="email" placeholder="Email" onChange={handleChange} />
//       <input
//         name="password"
//         type="password"
//         placeholder="Password"
//         onChange={handleChange}
//       />

//       <button type="submit">Create Account</button>
//     </form>
//   </div>
// );
