import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/public/images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 100);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const uploadImg = multer({ storage: storage });