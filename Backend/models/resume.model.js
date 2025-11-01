// models/resume.model.js
import mongoose from "mongoose";
import userModel from "./user.model.js";




const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userModel", // reference to user model
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    thumbnailLink: {
      type: String,
    },
    template: {
      type: String,
      default: "default-template",
    },
    profileInfo: {
      name: String,
      role: String,
      summary: String,
    },
    contactInfo: {
      email: String,
      phone: String,
      address: String,
      linkedin: String,
      github: String,
      website: String,
    },
    experience: [
      {
        company: String,
        position: String,
        startDate: String,
        endDate: String,
        description: String,
      },
    ],
    education: [
      {
        institution: String,
        degree: String,
        startDate: String,
        endDate: String,
        grade: String,
      },
    ],
    skills: [String],
    projects: [
      {
        name: String,
        description: String,
        link: String,
      },
    ],
    certifications: [
      {
        title: String,
        issuer: String,
        year: String,
      },
    ],
    languages: [String],
    interests: [String],
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;










//   create and connect a user with ref if 
//   schema should have 
//   title, rhumnailLink, template , profileinfod{},contact info {}
//   expirence education, skills, projects certifications, languagues, interest, 
//   at end add a timestap export as resume model 


// make a resume controller 