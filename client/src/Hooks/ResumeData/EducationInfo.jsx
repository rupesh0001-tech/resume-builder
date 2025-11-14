import { useContext } from "react";
import { ResumeDataContext } from "../../Context/ResumeDataContext";

export const useEducationInfo = () => {
    const {educationData, setEducationData} = useContext(ResumeDataContext);
    return{educationData, setEducationData};
}

