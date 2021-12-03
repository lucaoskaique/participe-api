import * as dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

async function connect() {
  if (global.connection && global.connection.state !== "disconnected")
    return global.connection;

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
  });
  console.log("Conectou no MySQL!");
  global.connection = connection;

  return connection;
}

export { connect };
