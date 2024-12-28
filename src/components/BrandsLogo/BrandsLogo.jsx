import React from "react";
import NABHLogo from "../../assets/brands/im1.png"; // Example: National Accreditation Board for Hospitals logo
import WHOLogo from "../../assets/brands/im2.png"; // World Health Organization logo
import RedCrossLogo from "../../assets/brands/im3.png"; // Red Cross logo
import ISOLogo from "../../assets/brands/im4.png"; // ISO Certification logo
import JCIAccreditedLogo from "../../assets/brands/im5.png"; // Joint Commission International logo

const BrandsLogo = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white">
        <div className="container py-12">
          <h1 className="text-center font-semibold text-2xl">
            Trusted by Leading Healthcare Organizations
          </h1>
          <div className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-6">
            <div className="flex flex-col items-center">
              <img src={NABHLogo} alt="NABH Accredited" className="w-20 h-auto" />
              <p className="text-sm mt-2">NABH Accredited</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={WHOLogo} alt="World Health Organization" className="w-20 h-auto" />
              <p className="text-sm mt-2">WHO Compliant</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={RedCrossLogo} alt="Red Cross Partner" className="w-20 h-auto" />
              <p className="text-sm mt-2">Red Cross Partner</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={ISOLogo} alt="ISO Certified" className="w-20 h-auto" />
              <p className="text-sm mt-2">ISO Certified</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={JCIAccreditedLogo} alt="JCI Accredited" className="w-20 h-auto" />
              <p className="text-sm mt-2">JCI Accredited</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandsLogo;
