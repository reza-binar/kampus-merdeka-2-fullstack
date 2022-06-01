require("dotenv").config();

const { promisify } = require("util"); // package to promisify functions
const express = require("express");
const cors = require("cors");
const upload = require("./upload");
const uploadOnMemory = require("./uploadOnMemory");
const cloudinary = require("./cloudinary");
const app = express();

// Convert callback to promise
const cloudinaryUpload = promisify(cloudinary.uploader.upload);
const cloudinaryDestroy = promisify(cloudinary.uploader.destroy);

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.put(
  "/api/v1/profiles/:id/picture",
  upload.single("picture"),
  (req, res) => {
    const url = `http://localhost:8080/uploads/${req.file.filename}`;
    res
      .status(200)
      .json({ message: "Foto berhasil di-upload, silahkan cek URL", url });
  }
);

app.put(
  "/api/v1/profiles/:id/picture/cloudinary",
  uploadOnMemory.single("picture"),
  async (req, res) => {
    try {
      const fileBase64 = req.file.buffer.toString("base64");
      const file = `data:${req.file.mimetype};base64,${fileBase64}`;

      const result = await cloudinaryUpload(file);
      res.status(201).json({
        message: "Upload image berhasil",
        url: result.secure_url,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        message: "Gagal upload file!",
      });
    }
  }
);

app.delete("/api/v1/profiles/:id/picture/cloudinary", async (req, res) => {
  try {
    const result = await cloudinaryDestroy(req.params.id);
    res.status(201).json({
      message: "Delete image berhasil",
      result,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Gagal upload file!",
    });
  }
});

app.listen(8080);
