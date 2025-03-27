import express, { Request, Response, NextFunction } from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb: Function) => {
    cb(null, "./uploads/");
  },
  filename: (req: Request, file: Express.Multer.File, cb: Function) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post(
  "/upload",
  upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    if (!req.file) {
      res.status(400).json({ error: "No file uploaded" });
    }

    if (req.file) {
      res.status(200).json({ fileUrl: `/uploads/${req.file.filename}` });
    } else {
      res.status(500).json({ error: "File upload failed" });
    }
  }
);

export default router;
