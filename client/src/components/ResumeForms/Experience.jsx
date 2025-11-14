import React from "react";
import FormInput from "../FormInput/FormInput";
import { useExperience } from "../../Hooks/ResumeData/Experience";
import SaveBtn from "./SaveBtn";

const emptyExp = () => ({
  id: Date.now().toString() + Math.random().toString(36).slice(2), // unique id
  company: "",
  position: "",
  start_date: "",
  end_date: "",
  description: "",
});

const Experience = () => {
  const { experienceData, setExperienceData } = useExperience();

  // If experienceData might be undefined, initialize it as an array
  React.useEffect(() => {
    // If experienceData is undefined, initialize it as an array
    if (!Array.isArray(experienceData) || experienceData.length === 0) {
      setExperienceData([emptyExp()]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setExperienceData((prev) => {
      const copy = Array.isArray(prev) ? [...prev] : [];
      copy[index] = { ...copy[index], [name]: value };
      return copy;
    });
  };

  const handleAddExperience = () => {
    setExperienceData((prev) => {
      const copy = Array.isArray(prev) ? [...prev] : [];
      copy.push(emptyExp());
      return copy;
    });
    console.log(experienceData);
  };

  const handleRemoveExperience = (id) => {
    setExperienceData((prev) => prev.filter((e) => e.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do whatever you need here, e.g. validation or sending to backend
    console.log("Saved experiences:", experienceData);
  };

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col mb-8 ">
        <h1 className="text-xl text-teal-950 font-semibold"> Experience</h1>
        <p className="text-md text-gray-500 text-sm"> Add Your Experience </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="formData flex flex-col gap-8">
          {Array.isArray(experienceData) &&
            experienceData.map((exp, idx) => (
              <div key={exp.id} className="  rounded-md flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="font-medium">Experience #{idx + 1}</h2>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleRemoveExperience(exp.id)}
                      className="px-3 py-1 bg-red-200 rounded hover:bg-red-300 hover:cursor-pointer"
                    >
                      Remove
                    </button>
                    {idx === experienceData.length - 1 && (
                      <button
                        type="button"
                        onClick={handleAddExperience}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                      >
                        + Add
                      </button>
                    )}
                  </div>
                </div>

                <div className=" flex flex-col gap-4">
                  <FormInput
                    name="company"
                    label="Company Name"
                    icon={
                      <i className="fa-solid fa-building  text-sm mr-1"></i>
                    }
                    value={exp.company}
                    change={(e) => handleChange(e, idx)}
                    type="text"
                    placeholder="ABC Technologies Pvt. Ltd."
                  />

                  <FormInput
                    name="position"
                    label="Position"
                    icon={
                      <i className="fa-solid fa-ranking-star  text-sm mr-1"></i>
                    }
                    value={exp.position}
                    change={(e) => handleChange(e, idx)}
                    type="text"
                    placeholder="Full Stack Web Developer"
                  />

                  <div className="flex gap-4">
                    <FormInput
                      name="start_date"
                      label="Date of joining"
                      icon={
                        <i className="fa-solid fa-calendar  text-sm mr-1"></i>
                      }
                      value={exp.start_date}
                      change={(e) => handleChange(e, idx)}
                      type="date"
                      placeholder=""
                    />

                    <FormInput
                      name="end_date"
                      label="Date of leaving"
                      icon={
                        <i className="fa-solid fa-calendar  text-sm mr-1"></i>
                      }
                      value={exp.end_date}
                      change={(e) => handleChange(e, idx)}
                      type="date"
                      placeholder=""
                    />
                  </div>

                  <label
                    className="opacity-80"
                    htmlFor={`description-${exp.id}`}
                  >
                    <i className="fa-regular fa-pen-to-square"></i> description
                  </label>
                  <textarea
                    name="description"
                    id={`description-${exp.id}`}
                    className="border mt-1 border-gray-500/30 px-2 py-2.5 focus:border-gray-500 outline-none rounded w-full"
                    rows="4"
                    value={exp.description}
                    onChange={(e) => handleChange(e, idx)}
                    style={{ resize: "none" }}
                  />
                </div>
              </div>
            ))}
        </div>

        <hr className="mt-5 mb-2" />

        <div className="flex gap-3 items-center mt-4">
          <button
            type="button"
            onClick={handleAddExperience}
            className="px-3 py-3 bg-gray-400 hover:bg-gray-500 rounded-xl transition duration-200 hover:cursor-pointer"
          >
            Add Experience
          </button>

          <SaveBtn name="Save" />
        </div>
      </form>
    </div>
  );
};

export default Experience;
