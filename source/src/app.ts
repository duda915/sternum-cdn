import express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

export default app;
