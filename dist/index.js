"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const topics_1 = require("./functions/topics");
const app = (0, express_1.default)();
app.get("/topics", topics_1.getTopics);
app.get("/topics/:id", topics_1.getTopic);
app.post("/topics", topics_1.createTopic);
app.use((req, res, next) => {
    return res.status(404).json({ error: "Not Found", });
});
module.exports.handler = (0, serverless_http_1.default)(app);
