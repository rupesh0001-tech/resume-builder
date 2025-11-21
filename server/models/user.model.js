import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Resume from './resume.model.js'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
     resumes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resume"
    }]
  },
  {
    timestamps: true,
  }
);

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;
