import { DynamoDB } from "aws-sdk";

export default function getDbClient() {
  if (process.env.IS_OFFLINE) {
    return new DynamoDB.DocumentClient({
      region: 'localhost',
      endpoint: 'http://localhost:8000'
    });
  }
  return new DynamoDB.DocumentClient();
}