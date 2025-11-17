import { useContext } from "react";
import { ResumeDataContext } from "../../Context/ResumeDataContext";

export const useAccentColor = () => {
    const { accentColor, setAccentColor } = useContext(ResumeDataContext);
    return { accentColor, setAccentColor }
}