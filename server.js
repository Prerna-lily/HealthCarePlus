import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pkg from "pg";

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

// API to handle appointment booking
app.post("/book-appointment", async (req, res) => {
  const {
    doctor,
    date,
    time,
    patientName,
    patientEmail,
    appointmentReason,
    payment,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO appointments1 
        (doctor, date, time, patient_name, patient_email, appointment_reason, payment) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) 
        RETURNING *`,
      [doctor, date, time, patientName, patientEmail, appointmentReason, payment]
    );
    res.status(201).json({
      message: "Appointment booked successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ message: "Error booking appointment", error: error.message });
  }
});

// API to handle video consultation scheduling
app.post("/schedule-video-consultation", async (req, res) => {
  const { doctor, date, time, patientName, patientEmail, appointmentReason } = req.body;

  try {
    // Generate a unique video consultation link
    const videoLink = `https://video-conferencing-service.com/${Date.now()}`;

    // Insert the appointment data into PostgreSQL
    const result = await pool.query(
      `INSERT INTO appointments1 
        (doctor, date, time, patient_name, patient_email, appointment_reason, payment) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) 
        RETURNING *`,
      [doctor, date, time, patientName, patientEmail, appointmentReason, false] // assuming payment is false initially
    );

    // Send confirmation email
    await sendEmail(patientEmail, doctor, date, time, appointmentReason);

    // Return the new appointment data along with the video link
    res.status(201).json({
      message: "Video consultation scheduled successfully",
      data: {
        ...result.rows[0],
        video_link: videoLink,
      },
    });
  } catch (error) {
    console.error("Error scheduling video consultation:", error);
    res.status(500).json({ message: "Error scheduling video consultation", error: error.message });
  }
});

// API to fetch doctor availability
app.get("/doctor-availability", async (req, res) => {
  try {
    const result = await pool.query("SELECT DISTINCT doctor FROM appointments1");
    res.status(200).json({ availability: result.rows });
  } catch (error) {
    console.error("Error fetching doctor availability:", error);
    res.status(500).json({ message: "Error fetching doctor availability", error: error.message });
  }
});

// API to handle payments
app.post("/process-payment", async (req, res) => {
  const { amount, method } = req.body;

  try {
    // Simulate a payment process (replace with a real payment gateway integration, e.g., Stripe)
    const transactionId = `TXN${Date.now()}`;
    res.status(200).json({
      message: "Payment processed successfully",
      transactionId,
      amount,
      method,
    });
  } catch (error) {
    console.error("Error processing payment:", error);
    res.status(500).json({ message: "Error processing payment", error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
