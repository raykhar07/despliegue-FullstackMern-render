export const config = {
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173'
}

export const dbConfig = {
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_DATABASE: process.env.DB_DATABASE || "postgres",
  DB_USER: process.env.DB_USER || "postgres",
  DB_PASSWORD: process.env.DB_PASSWORD || "Raykhar0201",
  DB_PORT: process.env.DB_PORT || 5444
}