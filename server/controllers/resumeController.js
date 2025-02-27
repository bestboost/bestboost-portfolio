// controllers/resumeController.js
import mongoose from "mongoose";
import fs from "fs";

const getGFS = () => {
  return new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
  bucketName: "resumes",
});
};

// 📌 Завантаження файлів
export const uploadResume = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Файл не завантажено" });
  }

  const gfs = getGFS();
  const filePath = req.file.path;

  const uploadStream = gfs.openUploadStream(req.file.originalname);
 
  fs.createReadStream(filePath)
    .pipe(uploadStream)
    .on("error", (err) =>
      res.status(500).json({ error: "Помилка завантаження" })
    )

  .on("finish", () => {
    res.json({ fileId: uploadStream.id, filename: req.file.originalname });
  });
};

// 📌 Отримання списку файлів
export const getFilesList = async (req, res) => {
  try {
    const gfs = getGFS();
    const files = await gfs.find().toArray();

    if (!files || files.length === 0) {
      return res.status(404).json({ error: "Файли не знайдені" });
    }

    const formattedFiles = files.map((file) => ({
      _id: file._id,
      filename: file.filename,
    }));
    res.json(formattedFiles);
  } catch (error) {
    res.status(500).json({ error: "Помилка при отриманні файлів" });
  }
};

// 📌 Завантаження резюме за id
export const downloadResume = async (req, res) => {
  try {
    const gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: "resumes",
    });

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Некоректний ID" });
    }

    const objectId = new mongoose.Types.ObjectId(id);

    // Отримуємо інформацію про файл перед переглядом
    const files = await gfs.find({ _id: objectId }).toArray();
    if (!files.length) {
      return res.status(404).json({ error: "Файл не знайдено" });
    }

    const filename = files[0].filename;

    // Встановлюємо заголовок 
    res.set("Content-Type", "application/pdf");
    res.set("Content-Disposition", `attachment; filename="${filename}"`);
    
    gfs.openDownloadStream(files[0]._id).pipe(res);
  } catch (error) {
    res.status(500).json({ error: "Помилка під час отримання файлу" });
  }
};
