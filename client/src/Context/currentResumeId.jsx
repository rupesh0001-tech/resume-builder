import { createContext, useState } from "react";

export const CurrentResumeId = createContext({});

export const CurrentResumeIdProvider = ({ children }) => {
  const [currentResumeId, setCurrentResumeId] = useState(null);

  return (
    <CurrentResumeId.Provider value={{ currentResumeId, setCurrentResumeId }}>
      {children}
    </CurrentResumeId.Provider>
  );
};
