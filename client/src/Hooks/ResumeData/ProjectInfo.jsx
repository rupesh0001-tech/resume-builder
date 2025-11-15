import { createContext, useContext } from "react";
import { ResumeDataContext } from "../../Context/ResumeDataContext";


export const useProjectInfo = () => {
    const { projectData, setProjectData } = useContext(ResumeDataContext);
    return { projectData, setProjectData };
}