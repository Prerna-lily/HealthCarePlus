import React, { useState } from "react";
import axios from "axios"; // For backend communication

const Authentication = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Default mode: Sign Up
  const [role, setRole] = useState("patient"); // Default role: "patient"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const toggleAuthMode = () => setIsSignUp(!isSignUp);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name && isSignUp) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone && isSignUp) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone) && isSignUp) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Please fix errors before submitting.");
      return;
    }

    try {
      const endpoint =
        role === "patient"
          ? isSignUp
            ? "http://localhost:3001/users"
            : "http://localhost:3001/loginUser"
          : isSignUp
          ? "http://localhost:3001/providers"
          : "http://localhost:3001/loginProvider";

      const response = await axios.post(endpoint, formData);
      alert(response.data.message || `Successfully ${isSignUp ? "signed up" : "logged in"} as ${role.toUpperCase()}`);
    } catch (error) {
      alert(`Error: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">{isSignUp ? "Sign Up" : "Log In"}</h2>

        <div className="mb-4">
          <label className="block font-medium mb-2">Sign in as:</label>
          <div className="flex space-x-4">
            <button
              onClick={() => setRole("patient")}
              className={`px-4 py-2 rounded-md ${
                role === "patient" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              Patient
            </button>
            <button
              onClick={() => setRole("provider")}
              className={`px-4 py-2 rounded-md ${
                role === "provider" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              Healthcare Provider
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">
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
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
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
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>
          {isSignUp && (
            <div className="mb-4">
              <label htmlFor="phone" className="block font-medium mb-2">
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
              {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
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
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 transition-colors"
          >
            {isSignUp ? "Sign Up" : "Log In"}
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <button onClick={toggleAuthMode} className="text-blue-500 underline">
                Log In
              </button>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <button onClick={toggleAuthMode} className="text-blue-500 underline">
                Sign Up
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Authentication;


