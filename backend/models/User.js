// import mongoose from "mongoose";

const mongoose = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
    timestamp: {
      type: Date,
      default: Date.now,
    },
    // photo: {
    //   type: String,
    // },

    // role: {
    //   type: String,
    //   default: "user",
    // },
  },
  // { timestamps: true }
);

// export default mongoose.model("User", userSchema);
module.exports = mongoose.model('user','UserSchema')
