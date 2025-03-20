import cron from "node-cron";
import  connectDB from "../utils/db.util.js";
import envConfig from "./env.config.js";

void (async () => {
  await connectDB(envConfig.dbUri);
  // Schedule the cron job to run at 9AM IST every day
  cron.schedule(
    "30 3 * * *",
    async () => {
      console.log("Running cron job");
    },
    {
      scheduled: true,
      timezone: "UTC",
    }
  );
})();