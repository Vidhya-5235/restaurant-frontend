import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.css";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const res = await axios.post(`${API_URL}/login`, user);

      if (res.data.message.startsWith("Welcome")) {
        localStorage.setItem("userEmail", user.email);
        window.location.href = "/FullStack/index.html";
      } else {
        setErrorMsg(res.data.message || "Login failed. Try again.");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      setErrorMsg("Login failed. Please check your details and try again.");
    }
  };

  return (
    <>
      <img src="/FullStack/images/loginlogo.png" alt="Top Banner" className="top-image" />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
      </div>
    </>
  );
}

export default Login;
