import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env' });

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.jsx",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE_URL || "postgresql://bina-smart_owner:G0uRmS5UEgrJ@ep-orange-bar-a5mo2itx.us-east-2.aws.neon.tech/bina-smart?sslmode=require" ,
    connectionString:
      process.env.NEXT_PUBLIC_DATABASE_URL,
  },
});
