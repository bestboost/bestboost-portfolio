import mongoose from "mongoose";
 
const projectSchema = new mongoose.Schema(
  { 
    title: { type: String }, // Назва (береться з GitHub, але можна перезаписати)
    liveLink: { type: String }, // Лінк на демо-версію
    description: { type: String }, // Опис
    techStack: { type: [String] }, // Масив технологій
    image: { type: String }, // Кастомне зображення (якщо треба)
    githubRepo: { type: String, required: true, unique: true }, // Шлях до репозиторію
    category: { type: String }, // Категорія (наприклад, "Web", "Mobile", "Backend")
    updatedAt: { type: Date, default: Date.now }, // Час останнього оновлення
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
