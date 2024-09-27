const express = require("express");
const app = express();

const PORT = 3350;

app.get("/", function (req, res) {
  //res.sendFile("Ola!...");
  console.log(__dirname);
});
app.listen(PORT, () => {
  console.log("running...");
});
