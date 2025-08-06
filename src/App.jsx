import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/logout";
import SplashScreen from "./pages/SplashScreen"; // 👈 Add this import

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />   {/* 👈 Splash comes first */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

export default App;
