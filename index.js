const express = require("express");
const app = express();
const importdata = require("./data.json");

let port = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.get("/", (req, res) => {
  res.send(importdata);
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
