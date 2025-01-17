import express from "express";
import submitFeedback from "../controllers/feedbackController.js";

const router = express.Router();

// Маршрут для отримання нових запитів
router.post("/feedback", submitFeedback);

export default router;
