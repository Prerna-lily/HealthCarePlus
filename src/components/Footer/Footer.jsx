import React, { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [showDirections, setShowDirections] = useState(false);
  const [showAmbulanceDetails, setShowAmbulanceDetails] = useState(false);

  // Coordinates for Munich Airport and Healthcare+ hospital
  const munichAirportCoords = [48.3538, 11.7861];
  const healthcareCoords = [48.1246, 11.6017];
  const path = [munichAirportCoords, healthcareCoords];

  // Reference to avoid re-initialization
  const mapRef = useRef(null);

  // Handle show/hide for directions modal
  const handleGetDirections = () => {
    setShowDirections(true);
  };

  const closeDirectionsModal = () => {
    setShowDirections(false);
  };

  // Handle show/hide for ambulance details modal
  const handleAmbulanceDetails = () => {
    setShowAmbulanceDetails(true);
  };

  const closeAmbulanceDetailsModal = () => {
    setShowAmbulanceDetails(false);
  };

  useEffect(() => {
    // Prevent re-initialization of the map
    if (mapRef.current && mapRef.current._container) {
      mapRef.current._container._leaflet_id = null;
    }
  }, []);

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

            {/* Directions Modal */}
            {showDirections && (
              <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-black text-white p-8 rounded shadow-lg max-w-lg w-full">
                  <h2 className="text-2xl font-bold mb-4">Directions</h2>
                  <MapContainer
                    center={munichAirportCoords}
                    zoom={13}
                    style={{ height: "400px", width: "100%" }}
                    scrollWheelZoom={false}
                    ref={mapRef} // Using ref to avoid re-initialization
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={munichAirportCoords}>
                      <Popup>Munich Airport</Popup>
                    </Marker>
                    <Marker position={healthcareCoords}>
                      <Popup>Healthcare+ Hospital</Popup>
                    </Marker>
                    <Polyline positions={path} color="blue" />
                  </MapContainer>
                  <button
                    className="mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
                    onClick={closeDirectionsModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
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
              <li>Best Cosmetic And Plastic Surgery Hospitals in Germany</li>
              <li>Best Dental Treatment Hospitals in Germany</li>
              <li>Best ENT Surgery Hospitals in Germany</li>
              <li>Best Gastroenterology Hospitals in Germany</li>
              <li>Best General Surgery Hospitals in Germany</li>
              <li>Best Hematology Hospitals in Germany</li>
              <li>Best Nephrology Hospitals in Germany</li>
              <li>Best Neurology And Neurosurgery Hospitals in Germany</li>
              <li>Best Obesity Or Bariatric Surgery Hospitals in Germany</li>
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

        {/* Ambulance Details Button */}
        <div className="mt-6 text-center">
          <button
            className="primary-btn mt-6"
            onClick={handleAmbulanceDetails}
          >
            Ambulance Details
          </button>
        </div>

        {/* Ambulance Details Modal */}
        {showAmbulanceDetails && (
          <div className="modal-overlay fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-black text-white p-8 rounded shadow-lg max-w-lg w-full">
              <h2 className="text-2xl font-bold mb-4">Ambulance Details</h2>
              <p className="text-sm">
                Our ambulance service is available 24/7 for emergency transport
                to and from the hospital. Please call us at the following number
                for assistance:
              </p>
              <p className="text-lg font-semibold mt-4">+49 170 1234567</p>
              <button
                className="mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
                onClick={closeAmbulanceDetailsModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Footer;
