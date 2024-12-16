import React from "react";
import Transperant from '../Assets/Transparent card.png'


function Connect() {
  return (
    <div className="bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12">
      {/* Left Section */}
      <div className="md:w-1/2 flex justify-center">
     <div className="lg:ml-[-265px]"> <h1 style={{fontWeight:'500',color:'gray'}} className="lg:text-[65px] text-[45px]"> Scan & connect</h1> 
        <img
          src={Transperant}
          alt="NFC Card"
          className="w-85 md:w-96 object-cover mt-[85px]"
        />
         </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 montserrat">
      <h1 style={{color:'gray'}} className="text-3xl md:text-4xl font-semibold  mb-4 lg:text-5xl text-5xl font-[800]">
        NFC Chip
        </h1>

        <p className="text-gray-300 lg:text-2xl text-2xl md:text-base mb-6 lg:font-[280] ">
          Customers use their phone to scan a chip embedded in your smart
          contactless business card. Their phone gets a notification with the
          link to your VistaConnect experience.
        </p>
        <h2 style={{fontSize:'40px'}} className="lg:text-2xl font-semibold mb-4 lg:mt-[65px] ">
          NFC visiting card features
        </h2>
        <ul style={{fontSize:'25px'}} className="text-gray-300 text-sm md:text-base list-none space-y-2 mb-6 ">
          <li  className="flex items-center lg:mt-[65px]">
            <span  className="text-yellow-400 mr-2 ">⭐</span> Durable plastic
            material
          </li>
          <li style={{marginTop:'25px'}} className="flex items-center ">
            <span className="text-yellow-400 mr-2 ">⭐</span> Subtle & elegant
            design
          </li>
          <li style={{marginTop:'25px'}} className="flex items-center ">
            <span className="text-yellow-400 mr-2 ">⭐</span> Increasingly popular
          </li>
        </ul>
        <button style={{color:'white',fontSize:'28px',backgroundColor:'#d19d2a'}} className=" text-black px-16 py-3 rounded-md font-semibold montserrat">
          Browse NFC Card
        </button>
      </div>
    </div>
  );
}

export default Connect;
