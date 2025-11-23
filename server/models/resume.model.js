import mongoose from "mongoose";

const personalInfoSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  phone: String,
  location: String,
  linkedin: String,
  website: String,
  profession: String,
  image: String
}, { _id: false });

const experienceSchema = new mongoose.Schema({
  company: String,
  position: String,
  startDate: String,
  endDate: String,
  description: String,
  is_current: Boolean
});

const educationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  field: String,
  graduation_date: String,
  gpa: String
});

const projectSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String
});

// ❌ REMOVE OLD skillSchema — DO NOT KEEP IT
// const skillSchema = ...

const resumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  title: { type: String, required: true },

  personal_info: personalInfoSchema,

  professional_summary: { type: String, default: "" },

  // FINAL CORRECT STRUCTURE
  skills: { type: [String], default: [] },

  experience: { type: [experienceSchema], default: [] },

  education: { type: [educationSchema], default: [] },

  project: { type: [projectSchema], default: [] },

  template: { type: String, default: "minimal-image" },

  accent_color: { type: String, default: "#000000" },

  public: { type: Boolean, default: false }

}, { timestamps: true });

export default mongoose.model("Resume", resumeSchema);
