import React from "react";

const SaveBtn = ({ name }) => {
  return (
    <button
      className="group px-8 py-2.5 bg-indigo-600 rounded-lg text-white cursor-pointer transition duration-300 hover:bg-indigo-700"
      type="submit"
    >
      <p className="relative h-6 overflow-hidden">
       {name}
        
      </p>
    </button>
  );
};

export default SaveBtn;
