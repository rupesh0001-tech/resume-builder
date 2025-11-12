import React from "react";
import Title from "../TItle/Title";
import FormInput from "../FormInput/FormInput";
import { useState } from "react";
import SaveBtn from "./SaveBtn";
import ProfileImageUploader from "./ProfileImageUploader";
import { usePersonalInfo } from "../../Hooks/ResumeData/PersonalInfo.jsx";

const PersonalInfo = () => {
  const { personalInfoData, setPersonalInfoData } = usePersonalInfo();
  
  const handelChange = (e) => {
    setPersonalInfoData({
      ...personalInfoData,
      [e.target.name]: e.target.value,
      
    });
    
  }

  

  const handelSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className="flex flex-col  ">
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

      {/* form Data  */}
      <form  onSubmit={handelSubmit}>
        <div className="formData flex flex-col gap-6">
          <ProfileImageUploader />
          <FormInput
            name="full_name"
            label="Full Name"
            icon={<i className="fa-solid fa-user  text-sm mr-1"></i>}
            value={personalInfoData.full_name}
            change={handelChange}
            type="text"
            placeholder="Enter your full name"
          />

          <FormInput
            name="email"
            label="Email"
            icon={<i className=" fa-solid fa-envelope text-sm mr-1 "></i>}
            value={personalInfoData.email}
            change={handelChange}
            type="email"
            placeholder="Enter your email"
          />

          <FormInput
            name="phone"
            label="Phone"
            icon={<i className=" fa-solid fa-phone text-sm mr-1 "></i>}
            value={personalInfoData.phone}
            change={handelChange}
            type="tel"
            placeholder="Enter your phone number"
          />

          <FormInput
            name="location"
            label="Location"
            icon={<i className=" fa-solid fa-location text-sm mr-1 "></i>}
            value={personalInfoData.location}
            change={handelChange}
            type="text"
            placeholder="Enter your location"
          />

          <FormInput
            name="linkedin"
            label="Linkedin"
            value={personalInfoData.linkedin}
            icon={<i className=" fa-brands fa-linkedin text-sm mr-1"></i>}
            change={handelChange}
            type="url"
            placeholder="Enter your linkedin url"
          />

          <FormInput
            name="website"
            label="Website"
            value={personalInfoData.website}
            icon={<i className=" fa-solid fa-globe text-sm mr-1  "></i>}
            change={handelChange}
            type="url"
            placeholder="Enter your website url"
          />

          <FormInput
            name="profession"
            label="Profession"
            icon={<i className=" fa-solid fa-briefcase text-sm mr-1 "></i>}
            value={personalInfoData.profession}
            change={handelChange}
            type="text"
            placeholder="Enter your profession"
          />

          

          <SaveBtn name="Save" />

        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
