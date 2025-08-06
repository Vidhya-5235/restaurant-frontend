import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login"); // Auto-redirect after 4 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup
  }, [navigate]);

  return (
    <div className="splash-container">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="splash-video"
      >
        <source src="\FullStack\images\video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default SplashScreen;
