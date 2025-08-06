import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css"; // ✅ Make sure this file contains the CSS you posted

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/register", form);
      alert(res.data.message);
      if (res.data.message === "User registered successfully") {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Error during registration. Please check console.");
    }
  };

  return (
    <div className="page-wrapper1">
      <img src="\FullStack\images\loginlogo.png" alt="Top" className="top-image1" />
      <div className="login-container1">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  );
}

export default Register;
