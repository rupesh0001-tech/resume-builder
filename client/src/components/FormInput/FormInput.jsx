import React from "react";

const FormInput = ({name, label, placeholder, icon, value, change, type}) => {
  return (
    <div className="flex flex-col">
      <label className=" opacity-80" htmlFor={name}> {icon} { label} </label>
      <input
        id={name}
        value={value}
        onChange={change}
        className=" max-w-full h-9  border mt-1 border-gray-500/30 focus:border-indigo-500 outline-none rounded py-2.5 px-4"
        type={type}
        name= {name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
