import React, { useState } from "react";

const BookAppointment = () => {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [appointmentReason, setAppointmentReason] = useState("");
  const [payment, setPayment] = useState(false);

  const handleBooking = () => {
    alert("Your booking request has been submitted.");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-6">
        {/* Left Column: Booking Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full lg:w-2/3">
          <h1 className="text-2xl font-semibold mb-4">Book Appointment</h1>
          <p className="mb-6 text-sm text-gray-600">
            Fill in your details to book an appointment with a healthcare professional.
          </p>

          {/* Doctor Selection */}
          <div className="mb-4">
            <label htmlFor="doctor" className="block font-medium text-sm mb-2">Select Doctor</label>
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

          {/* Date and Time */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="date" className="block font-medium text-sm mb-2">Date</label>
              <input
                type="date"
                id="date"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="time" className="block font-medium text-sm mb-2">Time</label>
              <input
                type="time"
                id="time"
                className="w-full p-2 border border-gray-300 rounded-md text-sm"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          {/* Patient Details */}
          <div className="mb-4">
            <label htmlFor="patientName" className="block font-medium text-sm mb-2">Name</label>
            <input
              type="text"
              id="patientName"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="patientEmail" className="block font-medium text-sm mb-2">Email</label>
            <input
              type="email"
              id="patientEmail"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
            />
          </div>

          {/* Reason for Appointment */}
          <div className="mb-4">
            <label htmlFor="appointmentReason" className="block font-medium text-sm mb-2">Reason</label>
            <textarea
              id="appointmentReason"
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
              value={appointmentReason}
              onChange={(e) => setAppointmentReason(e.target.value)}
            />
          </div>

          {/* Payment */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="payment"
              className="mr-2"
              checked={payment}
              onChange={() => setPayment(!payment)}
            />
            <label htmlFor="payment" className="text-sm text-gray-700">Proceed with payment</label>
          </div>

          {/* Booking Button */}
          <button
            onClick={handleBooking}
            className="w-full bg-blue-500 text-white py-2 rounded-md text-sm hover:bg-blue-600"
          >
            Book Appointment
          </button>
        </div>

        {/* Right Column: Healthcare Professionals */}
        <div className="bg-gray-50 shadow-md rounded-lg p-6 w-full lg:w-1/3">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Healthcare Professionals</h2>
          <p className="text-sm text-gray-600 mb-4">
            Consult with the leading healthcare professionals in the field and avail the quality care that you need.
          </p>
          <div className="grid grid-cols-1 gap-3">
            {[
              "Orthopaedic Surgeon",
              "Cardiologist",
              "General Practitioner",
              "Neurologist",
              "Rheumatologist",
              "Gynaecologist",
              "Dermatologist",
              "Endocrinologist",
            ].map((profession) => (
              <div
                key={profession}
                className="bg-white border border-gray-300 rounded-md p-3 text-sm text-gray-700 shadow-sm hover:bg-blue-100 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {profession}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;