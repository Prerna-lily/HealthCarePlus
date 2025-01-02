import React, { useState, useEffect } from "react";
import axios from "axios";
import "./VirtualConsultation.css"; // Ensure the CSS file exists and is styled

const VirtualConsultation = () => {
  const [availability, setAvailability] = useState([]);
  const [form, setForm] = useState({
    doctor: "",
    date: "",
    time: "",
    patientName: "",
    patientEmail: "",
    appointmentReason: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch available doctors and their schedules
  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        setLoading(true);
        // Simulated response for availability
        const doctors = [
          { doctor: 'Dr. Hannah White - Orthopedic Surgeon' },
          { doctor: 'Dr. Karl Müller - Dermatologist' },
          { doctor: 'Dr. Laura Stein - Gynaecologist' },
          { doctor: 'Dr. Mark Wilson - Pediatrician' },
          { doctor: 'Dr. Emma Robinson - Psychiatrist' },
        ];
        setAvailability(doctors);
        setError(""); // Reset any previous errors
      } catch (err) {
        console.error("Error fetching availability:", err);
        setError("Failed to load availability. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAvailability();
  }, []);

  // Handle form submission for booking
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      doctor: form.doctor,
      date: form.date,
      time: form.time,
      patientName: form.patientName,
      patientEmail: form.patientEmail,
      appointmentReason: form.appointmentReason,
    };
  
    try {
      const response = await axios.post("http://localhost:5000/schedule-video-consultation", formData);
      console.log("Consultation booked:", response.data);
      setSuccessMessage("Consultation booked successfully! A confirmation email has been sent.");
    } catch (error) {
      console.error("Error booking consultation:", error);
      setError("Error booking consultation, please try again.");
    }
  };  

  // Handle payment processing (Optional based on your setup)
  const handlePayment = async () => {
    setLoading(true);
    setError("");
    setPaymentStatus("");
    try {
        const response = await axios.post("http://localhost:5000/process-payment", {
            amount: 500, // Example fee in USD
            method: "card",
      });
      setPaymentStatus("Payment Successful!");
    } catch (err) {
      console.error("Payment Error:", err);
      setPaymentStatus("Payment Failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-6">
      <h1 className="text-2xl font-semibold mb-4">Virtual Consultation</h1>
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="grid gap-4">
        <select
          name="doctor"
          value={form.doctor}
          onChange={(e) => setForm({ ...form, doctor: e.target.value })}
          className="input"
          required
        >
          <option value="">Select a Doctor</option>
          {availability.map(({ doctor }, index) => (
            <option key={index} value={doctor}>
              {doctor}
            </option>
          ))}
        </select>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="input"
          required
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          className="input"
          required
        />
        <input
          type="text"
          placeholder="Patient Name"
          value={form.patientName}
          onChange={(e) => setForm({ ...form, patientName: e.target.value })}
          className="input"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={form.patientEmail}
          onChange={(e) => setForm({ ...form, patientEmail: e.target.value })}
          className="input"
          required
        />
        <textarea
          placeholder="Reason for Appointment"
          value={form.appointmentReason}
          onChange={(e) =>
            setForm({ ...form, appointmentReason: e.target.value })
          }
          className="input"
          required
        ></textarea>
        <button type="submit" className="primary-btn" disabled={loading}>
          Book Consultation
        </button>
      </form>
      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}

      {/* Payment Section */}
      <button onClick={handlePayment} className="primary-btn mt-4" disabled={loading}>
        Pay Now
      </button>
      {paymentStatus && <p className="text-blue-500 mt-4">{paymentStatus}</p>}
    </div>
  );
};

export default VirtualConsultation;
