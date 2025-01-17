import dotenv from "dotenv";
dotenv.config();

export const config = {
  email: process.env.EMAIL,
  emailPassword: process.env.EMAIL_PASSWORD,
};
