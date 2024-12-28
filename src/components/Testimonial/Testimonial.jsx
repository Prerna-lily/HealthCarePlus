import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Dr. John Smith - Cardiologist, New York",
    text: "Working with patients every day has been a fulfilling experience. It’s all about improving lives and bringing smiles to families.",
    img: "https://images.pexels.com/photos/3279196/pexels-photo-3279196.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    name: "Dr. Emily Davis - Endocrinologist, Los Angeles",
    text: "Helping children recover quickly and watching them thrive has been the most rewarding part of my career.",
    img: "https://images.pexels.com/photos/4085187/pexels-photo-4085187.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    name: "Dr. Michael Lee - Neurosurgeon, Chicago",
    text: "The human brain is a fascinating organ, and contributing to its health and recovery is a privilege I cherish.",
    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    name: "Dr. Noah Johnson - Oncologist, Houston",
    text: "Supporting patients in their fight against cancer is more than a job—it's a mission that keeps me going every day.",
    img: "https://images.pexels.com/photos/5452200/pexels-photo-5452200.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                      <img
                        src={img}
                        alt=""
                        className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                      />
                      <div className="space-y-4">
                        <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl font-bold">{name}</h1>
                      </div>
                      <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
