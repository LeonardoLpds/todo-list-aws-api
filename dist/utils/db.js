"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
function getDbClient() {
    if (process.env.IS_OFFLINE) {
        return new aws_sdk_1.DynamoDB.DocumentClient({
            region: 'localhost',
            endpoint: 'http://localhost:8000'
        });
    }
    return new aws_sdk_1.DynamoDB.DocumentClient();
}
exports.default = getDbClient;
