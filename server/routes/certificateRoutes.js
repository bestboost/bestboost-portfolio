import express from "express";
import multer from "multer";
import {
  uploadCertificate,
  uploadThumbnail, 
  listCertificates,
  viewCertificate, 
  getThumbnail,
} from "../controllers/certificateController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Тимчасове збереження файлів

router.post("/upload", upload.single("certificate"), uploadCertificate);
router.post("/upload-thumbnail", upload.single("thumbnail"), uploadThumbnail); 
router.get("/list", listCertificates);
router.get("/list/thumbnail/:id", getThumbnail); 
router.get("/download/:id", viewCertificate);

export default router;
