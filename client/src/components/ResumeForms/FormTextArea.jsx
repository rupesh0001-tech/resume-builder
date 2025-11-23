import React from "react";

const FormTextArea = ({  name, label, professionalSummaryData , handelChange, value  }) => {
  return (
    <div className="flex flex-col">
      <label className=" opacity-80" htmlFor={name}>
        <i class="fa-regular fa-pen-to-square"></i> {label}
      </label>

      <textarea
        name={name}
        id={name}
        className="border mt-1 border-gray-500/30 px-2 py-2.5 focus:border-gray-500 outline-none rounded "
        rows="8"
        cols="40"
        value={value}
        onChange={handelChange}
        style={{
          resize: "none",
        }}
      >
        
      </textarea>
    </div>
  );
};

export default FormTextArea;
