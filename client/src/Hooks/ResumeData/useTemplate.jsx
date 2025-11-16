import { useContext } from "react";
import { ResumeDataContext } from "../../Context/ResumeDataContext";

export const useTemplate = () => {
    const { template, setTemplate} = useContext(ResumeDataContext);
    return {template, setTemplate };
}