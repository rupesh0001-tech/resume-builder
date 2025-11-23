import { useContext } from "react";
import { CurrentResumeId } from "../../Context/currentResumeId";

export const useResumeId = () => {
  return useContext(CurrentResumeId);
};
