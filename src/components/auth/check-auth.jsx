import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, children }) {
    const location = useLocation();

    // 🔐 If user is NOT authenticated and NOT on "/login" or "/register" → Redirect to "/login"
    if (!isAuthenticated && location.pathname !== "/login" && location.pathname !== "/register") {
        return <Navigate to="/login" replace />;
    }

    // 🔓 If user IS authenticated and visits "/", "/login", or "/register" → Redirect to "/dashboard"
    if (isAuthenticated && (location.pathname === "/" || location.pathname === "/login" || location.pathname === "/register")) {
        return <Navigate to="/dashboard" replace />;
    }

    // ✅ Render the requested page
    return <>{children}</>;
}

export default CheckAuth;
