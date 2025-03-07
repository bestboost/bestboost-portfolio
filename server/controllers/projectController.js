import Project from "../models/projectSchema.js";

// 📌 Отримати всі проекти
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 }); // Сортуємо за датою створення (останні — першими)
    res.json(projects);;
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Помилка при отриманні проектів" });
  }
};

// 📌 Отримати один проект за ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: "Проект не знайдено" });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: "Помилка при отриманні проекту" });
  }
};

// 📌 Створити новий проект
export const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: "Помилка при створенні проекту" });
  }
};

// 📌 Оновити проект за ID
export const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedProject) {
      return res.status(404).json({ error: "Проект не знайдено" });
    }
    res.json(updatedProject);
  } catch (error) {
    res.status(500).json({ error: "Помилка при оновленні проекту" });
  }
};

// 📌 Видалити проект за ID
export const deleteProject = async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) {
      return res.status(404).json({ error: "Проект не знайдено" });
    }
    res.json({ message: "Проект видалено" });
  } catch (error) {
    res.status(500).json({ error: "Помилка при видаленні проекту" });
  }
};
