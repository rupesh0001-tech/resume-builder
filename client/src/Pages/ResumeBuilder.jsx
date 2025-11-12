import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyResumeData } from "./../assets/assets.js";
import { Link } from "react-router-dom";
import ResumeForm from "../components/ResumeForms/ResumeForm.jsx";
import ResumePreview from "../components/ResumePreview/ResumePreview.jsx";
import { usePersonalInfo } from "../Hooks/ResumeData/PersonalInfo.jsx";

const ResumeBuilder = () => {
  const { resumeId } = useParams();
  const {personalInfoData, setPersonalInfoData} = usePersonalInfo()

  const loadResume = () => {
    let resume = dummyResumeData.find((resume) => resume._id === resumeId);
    if (resume) {  
  
      setPersonalInfoData(resume.personal_info)
      document.title = resume.title;
    }
  };

  useEffect(() => {
    loadResume();
  }, []);

  return (
    <>
      <div className=" max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
        <Link to={"/app"}>
          <div className="back-to-dashboard flex gap-1 items-center  text-gray-600">
            <i class="fa-solid fa-chevron-left text-gray-600 text-sm "></i>
            <p> back to dashboard </p>
          </div>
        </Link>
        <div className=" flex gap-4 flex-wrap justify-between ">
          <ResumeForm />
          <ResumePreview />
        </div>
        
      </div>
    </>
  );
};

export default ResumeBuilder;
