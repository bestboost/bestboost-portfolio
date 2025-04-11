import Feedback from "../models/feedbackSchema.js";
import sendEmail from "../utils/nodemailer.js";
import { config } from "../utils/config.js";

// Обробник для прийому даних з форми
const submitFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Усі поля обов’язкові" });
    }

    // Пробуємо надіслати адміну
    try {
      await sendEmail({
        to: config.email,
        subject: "Новий запит з форми зворотного зв’язку",
        text: `Ім'я: ${name}\nEmail: ${email}\nПовідомлення: ${message}`,
      });
    } catch (adminError) {
      console.error("❌ Не вдалося надіслати адміну:", adminError.message);
      return res.status(500).json({ message: "Сталася помилка. Спробуйте ще раз пізніше." });
    }

    // Пробуємо надіслати користувачу
    try {
      await sendEmail({
        to: email,
        subject: "Ми отримали ваш запит!",
        text: `Дякуємо, ${name}, за те, що зв’язалися з нами! Ми отримали ваш запит і відповімо найближчим часом.\n\nВаше повідомлення:\n"${message}"`,
      });
    } catch (userError) {
      console.error("❌ Не вдалося надіслати клієнту:", userError.message);
      return res.status(400).json({
        message: "Сталася помилка з вашою адресою. Перевірте правильність email і спробуйте ще раз.",
      });
    }

    // Якщо обидва листи пройшли — зберігаємо у базу
    const newFeedback = await Feedback.create({ name, email, message, emailSent: true });
    console.log("✅ Збережено у базу:", newFeedback);

    return res.status(201).json({ message: "Запит успішно відправлено та збережено!" });
  } catch (error) {
    console.error("🔥 Загальна помилка:", error.message);
    return res.status(500).json({ message: "Щось пішло не так. Спробуйте ще раз пізніше." });
  }
};


export default submitFeedback;
