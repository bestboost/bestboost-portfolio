import React, { useState } from "react";
import Button from "../Button/Button";
import {
  FormSection,
  FormTitle,
  Form,
  Input,
  TextArea,
} from "./FeedbackForm.styled";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    // Process the form data, such as sending it to a backend
  };

  return (
    <FormSection id="contact">
      <FormTitle>Contact Us</FormTitle>
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
