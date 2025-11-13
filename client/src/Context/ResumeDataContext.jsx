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
  const initProfessionalSummary = "";

  let [personalInfoData, setPersonalInfoData] = useState(initPersonalData);
  let [professionalSummaryData, setProfessionalSummaryData] = useState(
    initProfessionalSummary
  );
  let [experienceData, setExperienceData] = useState([{
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
    isCurrent: false,
    _id: ""
  }]);

  return (
    <ResumeDataContext.Provider
      value={{
        personalInfoData,
        setPersonalInfoData,
        professionalSummaryData,
        setProfessionalSummaryData,
        experienceData,
        setExperienceData,
      }}
    >
      {children}
    </ResumeDataContext.Provider>
  );
};
