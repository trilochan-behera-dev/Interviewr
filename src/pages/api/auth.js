// pages/api/interview.js
import connectToDatabase from "@/lib/mongodb";
import jwt from "jsonwebtoken";
import AuthUser from "@/models/user";

export default async function handler(req, res) {
  await connectToDatabase();
  const { email, password, requestFor } = req.body;

  if (req.method === "GET") {
    try {
      const interviewers = await Interviewr.find({});
      res.status(200).json({ success: true, data: interviewers });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (req.method === "POST") {
    try {
      if (requestFor === "register") {
        try {
          const existingUser = await AuthUser.findOne({ email });
          console.log("existingUser: ", existingUser);
          if (existingUser) {
            return res
              .status(400)
              .json({ token: "", message: "User already exists" });
          }

          // Create new user
          const savedUser = await AuthUser.create({ email, password });
          // Generate token
          const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: "1h",
          });

          return res.status(201).json({
            id: savedUser._id,
            email: savedUser.email,
            token: token,
          });
        } catch (error) {
          console.log("error: ", error);
        }
      } else {
        const interviewer = await Interviewr.create(req.body);
        res.status(201).json({ success: true, data: interviewer });
      }
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
