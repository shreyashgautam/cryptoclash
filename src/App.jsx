import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import MainLayout from "./components/main/layout";
import MainDashboard from "./pages/main/Dashboard";
import MainRules from "./pages/main/rules";
import MainTeam from "./pages/main/addTeams";
import MainLeaderboard from "./pages/main/Leaderboard";
import CheckAuth from "./components/auth/check-auth";
import "./App.css";

function App() {
  // 🔥 State to manage authentication
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* 🔓 Public Routes (Login, Register) */}
        <Route path="/" element={<CheckAuth isAuthenticated={isAuthenticated}><AuthLayout /></CheckAuth>}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* 🔐 Protected Routes (Require Authentication) */}
        <Route path="/" element={<CheckAuth isAuthenticated={isAuthenticated}><MainLayout /></CheckAuth>}>
          <Route path="dashboard" element={<MainDashboard />} />
          <Route path="leaderboard" element={<MainLeaderboard />} />
          <Route path="team" element={<MainTeam />} />
          <Route path="rules" element={<MainRules />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
