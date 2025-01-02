import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero1.jsx';
import Footer from '../components/Footer/Footer';

const specialtiesData = {
  Cardiology: {
    description: "Treating heart and circulatory system disorders, including coronary artery disease, heart attacks, arrhythmias, and heart failure.",
    treatments: [
      "Heart surgeries (bypass, valve replacement, etc.)",
      "Angioplasty (including balloon angioplasty and stenting)",
      "Pacemaker installation and monitoring",
      "Electrophysiology studies and arrhythmia treatments",
      "Coronary artery bypass grafting (CABG)",
      "Heart transplant and mechanical circulatory support",
      "Peripheral artery disease management"
    ],
    successRate: "98%",
    healthcareProviders: [
      "Dr. John Doe (Cardiologist, HealthCare+ Hospital)",
      "Dr. Jane Smith (Cardiologist, City Hospital)"
    ],
    hospitals: [
      "HealthCare+ Hospital",
      "City Hospital",
      "Cardiac Center of Excellence",
      "HeartCare Medical Institute"
    ]
  },
  Neurology: {
    description: "Managing nervous system disorders, including brain, spine, and peripheral nerve conditions, stroke, epilepsy, and neurodegenerative diseases.",
    treatments: [
      "Brain surgeries (e.g., for tumors, aneurysms, epilepsy)",
      "Stroke management and rehabilitation",
      "Spinal treatments and surgeries (e.g., herniated disc, scoliosis)",
      "Neurostimulation and deep brain stimulation",
      "Parkinson’s disease treatment and management",
      "Seizure control and epilepsy treatment",
      "Multiple sclerosis management"
    ],
    successRate: "96%",
    healthcareProviders: [
      "Dr. Emily Clark (Neurologist, BrainCare Institute)",
      "Dr. James Lee (Neurologist, NeuroHealth Center)"
    ],
    hospitals: [
      "BrainCare Institute",
      "NeuroHealth Center",
      "Spine and Neuro Surgery Hospital",
      "NeuroLife Medical Center"
    ]
  },
  Oncology: {
    description: "Specializing in cancer diagnosis, treatment, and ongoing care, including chemotherapy, radiation, immunotherapy, and surgery.",
    treatments: [
      "Chemotherapy (various drug regimens)",
      "Radiation therapy (external beam and internal)",
      "Tumor removal surgeries",
      "Immunotherapy and targeted therapy",
      "Bone marrow transplants",
      "Palliative care for cancer patients",
      "Radiation therapy for brain, lung, and other cancers"
    ],
    successRate: "90%",
    healthcareProviders: [
      "Dr. Sarah Miller (Oncologist, Cancer Care Institute)",
      "Dr. David Green (Oncologist, City Oncology Hospital)"
    ],
    hospitals: [
      "Cancer Care Institute",
      "City Oncology Hospital",
      "Hope Cancer Center",
      "Oncology and Radiation Therapy Hospital"
    ]
  },
  Pediatrics: {
    description: "Medical care for infants, children, and adolescents, including vaccinations, growth management, pediatric surgeries, and childhood disease prevention.",
    treatments: [
      "Pediatric surgeries (e.g., appendectomies, hernia repair)",
      "Vaccinations and immunization schedules",
      "Growth disorder management and monitoring",
      "Pediatric cardiology and respiratory care",
      "Developmental screenings and assessments",
      "Management of pediatric allergies and asthma",
      "Nutritional advice and care for children"
    ],
    successRate: "99%",
    healthcareProviders: [
      "Dr. Laura Green (Pediatrician, KidsCare Hospital)",
      "Dr. Michael Harris (Pediatrician, Children’s Health Center)"
    ],
    hospitals: [
      "KidsCare Hospital",
      "Children’s Health Center",
      "Pediatric Care Clinic",
      "Family Health Pediatrics"
    ]
  },
  Orthopedics: {
    description: "Focusing on musculoskeletal system treatments, including joint replacements, fracture repairs, arthroscopy, and spinal surgeries.",
    treatments: [
      "Joint replacements (knee, hip, shoulder)",
      "Fracture repairs and bone healing management",
      "Arthroscopic surgeries (e.g., ACL repair, shoulder surgeries)",
      "Spinal treatments and surgeries (e.g., fusion, disc replacement)",
      "Sports injury management and rehabilitation",
      "Osteoarthritis treatment and management",
      "Minimally invasive orthopedic surgeries"
    ],
    successRate: "97%",
    healthcareProviders: [
      "Dr. Robert Brown (Orthopedic Surgeon, OrthoCare Hospital)",
      "Dr. Alice White (Orthopedic Surgeon, Spine and Joint Center)"
    ],
    hospitals: [
      "OrthoCare Hospital",
      "Spine and Joint Center",
      "Sports Medicine and Orthopedic Hospital",
      "Bone and Joint Care Medical Center"
    ]
  },
  Endocrinology: {
    description: "Managing endocrine system disorders, including diabetes, thyroid disorders, adrenal diseases, and hormonal imbalances.",
    treatments: [
      "Diabetes management and insulin therapy",
      "Thyroid disease treatment (e.g., hyperthyroidism, hypothyroidism)",
      "Hormone replacement therapy",
      "Adrenal gland disorders treatment",
      "Management of obesity and metabolic syndrome",
      "Osteoporosis diagnosis and treatment",
      "Polycystic ovary syndrome (PCOS) management"
    ],
    successRate: "95%",
    healthcareProviders: [
      "Dr. Karen Johnson (Endocrinologist, Endocrine Health Center)",
      "Dr. Paul Wilson (Endocrinologist, Diabetes and Hormone Clinic)"
    ],
    hospitals: [
      "Endocrine Health Center",
      "Diabetes and Hormone Clinic",
      "Thyroid Disorders Hospital",
      "Hormonal Imbalance Center"
    ]
  },
  Gynaecology: {
    description: "Specializing in female reproductive health, including gynecological surgeries, prenatal care, menopause management, and fertility treatments.",
    treatments: [
      "Gynecological surgeries (e.g., hysterectomy, laparoscopic surgery)",
      "Prenatal and postnatal care",
      "Management of menstrual disorders",
      "Fertility treatments (e.g., IVF, IUI)",
      "Management of menopause and related symptoms",
      "Cervical cancer screening and treatments",
      "Pelvic floor disorders and treatments"
    ],
    successRate: "98%",
    healthcareProviders: [
      "Dr. Jennifer Brown (Gynecologist, Women’s Health Clinic)",
      "Dr. Jessica Taylor (Gynecologist, Family Care Center)"
    ],
    hospitals: [
      "Women’s Health Clinic",
      "Family Care Center",
      "Gynecology and Maternity Hospital",
      "Fertility and Women’s Health Institute"
    ]
  }
};

const About = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState(null);

  // Page-specific text
  const aboutPageText = {
    description: "HealthCare+ is dedicated to providing world-class healthcare services. We aim to improve lives with advanced technology and compassionate care.",
    vision: "Our goal is to make quality healthcare accessible to all, ensuring the best patient experience.",
  };

  return (
    <div>
      <Navbar />
      <Hero />

      {/* About Us Section */}
      <section className="py-10 bg-gray-100 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl font-semibold mb-4">{aboutPageText.title}</h2>
          <p className="mt-2">{aboutPageText.description}</p>
          <p className="mt-2">{aboutPageText.vision}</p>

          {/* Specialties Section */}
          <h2 className="text-3xl font-semibold mt-8 mb-4">Our Specialties</h2>
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
                <strong>Treatments:</strong> {specialtiesData[selectedSpecialty].treatments}
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
