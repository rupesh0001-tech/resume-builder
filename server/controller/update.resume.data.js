import Resume from "../models/resume.model.js";


// ------------------------------------------------------------
// CREATE RESUME
// ------------------------------------------------------------
export const createResume = async (req, res) => {
  
  try {
    const { title } = req.body;

    const resume = await Resume.create({
      userId: req.user.id,
      title,
      personal_info: {},
      skills: [],
      experience: [],
      education: [],
      project: [],
    });

    res.status(201).json({
      resume,
      message: "Resume created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating resume", error: error.message });
  }
};


// ------------------------------------------------------------
// GET ALL RESUMES OF USER
// ------------------------------------------------------------
export const getMyResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ userId: req.user._id }).sort({ updatedAt: -1 });
    res.status(200).json(resumes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resumes", error: error.message });
  }
};


// ------------------------------------------------------------
// GET SINGLE RESUME
// ------------------------------------------------------------
export const getSingleResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!resume) return res.status(404).json({ message: "Resume not found" });

    res.status(200).json(resume);

  } catch (error) {
    res.status(500).json({ message: "Error fetching resume", error: error.message });
  }
};


// ------------------------------------------------------------
// DELETE RESUME
// ------------------------------------------------------------
export const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!resume) return res.status(404).json({ message: "Resume not found" });

    res.status(200).json({ message: "Resume deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error deleting resume", error: error.message });
  }
};


// ------------------------------------------------------------
// UPDATE PERSONAL INFO
// ------------------------------------------------------------
export const updatePersonalInfo = async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { personal_info: req.body },
      { new: true }
    );

    res.status(200).json({ resume, message: "Personal info updated successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error updating personal info", error: error.message });
  }
};


// ------------------------------------------------------------
// UPDATE PROFESSIONAL SUMMARY
// ------------------------------------------------------------
export const updateProfessionalSummary = async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { professional_summary: req.body.professional_summary },
      { new: true }
    );

    res.status(200).json({
      resume,
      message: "Professional summary updated successfully",
    });

  } catch (error) {
    res.status(500).json({ message: "Error updating summary", error: error.message });
  }
};


// ------------------------------------------------------------
// UPDATE SKILLS
// ------------------------------------------------------------
export const updateSkills = async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { skills: req.body.skills },
      { new: true }
    );

    res.status(200).json({
      resume,
      message: "Skills updated successfully",
    });

  } catch (error) {
    res.status(500).json({ message: "Error updating skills", error: error.message });
  }
};


// ------------------------------------------------------------
// ADD EXPERIENCE
// ------------------------------------------------------------
export const addExperience = async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { $push: { experience: req.body } },
      { new: true }
    );

    res.status(200).json({
      resume,
      message: "Experience added successfully",
    });

  } catch (error) {
    res.status(500).json({ message: "Error adding experience", error: error.message });
  }
};


// ------------------------------------------------------------
// UPDATE SPECIFIC EXPERIENCE
// ------------------------------------------------------------
export const updateExperience = async (req, res) => {
  try {
    const { id, expId } = req.params;

    const resume = await Resume.findOneAndUpdate(
      { _id: id, userId: req.user._id, "experience._id": expId },
      { $set: { "experience.$": req.body } },
      { new: true }
    );

    res.status(200).json({
      resume,
      message: "Experience updated successfully",
    });

  } catch (error) {
    res.status(500).json({ message: "Error updating experience", error: error.message });
  }
};


// ------------------------------------------------------------
// DELETE EXPERIENCE
// ------------------------------------------------------------
export const deleteExperience = async (req, res) => {
  try {
    const { id, expId } = req.params;

    const resume = await Resume.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      { $pull: { experience: { _id: expId } } },
      { new: true }
    );

    res.status(200).json({
      resume,
      message: "Experience deleted successfully",
    });

  } catch (error) {
    res.status(500).json({ message: "Error deleting experience", error: error.message });
  }
};


// ------------------------------------------------------------
// ADD EDUCATION
// ------------------------------------------------------------
export const addEducation = async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { $push: { education: req.body } },
      { new: true }
    );

    res.status(200).json({ resume, message: "Education added successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error adding education", error: error.message });
  }
};


// ------------------------------------------------------------
// UPDATE EDUCATION
// ------------------------------------------------------------
export const updateEducation = async (req, res) => {
  try {
    const { id, eduId } = req.params;

    const resume = await Resume.findOneAndUpdate(
      { _id: id, userId: req.user._id, "education._id": eduId },
      { $set: { "education.$": req.body } },
      { new: true }
    );

    res.status(200).json({ resume, message: "Education updated successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error updating education", error: error.message });
  }
};


// ------------------------------------------------------------
// DELETE EDUCATION
// ------------------------------------------------------------
export const deleteEducation = async (req, res) => {
  try {
    const { id, eduId } = req.params;

    const resume = await Resume.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      { $pull: { education: { _id: eduId } } },
      { new: true }
    );

    res.status(200).json({ resume, message: "Education deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error deleting education", error: error.message });
  }
};


// ------------------------------------------------------------
// ADD PROJECT
// ------------------------------------------------------------
export const addProject = async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { $push: { project: req.body } },
      { new: true }
    );

    res.status(200).json({ resume, message: "Project added successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error adding project", error: error.message });
  }
};


// ------------------------------------------------------------
// UPDATE PROJECT
// ------------------------------------------------------------
export const updateProject = async (req, res) => {
  try {
    const { id, projectId } = req.params;

    const resume = await Resume.findOneAndUpdate(
      { _id: id, userId: req.user._id, "project._id": projectId },
      { $set: { "project.$": req.body } },
      { new: true }
    );

    res.status(200).json({ resume, message: "Project updated successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error updating project", error: error.message });
  }
};


// ------------------------------------------------------------
// DELETE PROJECT
// ------------------------------------------------------------
export const deleteProject = async (req, res) => {
  try {
    const { id, projectId } = req.params;

    const resume = await Resume.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      { $pull: { project: { _id: projectId } } },
      { new: true }
    );

    res.status(200).json({ resume, message: "Project deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error deleting project", error: error.message });
  }
};


// ------------------------------------------------------------
// UPDATE TEMPLATE
// ------------------------------------------------------------
export const updateTemplate = async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { template: req.body.template },
      { new: true }
    );

    res.status(200).json({ resume, message: "Template updated successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error updating template", error: error.message });
  }
};


// ------------------------------------------------------------
// UPDATE ACCENT COLOR
// ------------------------------------------------------------
export const updateAccentColor = async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { accent_color: req.body.accent_color },
      { new: true }
    );

    res.status(200).json({ resume, message: "Accent color updated successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error updating accent color", error: error.message });
  }
};


// ------------------------------------------------------------
// PUBLISH / UNPUBLISH RESUME
// ------------------------------------------------------------
export const updatePublicStatus = async (req, res) => {
  try {
    const resume = await Resume.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { public: req.body.public },
      { new: true }
    );

    res.status(200).json({ resume, message: "Public status updated successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error updating public status", error: error.message });
  }
};
