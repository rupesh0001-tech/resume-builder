import React, { useEffect } from "react";
import FormInput from "../FormInput/FormInput";
import SaveBtn from "./SaveBtn";
import { useEducationInfo } from "../../Hooks/ResumeData/EducationInfo";
import { useState } from "react";

const Education = () => {
  const { educationData, setEducationData } = useEducationInfo();

  const [data, setData] = useState({
    degree: "",
    institution: "",
    field: "",
    graduation_date: "",
    description: "",
    gpa: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    setEducationData(prev => [...prev, { ...data }]);
  };

  const handleDel = () => {
    setEducationData((prev) =>  [...prev.slice(0, prev.length - 2)] );
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col mb-8 ">
        <h1 className="text-xl text-teal-950 font-semibold">
          {" "}
          Educational Information
        </h1>
        <p className="text-md text-gray-500 text-sm">
          {" "}
          Enter About your Education{" "}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col ">
        <div className=" flex flex-col gap-4 ">
          <FormInput
            name="degree"
            label="Degree"
            value={data.degree}
            change={handleChange}
            placeholder="Enter your degree"
            icon={<i className="fa-solid fa-graduation-cap"></i>}
          />

          <FormInput
            name="institution"
            label="Institution"
            change={handleChange}
            value={data.institution}
            placeholder="Enter your institution"
            icon={<i className="fa-solid fa-school"></i>}
          />

          <FormInput
            name="field"
            label="Field"
            change={handleChange}
            value={data.field}
            placeholder="Enter your field"
            icon={<i className="fa-solid fa-book"></i>}
          />

          <FormInput
            name="graduation_date"
            label="Graduation Date"
            type="date"
            change={handleChange}
            value={data.graduation_date}
            placeholder="Enter graduation date"
            icon={<i className="fa-solid fa-calendar"></i>}
          />

          <FormInput
            name="gpa"
            label="GPA"
            type="number"
            change={handleChange}
            value={data.gpa}
            placeholder="Enter your GPA"
            icon={<i className="fa-solid fa-chart-line"></i>}
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
          {" "}
          Education Details
        </h1>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-gray-200 rounded-xl p-4 mt-4 hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-teal-700 flex items-center gap-2">
                <i className="fa-solid fa-graduation-cap text-teal-600"></i>
                {edu.degree}
              </h3>

              {/* DELETE BUTTON */}
              <button
                onClick={() => handleDel()}
                className="text-red-500 hover:text-red-700 hover:bg-red-100 p-2 rounded-full transition-all hover:cursor-pointer"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>

            <div className="mt-2 text-gray-700 space-y-1">
              <p>
                <span className="font-medium text-gray-900">Institution:</span>{" "}
                {edu.institution}
              </p>
              <p>
                <span className="font-medium text-gray-900">Field:</span>{" "}
                {edu.field}
              </p>
              <p>
                <span className="font-medium text-gray-900">
                  Graduation Date:
                </span>{" "}
                {edu.graduation_date}
              </p>
              <p>
                <span className="font-medium text-gray-900">Description:</span>{" "}
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
