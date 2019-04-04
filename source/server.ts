import express = require("express");
import { one } from "./src/boilerplayer";

const app: express.Application = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/one", (req, res) => {
  res.send(one.toString());
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
