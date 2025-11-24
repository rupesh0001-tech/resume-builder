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
  const { personalInfoData } = usePersonalInfo();
  const { professionalSummaryData } = useProfessionalSummary();
  const { experienceData } = useExperience();
  const { educationData } = useEducationInfo();
  const { projectData } = useProjectInfo();
  const { skillData } = useSkillInfo();
  const { template } = useTemplate();
  const { accentColor } = useAccentColor();

  const data = {
    ...dummyResumeData[0],
    personal_info: personalInfoData,
    professional_summary: professionalSummaryData,
    experience: experienceData,
    education: educationData,
    project: projectData,
    skills: skillData
  };

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
      <div className="mobile-scale-wrapper">
        <div id="resume-preview" className="print:shadow-none print:border-none w-auto">
          {renderTemplate()}
        </div>
      </div>

      {/* ---------- STYLE (FULL RESPONSIVE + PRINT SAFE) ---------- */}
      <style>
        {`
/* --- A4 PAGE SETTINGS --- */
@page {
  size: A4;
  margin: 0;
}

/* A4 dimensions for preview (desktop) */
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

/* --- MOBILE VIEW (ONLY SCREEN, NOT PRINT) --- */
/* --- MOBILE VIEW --- */
/* --- MOBILE VIEW (No Overflow) --- */
@media screen and (max-width: 768px) {

  /* Container becomes flexible */
  .resume-preview-container {
    width: 100% !important;
    min-height: auto !important;
    height: auto !important;
    padding: 0;
    margin: 0 auto;
    overflow: visible !important;

    display: flex;
    justify-content: center;
  }

  /* Scale wrapper */
  .mobile-scale-wrapper {
    width: 180mm; /* narrower than full A4 to avoid overflow */
    transform: scale(0.55); 
    transform-origin: top center;
  }

  #resume-preview {
    width: 210mm;
    height: auto !important;
    max-height: none !important;
    overflow: visible !important;
  }
}



/* --- PRINT MODE (full A4, no scaling) --- */
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

  /* disable mobile scale during printing */
  .mobile-scale-wrapper {
    transform: none !important;
  }

  #resume-preview {
    position: absolute;
    top: 0;
    left: 0;
    width: 210mm !important;
    height: 297mm !important;
    margin: 0 !important;
    padding: 0 !important;
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
