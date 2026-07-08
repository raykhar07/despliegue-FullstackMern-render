export const config = {
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173'
}

export const dbConfig = {
  host: process.env.host || "localhost",
  database: process.env.database || "postgres",
  user: process.env.user || "postgres",
  password: process.env.password || "Raykhar0201",
  port: process.env.port || 5444
}