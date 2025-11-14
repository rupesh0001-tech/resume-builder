import { useContext } from "react";
import { ResumeDataContext } from "../../Context/ResumeDataContext";


export const useEducationInfo = () => {
    const { educationData, setEducationData } = useContext(ResumeDataContext);

    return {
        educationInfo: educationData,
        setEducationInfo: setEducationData
    };
};
