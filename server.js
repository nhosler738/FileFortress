
import {fileName} from "./fileUpload.js";

const express = require('express');
const multer = require("multer");
const path = require("path");

const app = express();
// Directory where files will be uploaded
const upload = multer({dest: 'uploads/' });

app.post("uploads/", upload.single(fileName), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded");
    }
    res.send('File uploaded successfully');
});

// start server
app.listen(3000, function () {
    console.log("Listening on port 3000");
});