require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const express = require("express");
const app = express();

const port = process.env.SERVER_PORT;

const G_API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(G_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "He is promptHub Ai. he is new platform.",
});

app.get("/ai", async (req, res) => {
  const kotha = "what is AI ";
  const prompt = req.query?.prompt;

  if (!prompt) {
    req.send({ message: "please you are write" });
    return;
  }
  const result = await model.generateContent(prompt);
  const response = await result.response;
  res.send({ result: response.text() });
  console.log({ result: response.text() });
});

app.get("/", async (req, res) => {
  res.send({ message: "we are check the server" });
});

app.listen(port, () => {
  console.log("the server running port: ", port);
});
