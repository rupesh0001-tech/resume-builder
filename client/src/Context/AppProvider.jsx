import React from "react";
import { ResumeProvider } from "./ResumeDataContext.jsx";
import { AuthProvider } from "./AuthProvider.jsx";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ResumeProvider>{children}</ResumeProvider>
    </AuthProvider>
  );
};

export default AppProvider;
