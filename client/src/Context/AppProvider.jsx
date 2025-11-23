import React from "react";
import { ResumeProvider } from "./ResumeDataContext.jsx";
import { AuthProvider } from "./AuthProvider.jsx";
import { CurrentResumeIdProvider } from "./currentResumeId.jsx";

const AppProvider = ({ children }) => {
  return (
    
    <CurrentResumeIdProvider>
      <AuthProvider>
        <ResumeProvider>{children}</ResumeProvider>
      </AuthProvider>
    </CurrentResumeIdProvider>
  );
};

export default AppProvider;
