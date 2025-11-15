import { useContext } from "react";
import { ResumeDataContext } from "../../Context/ResumeDataContext";


export const useSkillInfo = () => {
    const { skillData, setSkillData } = useContext(ResumeDataContext);
    return { skillData, setSkillData };
};