import React, { useState } from "react";
import { toast } from "react-toastify";
import "../ToastContainer/ToastContainer.css";
import Button from "../Button/Button";
import {
  FormSection,
  FormTitle,
  Form,
  Input,
  TextArea,
} from "./FeedbackForm.styled";

const API_URL = process.env.REACT_APP_API_URL;

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${API_URL}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.status === 201) {
        toast.success(data.message || "Ваше повідомлення успішно надіслано!");
        setFormData({ name: "", email: "", message: "" });
      } else if (response.status === 400) {
        toast.warn(data.message || "Будь ласка, перевірте правильність введених даних.");
      } else if (response.status === 500) {
        toast.error(data.message || "Сервер тимчасово недоступний. Спробуйте пізніше.");
      } else {
        toast.info(data.message || "Щось пішло не так. Спробуйте ще раз.");
      }
    } catch (error) {
      console.error("Помилка мережі:", error);
      toast.error("Не вдалося надіслати. Перевірте інтернет.");
    }
  };

  return (
    <FormSection id="contact">
      <FormTitle>Contact Me</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </FormSection>
  );
};

export default FeedbackForm;
