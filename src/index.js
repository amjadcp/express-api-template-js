import envConfig from "./configs/env.config.js";
import app from "./server/express.server.js";
import { fork } from "node:child_process";

// run the cron worker
const cron = fork("./src/configs/cron.config.js");
cron.on("exit", (code) => {
  console.log(`Cron worker process exited with code ${code}`);
});
cron.on("error", (error) => {
  console.error("Error in cron worker:", error);
});

app.listen(envConfig.port, () => {
  console.log(`Server is running on http://127.0.0.1:${envConfig.port}`);
});

console.log(`Process ID: ${process.pid}`);
