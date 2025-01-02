import React from "react";
import { useNavigate } from "react-router-dom";

const healthServices = [
  {
    name: "General Checkup",
    image: "https://dk4fkkwa4o9l0.cloudfront.net/production/uploads/article/image/843/doctor-checking-patient-arterial-blood-pressure.jpg",
    description:
      "Our general check-up service ensures your overall health and well-being by performing comprehensive health assessments and preventive screenings to detect potential issues early.",
    aosDelay: "0",
  },
  {
    name: "Cardiology",
    image: "https://smf.in/wp-content/uploads/2023/02/cardiology.png",
    description:
      "Our cardiology services specialize in diagnosing and treating heart conditions, offering advanced cardiac imaging, stress testing, and personalized treatment plans.",
    aosDelay: "300",
  },
  {
    name: "Medical Advice",
    image: "https://thumbs.dreamstime.com/b/medical-advice-vector-icon-concept-doctor-medical-advice-online-consultation-patient-video-call-hospital-worker-237573001.jpg",
    description:
      "Get professional medical consultations and advice from experienced practitioners to guide your healthcare decisions and treatments effectively.",
    aosDelay: "500",
  },
  {
    name: "Emergency Care",
    image: "https://www.dignityhealth.org/content/dam/dignity-health/central-ca/images/misc/Emergency-Care.jpg",
    description:
      "Our emergency care services provide immediate and expert medical attention for urgent situations, ensuring quick response and lifesaving treatments.",
    aosDelay: "700",
  },
];

const Services2 = () => {
  const navigate = useNavigate();

  const handleViewAllServices = () => {
    navigate("/all-services"); 
  };

  return (
    <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12 text-center space-y-3">
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
          >
            Our Health Services
          </h1>
          <p
            data-aos="fade-up"
            className="text-gray-600 dark:text-gray-400 text-sm"
          >
            Your trusted partner in quality healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {healthServices.map((service) => (
            <div
              key={service.name}
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
              className="card space-y-3 sm:space-y-4 p-4"
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h1 className="text-lg font-semibold">{service.name}</h1>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="900" className="text-center mt-8">
          <button className="primary-btn" onClick={handleViewAllServices}>
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services2;
