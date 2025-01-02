import React from "react";
import { FaBookMedical, FaBrain, FaHeartbeat, FaStethoscope, FaLeaf } from "react-icons/fa"; // Import relevant icons
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const HealthcarePlus = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
      {/* Back Button */}
      <div className="container px-4 md:px-0 mb-6">
        <button
          onClick={() => navigate(-1)} // Navigate to the previous page
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L6.414 10H15a1 1 0 110 2H6.414l3.293 3.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
      </div>

      {/* Main Section */}
      <section className="container px-4 md:px-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6">
            Healthcare+ Hospital
          </h1>
          <p className="text-lg text-center mb-8">
            Welcome to Healthcare+ in Munich, Germany. We provide top-notch healthcare services with a focus on patient care and medical excellence.
          </p>
        </motion.div>
      </section>

      {/* Health Blog Section */}
      <section className="health-blog bg-blue-50 py-10 my-10">
        <div className="container px-4 md:px-0 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl font-semibold mb-6"
          >
            Health Blog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg mb-8"
          >
            Stay informed with expert advice, tips, and the latest healthcare trends to help you and your family lead healthier lives.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="blog-card p-6 bg-white shadow-lg rounded-lg">
              <FaHeartbeat className="text-4xl text-red-600 mb-4" />
              <h3 className="text-xl font-semibold">Understanding Hypertension</h3>
              <p className="text-gray-700 mt-2">
                Learn about the causes, symptoms, and treatments for high blood pressure to maintain a healthy heart.
              </p>
            </div>
            <div className="blog-card p-6 bg-white shadow-lg rounded-lg">
              <FaBrain className="text-4xl text-green-600 mb-4" />
              <h3 className="text-xl font-semibold">Mental Health Matters</h3>
              <p className="text-gray-700 mt-2">
                Explore tips and resources to improve your mental well-being and support loved ones.
              </p>
            </div>
            <div className="blog-card p-6 bg-white shadow-lg rounded-lg">
              <FaStethoscope className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold">Preventive Health Screenings</h3>
              <p className="text-gray-700 mt-2">
                Discover the importance of regular health check-ups and early diagnosis for a longer, healthier life.
              </p>
            </div>
            <div className="blog-card p-6 bg-white shadow-lg rounded-lg">
              <FaLeaf className="text-4xl text-green-500 mb-4" />
              <h3 className="text-xl font-semibold">Nutrition Tips</h3>
              <p className="text-gray-700 mt-2">
                Healthy eating is key to a better lifestyle. Check out these diet tips and superfood ideas.
              </p>
            </div>
            <div className="blog-card p-6 bg-white shadow-lg rounded-lg">
              <FaBookMedical className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold">Seasonal Health Advice</h3>
              <p className="text-gray-700 mt-2">
                Stay safe during flu season and other weather changes with practical tips.
              </p>
            </div>
            <div className="blog-card p-6 bg-white shadow-lg rounded-lg">
              <FaHeartbeat className="text-4xl text-red-500 mb-4" />
              <h3 className="text-xl font-semibold">Exercise for Longevity</h3>
              <p className="text-gray-700 mt-2">
                Discover simple yet effective exercises to boost your physical and mental health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HealthcarePlus;
