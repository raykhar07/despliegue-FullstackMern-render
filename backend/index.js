import express from "express";
import cors from "cors";
import {Pool} from "pg";
import { config, dbConfig } from "./config.js";

const app = express();
const pool = new Pool({
  host: dbConfig.host,
  database: dbConfig.database,
  user: dbConfig.user,
  password: dbConfig.password,
  port: dbConfig.port
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