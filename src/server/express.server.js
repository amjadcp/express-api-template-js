import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import corsConfig from "../configs/cors.config.js";
import v1Router from "../routes/v1.router.js";
import errorHandler from "../middlewares/error-handler.middleware.js";
import _404 from "../middlewares/404.middleware.js";
import log from "../middlewares/log.middleware.js";
import envConfig from "../configs/env.config.js";
import connectDB from "../utils/db.util.js";



connectDB(envConfig.dbUri);

const app = express();

app.set("trust proxy", 1);
app.use(cors(corsConfig));

app.use(
    express.json({
        type: ["application/json", "text/plain"],
    }),
);
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("tiny"));
app.use(log);

app.use("/api/v1", v1Router);
app.use(_404);
app.use(errorHandler);



export default app;