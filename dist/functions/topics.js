"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTopic = exports.getTopic = exports.getTopics = void 0;
const db_1 = __importDefault(require("../utils/db"));
const TODOS_TABLE = process.env.TODOS_TABLE;
const db = (0, db_1.default)();
function getTopics(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.json({ "message": "reach the endpoint" });
    });
}
exports.getTopics = getTopics;
function getTopic(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = {
            TableName: TODOS_TABLE,
            Key: { "PK": req.params.id },
        };
        const { Item } = yield db.get(params).promise();
        if (Item) {
            res.json(Item);
        }
        else {
            res.status(404).json({ error: "Tópico não encontrado" });
        }
    });
}
exports.getTopic = getTopic;
function createTopic(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { icon, name } = req.body;
        const params = {
            TableName: TODOS_TABLE,
            Item: { icon, name },
        };
        try {
            yield db.put(params).promise();
            res.json({ icon, name });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Could not create user" });
        }
    });
}
exports.createTopic = createTopic;
