import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./VirtualConsultation.css";

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
  const [paymentOptionsVisible, setPaymentOptionsVisible] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Track payment success
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [consultationCost, setConsultationCost] = useState(0); // Track consultation cost

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        setLoading(true);
        const doctors = [
          { doctor: "Dr. Karl Müller - Dermatologist", cost: 50 },
          { doctor: "Dr. Laura Stein - Gynaecologist", cost: 60 },
          { doctor: "Dr. Mark Wilson - Pediatrician", cost: 40 },
          { doctor: "Dr. Emma Robinson - Psychiatrist", cost: 70 },
        ];
        setAvailability(doctors);
      } catch (err) {
        setError("Failed to load availability. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAvailability();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.payment) {
      setError("Please select a payment method.");
      return;
    }
  
    const formData = { ...form };
  
    try {
      await axios.post(
        "http://localhost:5000/schedule-video-consultation",
        formData
      );
      setSuccessMessage(
        "Consultation booked successfully! A confirmation email has been sent."
      );
    } catch (error) {
      setError("Error booking consultation, please try again.");
    }
  };
  

  const handlePayment = (method) => {
    setForm({ ...form, payment: method }); // Add payment method to the form
    setPaymentSuccess(true);
  };  

  const handleDoctorSelection = (doctor) => {
    setForm({ ...form, doctor });
    // Set consultation cost based on selected doctor
    const selectedDoctor = availability.find((d) => d.doctor === doctor);
    if (selectedDoctor) {
      setConsultationCost(selectedDoctor.cost);
    }
  };

  return (
    <div className="virtual-consultation-container">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>

      {/* Page Header */}
      <div className="header-box">
        <h1 className="page-title">Virtual Consultation</h1>
        <p className="page-description">
          Experience top-notch healthcare from the comfort of your home with our
          secure and easy-to-use virtual consultation services.
        </p>
      </div>

      {/* Available Doctors */}
      <div className="doctor-box">
        <h2>Available Doctors</h2>
        <ul>
          {availability.map(({ doctor }, index) => (
            <li key={index}>
              <button onClick={() => handleDoctorSelection(doctor)}>
                {doctor}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Booking Form */}
      <div className="form-box">
        <h2>Book Your Consultation</h2>
        <form onSubmit={handleSubmit} className="booking-form">
          <select
            name="doctor"
            value={form.doctor}
            onChange={(e) => handleDoctorSelection(e.target.value)}
            className="form-input"
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
            className="form-input"
            required
          />
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="form-input"
            required
          />
          <input
            type="text"
            placeholder="Patient Name"
            value={form.patientName}
            onChange={(e) => setForm({ ...form, patientName: e.target.value })}
            className="form-input"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={form.patientEmail}
            onChange={(e) => setForm({ ...form, patientEmail: e.target.value })}
            className="form-input"
            required
          />
          <textarea
            placeholder="Reason for Appointment"
            value={form.appointmentReason}
            onChange={(e) =>
              setForm({ ...form, appointmentReason: e.target.value })
            }
            className="form-textarea"
            required
          ></textarea>
          <button type="submit" className="primary-button">
            Book Consultation
          </button>
        </form>
        <div>

  <h3>Select Payment Method</h3>
  <button onClick={() => handlePayment("Credit Card")}>Credit Card</button>
  <button onClick={() => handlePayment("PayPal")}>PayPal</button>
</div>


        {successMessage && !paymentSuccess && (
          <div className="payment-container">
            <p className="success-message">{successMessage}</p>
            <button
              onClick={() => setPaymentOptionsVisible(true)}
              className="primary-button"
            >
              Pay Now - {consultationCost} EUR
            </button>
            {paymentOptionsVisible && (
              <div className="payment-options">
                <p>Amount: {consultationCost} EUR</p>
                <button
                  onClick={() => handlePayment("UPI")}
                  className="payment-button"
                >
                  Pay with UPI
                </button>
                <button
                  onClick={() => handlePayment("Credit Card")}
                  className="payment-button"
                >
                  Pay with Credit Card
                </button>
                <button
                  onClick={() => handlePayment("Debit Card")}
                  className="payment-button"
                >
                  Pay with Debit Card
                </button>
              </div>
            )}
          </div>
        )}

        {/* Display Payment Success Message */}
        {paymentSuccess && (
          <div className="payment-success">
            <p>Payment Successful! Your consultation is confirmed.</p>
          </div>
        )}

        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default VirtualConsultation;
