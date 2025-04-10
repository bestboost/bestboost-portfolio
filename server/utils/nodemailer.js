import nodemailer from "nodemailer";
import { config } from "../utils/config.js";

const email = config.email;
const emailPassword = config.emailPassword;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: emailPassword, // токен для Gmail
  },
});

if (!email || !emailPassword) {
  console.log("Помилка: електронна адреса або пароль не задані в конфігурації.");
  process.exit(1); // Завершуємо програму, якщо не задані налаштування
}

const sendMail = (mailOptions) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info.response);
      }
    });
  });
};

const sendEmail = async ({ to, subject, text }) => {
  try {
    const mailOptions = {
      from: email, // Вказуємо відправника
      to: to,      // Отримувач
      subject: subject,
      text: text,
    };

    // Відправка листа
    await sendMail(mailOptions);
    console.log(`Лист надіслано на ${to}`);
  } catch (error) {
    console.log("Помилка при відправленні:", error.message);
  }
};

export default sendEmail;
