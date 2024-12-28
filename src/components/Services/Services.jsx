import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeartbeat, FaStethoscope, FaNotesMedical } from "react-icons/fa";

const healthServices = [
  {
    name: "General Checkup",
    icon: <FaHeartbeat className="text-4xl text-primary" />,
    description:
      "Our general check-up service ensures your overall health and well-being by performing comprehensive health assessments and preventive screenings to detect potential issues early.",
    image: "https://dk4fkkwa4o9l0.cloudfront.net/production/uploads/article/image/843/doctor-checking-patient-arterial-blood-pressure.jpg",
    aosDelay: "0",
  },
  {
    name: "Cardiology",
    icon: <FaStethoscope className="text-4xl text-primary" />,
    description:
      "Our cardiology services specialize in diagnosing and treating heart conditions, offering advanced cardiac imaging, stress testing, and personalized treatment plans.",
    image: "https://smf.in/wp-content/uploads/2023/02/cardiology.png",
    aosDelay: "300",
  },
  {
    name: "Medical Advice",
    icon: <FaNotesMedical className="text-4xl text-primary" />,
    description:
      "Get professional medical consultations and advice from experienced practitioners to guide your healthcare decisions and treatments effectively.",
    image: "https://thumbs.dreamstime.com/b/medical-advice-vector-icon-concept-doctor-medical-advice-online-consultation-patient-video-call-hospital-worker-237573001.jpg",
    aosDelay: "500",
  },
  {
    name: "Emergency Care",
    icon: <FaHeartbeat className="text-4xl text-primary" />,
    description:
      "Our emergency care services provide immediate and expert medical attention for urgent situations, ensuring quick response and lifesaving treatments.",
    image: "https://www.dignityhealth.org/content/dam/dignity-health/central-ca/images/misc/Emergency-Care.jpg",
    aosDelay: "700",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleViewAllServices = () => {
    navigate("/all-services");
  };

  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
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
              We are dedicated to providing quality health services with care
              and expertise.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {healthServices.map((service, index) => (
              <div
                key={`${service.name}-${index}`}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="card bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={`Image of ${service.name}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-3">{service.icon}</div>
                  <h1 className="text-lg font-semibold">{service.name}</h1>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-8"
          >
            <button
              className="primary-btn bg-primary text-white px-6 py-2 rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring"
              onClick={handleViewAllServices}
            >
              View All Services
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
