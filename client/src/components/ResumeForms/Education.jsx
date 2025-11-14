import React from "react";
import FormInput from "../FormInput/FormInput";
import { useEducationInfo } from "../../Hooks/ResumeData/EducationInfo";
import SaveBtn from "./SaveBtn";

const emptyEdu = () => ({
  id: Date.now().toString() + Math.random().toString(36).slice(2),
  degree: "",
  institution: "",
  field: "",
  graduation_date: "",
  gpa: "",
});

const Education = () => {
  const { educationInfo, setEducationInfo } = useEducationInfo();

  // Ensure array on first mount
  React.useEffect(() => {
    if (!Array.isArray(educationInfo) || educationInfo.length === 0) {
      setEducationInfo([emptyEdu()]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setEducationInfo((prev) => {
      const arr = Array.isArray(prev) ? [...prev] : [];
      arr[index] = { ...arr[index], [name]: value };
      return arr;
    });
  };

  const handleAddEducation = () => {
    setEducationInfo((prev) => {
      const arr = Array.isArray(prev) ? [...prev] : [];
      arr.push(emptyEdu());
      return arr;
    });
  };

  const handleRemoveEducation = (id) => {
    setEducationInfo((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Education:", educationInfo);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-8">
        <h1 className="text-xl text-teal-950 font-semibold">Education</h1>
        <p className="text-md text-gray-500 text-sm">
          Add your educational background
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="formData flex flex-col gap-6">

          {Array.isArray(educationInfo) &&
            educationInfo.map((edu, idx) => (
              <div key={edu.id} className="rounded-md">
                <div className="flex justify-between items-center mb-3">
                  <h2 className="font-medium">Education #{idx + 1}</h2>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleRemoveEducation(edu.id)}
                      className="px-3 py-1 bg-red-200 rounded hover:bg-red-300 cursor-pointer"
                    >
                      Remove
                    </button>

                    {idx === educationInfo.length - 1 && (
                      <button
                        type="button"
                        onClick={handleAddEducation}
                        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer"
                      >
                        + Add
                      </button>
                    )}
                  </div>
                </div>

                <FormInput
                  name="degree"
                  label="Degree"
                  icon={<i className="fa-solid fa-graduation-cap mr-1"></i>}
                  value={edu.degree}
                  change={(e) => handleChange(e, idx)}
                  type="text"
                  placeholder="B.Tech, B.Sc, MBA, etc."
                />

                <FormInput
                  name="institution"
                  label="Institution"
                  icon={<i className="fa-solid fa-building-columns mr-1"></i>}
                  value={edu.institution}
                  change={(e) => handleChange(e, idx)}
                  type="text"
                  placeholder="University of XYZ"
                />

                <FormInput
                  name="field"
                  label="Field of Study"
                  icon={<i className="fa-solid fa-book-open mr-1"></i>}
                  value={edu.field}
                  change={(e) => handleChange(e, idx)}
                  type="text"
                  placeholder="Computer Science"
                />

                <div className="flex gap-4">
                  <FormInput
                    name="graduation_date"
                    label="Graduation Date"
                    icon={<i className="fa-solid fa-calendar mr-1"></i>}
                    value={edu.graduation_date}
                    change={(e) => handleChange(e, idx)}
                    type="date"
                  />

                  <FormInput
                    name="gpa"
                    label="GPA / Percentage"
                    icon={<i className="fa-solid fa-percent mr-1"></i>}
                    value={edu.gpa}
                    change={(e) => handleChange(e, idx)}
                    type="text"
                    placeholder="8.5 CGPA"
                  />
                </div>
              </div>
            ))}
        </div>

        <hr className="mt-5 mb-2" />

        <div className="flex gap-3 items-center mt-4">
          <button
            type="button"
            onClick={handleAddEducation}
            className="px-3 py-3 bg-gray-400 hover:bg-gray-500 rounded-xl transition duration-200 cursor-pointer"
          >
            Add Education
          </button>

          <SaveBtn name="Save" />
        </div>
      </form>
    </div>
  );
};

export default Education;
