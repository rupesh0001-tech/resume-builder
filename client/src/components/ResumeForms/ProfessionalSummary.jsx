import React from "react";
import FormTextArea from "./FormTextArea";

const professionalSummary = () => {
  let content = " hello bhai bigFan ";
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
        <FormTextArea content={content} name={'professionalSummaryData'} label={'Professional Summary '} />
      </div>
    </div>
  );
};

export default professionalSummary;
