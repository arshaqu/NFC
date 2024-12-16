import React from 'react';
import BlackCard from '../Assets/Black Card.png';
import WhiteCard from '../Assets/White Card.png';

function BusinessCard() {
  return (
    <div className="bg-black min-h-screen py-20 montserrat">
      <h1 style={{ color: 'gray' }} className="font-semibold lg:ml-[100px] text-white text-5xl lg:text-6xl ml-3">
        Difference between <br /> Business Card & NFC Business Card
      </h1>
      <div style={{ marginTop: '80px' }} className="h-screen bg-black flex items-center justify-center text-white">
        <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl">
          {/* Left Side Text */}
          <div className="md:w-1/2 text-center md:text-left px-4">
            <p className="lg:text-[25px] lg:ml-[-35px] montserrat">
              Technology allows users to make secure transactions, exchange digital content, and connect electronic devices with a touch. NFC transmissions are short range (from a touch to a few centimetres) and require the devices to be in close proximity.
            </p>
            <p className="lg:text-[25px] mt-5 lg:ml-[-35px]">
              Technology allows users to make secure transactions, exchange digital content, and connect electronic devices with a touch. NFC transmissions are short range (from a touch to a few centimetres) and require the devices to be in close proximity.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center items-center px-4 mt-8 md:mt-0 lg:ml-[135px]">
          <div className="relative w-[380px] h-[450px] lg:w-[500px] lg:h-[450px]  sm:w-[300px] sm:h-[350px] hover:rotate-y-180 duration-500 transform-style-preserve-3d">
            <img
                src={BlackCard}
                style={{ overflow: 'hidden' }}
                alt="NFC Business Card"
                className="absolute backface-hidden w-full h-full object-contain shadow-xl"
            />
            <img
                src={WhiteCard}
                style={{ overflow: 'hidden' }}
                alt="Standard Business Card"
                className="absolute backface-hidden w-full h-full object-contain shadow-xl rotate-y-180"
            />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
