import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero1.jsx';
import Services from '../components/Services/Services2.jsx';
import Footer from '../components/Footer/Footer';
import AllServices from './AllServices.jsx';


const ServicesPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
      
    </div>
  );
};

export default ServicesPage;