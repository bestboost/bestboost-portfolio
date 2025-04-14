import express from "express";
import multer from "multer";
import {
  uploadCertificate,
  uploadThumbnail,
  listThumbnails,
  listOriginalCertificates,
  viewCertificate,
  getThumbnail,
} from "../controllers/certificateController.js";
import { cacheImages } from "../middleware/cacheImages.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Тимчасове збереження файлів

router.post("/upload", upload.single("certificate"), uploadCertificate);
router.post("/upload-thumbnail", upload.single("thumbnail"), uploadThumbnail);
router.get("/list-thumbnails", listThumbnails); // Мініатюри
router.get("/list-originals", listOriginalCertificates); // Оригінали
router.get("/thumbnail/:id", cacheImages, getThumbnail);
router.get("/download/:id", cacheImages, viewCertificate);

export default router;
