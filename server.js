// backend/server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure your email service
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'coolguyyy2004@gmail.com',
      pass: '123lakshgta', // Use an App Password if using Gmail
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'coolguyyy2004@gmail.com',
      subject: `Portfolio Contact from ${name}`,
      text: message,
    });
    res.status(200).json({ message: 'Message sent!' });
  } catch (err) {
    res.status(500).json({ message: 'Error sending message.' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
