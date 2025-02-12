import express from "express";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Використовуємо готове підключення mongoose
const db = mongoose.connection;

// // Налаштування GridFS Storage
// const storage = new GridFsStorage({
//   db, // Використовуємо існуюче з'єднання
//   file: (req, file) => ({
//     filename: `${file.fieldname}-${Date.now()}.pdf`,
//     bucketName: "resumes", // Колекція в MongoDB
//   }),
// });

// const upload = multer({ storage });

// 📌 Ендпоїнт для завантаження файлів
router.post("/upload", (req, res) => {
  const gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: "resumes",
  });

  const uploadStream = gfs.openUploadStream(`resume-${Date.now()}.pdf`);
  req.pipe(uploadStream);

  uploadStream.on("error", (err) => {
    console.error("Помилка під час завантаження:", err);
    res.status(500).json({ error: "Помилка під час завантаження файлу" });
  });

  uploadStream.on("finish", () => {
    res.json({ fileId: uploadStream.id });
  });
});

router.get("/list", async (req, res) => {
  try {
    const gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "resumes",
    });
    const files = await gfs.find().toArray();
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: "Помилка при отриманні файлів" });
  }
});

// 📌 Ендпоїнт для отримання резюме
router.get("/download/:id", async (req, res) => {
  const gfs = new mongoose.mongo.GridFSBucket(db, { bucketName: "resumes" });

  try {
    const file = await gfs
      .find({ _id: new mongoose.Types.ObjectId(req.params.id) })
      .toArray();
    if (!file.length) {
      return res.status(404).json({ error: "Файл не знайдено" });
    }

    res.set("Content-Type", "application/pdf");
    gfs.openDownloadStream(file[0]._id).pipe(res);
  } catch (error) {
    res.status(500).json({ error: "Помилка під час отримання файлу" });
  }
});

export default router;
