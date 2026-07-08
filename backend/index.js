import express from "express";
import cors from "cors";
import {Pool} from "pg";
import { config, dbConfig } from "./config.js";

const app = express();
const pool = new Pool({
  host: dbConfig.DB_HOST,
  database: dbConfig.DB_DATABASE,
  user: dbConfig.DB_USER,
  password: dbConfig.DB_PASSWORD,
  port: dbConfig.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
})

app.use(cors({
  origin: config.FRONTEND_URL
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