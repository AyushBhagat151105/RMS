import { db } from "@/db";

export default async function connectDB() {
  try {
    await db.$connect();
    console.log("✅ Database connected");
  } catch (error) {
    console.error("❌ Failed to connect to database:", error);
    process.exit(1);
  }
}
