import React from "react";

// Updated services data with more services and special offerings
const servicesData = [
  {
    name: "General Checkup",
    charges: "$50",
    reviews: ["Very thorough and professional!", "Highly recommend."],
    description: "Comprehensive health assessment to detect potential issues early.",
    image: "https://doktererik.com/wp-content/uploads/2023/05/Physical-examination-by-a-doctor.jpg",
    specialOffer: "Free Blood Pressure Checkup",
  },
  {
    name: "Cardiology",
    charges: "$200",
    reviews: ["Expert care for heart conditions.", "Saved my life!"],
    description: "Advanced cardiac imaging, stress testing, and heart disease treatment.",
    image: "https://southdenver.com/wp-content/uploads/2021/02/cardiology-treatment-1536x1025.jpg",
    specialOffer: "Discount on First ECG Test",
  },
  {
    name: "Medical Advice",
    charges: "$30",
    reviews: ["Helpful advice.", "Clear and concise guidance."],
    description: "Consult with experts for effective medical guidance and treatment plans.",
    image: "https://media1.thehungryjpeg.com/thumbs2/ori_3888528_ovv0007uupyvbltnh9r7idfqtzxp0el3dr3pl1zv_medical-advice-vector-concept-color-illustration.jpg",
    specialOffer: "Free Online Consultation for New Patients",
  },
  {
    name: "Emergency Care",
    charges: "$500",
    reviews: ["Quick response in emergencies.", "Life-saving service."],
    description: "24/7 immediate medical care for urgent situations.",
    image: "https://www.dignityhealth.org/content/dam/dignity-health/central-ca/images/misc/Emergency-Care.jpg",
    specialOffer: "Free Ambulance Service for Critical Cases",
  },
  // Special services with unique features
  {
    name: "Neurosurgery",
    charges: "$1000",
    reviews: ["World-class surgical care.", "Highly skilled neurosurgeons."],
    description: "Expert treatment for neurological conditions, including brain and spine surgeries.",
    image: "https://neurosciencegroup.com/wp-content/uploads/2022/07/iStock-1283337865-scaled.jpg",
    specialOffer: "Free Pre-Op Consultation",
  },
  {
    name: "Maternity Care",
    charges: "$800",
    reviews: ["The best maternity care in town!", "Caring and experienced staff."],
    description: "Comprehensive prenatal and postnatal care for a healthy pregnancy.",
    image: "https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Maternity-Packages-in-Dubai-A-06-09-1024x640.jpg",
    specialOffer: "Free Ultrasound with Any Maternity Package",
  },
];

const AllServices = () => {
  return (
    <div className="bg-gray-100 dark:bg-black dark:text-white py-12">
      <div className="container">
        <h1 className="text-3xl font-semibold text-center text-violet-950 dark:text-primary mb-8">
          All Health Services & Special Offers
        </h1>

        <div className="space-y-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
            >
              <div className="flex gap-6">
                {/* Service Image */}
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-1/3 h-48 object-cover rounded-md shadow-md"
                />
                <div className="flex-1">
                  {/* Service Details */}
                  <h2 className="text-2xl font-semibold">{service.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Charges: <strong>{service.charges}</strong>
                  </p>

                  {/* Special Offer */}
                  <div className="mt-4 bg-primary p-4 rounded-lg text-white text-center">
                    <h3 className="font-semibold">Special Offer</h3>
                    <p>{service.specialOffer}</p>
                  </div>

                  {/* Reviews Section */}
                  <div className="mt-4">
                    <h3 className="font-semibold">Reviews:</h3>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                      {service.reviews.map((review, idx) => (
                        <li key={idx}>{review}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
