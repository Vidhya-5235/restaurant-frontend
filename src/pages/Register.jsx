import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const res = await axios.post(`${API_URL}/register`, form);

      if (res.data.message === "User registered successfully") {
        alert("✅ Registration successful! Please login.");
        navigate("/login");
      } else {
        setErrorMsg(res.data.message || "Registration failed. Try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      setErrorMsg("Error during registration. Please try again later.");
    }
  };

  return (
    <div className="page-wrapper1">
      <img src="/FullStack/images/loginlogo.png" alt="Top Banner" className="top-image1" />
      <div className="login-container1">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          <button type="submit">Register</button>
        </form>
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
