import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import dummyResumeData from './../assets/assets.js';
const ResumeBuilder = () => {
  const {resumeId} = useParams();

  const [resumeData, setResumedata] = useState(
    {
    _id: '',
    title: '',
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
}
  )

  const loadResume = () => {
    let resume = dummyResumeData.find(resume => resume._id === resumeId);
    return resume; 
};
console.log(resumeId)

  return (
    <div>ResumeBuilder</div>
  )
}

export default ResumeBuilder