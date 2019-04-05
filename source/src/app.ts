import express = require("express");
import multer = require("multer");
import { addStaticResource } from "./controllers/StaticResourceController";
import { dataDir } from "./filesystem/directorysetup";

const app = express();
const upload = multer();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(upload.single("resource"));

// resource.persistResource();
app.use("/static", express.static(dataDir));
app.post("/add", addStaticResource);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(400).send(err.message);
  }
);

export default app;
