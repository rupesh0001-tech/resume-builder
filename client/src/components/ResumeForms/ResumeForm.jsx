import React from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./Project";
import Skills from "./Skills";
import { useState } from "react";
import BackFrontBtns from "./BackFrontBtns";

const ResumeForm = () => {
  let [formTab, setFormTab] = useState(1);

  const tabs = [
    {
      id: 1,
      title: "Personal Info",
      component: <PersonalInfo />,
    },
    {
      id: 2,
      title: "Experience",
      component: <Experience />,
    },
    {
      id: 3,
      title: "Education",
      component: <Education />,
    },
    {
      id: 4,
      title: "Project",
      component: <Project />,
    },
    {
      id: 5,
      title: "Skills",
      component: <Skills />,
    },
  ];

  return (
    
    <div className=" w-1/2 h-max-auto  border border-gray-200  px-8 py-10  ">
      <BackFrontBtns setFormTab = {setFormTab} formTab = {formTab} />
      {tabs.map((tab, idx) => {
        return (
          <div
            key={idx}
            className={` ${formTab === tab.id ? "block" : "hidden"} `}
          >
            {tab.component}
          </div>
        );
      })}

      
    </div>
  );
};

export default ResumeForm;
