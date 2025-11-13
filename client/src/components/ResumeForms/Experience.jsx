import React from "react";
import FormInput from "../FormInput/FormInput";
import { useExperience } from "../../Hooks/ResumeData/Experience";

const Experience = () => {
  const { experienceData, setExperienceData } = useExperience();

  const handelChange = (e) => {
    setExperienceData({
      ...experienceData,
      [e.target.name]: e.target.value,
    });
    console.log(experienceData);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col mb-8 ">
        <h1 className="text-xl text-teal-950 font-semibold"> Experience</h1>
        <p className="text-md text-gray-500 text-sm"> Add Your Experience </p>
      </div>

      <form onSubmit={handelSubmit}>
        <div className="formData flex flex-col gap-4">
          <FormInput
            name="ExperienceName"
            label="Company Name"
            icon={<i className="fa-solid fa-building  text-sm mr-1"></i>}
            value={experienceData.company}
            change={handelChange}
            type="text"
            placeholder="ABC Technologies Pvt. Ltd."
          />

          <FormInput
            name="position"
            label="Position"
            icon={<i className="fa-solid fa-ranking-star  text-sm mr-1"></i>}
            value={experienceData.company}
            change={handelChange}
            type="text"
            placeholder="Full Stack Web Developer"
          />

          <FormInput
            name="start_date"
            label="Date of joining"
            icon={<i className="fa-solid fa-calendar  text-sm mr-1"></i>}
            value={experienceData.start_date}
            change={handelChange}
            type="date"
            placeholder=""
          />

          <FormInput
            name="end_date"
            label="Date of leaving"
            icon={<i className="fa-solid fa-calendar  text-sm mr-1"></i>}
            value={experienceData.end_date}
            change={handelChange}
            type="date"
            placeholder=""
          />


          <label className=" opacity-80" htmlFor='description'>
            <i class="fa-regular fa-pen-to-square"></i> description
          </label>
          <textarea
            name="description"
            id="description"
            className="border mt-1 border-gray-500/30 px-2 py-2.5 focus:border-gray-500 outline-none rounded "
            rows="4"
            cols="40"
            value={experienceData.description}
            onChange={handelChange}
            style={{
              resize: "none",
            }}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Experience;
