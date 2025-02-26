// routes/resumeRoutes.js
import express from "express";
import {uploadResume, getFilesList, downloadResume} from "../controllers/resumeController.js";

const router = express.Router();

// Ендпоїнт для завантаження файлів
router.post("/upload", uploadResume);

// Ендпоїнт для отримання списку файлів
router.get("/list", getFilesList);

// Ендпоїнт для завантаження конкретного резюме
router.get("/download/:id", downloadResume);

export default router;
