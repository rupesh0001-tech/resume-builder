import Resume from "../models/resume.model.js";

export const createResume = async (req, res) => {
    try {
        let { title } = req.body;

        const defaultResumeData = {
            profileInfo: {
                profileImg: null,
                previewUrl: '',
                fullName: '',
                designation: '',
                summary: '',
            },
            contactInfo: {
                email: '',
                phone: '',
                location: '',
                linkedin: '',
                github: '',
                website: '',
            },
            workExperience: [
                {
                    company: '',
                    role: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                },
            ],
            education: [
                {
                    degree: '',
                    institution: '',
                    startDate: '',
                    endDate: '',
                },
            ],
            skills: [
                {
                    name: '',
                    progress: 0,
                },
            ],
            projects: [
                {
                    title: '',
                    description: '',
                    github: '',
                    liveDemo: '',
                },
            ],
            certifications: [
                {
                    title: '',
                    issuer: '',
                    year: '',
                },
            ],
            languages: [
                {
                    name: '',
                    progress: '',
                },
            ],
            interests: [''],
        };


        const newResume = await create.Resume({
            defaultResumeData
        });
        res.status(201).json({
            message: "Resume created successfully",
            newResume,
        });
    } catch (error) {
        res.status(500).json({
            message: ' error in the resume controller ',
            error: error.message,
        })
    }
}


export const getResume = async (req, res) => {
    try{

        let { userId } = req.body
        let 
    }
}



// getUserResume {

//     find resume userid;

//   }





// make a resume controller
//   create resume
//   try{
//       extract title
//       paste default template
//       add that data
//       give status
//   }catch{
//     res(500)
//   }