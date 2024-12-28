import React ,{useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import BrandsLogo from "../components/BrandsLogo/BrandsLogo.jsx";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import BlogsComp from "../components/Blogs/BlogsComp.jsx";
import Footer from "../components/Footer/Footer";


const Home = () => {
  return (
    <div>
        <Navbar/>
         <Hero />
        <BrandsLogo />
        <Services />
        <Testimonial />
        <BlogsComp /> 
        <Footer />
    </div>
  )
}
export default Home;