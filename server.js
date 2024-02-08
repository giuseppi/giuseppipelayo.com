require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// mailgun setup
const mailgun = require("mailgun.js");
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

app.use(express.json());

app.post("/api/send-email", (req, res) => {
  const { name, email, subject, message } = req.body;

  const data = {
    from: "Giuseppi Pelayo",
    to: "giuseppipelayo@gmail.com",
    subject: subject,
    text: "Message from ${name}\nEmail: ${email}\nMessage:${message}",
  };

  mg.messages().send(data, function (error, body) {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json({ message: "E-mail sent successfully!" });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
