import React from 'react';
import Card from '../Assets/Card vibe .png';
import visiting from '../Assets/vistingcard.png'
import customers from '../Assets/customers.png'
import connect from '../Assets/connect.png'

function Section2() {
  return (
    <div className="bg-black text-white p-8 rounded-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className="flex-shrink-0 lg:ml-[200px] ">
        <h1 className='montserrat lg:ml-[45px]'
            style={{
              fontSize: '4rem',
              fontWeight: '700',
              marginBottom: '10px',
              color:'gray'
            }}
          >
            NFC Card 
          </h1>
          <img src={Card} alt="NFC Card" className="w-72 h-96 lg:h-[410px] lg:w-[382px]" />
        </div>

        {/* Text Section */}
        <div className="flex-1 montserrat">
  <h2 style={{fontWeight:'500'}} className="text-lg  mb-4 mt-24 lg:ml-[150px] lg:mt-[200px] lg:text-2xl">
    NEAR FIELD COMMUNICATION
  </h2>
  <p className="text-white lg:w-[700px] font-normal lg:ml-[150px] lg:text-lg">
    Technology allows users to make secure transactions, exchange digital content, and connect electronic devices with a touch. NFC transmissions are short range (from a touch to a few centimetres) and require the devices to be in close proximity.
  </p>
</div>

      </div>
      <div className="flex justify-center ">
            <a
            onMouseEnter={(e) => (e.target.style.color = '#b88720')} // Hover color
            onMouseLeave={(e) => (e.target.style.color = '#FFFF')} // Original color
                href="# "
                className="inline-flex text-sm font-medium text-white hover:underline montserrat"
                
                     >
                    Learn More <span  className="ml-2">→</span>
                </a>
                </div>


      {/* Icons Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-20 lg:mt-40 lg:space-x-96 space-y-8 lg:space-y-0">
  <div className="text-center space-y-4 lg:space-y-8">
    <img 
      src={visiting} 
      alt="Your visiting card" 
      className="w-20 h-24 lg:w-24 lg:h-24 mb-2 mx-auto" 
    />
    <h1 className="text-lg lg:text-2xl font-semibold">Your visiting card</h1>
    <p className="lg:text-2x2 font-thin lg:w-[250px] mx-auto">
      Put your contact info directly onto customers’ devices with your NFC smart visiting card.
    </p>
  </div>
  <div className="text-center space-y-4 lg:space-y-8">
    <img 
      src={customers} 
      alt="Your customers" 
      className="w-16 h-20 lg:w-16 lg:h-24 mb-2 mx-auto" 
    />
    <p className="text-lg lg:text-2xl font-semibold">Your customers</p>
    <p className="lg:text-2x2 font-thin lg:w-[250px] mx-auto">
      Put your contact info directly onto customers’ devices with your NFC smart visiting card.
    </p>
  </div>
  <div className="text-center space-y-4 lg:space-y-8">
    <img 
      src={connect} 
      alt="Your NFC Connect" 
      className="w-20 h-20 lg:w-24 lg:h-24 mb-2 mx-auto" 
    />
    <p className="text-lg lg:text-2xl font-semibold">Your NFC Connect</p>
    <p className="lg:text-2x2 font-thin lg:w-[250px] mx-auto">
      Put your contact info directly onto customers’ devices with your NFC smart visiting card.
    </p>
  </div>
</div>




    </div>
  );
}

export default Section2;
