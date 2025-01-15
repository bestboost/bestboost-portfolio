import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Feedback from "./models/feedback.js";

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

// Route for feedback
app.post("/feedback", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newMessage = new Feedback({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Повідомлення збережено успішно" });
  } catch (error) {
    res.status(500).json({ error: "Щось пішло не так" });
  }
});

// Базовий маршрут
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
