import "dotenv/config";
import app from "./app";
import { env } from "./validators/env";
import connectDB from "./lib/connectDB.lib";

const PORT = env.PORT;

connectDB().then(() =>
  app.listen(PORT, () => {
    console.log(`server running on ${env.BASEURL}:${PORT}`);
  })
);
