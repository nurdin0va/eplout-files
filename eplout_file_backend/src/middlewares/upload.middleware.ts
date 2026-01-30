import multer, { diskStorage } from "multer";
import path from "path";
const storage = diskStorage({
  destination: (_, __, cb) => {
    cb(null, "src/uploads");
  },
  filename: (__, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  },

});
export const upload = multer({
    storage,
    limits:{fileSize:1024 * 1024 * 5}
})
