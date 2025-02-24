import express from "express";
import {
  uploadCertificate,
  listCertificates,
 viewCertificate,
} from "../controllers/certificateController.js";
import multer from "multer";

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Зберігаємо тимчасово в папку `uploads`

router.post("/upload", upload.single("certificate"), uploadCertificate);
router.get("/list", listCertificates);
router.get("/download/:id",viewCertificate);

export default router;
