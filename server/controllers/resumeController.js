// controllers/resumeController.js
import mongoose from "mongoose";

// 📌 Завантаження файлів
export const uploadResume = (req, res) => {
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
};

// 📌 Отримання списку файлів
export const getFilesList = async (req, res) => {
  try {
    const gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "resumes",
    });
    const files = await gfs.find().toArray();
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: "Помилка при отриманні файлів" });
  }
};

// 📌 Завантаження резюме за id
export const downloadResume = async (req, res) => {
  const gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: "resumes",
  });

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
};
