import React from "react";
import FormTextArea from "./FormTextArea";
import { useProfessionalSummary } from "../../Hooks/ResumeData/ProfessionalSummary";
import SaveBtn from "./SaveBtn";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useResumeId } from "../../Hooks/ResumeId/useResumeId";
import { useState } from "react";

const professionalSummary = ({ setFormTab }) => {
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  let { professionalSummaryData, setProfessionalSummaryData } =
    useProfessionalSummary();

  const { currentResumeId, setCurrentResumeId } = useResumeId();
  const id = currentResumeId;

  const handelChange = (e) => {
    setProfessionalSummaryData(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${
          import.meta.env.VITE_BASE_URL
        }/api/resumes/${id}/professional-summary`,
        { professional_summary: professionalSummaryData },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        toast.success(" professional summary updated successfully ");
        setFormTab(3);
      });
  };

  const enhancedText = async () => {
    if(disable) return
    setDisable(true);
    const toastId = toast.loading("Enhancing text...");
    setLoading(true);
    const prompt = {
      prompt: ` Improve this professional summary. Fix grammar and spelling. Output 20–40 words only. Keep it concise and polished, text is ${professionalSummaryData}  `,
    };

    await axios
      .post(`${import.meta.env.VITE_BASE_URL}/api/ai/text`, prompt, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success("Text enhanced successfully", { id: toastId });

        setProfessionalSummaryData(res.data);
      })
      .catch((err) => {
        toast.error("Too many requests , please try again after some time ", { id: toastId });
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setDisable(false), 5000); // Disable the button after 5 seconds
      });
  };
  return (
    <div className="flex flex-col  ">
      {loading && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 pointer-events-auto"></div>
      )}
      <div className="flex flex-col mb-8 ">
        <h1 className="text-xl text-teal-950 font-semibold">
          {" "}
          professional Summary
        </h1>
        <p className="text-md text-gray-500 text-sm">
          {" "}
          Enter your professional summary{" "}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <form className="flex flex-col gap-8" onSubmit={handelSubmit}>
          <FormTextArea
            value={professionalSummaryData}
            handelChange={handelChange}
            name={"professionalSummaryData"}
            label={"Professional Summary "}
          />

          <button
            type="button"
            onClick={() => enhancedText()}
            className=" border border-black px-2 py-2 w-auto rounded-4xl bg-gray-200 flex gap-4 justify-center items-center cursor-pointer hover:bg-gray-300 transform duration-200 "
          >
            <i class="fa-solid fa-comment-nodes"></i>
            Enchance text with AI
          </button>
          <SaveBtn name={"Save"} />
        </form>
      </div>
    </div>
  );
};

export default professionalSummary;
