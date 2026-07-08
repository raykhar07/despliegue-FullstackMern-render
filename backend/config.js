export const config = {
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173'
}

export const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_DATABASE || "postgres",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "Raykhar0201",
  port: process.env.DB_PORT || 5444
}