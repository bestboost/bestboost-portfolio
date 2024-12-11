const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route for feedback
app.post("/feedback", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail", // або інший SMTP-сервер
      auth: {
        user: "your-email@gmail.com",
        pass: "your-email-password",
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: "your-email@gmail.com",
      subject: `Feedback from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Feedback sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send feedback" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
