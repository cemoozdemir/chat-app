declare module "multer" {
  import { Request } from "express";

  interface Request {
    file?: Express.Multer.File;
  }

  export = multer;
}
