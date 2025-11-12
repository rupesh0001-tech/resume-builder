import { createContext, useState, useContext } from "react";

export const ResumeDataContext = createContext(null);

export const ResumeProvider = ({ children }) => {
  const initPersonalData = {
    full_name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    website: "",
    profession: "",
    image: "",
  };
  let [personalInfoData, setPersonalInfoData] = useState(initPersonalData);
  // logic to create resume

  return (
    <ResumeDataContext.Provider
      value={{ personalInfoData, setPersonalInfoData }}
    >
      {children}
    </ResumeDataContext.Provider>
  );
};
