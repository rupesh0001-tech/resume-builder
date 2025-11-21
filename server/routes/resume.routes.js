import express from 'express';
import {
  createResume,
  getMyResumes,
  getSingleResume,
  deleteResume,

  updatePersonalInfo,
  updateProfessionalSummary,
  updateSkills,

  addExperience,
  updateExperience,
  deleteExperience,

  addEducation,
  updateEducation,
  deleteEducation,

  addProject,
  updateProject,
  deleteProject,

  updateTemplate,
  updateAccentColor,
  updatePublicStatus,
} from '../controller/update.resume.data.js';

import protect from '../middlewares/protect.js';

const router = express.Router();


// ------------------------------------------------------------
// BASIC CRUD
// ------------------------------------------------------------
router.post('/', protect, createResume);
router.get('/my-resumes', protect, getMyResumes);
router.get('/:id', protect, getSingleResume);
router.delete('/:id', protect, deleteResume);


// ------------------------------------------------------------
// PERSONAL INFO
// ------------------------------------------------------------
router.patch('/:id/personal-info', protect, updatePersonalInfo);


// ------------------------------------------------------------
// PROFESSIONAL SUMMARY
// ------------------------------------------------------------
router.patch('/:id/professional-summary', protect, updateProfessionalSummary);


// ------------------------------------------------------------
// SKILLS
// ------------------------------------------------------------
router.patch('/:id/skills', protect, updateSkills);


// ------------------------------------------------------------
// EXPERIENCE
// ------------------------------------------------------------
router.post('/:id/experience', protect, addExperience);
router.patch('/:id/experience/:expId', protect, updateExperience);
router.delete('/:id/experience/:expId', protect, deleteExperience);


// ------------------------------------------------------------
// EDUCATION
// ------------------------------------------------------------
router.post('/:id/education', protect, addEducation);
router.patch('/:id/education/:eduId', protect, updateEducation);
router.delete('/:id/education/:eduId', protect, deleteEducation);


// ------------------------------------------------------------
// PROJECTS
// ------------------------------------------------------------
router.post('/:id/project', protect, addProject);
router.patch('/:id/project/:projectId', protect, updateProject);
router.delete('/:id/project/:projectId', protect, deleteProject);


// ------------------------------------------------------------
// TEMPLATE SETTINGS
// ------------------------------------------------------------
router.patch('/:id/template', protect, updateTemplate);


// ------------------------------------------------------------
// ACCENT COLOR
// ------------------------------------------------------------
router.patch('/:id/color', protect, updateAccentColor);


// ------------------------------------------------------------
// PUBLIC (publish/unpublish)
// ------------------------------------------------------------
router.patch('/:id/public', protect, updatePublicStatus);


export default router;
