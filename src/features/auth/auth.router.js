import express from "express";
import { login, register } from "./auth.controller.js";
import validator from "../../middlewares/validator.middleware.js";
import { loginValidator, registerValidator } from "./auth.validator.js";

const router = express.Router();

router.post("/register", validator(registerValidator), register);
router.post("/login", validator(loginValidator), login);

export default router;
