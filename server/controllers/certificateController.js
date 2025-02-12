import mongoose from "mongoose";
import fs from "fs";

const getGFS = () => {
  return new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: "certificates",
  });
};

// 📌 Завантаження сертифікату
export const uploadCertificate = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Файл не завантажено" });
  }

  const gfs = getGFS();
  const filePath = req.file.path; // Шлях до файлу, який завантажили

  const uploadStream = gfs.openUploadStream(req.file.originalname);
  fs.createReadStream(filePath)
    .pipe(uploadStream)
    .on("error", (err) =>
      res.status(500).json({ error: "Помилка завантаження" })
    )
    .on("finish", () =>
      res.json({ id: uploadStream.id, filename: req.file.originalname })
    );
};

// 📌 Отримання списку сертифікатів
export const listCertificates = async (req, res) => {
  try {
    const gfs = getGFS();
    const files = await gfs.find().toArray();
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: "Помилка при отриманні файлів" });
  }
};

// 📌 Отримання конкретного файлу
export const downloadCertificate = (req, res) => {
  const gfs = getGFS();
  const filename = req.params.filename; // Використовуємо ім'я файлу

  const downloadStream = gfs.openDownloadStreamByName(filename);
  res.set("Content-Disposition", `attachment; filename="${filename}"`);
  downloadStream
    .pipe(res)
    .on("error", () => res.status(404).json({ error: "Файл не знайдено" }));
};
