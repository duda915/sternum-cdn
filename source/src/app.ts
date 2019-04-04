import express = require("express");
import { dataDir } from "./filesystem/directorysetup";

const app = express();

app.use(express.static(dataDir));

export default app;
