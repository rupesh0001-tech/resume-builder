import React, { useContext } from "react";

export const resumeDataContext = CreateContext();

export const ResumeProvider = ({ children }) => {
  initPersonalData = {
    full_name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    website: "",
    profession: "",
    image: "",
  };
  let [personalInfoData, setPersonalInfoData] = useState({
    initPersonalData,
  });
  // logic to create resume

  return (
    <resumeDataContext.Provider
      value={{ personalInfoData, setPersonalInfoData }}
    >
      {children}
    </resumeDataContext.Provider>
  );
};
