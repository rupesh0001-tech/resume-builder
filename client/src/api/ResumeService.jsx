import api from "./api";

// ---------------------- BASIC CRUD ----------------------
export const createResume = (data) =>
  api.post("/resume", data);

export const getMyResumes = () =>
  api.get("/resume/my-resumes");

export const getResume = (id) =>
  api.get(`/resume/${id}`);

export const deleteResume = (id) =>
  api.delete(`/resume/${id}`);


// ---------------------- PERSONAL INFO ----------------------
export const updatePersonalInfo = (id, data) =>
  api.patch(`/resume/${id}/personal-info`, data);


// ---------------------- PROFESSIONAL SUMMARY ----------------------
export const updateProfessionalSummary = (id, summary) =>
  api.patch(`/resume/${id}/professional-summary`, {
    professional_summary: summary,
  });


// ---------------------- SKILLS ----------------------
export const updateSkills = (id, skills) =>
  api.patch(`/resume/${id}/skills`, { skills });


// ---------------------- EXPERIENCE ----------------------
export const addExperience = (id, data) =>
  api.post(`/resume/${id}/experience`, data);

export const updateExperience = (id, expId, data) =>
  api.patch(`/resume/${id}/experience/${expId}`, data);

export const deleteExperience = (id, expId) =>
  api.delete(`/resume/${id}/experience/${expId}`);


// ---------------------- EDUCATION ----------------------
export const addEducation = (id, data) =>
  api.post(`/resume/${id}/education`, data);

export const updateEducation = (id, eduId, data) =>
  api.patch(`/resume/${id}/education/${eduId}`, data);

export const deleteEducation = (id, eduId) =>
  api.delete(`/resume/${id}/education/${eduId}`);


// ---------------------- PROJECT ----------------------
export const addProject = (id, data) =>
  api.post(`/resume/${id}/project`, data);

export const updateProject = (id, projectId, data) =>
  api.patch(`/resume/${id}/project/${projectId}`, data);

export const deleteProject = (id, projectId) =>
  api.delete(`/resume/${id}/project/${projectId}`);


// ---------------------- TEMPLATE / COLOR / PUBLIC ----------------------
export const updateTemplate = (id, template) =>
  api.patch(`/resume/${id}/template`, { template });

export const updateAccentColor = (id, color) =>
  api.patch(`/resume/${id}/color`, { accent_color: color });

export const updatePublicStatus = (id, value) =>
  api.patch(`/resume/${id}/public`, { public: value });
