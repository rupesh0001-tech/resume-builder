import React from 'react'
import './ResumePreview.css';
import ModernTemplate from '../../assets/templates/ModernTemplate.jsx'
import MinimalTemplate from '../../assets/templates/MinimalTemplate.jsx'
import MinimalImageTemplate from '../../assets/templates/MinimalImageTemplate.jsx'
import ClassicTemplate from '../../assets/templates/ClassicTemplate.jsx'
import { dummyResumeData } from '../../assets/assets.js'
import { usePersonalInfo } from '../../Hooks/ResumeData/PersonalInfo.jsx';
import { useProfessionalSummary } from '../../Hooks/ResumeData/ProfessionalSummary.jsx';
import { useExperience } from '../../Hooks/ResumeData/Experience.jsx';
import { useEducationInfo } from '../../Hooks/ResumeData/EducationInfo.jsx';
import { useProjectInfo } from '../../Hooks/ResumeData/ProjectInfo.jsx';
import { useSkillInfo } from '../../Hooks/ResumeData/SkillInfo.jsx';
import { useTemplate } from '../../Hooks/ResumeData/useTemplate.jsx';
import { useAccentColor } from '../../Hooks/ResumeData/useAccentColor.jsx';


const ResumePreview = () => {
    
  const {personalInfoData, setPersonalInfoData} = usePersonalInfo();
  const {professionalSummaryData, setProfessionalSummaryData} = useProfessionalSummary();
  const {experienceData, setExperienceData} = useExperience();
  const {educationData, setEducationData} = useEducationInfo();
  const {projectData, setProjectData} = useProjectInfo();
  const {skillData, setSkillData} = useSkillInfo();
  const data = dummyResumeData[0];

  data.personal_info = personalInfoData;
  data.professional_summary = professionalSummaryData;
  
  data.experience = experienceData;
  data.education = educationData;
  data.project = projectData;
  data.skills = skillData;

  console.log(data);
 
  const {template, setTemplate} = useTemplate();
  const {accentColor, setAccentColor} = useAccentColor();

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
      <div id="resume-preview" className={" print:shadow-none print:border-none " + classes}>
        {renderTemplate()}
      </div>

      <style>
        {`
          @page {
            size: letter;
            margin: 0;
          }

          @media print {
            html,
            body {
              width: 8.5in;
              height: 11.8in;
              overflow: hidden;
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
              left: 0;
              top: 0;
              width: 100%;
              height: auto;
              margin: 0;
              padding: 0;
              box-shadow: none !important;
              border: none !important;
            }
          }
        `}
      </style>
    </div>
  )
}

export default ResumePreview