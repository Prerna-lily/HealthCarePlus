import React, { useState } from "react";

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(true); // "Sign Up" mode by default
  const [role, setRole] = useState("patient"); // Default role: "patient"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "", // Added phone number field
  });
  const [errors, setErrors] = useState({}); // To store validation errors

  const toggleAuthMode = () => setIsSignUp(!isSignUp);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name (required)
    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    // Validate email (required and format check)
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Validate phone (required and format check)
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    // Validate password (required)
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // If no errors, return true
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (validateForm()) {
      console.log(`Form submitted for role: ${role}`, formData);
      alert(`Authentication successful as ${role.toUpperCase()}`);
    } else {
      alert("Please fill all the required fields correctly.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Modal automatically shown */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              {isSignUp ? "Sign Up" : "Log In"}
            </h2>

            {/* Role Selection */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Sign in as:</label>
              <div className="flex space-x-4">
                <button
                  onClick={() => setRole("patient")}
                  className={`px-4 py-2 rounded-md ${
                    role === "patient"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Patient
                </button>
                <button
                  onClick={() => setRole("provider")}
                  className={`px-4 py-2 rounded-md ${
                    role === "provider"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  Healthcare Provider
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block font-medium mb-2 text-sm"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">{errors.name}</p>
                  )}
                </div>
              )}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-medium mb-2 text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block font-medium mb-2 text-sm"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block font-medium mb-2 text-sm"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs">{errors.password}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 transition-colors"
              >
                {isSignUp ? "Sign Up" : "Log In"}
              </button>
            </form>

            {/* Toggle Mode */}
            <p className="text-center mt-4 text-sm">
              {isSignUp ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={toggleAuthMode}
                    className="text-blue-500 underline"
                  >
                    Log In
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={toggleAuthMode}
                    className="text-blue-500 underline"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={() => window.location.reload()} // Or handle closing modal in a different way
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
