import React from "react";

const FormTextArea = ({ content, name, label }) => {
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
        style={{
          resize: "none",
        }}
      >
        {content}
      </textarea>
    </div>
  );
};

export default FormTextArea;
