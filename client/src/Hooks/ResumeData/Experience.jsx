import { useContext } from "react";
import { ResumeDataContext } from "../../Context/ResumeDataContext";

export const useExperience = () => {
  const { experienceData, setExperienceData } = useContext(ResumeDataContext);
  return { experienceData, setExperienceData };
};
