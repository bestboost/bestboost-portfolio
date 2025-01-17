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

const sendEmail = async (newFeedback) => {
  try {
    const mailOptions = {
      to: email,
      subject: "Новий запит з форми зворотного зв’язку",
      text: `
      Нова відповідь:
      Ім'я: ${newFeedback.name}
      Email: ${newFeedback.email}
      Повідомлення: ${newFeedback.message}
    `,
    };

    const userMail = {
      to: newFeedback.email, // email користувача
      subject: "Ми отримали ваш запит!",
      text: `Дякуємо, ${newFeedback.name}, за те, що зв’язалися з нами! Ми отримали ваш запит і відповімо найближчим часом."`,
    };

    // Відправка листів
    await sendMail(mailOptions);
    console.log("Лист надіслано адміністратору");

    await sendMail(userMail);
    console.log("Лист надіслано користувачу");
  } catch (error) {
    console.log("Помилка при відправленні:", error);
  }
};

export default sendEmail;
