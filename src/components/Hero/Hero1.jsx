import React from "react";
import healthHero from "../../assets/website/h1.png"; // Replace with a relevant doctor image


const Hero = () => {
    return (
      <div className="dark:bg-gray-950 dark:text-white duration-300 ">
        <div className="container min-h-[620px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
            {/* Image section */}
            <div data-aos="zoom-in" className="order-1 sm:order-2 relative ">
              <img
                src={healthHero}
                alt=""
                className="w-full sm:max-w-[280px] md:max-w-[430px] rounded-xl"
              />
              <div
                data-aos="slide-right"
                className="absolute -bottom-5 right-0 sm:-right-8 px-4 py-2 rounded-xl
                 bg-white dark:bg-gray-900 dark:text-white shadow-md"
              >
                <p className="text-gray-500 text-sm ">⭐Trusted</p>
                <h1 className="font-bold">
                  100+ <span className="font-normal">Doctors</span>
                </h1>
              </div>
            </div>
  
            {/* Text section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
            <h1
  data-aos="fade-up"
  className="text-4xl sm:text-5xl font-semibold"
  style={{ lineHeight: 1.2 }}
>
  Welcome to <span className="text-primary">HealthCare+</span>
</h1>
<p data-aos="fade-up" data-aos-delay="300">
  HealthCare+ is dedicated to providing world-class healthcare services. 
  Our mission is to combine cutting-edge technology with compassionate care 
  to improve lives and make healthcare accessible to all.
</p>

              <p data-aos="fade-up" data-aos-delay="300">
                We believe in providing quality healthcare that is accessible to everyone, with a focus on delivering the best possible patient experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;