import express from "express";
import serverless from "serverless-http";
import { createTopic, getTopic, getTopics } from "./functions/topics";

const app = express();

app.get("/topics", getTopics);
app.get("/topics/:id", getTopic);
app.post("/topics", createTopic);


app.use((req, res, next) => {
  return res.status(404).json({ error: "Not Found", });
});


module.exports.handler = serverless(app);
