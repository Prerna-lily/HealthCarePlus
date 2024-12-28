import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Hero = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleFindDoctorClick = () => {
    // Navigate to the find-doctor page
    navigate("/find-doctor");
  };

  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              src="src/assets/website/homepage.png"
              alt="Healthcare"
              className="w-full sm:max-w-[280px] md:max-w-[430px] rounded-xl"
            />
            <div
              data-aos="slide-right"
              className="absolute -bottom-5 right-0 sm:-right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
            >
              <p className="text-gray-500 text-sm">⭐Trusted</p>
              <h1 className="font-bold">
                100+ <span className="font-normal">Doctors</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Your Health, Our Priority -{" "}
              <span className="text-primary">HealthCare+</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Connecting patients with the best healthcare professionals. Find
              doctors, book appointments, and manage your health journey with
              ease.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
              onClick={handleFindDoctorClick} // Button click handler
            >
              Find a Doctor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
