import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import ResumeBuilder from "./Pages/ResumeBuilder";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { Toaster } from "react-hot-toast";

import Login from "./Pages/Login";
import NotFound from "./Pages/notFound";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="app"
          element={
            <ProtectedRoute>
              {" "}
              <Layout />{" "}
            </ProtectedRoute>
          }
        >
          <Route index element={ <ProtectedRoute> <Dashboard /></ProtectedRoute>} />
          <Route path="builder/:resumeId" element={<ResumeBuilder />} />
          
        </Route>

        <Route path="login" element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
