const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "yourgmail@gmail.com",      // Replace with your email
      pass: "your-app-password",        // Use App Password, not your Gmail password
    },
  });

  const mailOptions = {
    from: email,
    to: "sisamkelevava2@gmail.com",
    subject: "New Contact Form Message",
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Message sent");
  } catch (error) {
    console.error(error);
    res.status(500).send("Email failed");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
