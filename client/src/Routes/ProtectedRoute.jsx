// src/routes/ProtectedRoute.jsx
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>; // Wait for profile API

  if (!user) return <Navigate to="/login" replace />;

  return children;
}
