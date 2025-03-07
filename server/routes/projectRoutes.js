import express from "express";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

// Отримати всі проекти
router.get("/", getAllProjects);

// Отримати конкретний проект за ID
router.get("/:id", getProjectById);

// Створити новий проект
router.post("/", createProject);

// Оновити проект за ID
router.put("/:id", updateProject);

// Видалити проект за ID
router.delete("/:id", deleteProject);

export default router;
