import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;

  if (!blog) {
    return (
      <div className="container py-10">
        <p className="text-center text-lg text-gray-600">No blog details available.</p>
        <button
          className="primary-btn mt-4"
          onClick={() => navigate(-1)} // Go back to the previous page
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{blog.details.importance}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Why This Service?</h2>
        <p className="text-gray-600 dark:text-gray-400">{blog.details.whyThisService}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Why People Choose Us?</h2>
        <p className="text-gray-600 dark:text-gray-400">{blog.details.whyPeopleChoose}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Recommended Doctors</h2>
        <ul className="list-disc pl-6">
          {blog.details.doctors.map((doctor, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-400">
              {doctor}
            </li>
          ))}
        </ul>
      </div>

      <button
        className="primary-btn mt-4"
        onClick={() => navigate(-1)} // Go back to the previous page
      >
        Back to Blogs
      </button>
    </div>
  );
};

export default BlogDetails;
