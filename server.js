const express = require("express");
const app = express();
require("dotenv").config();

app.get("/api-key", (req, res) => {
  const apiKey = process.env.API_KEY;
  res.header("Access-Control-Allow-Origin", "*");
  res.send({ apiKey });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
