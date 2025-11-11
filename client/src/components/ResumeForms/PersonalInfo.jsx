import React from "react";
import Title from "../TItle/Title";
import FormInput from "../FormInput/FormInput";
import { useState } from "react";
import SaveBtn from "./SaveBtn";
import ProfileImageUploader from "./ProfileImageUploader";

const PersonalInfo = () => {
  let [personalData, setPersonalData] = useState({
    full_name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    website: "",
    profession: "",
    image: "",
  });

  const handelChange = (e) => {
    setPersonalData({
      ...personalData,
      [e.target.name]: e.target.value,
      
    });
    
  }

  

  const handelSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col  ">
      <div className="flex flex-col mb-8 ">
        <h1 className="text-2xl text-teal-950 font-semibold">
          {" "}
          personal Information
        </h1>
        <p className="text-md text-gray-500 text-sm">
          {" "}
          Enter your personal information{" "}
        </p>
      </div>

      {/* form Data  */}
      <form>
        <div className="formData flex flex-col gap-6">
          <ProfileImageUploader />
          <FormInput
            name="full_name"
            label="Full Name"
            icon={<i className="fa-solid fa-user  text-sm mr-1"></i>}
            value={personalData.name}
            change={handelChange}
            type="text"
            placeholder="Enter your full name"
          />

          <FormInput
            name="email"
            label="Email"
            icon={<i className=" fa-solid fa-envelope text-sm mr-1 "></i>}
            value={personalData.email}
            change={handelChange}
            type="email"
            placeholder="Enter your email"
          />

          <FormInput
            name="phone"
            label="Phone"
            icon={<i className=" fa-solid fa-phone text-sm mr-1 "></i>}
            value={personalData.phone}
            change={handelChange}
            type="tel"
            placeholder="Enter your phone number"
          />

          <FormInput
            name="location"
            label="Location"
            icon={<i className=" fa-solid fa-location text-sm mr-1 "></i>}
            value={personalData.location}
            change={handelChange}
            type="text"
            placeholder="Enter your location"
          />

          <FormInput
            name="linkedin"
            label="Linkedin"
            value={personalData.linkedin}
            icon={<i className=" fa-brands fa-linkedin text-sm mr-1"></i>}
            change={handelChange}
            type="url"
            placeholder="Enter your linkedin url"
          />

          <FormInput
            name="website"
            label="Website"
            value={personalData.website}
            icon={<i className=" fa-solid fa-globe text-sm mr-1  "></i>}
            change={handelChange}
            type="url"
            placeholder="Enter your website url"
          />

          <FormInput
            name="profession"
            label="Profession"
            icon={<i className=" fa-solid fa-briefcase text-sm mr-1 "></i>}
            value={personalData.profession}
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
