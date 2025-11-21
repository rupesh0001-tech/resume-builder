import Resume from "../model/resume.model.js";

// create resume
export const createResume = async (req, res) => {
  try {
    const { title } = req.body;
    const resume = await Resume.create({
      title: title,
      userId: req.user.id,
      personal_info: "",
      professional_summary: "",
      experience: [],
      education: [],
      project: [],
      skills: [],
      public: false,
    });
    res.status(201).json({
        message : "resume created successfully",
        resume 
    });
  } catch (error) {
    res
      .status(500)
      .json({
        message:
          " error while creating resume, Please try again after some time ",
        error: error.message,
      });
  }
};

//get Resumes by user
export const getResumeByUser = async (req, res) => {
    try {
        const resumes = await Resume.find({userId : req.user.id});
        res.status(200).json({
            resumes
        })
    }catch(error){
        res
            .status(500)
            .json({
                message : ' error while fetching resume, Please try again after some time ',
                error : error.message
            })
    }
};

// get resume by id 

export const getResumeById = async (req, res) => {
    try {
        const resume = await Resume.findOne({
            _id : req.params.id,
            userId : req.user.id
        });

        if(!resume) {
            return res.status(404).json({
                message : "resume not found"
            })
        }
        res.status(200).json({
            resume
        })
        
    }catch(error) {
        res.status(500).json({
            message : ' error while fetching resume, Please try again after some time ',
            error : error.message
        })
    }

}

//  delete Resume
export const  deleteResume = async (req, res) => {
    try {
        const resume = await Resume.findOneAndDelete({
            _id : req.params.id,
            userId : req.user.id
        });
        if(!resume) {
            return res.status(404).json({
                message : "resume not found"
            })
        }
        res.status(200).json({
            message : "resume deleted successfully"
        })
        
    }catch(error) {
        res.status(500).json({
            message : ' error while deleting resume, Please try again after some time ',
            error : error.message
        })
    }
}
