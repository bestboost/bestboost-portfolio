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
  const filePath = req.file.path;

  const uploadStream = gfs.openUploadStream(req.file.originalname, {
    contentType: req.file.mimetype, // ✅ Додаємо MIME-тип (наприклад, image/jpeg)
  });

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

    if (!files || files.length === 0) {
      return res.status(404).json({ error: "Файли не знайдені" });
    }

    // Кожен файл має свій contentType, тому ми просто віддаємо масив об'єктів
    const formattedFiles = files.map((file) => ({
      _id: file._id,
      filename: file.filename,
      contentType: file.contentType, // Тут буде MIME-тип кожного файлу
    }));

    res.json(formattedFiles);
  } catch (error) {
    res.status(500).json({ error: "Помилка при отриманні файлів" });
  }
};

// 📌 Отримання конкретного файлу для перегляду
export const viewCertificate = async (req, res) => {
  try {
    const gfs = getGFS();
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

    // Встановлюємо заголовок для inline перегляду (без скачування)
    res.set("Content-Disposition", `inline; filename="${filename}"`);
    res.set("Content-Type", files[0].contentType);

    const downloadStream = gfs.openDownloadStream(objectId);

    downloadStream.on("error", (err) => {
      res.status(500).json({ error: "Помилка сервера" });
    });

    // Підключаємо потік до відповіді для перегляду
    downloadStream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: "Помилка сервера" });
  }
};
