import React from "react";
import PersonalInfo from "./PersonalInfo";

const ResumeForm = () => {
  return (
    <div className=" w-3/7 border border-gray-300  px-8 py-10  ">

      <div className="flex gap-4  w-full justify-end">
        <p className=" opacity-60 cursor-pointer hover:opacity-100 ">
          <i class="fa-solid fa-chevron-left text-sm "></i>back
        </p>
        <p className=" opacity-60 cursor-pointer hover:opacity-100  ">
          
        next<i class="fa-solid fa-chevron-right text-sm "></i>
        </p>
      </div>

      <PersonalInfo />
      
    </div>
  );
};

export default ResumeForm;
