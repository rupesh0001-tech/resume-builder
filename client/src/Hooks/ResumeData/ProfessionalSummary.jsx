import { useContext } from "react";
import { ResumeDataContext } from "../../Context/ResumeDataContext";

export const useProfessionalSummary = () => {
  const {professionalSummaryData, setProfessionalSummaryData } =
    useContext(ResumeDataContext);
  return { professionalSummaryData, setProfessionalSummaryData };
};
