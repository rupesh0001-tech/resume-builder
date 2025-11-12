import { ResumeDataContext } from "../../Context/ResumeDataContext";
import { useContext } from "react";

export const usePersonalInfo = () => {
    const { personalInfoData, setPersonalInfoData } = useContext(ResumeDataContext);
    return { personalInfoData, setPersonalInfoData }
};
