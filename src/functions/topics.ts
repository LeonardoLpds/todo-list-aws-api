import { Request, Response } from "express";
import getDbClient from '../utils/db';

const TODOS_TABLE = process.env.TODOS_TABLE;
const db = getDbClient();

export async function getTopics(req: Request, res: Response) {
  res.json({ "message": "reach the endpoint" });
}

export async function getTopic(req: Request, res: Response) {
  const params = {
    TableName: TODOS_TABLE!,
    Key: { "PK": req.params.id },
  };

  const { Item } = await db.get(params).promise();
  if (Item) {
    res.json(Item)
  } else {
    res.status(404).json({ error: "Tópico não encontrado" });
  }
}

export async function createTopic(req: Request, res: Response) {
  const { icon, name } = req.body;
  const params = {
    TableName: TODOS_TABLE!,
    Item: { icon, name },
  };

  try {
    await db.put(params).promise();
    res.json({ icon, name });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Could not create user" });
  }
}