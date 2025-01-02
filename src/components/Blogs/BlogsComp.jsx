import React from "react";
import { useNavigate } from "react-router-dom";

// Blog data
const BlogsData = [
  {
    id: 1,
    image: "https://maxfitnesshub.com/wp-content/uploads/2018/06/shutterstock_224800759.jpg",
    title: "The Importance of Regular Checkups",
    description:
      "Regular check-ups play a critical role in maintaining your overall health and well-being. They can help identify potential health issues early.",
    details: {
      importance:
        "Regular checkups help in the early detection of diseases, preventing major health issues in the future. They provide an opportunity to assess overall health.",
      doctors: ["Dr. John Smith (General Physician)", "Dr. Emily Brown (Preventive Care Specialist)"],
      whyThisService:
        "Our hospital is equipped with the latest diagnostic tools and a team of experienced professionals, ensuring accurate and comprehensive checkups.",
      whyPeopleChoose:
        "Patients trust us for our thorough care, expert guidance, and personalized follow-up plans tailored to individual health needs.",
    },
  },
  {
    id: 2,
    image: "https://www.health.harvard.edu/media/content/images/cr/bb5509e2-61d9-4346-b64f-8cb6ab5f3fa4.jpg",
    title: "Understanding Your Blood Pressure",
    description:
      "Learn more about blood pressure, its importance, and what you can do to maintain a healthy range.",
    details: {
      importance:
        "Managing blood pressure is crucial to preventing cardiovascular diseases. It helps reduce the risk of strokes and other complications.",
      doctors: ["Dr. Sarah Green (Cardiologist)", "Dr. James Wilson (Hypertension Specialist)"],
      whyThisService:
        "Our cardiology department specializes in hypertension management with state-of-the-art facilities and expert consultations.",
      whyPeopleChoose:
        "We offer tailored treatment plans, ensuring effective management and patient satisfaction.",
    },
  },
  {
    id: 3,
    image: "http://challengethestorm.org/wp-content/uploads/2018/11/MentalHealthBenefitsOutside_infographic_comp.png",
    title: "The Benefits of Exercise for Mental Health",
    description:
      "Discover how physical activity can have a significant positive impact on your mental health and overall well-being.",
    details: {
      importance:
        "Exercise improves mood, reduces anxiety, and helps combat depression. It is a proven method to boost mental health and resilience.",
      doctors: ["Dr. Anna Lee (Psychologist)", "Dr. Brian Taylor (Mental Health Coach)"],
      whyThisService:
        "Our hospital offers personalized mental health programs integrated with physical wellness plans for holistic care.",
      whyPeopleChoose:
        "We are trusted for our expert mental health team and the integration of fitness regimens tailored to individual needs.",
    },
  },
];

// Partner data with URLs
const PartnersData = [
  {
    id: 1,
    name: "Artemis Hospital",
    logo: "src/assets/brands/im7.png", // Replace with actual logo URL
    website: "https://www.artemishospitals.com" // Artemis Hospital website
  },
  {
    id: 2,
    name: "Apollo Hospital",
    logo: "src/assets/brands/im6.png", // Replace with actual logo URL
    website: "https://www.apollohospitals.com" // Apollo Hospital website
  },
  {
    id: 3,
    name: "Hospital Aleman",
    logo: "src/assets/brands/im8.png", // Replace with actual logo URL
    website: "https://www.hospitalaleman.com.ar" // Hospital Aleman website
  },
  {
    id: 4,
    name: "Hospital Metropolitano",
    logo: "src/assets/brands/im9.png", // Replace with actual logo URL
    website: "https://www.hospitalmetropolitano.com" // Hospital Metropolitano website
  },
];

const BlogsComp = () => {
  const navigate = useNavigate();

  const handleBlogClick = (blog) => {
    navigate("/blog-details", { state: { blog } });
  };

  const handleViewAllPosts = () => {
    navigate("/healthcare-plus"); // Replace with the actual route for the Healthcare+ page
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
      {/* Blogs Section */}
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
          Health Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BlogsData.map((item) => (
            <div
              key={item.id}
              className="blog-card cursor-pointer relative overflow-hidden rounded-md shadow-lg"
              onClick={() => handleBlogClick(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-4xl font-bold">→</span>
              </div>
              <h2 className="text-xl font-semibold mt-4 px-4">{item.title}</h2>
              <p className="text-gray-600 mt-2 px-4">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="primary-btn mt-6" onClick={handleViewAllPosts}>
            View All Posts
          </button>
        </div>
      </section>

      {/* Our Partners Section */}
      <section data-aos="fade-up" className="container mt-10">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
          Our Partners
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PartnersData.map((partner) => (
            <div
              key={partner.id}
              className="partner-card p-4 bg-white rounded-md shadow-md flex flex-col items-center justify-center"
            >
              <a href={partner.website} target="_blank" rel="noopener noreferrer">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 object-contain"
                />
              </a>
              <h2 className="text-lg font-semibold mt-4 text-center">
                <a href={partner.website} target="_blank" rel="noopener noreferrer">
                  {partner.name}
                </a>
              </h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsComp;
