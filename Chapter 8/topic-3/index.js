require("dotenv").config();

const express = require("express");
const cors = require("cors");
const upload = require("./upload");
const uploadOnMemory = require("./uploadOnMemory");
const cloudinary = require("./cloudinary");
const app = express();

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
  (req, res) => {
    const fileBase64 = req.file.buffer.toString("base64");
    const file = `data:${req.file.mimetype};base64,${fileBase64}`;

    cloudinary.uploader.upload(file, function (err, result) {
      if (err) {
        console.log(err);
        return res.status(400).json({
          message: "Gagal upload file!",
        });
      }

      res.status(201).json({
        message: "Upload image berhasil",
        url: result.secure_url,
      });
    });
  }
);

app.delete("/api/v1/profiles/:id/picture/cloudinary", (req, res) => {
  cloudinary.uploader.destroy(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        message: "Gagal upload file!",
      });
    }

    res.status(201).json({
      message: "Delete image berhasil",
      result,
    });
  });
});

app.listen(8080);
