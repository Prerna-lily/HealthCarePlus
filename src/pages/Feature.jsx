import React ,{useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero1.jsx';
import BrandsLogo from "../components/BrandsLogo/BrandsLogo.jsx";
import Services from "../components/Services/Services2.jsx";

import Footer from "../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Feature = () => {
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in",
          delay: 100,
        });
        AOS.refresh();
      }, []);
  return (
    <div>
        <Navbar/>
       <Services/>
        <Footer />
    </div>
  )
}
export default Feature;