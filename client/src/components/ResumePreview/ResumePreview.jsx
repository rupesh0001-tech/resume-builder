import React from "react";
import "./ResumePreview.css";
import ModernTemplate from "../../assets/templates/ModernTemplate.jsx";
import MinimalTemplate from "../../assets/templates/MinimalTemplate.jsx";
import MinimalImageTemplate from "../../assets/templates/MinimalImageTemplate.jsx";
import ClassicTemplate from "../../assets/templates/ClassicTemplate.jsx";
import { dummyResumeData } from "../../assets/assets.js";
import { usePersonalInfo } from "../../Hooks/ResumeData/PersonalInfo.jsx";
import { useProfessionalSummary } from "../../Hooks/ResumeData/ProfessionalSummary.jsx";
import { useExperience } from "../../Hooks/ResumeData/Experience.jsx";
import { useEducationInfo } from "../../Hooks/ResumeData/EducationInfo.jsx";
import { useProjectInfo } from "../../Hooks/ResumeData/ProjectInfo.jsx";
import { useSkillInfo } from "../../Hooks/ResumeData/SkillInfo.jsx";
import { useTemplate } from "../../Hooks/ResumeData/useTemplate.jsx";
import { useAccentColor } from "../../Hooks/ResumeData/useAccentColor.jsx";

const ResumePreview = () => {
  const { personalInfoData, setPersonalInfoData } = usePersonalInfo();
  const { professionalSummaryData, setProfessionalSummaryData } =
    useProfessionalSummary();
  const { experienceData, setExperienceData } = useExperience();
  const { educationData, setEducationData } = useEducationInfo();
  const { projectData, setProjectData } = useProjectInfo();
  const { skillData, setSkillData } = useSkillInfo();
  const data = dummyResumeData[0];

  data.personal_info = personalInfoData;
  data.professional_summary = professionalSummaryData;

  data.experience = experienceData;
  data.education = educationData;
  data.project = projectData;
  data.skills = skillData;

  const { template, setTemplate } = useTemplate();
  const { accentColor, setAccentColor } = useAccentColor();

  const classes = "";

  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />;
      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor} />;
      case "minimal-image":
        return <MinimalImageTemplate data={data} accentColor={accentColor} />;
      default:
        return <ClassicTemplate data={data} accentColor={accentColor} />;
    }
  };

  return (
    <div className="resume-preview-container">
      <div
        id="resume-preview"
        className={" print:shadow-none print:border-none " + classes}
      >
        {renderTemplate()}
      </div>

      <style>
        {`
  /* --- A4 PAGE SETTINGS --- */
  @page {
    size: A4;
    margin: 0;
  }

  /* A4 dimensions for preview (210mm × 297mm) */
  .resume-preview-container {
    width: 210mm;
    min-height: 297mm;
    max-height: 297mm;
    overflow: hidden;
    padding: 0;
    margin: 0 auto;
    background: white;
  }

  #resume-preview {
    width: 210mm;
    min-height: 297mm;
    max-height: 297mm;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  /* --- PRINT MODE --- */
  @media print {
    html, body {
      margin: 0;
      padding: 0;
      width: 210mm;
      height: 297mm;
      overflow: hidden !important;
    }

    body * {
      visibility: hidden;
    }

    #resume-preview, 
    #resume-preview * {
      visibility: visible;
    }

    #resume-preview {
      position: absolute;
      top: 0;
      left: 0;
      width: 210mm;
      height: 297mm;
      margin: 0 !important;
      padding: 0 !important;
      overflow: hidden !important;
      box-shadow: none !important;
      border: none !important;
    }
  }
`}
      </style>
    </div>
  );
};

export default ResumePreview;
