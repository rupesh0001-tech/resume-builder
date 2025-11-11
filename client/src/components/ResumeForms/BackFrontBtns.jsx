import React from "react";
import { Form } from "react-router-dom";

const BackFrontBtns = ({ setFormTab, formTab }) => {
  const handelNext = () => {
    setFormTab(formTab + 1);
    console.log("ageee badhoooooo");
  };

  const handelBack = () => {
    setFormTab(formTab - 1);
  };

  return (
    <div className="flex gap-4  w-full justify-end">
      {formTab !== 1 && (
        <p
          className=" opacity-60 cursor-pointer hover:opacity-100 "
          type="button"
          onClick={handelBack}
        >
          <i class="fa-solid fa-chevron-left text-sm "></i>back
        </p>
      )}
      {formTab !== 6 && (
        <p
          className=" opacity-60 cursor-pointer hover:opacity-100  "
          type="button"
          onClick={handelNext}
        >
          next<i class="fa-solid fa-chevron-right text-sm "></i>
        </p>
      )}
    </div>
  );
};

export default BackFrontBtns;
