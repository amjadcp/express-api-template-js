import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import envConfig from "../configs/env.config.js";

export const generateToken = async (data, expiryTime) => {
  const options = {
    expiresIn: expiryTime ?? "30d",
  };
  return jwt.sign({ ...data }, envConfig.jwtSecret, options);
};

export const verifyToken = async (token) => {
  return jwt.verify(token, envConfig.jwtSecret);
};

export const generateHash = async (value, rounds) => {
  return await bcrypt.hash(value, rounds ?? 10);
};

export const verifyHash = async (value, hashedValue) => {
  return await bcrypt.compare(value, hashedValue);
};

export const generatePassword = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  for (let index = 0; index < length; index++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};
