import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pkg from "pg";
import nodemailer from "nodemailer";

const { Pool } = pkg; // Import Pool from pg using destructuring

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: "postgres", // Replace with your PostgreSQL username
  host: "localhost",
  database: "appointment_db", // Replace with your PostgreSQL database name
  password: "prerna2004", // Replace with your PostgreSQL password
  port: 5432,
});

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "whitecloud122004@gmail.com", // Replace with your email
    pass: "gnch bvun oref eicb", // Replace with your app password
  },
});

// Function to send email
const sendEmail = async (to, doctor, date, time, reason) => {
  try {
    const info = await transporter.sendMail({
      from: "whitecloud122004@gmail.com", // Replace with your email
      to, // Patient's email
      subject: "Appointment Confirmation",
      html: `
        <h3>Appointment Confirmation</h3>
        <p>Your appointment has been confirmed with the following details:</p>
        <ul>
          <li><strong>Doctor:</strong> ${doctor}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
          <li><strong>Reason:</strong> ${reason}</li>
        </ul>
      `,
    });
    console.log("Email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// API to book an appointment
app.post("/book-appointment", async (req, res) => {
  const { doctor, date, time, patientName, patientEmail, appointmentReason, payment } = req.body;

  console.log("Received appointment data:", req.body); // Log incoming request data

  try {
    // Insert the appointment data into PostgreSQL
    const result = await pool.query(
      `INSERT INTO appointments1 
        (doctor, date, time, patient_name, patient_email, appointment_reason, payment) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) 
        RETURNING *`,
      [doctor, date, time, patientName, patientEmail, appointmentReason, payment]
    );

    // Send confirmation email
    await sendEmail(patientEmail, doctor, date, time, appointmentReason);

    // Return success response
    res.status(201).json({
      message: "Appointment booked successfully!",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ message: "Error booking appointment", error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
