import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero1.jsx';
import Footer from '../components/Footer/Footer';

const specialtiesData = {
  Cardiology: {
    description: "Cardiology deals with disorders of the heart and circulatory system.",
    operations: "Heart surgeries, angioplasty, pacemaker installation, and more.",
    successRate: "98%",
  },
  Neurology: {
    description: "Neurology focuses on the treatment of nervous system disorders.",
    operations: "Brain surgeries, stroke management, and spinal cord treatments.",
    successRate: "96%",
  },
  Oncology: {
    description: "Oncology is the branch of medicine that deals with cancer diagnosis and treatment.",
    operations: "Chemotherapy, radiation therapy, and tumor removal surgeries.",
    successRate: "90%",
  },
  Pediatrics: {
    description: "Pediatrics provides medical care for infants, children, and adolescents.",
    operations: "Vaccinations, pediatric surgeries, and growth disorder management.",
    successRate: "99%",
  },
  Orthopedics: {
    description: "Orthopedics focuses on the musculoskeletal system.",
    operations: "Joint replacements, fracture repairs, and arthroscopic surgeries.",
    successRate: "97%",
  },
  Endocrinology: {
    description: "Endocrinology focuses on disorders of the endocrine system, including glands that release hormones.",
    operations: "Treatment of diabetes, thyroid disorders, adrenal disorders, and more.",
    successRate: "95%",
  },
  Gynaecology: {
    description: "Gynaecology deals with the health of the female reproductive system.",
    operations: "Gynecological surgeries, prenatal care, and management of reproductive health issues.",
    successRate: "98%",
  },
};

const About = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  return (
    <div>
      <Navbar />
      <Hero />

      {/* Specialties Section */}
      <section className="py-10 bg-gray-100 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-4">Our Specialties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.keys(specialtiesData).map((specialty) => (
              <button
                key={specialty}
                onClick={() => setSelectedSpecialty(specialty)}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-primary/10 dark:hover:bg-primary/20"
              >
                {specialty}
              </button>
            ))}
          </div>

          {/* Display Specialty Details */}
          {selectedSpecialty && (
            <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold">{selectedSpecialty}</h3>
              <p className="mt-2">{specialtiesData[selectedSpecialty].description}</p>
              <p className="mt-2">
                <strong>Operations:</strong> {specialtiesData[selectedSpecialty].operations}
              </p>
              <p className="mt-2">
                <strong>Success Rate:</strong> {specialtiesData[selectedSpecialty].successRate}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
