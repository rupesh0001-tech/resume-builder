import React, { useState, useContext } from "react";
import FormInput from "../FormInput/FormInput";
import { useExperience } from "../../Hooks/ResumeData/Experience";



const Experience = () => {
  const { experienceData, setExperienceData } = useExperience();

  const initData = {
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    isCurrent: false,
  };

  const [data, setData] = useState({
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    isCurrent: false,
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    setExperienceData((prev) => [...prev, { ...data }]);
  };

  const handleDel = () => {
    setExperienceData((prev) => [...prev.slice(0, prev.length - 2)]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col mb-8 ">
        <h1 className="text-xl text-teal-950 font-semibold"> Experience </h1>
        <p className="text-md text-gray-500 text-sm">
          Enter About your Experience
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col ">
        <div className="flex flex-col gap-4">

          <FormInput
            name="position"
            label="Position"
            value={data.position}
            change={handleChange}
            placeholder="Enter your job position"
            icon={<i className="fa-solid fa-user-tie"></i>}
          />

          <FormInput
            name="company"
            label="Company"
            value={data.company}
            change={handleChange}
            placeholder="Enter company name"
            icon={<i className="fa-solid fa-building"></i>}
          />

          <FormInput
            name="startDate"
            label="Start Date"
            type="date"
            value={data.startDate}
            change={handleChange}
            placeholder="Enter start date"
            icon={<i className="fa-solid fa-calendar"></i>}
          />

          <FormInput
            name="endDate"
            label="End Date"
            type="date"
            value={data.endDate}
            change={handleChange}
            placeholder="Enter end date"
            icon={<i className="fa-solid fa-calendar-days"></i>}
          />

          <FormInput
            name="description"
            label="Description"
            value={data.description}
            change={handleChange}
            placeholder="Enter job description"
            icon={<i className="fa-solid fa-align-left"></i>}
          />

          <div className="flex gap-4">
            <button
              className="px-4 py-2 bg-indigo-400 rounded-lg hover:bg-indigo-500 active:scale-95 transition-all text-white hover:cursor-pointer"
              onClick={(e) => {
                handleAdd();
              }}
            >
              Add
            </button>

            <button className="px-4 py-2 bg-indigo-400 rounded-lg hover:bg-indigo-500 active:scale-95 transition-all text-white hover:cursor-pointer">
              save
            </button>
          </div>
        </div>
      </form>

      <hr className="mt-4 mb-4" />

      <div>
        <h1 className="text-xl text-teal-950 font-semibold">
          Experience Details
        </h1>

        {experienceData.map((exp, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-gray-200 rounded-xl p-4 mt-4 hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-teal-700 flex items-center gap-2">
                <i className="fa-solid fa-user-tie text-teal-600"></i>
                {exp.position}
              </h3>

              <button
                onClick={() => handleDel()}
                className="text-red-500 hover:text-red-700 hover:bg-red-100 p-2 rounded-full transition-all hover:cursor-pointer"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>

            <div className="mt-2 text-gray-700 space-y-1">
              <p>
                <span className="font-medium text-gray-900">Company:</span>{" "}
                {exp.company}
              </p>
              <p>
                <span className="font-medium text-gray-900">Start Date:</span>{" "}
                {exp.startDate}
              </p>
              <p>
                <span className="font-medium text-gray-900">End Date:</span>{" "}
                {exp.endDate}
              </p>
              <p>
                <span className="font-medium text-gray-900">Description:</span>{" "}
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
