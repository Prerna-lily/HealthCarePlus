import React, { useState } from "react";
import { motion } from "framer-motion";

const doctors = [
  {
    id: 1,
    image: "src/assets/website/d1.png",
    name: "Dr. Antonio Doe",
    specialty: "Cardiologist",
    phoneNumber: "+1234567890",
    email: "antonio.doe@email.com",
    expertise: "Cardiovascular diseases, Heart surgery",
    achievements: "Led multiple heart transplant surgeries.",
    recognition: "Top Cardiologist of 2023, World heart award 2023",
    specialization: "Cardiology, Interventional Cardiology",
    membership: "American Heart Association, European Society of Cardiology"
  },
  {
    id: 2,
    image: "src/assets/website/d2.png",
    name: "Dr. Jane Smith",
    specialty: "Neurologist",
    phoneNumber: "+0987654321",
    email: "jane.smith@email.com",
    expertise: "Brain disorders, Neurodegenerative diseases",
    achievements: "Published over 50 research papers in neurology.",
    recognition: "Best Neurologist, Maden Medical Society",
    specialization: "Neurology, Epilepsy treatment",
    membership: "American Academy of Neurology, World Federation of Neurology"
  },
  {
    id: 3,
    image: "src/assets/website/d3.png",
    name: "Dr. Hannah White",
    specialty: "Orthopedic Surgeon",
    phoneNumber: "+1122334455",
    email: "hannah.white@email.com",
    expertise: "Bone fractures, Joint replacement",
    achievements: "Pioneered minimally invasive joint surgery.",
    recognition: "Top Orthopedic Surgeon, XYZ Orthopedics Awards",
    specialization: "Orthopedic surgery, Sports injuries",
    membership: "American Academy of Orthopaedic Surgeons"
  },
  {
    id: 4,
    image: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
    name: "Dr. Karl Müller",
    specialty: "Dermatologist",
    phoneNumber: "+9876543210",
    email: "karl.muller@email.com",
    expertise: "Skin diseases, Dermatological surgery",
    achievements: "Developed cutting-edge treatments for eczema.",
    recognition: "Dermatologist of the Year, ABC Dermatology Awards",
    specialization: "Dermatology, Skin cancer treatments",
    membership: "American Academy of Dermatology"
  },
  {
    id: 5,
    image: "https://static.vecteezy.com/system/resources/thumbnails/023/570/077/small_2x/portrait-of-girl-doctor-illustration-ai-generative-free-photo.jpg",
    name: "Dr. Laura Stein",
    specialty: "Gynaecologist",
    phoneNumber: "+1928374655",
    email: "laura.stein@email.com",
    expertise: "Women’s health, Reproductive health",
    achievements: "Expert in high-risk pregnancies.",
    recognition: "Top Gynaecologist, Women's Health Awards",
    specialization: "Obstetrics, Gynaecology",
    membership: "American College of Obstetricians and Gynecologists"
  },
  {
    id: 6,
    image: "https://t4.ftcdn.net/jpg/03/21/23/37/360_F_321233723_3nSdORPnL4nPOfGEocyCGVCI0RoXuRVo.jpg", // Add image link for the new doctor
    name: "Dr. Mark Wilson",
    specialty: "Pediatrician",
    phoneNumber: "+1987654321",
    email: "mark.wilson@email.com",
    expertise: "Childhood diseases, Pediatric care",
    achievements: "Pioneer in pediatric immunology.",
    recognition: "Best Pediatrician 2023",
    specialization: "Pediatrics, Pediatric Immunology",
    membership: "American Academy of Pediatrics"
  },
  {
    id: 7,
    image: "https://www.shutterstock.com/image-photo/beautiful-african-american-nurse-arms-600nw-1936087690.jpg", // Add image link for the new doctor
    name: "Dr. Emma Robinson",
    specialty: "Psychiatrist",
    phoneNumber: "+1209876543",
    email: "emma.robinson@email.com",
    expertise: "Mental health disorders, Cognitive therapy",
    achievements: "Developed new treatments for anxiety and depression.",
    recognition: "Top Psychiatrist 2023, Mental Health Award",
    specialization: "Psychiatry, Cognitive Behavioral Therapy",
    membership: "American Psychiatric Association"
  }
];

const FindDoctor = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center mb-8">Find a Doctor</h1>
        <p className="text-center mb-8">Scroll through to find the right specialist for you.</p>

        {/* Horizontal Scrollable Doctors */}
        <div className="doctor-list flex overflow-x-auto space-x-4 scrollbar-hide">
          {doctors.map((doctor) => (
            <motion.div
              key={doctor.id}
              className="doctor-card flex-shrink-0 w-64 bg-white shadow-lg rounded-lg p-4"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleDoctorClick(doctor)}
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-center">{doctor.name}</h3>
              <p className="text-center text-blue-500">{doctor.specialty}</p>
              <p className="text-sm mt-2">
                <strong>Phone:</strong> {doctor.phoneNumber} <br />
                <strong>Email:</strong> {doctor.email}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Display selected doctor's details */}
        {selectedDoctor && (
          <div className="doctor-details mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">{selectedDoctor.name}</h2>
            <p><strong>Specialty:</strong> {selectedDoctor.specialty}</p>
            <p><strong>Expertise:</strong> {selectedDoctor.expertise}</p>
            <p><strong>Achievements:</strong> {selectedDoctor.achievements}</p>
            <p><strong>Recognition:</strong> {selectedDoctor.recognition}</p>
            <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
            <p><strong>Membership:</strong> {selectedDoctor.membership}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindDoctor;
