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

  const initProfessionalSummary =  ''
  

  let [personalInfoData, setPersonalInfoData] = useState(initPersonalData);
  let [professionalSummaryData, setProfessionalSummaryData] = useState(initProfessionalSummary);
  

  return (
    <ResumeDataContext.Provider
      value={{ personalInfoData, setPersonalInfoData, professionalSummaryData, setProfessionalSummaryData }}
    >
      {children}
    </ResumeDataContext.Provider>
  );
};
