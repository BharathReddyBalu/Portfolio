const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Get CV Data
app.get('/api/cv', (req, res) => {
    const data = fs.readFileSync(path.join(__dirname, 'cv.json'), 'utf8');
    res.json(JSON.parse(data));
});

// Handle Contact Form
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    const timestamp = new Date().toISOString();
    const newEntry = { timestamp, name, email, message };

    console.log(`Received message from ${name} (${email}): ${message}`);

    // Store message in messages.json for persistence
    const messagesPath = path.join(__dirname, 'messages.json');
    let messages = [];

    if (fs.existsSync(messagesPath)) {
        const fileContent = fs.readFileSync(messagesPath, 'utf8');
        messages = JSON.parse(fileContent);
    }

    messages.push(newEntry);
    fs.writeFileSync(messagesPath, JSON.stringify(messages, null, 2));

    // Send Email Notification
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
        subject: `New Portfolio Inquiry from ${name}`,
        text: `
            You have a new message from your portfolio contact form:
            
            Name: ${name}
            Email: ${email}
            Date: ${timestamp}
            
            Message:
            ${message}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email error:', error);
            // We still return success because it was stored in messages.json
            return res.json({ success: true, message: 'Message stored, but email notification failed (Check .env)' });
        }
        console.log('Email sent: ' + info.response);
        res.json({ success: true, message: 'Message received and email sent!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
