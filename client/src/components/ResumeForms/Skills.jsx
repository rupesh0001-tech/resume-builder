import React from "react";
import FormInput from "../FormInput/FormInput";
import { useState } from "react";
import { useSkillInfo } from "../../Hooks/ResumeData/SkillInfo";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useResumeId } from "../../Hooks/ResumeId/useResumeId";

const Skills = () => {
  const { currentResumeId } = useResumeId();
  const id = currentResumeId;

  const { skillData, setSkillData } = useSkillInfo();
  const [data, setData] = useState("");

  const handleChange = (e) => setData(e.target.value);

  const handleAdd = () => {
    if (!data.trim()) return;
    setSkillData([...skillData, data]);
    setData("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put(
        `${import.meta.env.VITE_BASE_URL}/api/resumes/${id}/skills`,
        { skills: skillData }, // array of strings
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        toast.success("Skills updated successfully");
      })
      .catch((err) => console.log(err));
  };

  const handleDel = async (skill) => {
    axios
      .delete(
        `${import.meta.env.VITE_BASE_URL}/api/resumes/${id}/skills/${skill}`,
        { withCredentials: true }
      )
      .then(() => {
        setSkillData((prev) => prev.filter((s) => s !== skill));
        toast.success("Skill deleted");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="w-50 flex gap-4 items-end">
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
            type = "submit"
            className="bg-teal-950 hover:bg-teal-800 text-white font-semibold flex justify-center items-center rounded h-8 py-5 px-4  hover: cursor-pointer transition duration-150"
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
            className="px-3 py-1 bg-gray-300 rounded-2xl flex items-center gap-2 shadow-sm hover:shadow-md hover:scale-[1.03]"
          >
            <span className="text-sm font-medium text-gray-800">{skill}</span>

            <button
              onClick={() => handleDel(skill)}
              className="text-gray-600 hover:text-red-600 hover:cursor-pointer transition-all"
            >
              <i className="fa-solid fa-x text-[10px]"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
