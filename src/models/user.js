// models/Item.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false, // Disable the version key
    timestamps: true, // Add createdAt and updatedAt fields
  }
);

export default mongoose.models.AuthUser || mongoose.model("AuthUser", UserSchema);
