import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import Blog from './pages/Blog.jsx';
import AllServices from './pages/AllServices.jsx';
import HealthcarePlus from './components/HealthcarePlus.jsx';
import FindDoctor from './components/Navbar/FindDoctor.jsx';
import BookAppointment from './components/Navbar/BookAppointment.jsx';
import BlogDetails from './components/Blogs/BlogDetails.jsx'; // Import BlogDetails component
import AOS from 'aos';
import 'aos/dist/aos.css';
import Chatbot from './components/Chatbot.jsx'; // Import Chatbot component
import Authentication from './components/Authentication.jsx'; // Import Authentication component
import VirtualConsultation from './components/Navbar/VirtualConsultation.jsx';

export const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in',
      delay: 100,
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/services',
      element: <ServicesPage />,
    },
    {
      path: '/blog',
      element: <Blog />,
    },
    {
      path: '/virtual-consultation',
      element: <VirtualConsultation />, // Add this route
    },
    {
      path: '/all-services',
      element: <AllServices />,
    },
    {
      path: '/healthcare-plus',
      element: <HealthcarePlus />,
    },
    {
      path: '/find-doctor',
      element: <FindDoctor />,
    },
    {
      path: '/book-appointment',
      element: <BookAppointment />,
    },
    {
      path: '/blog-details', // New route for BlogDetails
      element: <BlogDetails />,
    },
    {
      path: '/auth', // Route for Authentication
      element: <Authentication />,
    },
  ]);

  return (
    <div className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <RouterProvider router={router} />
      <Chatbot /> {/* Add Chatbot component */}
    </div>
  );
};

export default App;
