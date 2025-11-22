import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    fullName: {
      required:true,
      type: String,
      trim: true,
      default: "",
    },

    avatar: {
      type: String,
      default: "",
    },

    bio: {
      type: String,
      maxlength: 200,
      default: "",
    },
  },

  { timestamps: true })

  const User=mongoose.model("User",userSchema);

  export default User;