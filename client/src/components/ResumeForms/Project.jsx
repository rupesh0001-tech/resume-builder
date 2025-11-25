import React from "react";
import { useProjectInfo } from "../../Hooks/ResumeData/ProjectInfo";
import FormInput from "../FormInput/FormInput";
import SaveBtn from "./SaveBtn";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useResumeId } from "../../Hooks/ResumeId/useResumeId";

const Project = () => {
  const { currentResumeId } = useResumeId();
  const id = currentResumeId;
  const { projectData, setProjectData } = useProjectInfo();
  const initData = {
    name: "",
    type: "",
    description: "",
  };
  const [data, setData] = React.useState(initData);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    setProjectData((prev) => [...prev, { ...data }]);
    setData(initData);
    console.log("Added:", projectData);
  };

  const handleDel = async (_id) => {
    await axios
      .delete(
        `${import.meta.env.VITE_BASE_URL}/api/resumes/${id}/project/${_id}`,
        { withCredentials: true }
      )
      .then((res) => {
        setProjectData((prev) => prev.filter((exp) => exp._id !== _id));
        console.log("deleted");
        toast.success(" project deleted successfully ");
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${import.meta.env.VITE_BASE_URL}/api/resumes/${id}/project`,
        { projects: projectData },
        { withCredentials: true }
      )
      .then((res) => {
        setProjectData(res.data.resume.project);
        toast.success(" projects updated successfully ");
        setFormTab(5);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="flex flex-col mb-8 ">
        <h1 className="text-xl text-teal-950 font-semibold">
          {" "}
          Project Information
        </h1>
        <p className="text-md text-gray-500 text-sm">
          {" "}
          Enter What you have worked on{" "}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col gap-4 ">
          <FormInput
            name="name"
            type="text"
            value={data.name}
            change={handleChange}
            placeholder="Project Name"
            label="Project Name"
            icon={<i className="fa-solid fa-file-signature"></i>}
          />

          <FormInput
            name="type"
            type="text"
            value={data.type}
            change={handleChange}
            placeholder="Project Type"
            label="Project Type"
            icon={<i className="fa-solid fa-layer-group"></i>}
          />

          <label htmlFor="description">
            {" "}
            <i className="fa-regular fa-pen-to-square"></i> description
          </label>
          <textarea
            name="description"
            value={data.description}
            id="description"
            onChange={handleChange}
            placeholder="Description"
            label="Description"
            rows={4}
            className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>

          <div className="flex gap-4">
            <button
              className="px-4 py-2 bg-indigo-400 rounded-lg hover:bg-indigo-500 active:scale-95 transition-all text-white hover:cursor-pointer"
              onClick={(e) => {
                handleAdd();
              }}
            >
              Add
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-indigo-400 rounded-lg hover:bg-indigo-500 active:scale-95 transition-all text-white hover:cursor-pointer"
            >
              save
            </button>
          </div>
        </div>
      </form>
      <hr className="mb-4 mt-4" />
      <div className="">
        <h1 className="text-xl text-teal-950 font-semibold">
          {" "}
          Project Information
        </h1>
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-gray-200 rounded-xl p-4 mt-4 hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-teal-700 flex items-center gap-2">
                <i className="fa-solid fa-graduation-cap text-teal-600"></i>
                {project.name}
              </h3>

              {/* DELETE BUTTON */}
              <button
                onClick={() => handleDel(project._id)}
                className="text-red-500 hover:text-red-700 hover:bg-red-100 p-2 rounded-full transition-all hover:cursor-pointer"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>

            <div className="mt-2 text-gray-700 space-y-1">
              <p>
                <span className="font-medium text-gray-900"></span>{" "}
                {project.type}
              </p>
              <p>
                <span className="font-medium text-gray-900"></span>{" "}
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
