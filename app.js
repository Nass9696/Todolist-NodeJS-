const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Query GET Sucess");
});

app.post("/", (req, res) => {
  res.send("Query POST Sucess");
});

app.put("/", (req, res) => {
  res.send("Query PUT Sucess");
});

app.delete("/", (req, res) => {
  res.send("Query DELETE Sucess");
});

app.listen(port);
