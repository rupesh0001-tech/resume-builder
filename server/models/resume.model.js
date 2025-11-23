import mongoose from "mongoose";

const personalInfoSchema = new mongoose.Schema({
    full_name: String,
    email: String,
    phone: String,
    location: String,
    linkedin: String,
    website: String,
    profession: String,
    image: String   // store image URL or cloud path
}, { _id: false });


const experienceSchema = new mongoose.Schema({
    company: String,
    position: String,
    startDate: String,   // "2023-06"
    endDate: String,     // "Present" or "2024-03"
    description: String,
    is_current: Boolean
});


const educationSchema = new mongoose.Schema({
    institution: String,
    degree: String,
    field: String,
    graduation_date: String, // "2023-05"
    gpa: String
});


const projectSchema = new mongoose.Schema({
    name: String,
    type: String,
    description: String
});


const resumeSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    title: {
        type: String,
        required: true
    },

    personal_info: personalInfoSchema,

    professional_summary: {
        type: String,
        default: ""
    },

    skills: {
        type: [String],
        default: []
    },

    experience: {
        type: [experienceSchema],
        default: []
    },

    education: {
        type: [educationSchema],
        default: []
    },

    project: {
        type: [projectSchema],
        default: []
    },

    template: {
        type: String,
        default: "minimal-image"
    },

    accent_color: {
        type: String,
        default: "#000000"
    },

    public: {
        type: Boolean,
        default: false
    }
},
{ timestamps: true }
);


const Resume = mongoose.model("Resume", resumeSchema);
export default Resume;
