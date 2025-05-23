import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  emailSent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
},
{ timestamps: true });

const Feedback = mongoose.model("Feedback", feedbackSchema);

export default Feedback;
