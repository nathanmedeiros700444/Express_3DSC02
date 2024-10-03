const express = require("express");
const app = express();

const PORT = 3350;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/views/index.html");
  //console.log(__dirname + "/src/views/index.html");
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + "/src/views/about.html");
  //console.log(__dirname + "/src/views/about.html");
});

app.get("/404", function (req, res) {
  res.sendFile(__dirname + "/src/views/404.html");
  //console.log(__dirname + "/src/views/404.html");
});

app.listen(PORT, () => {
  console.log("running...");
});
