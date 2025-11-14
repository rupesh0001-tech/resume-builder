import React, { useEffect } from "react";
import { useContext } from "react";
import { ResumeDataContext } from "../../Context/ResumeDataContext";
import FormInput from "../FormInput/FormInput";

const Education = () => {
  const { educationInfo, setEducationInfo } = useContext(ResumeDataContext);

  const emptyEdu = () => {
    return {
      _id: Date.now().toString() + Math.random().toString(36).slice(2),
      degree: "",
      institution: "",
      graduation_date: "",
      gpa: "",
      field: "",
    };
  }

  useEffect(() => {
    if(Array.isArray(educationInfo) && educationInfo.length === 0){
      setEducationInfo([emptyEdu()]);
    }
  }, [])

  const handelChange = (e, idx) => {
    setEducationInfo({
      ...educationInfo,
      [idx]: {
        ...educationInfo[idx],
        [e.target.name]: e.target.value,
      },
    });
  }


  return (
    <div className="flex flex-col">
      <div className="flex flex-col mb-8 ">
        <h1 className="text-xl text-teal-950 font-semibold">
          {" "}
          personal Information
        </h1>
        <p className="text-md text-gray-500 text-sm">
          {" "}
          Enter your personal information{" "}
        </p>
      </div>


      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <FormInput
            label="Degree"
            type="text"
            name="degree"
            value={educationInfo.degree}
            onChange={handelChange}
          />
          <FormInput
            label="Institution"
            type="text"
            name="institution"
            value={educationInfo.institution}
            onChange={handelChange}
          />
          <FormInput
            label="Graduation Date"
            type="date"
            name="graduation_date"
            value={educationInfo.graduation_date}
            onChange={handelChange}
          />
          <FormInput
            label="GPA"
            type="text"
            name="gpa"
            value={educationInfo.gpa}
            onChange={handelChange}
          />
          <FormInput
            label="Field of Study"
            type="text"
            name="field"
            value={educationInfo.field}
            onChange={handelChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Education;
