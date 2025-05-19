import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  googleId:    { type: String, required: true, unique: true },
  displayName: { type: String },
  email:       { type: String, required: true, unique: true },
  photo:       { type: String }
});

export default mongoose.model("User", UserSchema);
