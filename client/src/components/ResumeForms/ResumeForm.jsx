import React from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./Project";
import Skills from "./Skills";
import { useState } from "react";
import BackFrontBtns from "./BackFrontBtns";
import ProfessionalSummary from "./ProfessionalSummary";
import ThemeSelector from "./ThemeSelector";
import AccentColorSelector from "./AccentColorSelector";

const ResumeForm = () => {
  let [formTab, setFormTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Personal Info",
      component: <PersonalInfo setFormTab={setFormTab} />,
    },
    {
      id: 2,
      title: "Professional Summary",
      component: <ProfessionalSummary setFormTab={setFormTab} />,
    },
    {
      id: 3,
      title: "Experience",
      component: <Experience setFormTab={setFormTab} />,
    },
    {
      id: 4,
      title: "Education",
      component: <Education setFormTab={setFormTab} />,
    },
    {
      id: 5,
      title: "Project",
      component: <Project setFormTab={setFormTab} />,
    },
    {
      id: 6,
      title: "Skills",
      component: <Skills />,
    },
  ];

  return (
    <div className="resume-form-wrapper w-[95%] max-w-[500px] mx-auto sm:w-auto">

      <div className="flex justify-between items-center w-full  ">
        
        <div className="flex justify-between gap-4">
          <ThemeSelector />
          <AccentColorSelector />
        </div>
        <BackFrontBtns setFormTab={setFormTab} formTab={formTab} />
      </div>

      <hr className="my-4 text-gray-500" />
      {tabs.map((tab, idx) => {
        return (
          <div
            key={idx}
            className={` ${formTab === tab.id ? "block" : "hidden"} w-90`}
          >
            {tab.component}
          </div>
        );
      })}
    </div>
  );
};

export default ResumeForm;
