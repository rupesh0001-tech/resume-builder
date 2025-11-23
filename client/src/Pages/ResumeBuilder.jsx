import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyResumeData } from "./../assets/assets.js";
import { Link } from "react-router-dom";
import ResumeForm from "../components/ResumeForms/ResumeForm.jsx";
import ResumePreview from "../components/ResumePreview/ResumePreview.jsx";
import { usePersonalInfo } from "../Hooks/ResumeData/PersonalInfo.jsx";
import { useProfessionalSummary } from "../Hooks/ResumeData/ProfessionalSummary.jsx";
import { useExperience } from "../Hooks/ResumeData/Experience.jsx";
import { useEducationInfo } from "../Hooks/ResumeData/EducationInfo.jsx";
import { useProjectInfo } from "../Hooks/ResumeData/ProjectInfo.jsx";
import { useSkillInfo } from "../Hooks/ResumeData/SkillInfo.jsx";

import axios from "axios";

const ResumeBuilder = () => {
  const { resumeId } = useParams();
  const { personalInfoData, setPersonalInfoData } = usePersonalInfo();
  const { professionalSummaryData, setProfessionalSummaryData } =
    useProfessionalSummary();
  const { experienceData, setExperienceData } = useExperience();
  const { educationData, setEducationData } = useEducationInfo();
  const { projectData, setProjectData } = useProjectInfo();
  const { skillData, setSkillData } = useSkillInfo();

  const loadResume = async () => {
    let resume = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/api/resumes/${resumeId}`,

      { withCredentials: true }
    );
    resume = resume.data;
    
    if (resume) {
      setPersonalInfoData(resume.personal_info);
      setProfessionalSummaryData(resume.professional_summary);
      
      setExperienceData(resume.experience);
      setEducationData(resume.education);
      setProjectData(resume.project);
      setSkillData(resume.skills);
      document.title = resume.title;

    }
  };

  useEffect(() => {
    loadResume();
  }, []);

  const handleDownload = () => {
    window.print();
  };

  return (
    <>
      <div className=" max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 ">
        <div className="w-full flex justify-between items-center ">
          <Link to={"/app"}>
            <div className="back-to-dashboard flex gap-1 items-center  text-gray-600">
              <i class="fa-solid fa-chevron-left text-gray-600 text-sm "></i>
              <p> back to dashboard </p>
            </div>
          </Link>
          <button
            className="  border border-gray-400 text-md font-light   text-black rounded-2xl hover:cursor-pointer px-2.5 py-1 flex items-center justify-center gap-2 "
            onClick={handleDownload}
          >
            download
            <i class="fa-solid fa-arrow-down text-sm"></i>
          </button>
        </div>
        <div className=" flex gap-4 flex-wrap justify-between ">
          <ResumeForm />
          <ResumePreview />
        </div>
      </div>
    </>
  );
};

export default ResumeBuilder;
