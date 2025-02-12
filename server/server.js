import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import feedbackRoutes from "./routes/feedbackRoutes.js";
import resumeRoutes from "./routes/resumeRoutes.js";
import certificateRoutes from "./routes/certificateRoutes.js";

// Завантаження змінних середовища
dotenv.config();

// Ініціалізація додатку
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false); // Можете встановити true, якщо хочете уникнути попередження

// Підключення до MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("🔥 MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

connectDB();

// Route
app.use("/api", feedbackRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/certificates", certificateRoutes);

// Базовий маршрут
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
