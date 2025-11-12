import { resumeDataContext } from "../../Context/ResumeDataContext";

export const usePersonalInfo = () => {
    const { personalInfoData, setPersonalInfoData } = useContext(resumeDataContext);
    return { personalInfoData, setPersonalInfoData }
};
