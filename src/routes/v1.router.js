import { Router } from "express";
import { healthCheck } from "../controllers/app.controller.js";
import authRouter from "../features/auth/auth.router.js";


const router = Router();

router.get("/", healthCheck);
router.use("/auth", authRouter);


export default router;