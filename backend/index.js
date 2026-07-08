import express from "express";
import cors from "cors";
import {Pool} from "pg";
import { FRONTEND_URL, DB_DATABASE, DB_PORT, DB_PASSWORD, DB_USER, PORT, DB_HOST } from "./config.js";

const app = express();
const pool = new Pool({
  host: DB_HOST,
  database: DB_DATABASE,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
})

app.use(cors({
  origin: FRONTEND_URL
}));
app.use(express.json());

app.get("/ping", async (req, res) => {

  const result = await pool.query('SELECT NOW()')
  console.log(result)

  res.json({
    pong: result.rows[0].now
  });
})

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
})