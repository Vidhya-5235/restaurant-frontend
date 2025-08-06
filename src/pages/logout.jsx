import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear localStorage or session if used
    localStorage.removeItem("user");
    // Redirect to login
    navigate("/login");
  }, [navigate]);

  return null; // Nothing shown on screen
}

export default Logout;
