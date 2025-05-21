require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.SERVER_PORT;

app.get("/", async (req, res) => {
  res.send({ message: "we are check the server" });
});

app.listen(port, () => {
  console.log("the server running port: ", port);
});
