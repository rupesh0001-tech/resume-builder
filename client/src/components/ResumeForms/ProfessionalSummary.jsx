import React from "react";
import FormTextArea from "./FormTextArea";
import { useProfessionalSummary } from "../../Hooks/ResumeData/ProfessionalSummary";
import SaveBtn from "./SaveBtn";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useResumeId } from "../../Hooks/ResumeId/useResumeId";


const professionalSummary = ({
  setFormTab
}) => {
  let { professionalSummaryData, setProfessionalSummaryData } =
    useProfessionalSummary();

  const { currentResumeId, setCurrentResumeId } = useResumeId();
  const id = currentResumeId


  const handelChange = (e) => {
    setProfessionalSummaryData(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/resumes/${id}/professional-summary`,
      { professional_summary: professionalSummaryData },
      { withCredentials: true }  
    ).then((res) => {
      
      console.log(res);
      toast.success(" professional summary updated successfully ");
      setFormTab(3);
    })
  };
  return (
    <div className="flex flex-col  ">
      <div className="flex flex-col mb-8 ">
        <h1 className="text-xl text-teal-950 font-semibold">
          {" "}
          professional Summary
        </h1>
        <p className="text-md text-gray-500 text-sm">
          {" "}
          Enter your professional summary{" "}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <form className="flex flex-col gap-8" onSubmit={handelSubmit}>
          
          <FormTextArea
            value={professionalSummaryData}
            handelChange={handelChange}
            name={"professionalSummaryData"}
            label={"Professional Summary "}
          />
          <SaveBtn name={"Save"} />
        </form>
      </div>
    </div>
  );
};

export default professionalSummary;
