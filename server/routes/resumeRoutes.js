// routes/resumeRoutes.js
import express from "express";
import {uploadResume, getFilesList, downloadResume} from "../controllers/resumeController.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" })

// Ендпоїнт для завантаження файлів
router.post("/upload", upload.single("resume"), uploadResume);

// Ендпоїнт для отримання списку файлів
router.get("/list", getFilesList);

// Ендпоїнт для завантаження конкретного резюме
router.get("/download/:id", downloadResume);

export default router;
