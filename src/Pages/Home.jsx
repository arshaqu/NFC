import React from 'react';
import Navbar from '../Components/Navbar';
import image1 from '../Assets/Golden card.png';
import Section2 from './Section2';

function Home() {
  return (
    <div style={{ backgroundColor: '#000000', width: '100%', height: 'auto', padding: 0, margin: 0 }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div
      className='lg:ml-[150px]'
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px',
          color: '#FFFFFF',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {/* Text Section */}
        <div
          style={{
            flex: 1,
            padding: '20px',
          }}
        >
          <h1
            style={{
              fontSize: '5rem',
              fontWeight: '800',
              marginBottom: '10px',
            }}
          >
            NFC Card <br /> Design.
          </h1>
          <p
          className=''
            style={{
              fontSize: '1rem',
              lineHeight: '1.5',
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam.
          </p>

          {/* Dropdowns and Button Section */}
          <div className="bg-black flex flex-col text-white font-sans mt-6">
            {/* Card Design Section */}
            <div className="w-full max-w-md">
              {/* Dropdowns */}
              <div className="mb-4">
          <select
            style={{backgroundColor:'white',color:'black',fontWeight:600}}
            className="w-full h-[60px] bg-black text-white border  border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-yellow-500 montserrat  "
            defaultValue="" // Ensures the placeholder is selected by default
          >
            <option  value="" disabled>
              Product Orientation
            </option>
            <option>Horizontal</option>
            <option>Vertical</option>
            <option>3 (700.00/unit)</option>
          </select>
        </div>


              <div className="mb-4">
  <select
  style={{backgroundColor:'white',color:'black' ,fontWeight:600}}
    className="w-full h-[60px]  bg-black text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-yellow-500 montserrat"
    defaultValue="" // Ensures the placeholder is selected by default
  >
    <option value="" disabled>
      Quantity
    </option>
    <option>1 (750.00/unit)</option>
    <option>2 (725.00/unit)</option>
    <option>3 (700.00/unit)</option>
  </select>
</div>


              {/* Browse Designs Button */}
              <button
                style={{
                  backgroundColor: '#d19d2a',fontWeight:600
                }}
                className="w-full h-[60px] font-bold text-black rounded-md py-3 transition duration-300 montserrat"
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#b88720')} // Hover color
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#d19d2a')} // Original color
              >
                Browse Designs
              </button>


              {/* Pricing and Details */}
              <p className="text-sm mt-4 text-gray-400 montserrat">
                1 starting at ₹750.00 <br />
                VistaConnect included free of charge
              </p>

              {/* Learn More Link */}
              <a
                href="# "
                className="inline-flex items-center text-sm font-medium text-white mt-6 hover:underline montserrat"
              >
                Learn More <span className="ml-2 ">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <img
          className='lg:ml-[-100px]'
            src={image1}
            alt="NFC Card"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              marginTop: '30px', // Adjust to align with H1
            }}
          />
        </div>
      </div>
              <Section2/>
      {/* Responsive Media Query */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="flex-direction: row"] {
              flex-direction: column !important;
              justify-content: center !important;
            }
            div[style*="padding: 20px"] {
              padding: 10px !important;
            }
          }
          @media (max-width: 480px) {
            h1 {
              font-size: 2rem !important;
            }
            p {
              font-size: 0.9rem !important;
            }
            img {
              margin-top: 10px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
