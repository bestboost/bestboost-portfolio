import Feedback from "../models/feedbackModel.js";
import sendEmail from "../utils/nodemailer.js";
import { config } from "../utils/config.js";

// Обробник для прийому даних з форми
const submitFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Усі поля обов’язкові" });
    }

    // Збереження нового запиту у базу даних
    const newFeedback = await Feedback.create({ name, email, message });

    await sendEmail(newFeedback);
    //   {
    //   to: config.email, // ваш email
    //   subject: "Новий запит з форми зворотного зв’язку",
    //   text: `Ім'я: ${newFeedback.name}\nEmail: ${newFeedback.email}\nПовідомлення: ${newFeedback.message}`,
    // });

    // // Відправка підтвердження користувачу
    // await sendEmail({
    //   to: newFeedback.email, // email користувача
    //   subject: "Ми отримали ваш запит!",
    //   text: `Дякуємо, ${newFeedback.name}, за те, що зв’язалися з нами! Ми отримали ваш запит і відповімо найближчим часом.\n\nВаше повідомлення:\n"${newFeedback.message}"`,
    // });

    res.status(201).json({ message: "Запит успішно збережено та відправлено" });
  } catch (error) {
    console.error("Помилка при обробці запиту:", error);
    res.status(500).json({ message: "Не вдалося обробити запит" });
  }
};

export default submitFeedback;
