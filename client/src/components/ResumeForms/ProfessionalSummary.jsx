import React from "react";
import FormTextArea from "./FormTextArea";
import { useProfessionalSummary } from "../../Hooks/ResumeData/ProfessionalSummary";

const professionalSummary = () => {
  let { professionalSummaryData, setProfessionalSummaryData } =
    useProfessionalSummary();


  const handelChange = (e) => {
    setProfessionalSummaryData(e.target.value);
    
  };

  const handelSubmit = (e) => {
    e.preventDefault();
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
      <div className="flex flex-col">
        <form onSubmit={handelSubmit}>
          <FormTextArea
            professionalSummaryData={professionalSummaryData}
            handelChange={handelChange}
            name={"professionalSummaryData"}
            label={"Professional Summary "}
          />
        </form>
      </div>
    </div>
  );
};

export default professionalSummary;
