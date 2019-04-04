import express = require("express");
import multer = require("multer");
import { addStaticResource } from "./controllers/StaticResourceController";
import { dataDir } from "./filesystem/directorysetup";

const app = express();
const upload = multer();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(upload.any());

app.use(express.static(dataDir));
app.post("/add", addStaticResource);

export default app;
