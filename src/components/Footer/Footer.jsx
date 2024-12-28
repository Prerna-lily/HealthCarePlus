import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const handleGetDirections = () => {
    const mapsUrl =
      "https://www.google.com/maps/dir/?api=1&destination=Ismaninger+Str.+22,+81675+München";
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-5">
          {/* Hospital Address */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Healthcare+
            </h1>
            <p className="text-sm">
              <strong>Address:</strong> <br />
              Ismaninger Str. 22, 81675 München
            </p>
            <p className="text-sm mt-3">
              The hospital is at a distance of 37 km from Munich International
              Airport. The drive takes about 33 minutes. Taxis or shuttles are
              easily available from the airport to the hospital.
            </p>
            <p className="text-sm mt-3">
              The closest subway station is Max-Weber-Platz, and Max-Weber-Platz
              is also the closest bus stop.
            </p>
            <p className="text-sm mt-3">
              ATMs and pharmacies are all available near the hospital.
            </p>
            <button
              className="mt-4 px-6 py-2 bg-primary text-white rounded hover:bg-secondary transition"
              onClick={handleGetDirections}
            >
              Get Directions
            </button>
          </div>

          {/* Trusted by Patients Section */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
              <strong>Patients from 105+ countries have trusted us</strong>
            </h1>
            <p className="text-sm">
              Join hundreds of happy patients who choose the right treatment
              and care.
            </p>
          </div>

          {/* Top Hospitals by Department */}
          <div className="py-8 px-4">
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
              TOP HOSPITALS BY DEPARTMENT
            </h1>
            <ul className="text-sm list-disc pl-4">
              <li>Best Cardiology And Cardiac Surgery Hospitals in Germany</li>
              <li>
                Best Cosmetic And Plastic Surgery Hospitals in Germany
              </li>
              <li>Best Dental Treatment Hospitals in Germany</li>
              <li>Best ENT Surgery Hospitals in Germany</li>
              <li>Best Gastroenterology Hospitals in Germany</li>
              <li>Best General Surgery Hospitals in Germany</li>
              <li>Best Hematology Hospitals in Germany</li>
              <li>Best Nephrology Hospitals in Germany</li>
              <li>
                Best Neurology And Neurosurgery Hospitals in Germany
              </li>
              <li>
                Best Obesity Or Bariatric Surgery Hospitals in Germany
              </li>
            </ul>
          </div>

          {/* Top Hospitals in Munich */}
          <div className="py-8 px-4">
            <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
              Top Hospitals In Munich
            </h1>
            <ul className="text-sm list-disc pl-4">
              <li>University Hospital Rechts der Isar</li>
              <li>Ludwig Maximilian University Hospital, Munich</li>
              <li>Academic Hospital Bogenhausen, Munich</li>
              <li>Atos Clinic, Munich</li>
              <li>Dermatology Clinic Braun-Falco Munich, Germany</li>
              <li>OrthoCenter Munich</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-4 mt-6 justify-center">
          <a href="#">
            <FaInstagram className="text-2xl hover:text-primary duration-300" />
          </a>
          <a href="#">
            <FaFacebook className="text-2xl hover:text-primary duration-300" />
          </a>
          <a href="#">
            <FaLinkedin className="text-2xl hover:text-primary duration-300" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
