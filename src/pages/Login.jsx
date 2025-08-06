import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./login.css";



function Login() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting", user);

    try {
      const res = await axios.post("http://localhost:5000/login", user);
    
      if (res.data.message.startsWith("Welcome")) {
       window.location.href = "/FullStack/index.html";

      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <>
      <img
        src="\FullStack\images\loginlogo.png"
        alt="Top Banner"
        className="top-image"
      />
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
        <p>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </>
  );
}

export default Login;
