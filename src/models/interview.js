// models/Item.js
import mongoose from "mongoose";

const InterviewSchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    auth_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AuthUser",
      required: true,
    },
    company_location: {
      type: String,
    },
    company_strength: {
      type: String,
    },
    contact_person: {
      type: String,
    },
    contact_number: {
      type: String,
    },
    job_type: {
      type: String,
    },
    applied_date: {
      type: Date,
      // required: true,
    },
    applied_through: {
      type: String,
    },
    expected_ctc: {
      type: String,
    },
    interview_start_date: {
      type: Date,
    },
    next_interview_date: {
      type: Date,
    },
    recruitment_status: {
      type: String,
      // required: true,
    },
    offer_ctc: {
      type: String,
    },
    joining_date: {
      type: Date,
    },
    offer_accepted: {
      type: String,
    },
    note: {
      type: String,
    },
    designation: {
      type: String,
      // required: true,
    },
    technology: {
      type: String,
    },
    total_experience: {
      type: String,
    },
  },
  {
    versionKey: false, // Disable the version key
    timestamps: true, // Add createdAt and updatedAt fields
  }
);

export default mongoose.models.Interviewr ||
  mongoose.model("Interviewr", InterviewSchema);
