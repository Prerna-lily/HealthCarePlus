import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated for React Router v6

const BookAppointment = () => {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [appointmentReason, setAppointmentReason] = useState("");
  const [payment, setPayment] = useState(false);
  const [showPaymentUI, setShowPaymentUI] = useState(false);
  const [isVideoConsultation, setIsVideoConsultation] = useState(false);
  const [videoDetails, setVideoDetails] = useState({
    videoTime: "",
    videoLink: "",
  });

  const navigate = useNavigate(); // React Router v6 navigate

  const handleBooking = async () => {
    const appointmentData = {
      doctor,
      date,
      time,
      patientName,
      patientEmail,
      appointmentReason,
      payment: payment ? "Paid" : "Unpaid",
      videoLink: videoDetails.videoLink,
    };

    try {
      const response = await fetch("http://localhost:5000/book-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message);
        resetForm();
      } else {
        const errorData = await response.json();
        alert("Error: " + errorData.message);
      }
    } catch (error) {
      console.error(error);
      alert("Error booking appointment. Please try again later.");
    }
  };

  const resetForm = () => {
    setDoctor("");
    setDate("");
    setTime("");
    setPatientName("");
    setPatientEmail("");
    setAppointmentReason("");
    setPayment(false);
    setIsVideoConsultation(false);
    setVideoDetails({ videoTime: "", videoLink: "" });
  };

  const generateVideoLink = () => {
    if (isVideoConsultation) {
      const roomName = `Appointment-${Date.now()}`;
      const jitsiUrl = `https://meet.jit.si/${roomName}`;
      setVideoDetails((prevDetails) => ({
        ...prevDetails,
        videoLink: jitsiUrl,
      }));
    } else {
      setVideoDetails((prevDetails) => ({
        ...prevDetails,
        videoLink: "",
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-6">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
        >
          Back
        </button>
        <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-2/3">
          <h1 className="text-2xl font-semibold mb-4">Book Appointment</h1>
          <div className="mb-4">
            <label htmlFor="doctor" className="block font-medium text-sm mb-2">
              Select Doctor
            </label>
            <select
              id="doctor"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
            >
              <option value="">--Select Doctor--</option>
              <option value="Dr. Antonio Doe">Dr. Antonio Doe (Cardiologist)</option>
              <option value="Dr. Jane Smith">Dr. Jane Smith (Neurologist)</option>
              <option value="Dr. Hannah White">Dr. Hannah White (Orthopedic Surgeon)</option>
              <option value="Dr. John Smith">Dr. John Smith (Oncologist)</option>
              <option value="Dr. Emily Davis">Dr. Emily Davis (Endocrinologist)</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="date" className="block font-medium text-sm mb-2">
                Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="time" className="block font-medium text-sm mb-2">
                Time
              </label>
              <input
                type="time"
                id="time"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="patientName" className="block font-medium text-sm mb-2">
              Name
            </label>
            <input
              type="text"
              id="patientName"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="patientEmail" className="block font-medium text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              id="patientEmail"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="appointmentReason" className="block font-medium text-sm mb-2">
              Reason
            </label>
            <textarea
              id="appointmentReason"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              value={appointmentReason}
              onChange={(e) => setAppointmentReason(e.target.value)}
            />
          </div>
          {isVideoConsultation && (
            <div className="mb-4">
              <label htmlFor="videoTime" className="block font-medium text-sm mb-2">
                Choose Video Consultation Time
              </label>
              <input
                type="time"
                id="videoTime"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                value={videoDetails.videoTime}
                onChange={(e) =>
                  setVideoDetails({ ...videoDetails, videoTime: e.target.value })
                }
              />
              <p className="text-sm text-gray-600 mt-2">
                Video Link: {videoDetails.videoLink || "Link will be generated after booking."}
              </p>
            </div>
          )}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="payment"
              className="mr-2"
              checked={payment}
              onChange={() => {
                setPayment(!payment);
                setShowPaymentUI(!showPaymentUI);
              }}
            />
            <label htmlFor="payment" className="text-sm text-gray-700">
              Proceed with payment
            </label>
          </div>
          <button
            onClick={handleBooking}
            className="w-full bg-blue-500 text-white py-2 rounded-md text-sm hover:bg-blue-600"
          >
            Book Appointment
          </button>
        </div>
        {showPaymentUI && (
          <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            <p className="text-sm text-gray-700 mb-4">
              Complete the payment to confirm your appointment.
            </p>
            <div className="mb-4">
              <label htmlFor="cardNumber" className="block font-medium text-sm mb-2">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                placeholder="Enter card number"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="expiryDate" className="block font-medium text-sm mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block font-medium text-sm mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Enter CVV"
                />
              </div>
            </div>
            <button
              onClick={() => alert("Payment successful!")}
              className="w-full bg-green-500 text-white py-2 rounded-md text-sm hover:bg-green-600"
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
