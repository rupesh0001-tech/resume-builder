import React from "react";
import FormInput from "../FormInput/FormInput";
import { useState } from "react";
import { useSkillInfo } from "../../Hooks/ResumeData/SkillInfo";

const skills = () => {
  const { skillData, setSkillData } = useSkillInfo();
  let [data, setData] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleAdd = () => {
    setSkillData([...skillData, data]);
    setData("");
    console.log("Added:", skillData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDel = () => {
    setSkillData((prev) => [...prev.slice(0, prev.length - 2)]);
  };
  return (
    <div className="flex flex-col ">
      <form onSubmit={handleSubmit}>
        <div className="w-50 flex gap-4 items-end ">
          <FormInput
            name="skills"
            label="Add Skill"
            type="text"
            change={handleChange}
            value={data}
            placeholder="JavaScript"
            icon={<i className="fa-solid fa-chart-line"></i>}
          />

          <button
            type="button "
            className="bg-teal-950 hover:bg-teal-800 text-white font-semibold flex justify-center items-center rounded h-8 py-5 px-4 hover:cursor-pointer "
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </form>

      <div className="flex flex-row flex-wrap gap-2 mt-4">
        {skillData.map((skill, index) => (
          <div
            key={index}
            className="px-3 py-1 bg-gray-300 rounded-2xl flex items-center gap-2
      shadow-sm hover:shadow-md transition-all duration-200
      hover:scale-[1.03]"
          >
            {/* Skill Text */}
            <span className="text-sm font-medium text-gray-800">{skill}</span>

            {/* Delete Button */}
            <button
              onClick={handleDel}
              className="text-gray-600 hover:text-red-600 transition-all duration-200 hover:cursor-pointer"
            >
              <i className="fa-solid fa-x text-[10px]"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default skills;
