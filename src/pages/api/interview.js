// pages/api/interview.js
import connectToDatabase from "@/lib/mongodb";
import Interviewr from "@/models/interview";
import mongoose from "mongoose";

export default async function handler(req, res) {
  await connectToDatabase();
  if (req.method === "GET") {
    try {
      const { auth_user } = req.query;
      const interviewers = await Interviewr.find({ auth_user: new mongoose.Types.ObjectId(auth_user) });
      console.log('interviewers: ', interviewers);
      res.status(200).json({ success: true, data: interviewers });
    } catch (error) {
      console.log('error: ', error);
      res.status(400).json({ success: false });
    }
  } else if (req.method === "POST") {
    try {
      const newData = {
        ...req.body,
        auth_user: new mongoose.Types.ObjectId(req.body.auth_user),
      };
      console.log("newData: ", newData);
      const interviewer = await Interviewr.create(newData);
      res.status(201).json({ success: true, data: interviewer });
    } catch (error) {
      console.log("error: ", error);
      res.status(400).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
