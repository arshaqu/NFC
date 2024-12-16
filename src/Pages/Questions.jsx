import React from 'react'
import testimonals from '../Assets/testimonials.png'

function Questions() {
  return (
    <div>
      <div className="mt-10 bg-black text-white flex flex-col items-center justify-center px-6 ">
  {/* Heading */}
  <h1 style={{color:'#d19d2a',fontWeight:'bolder'}} className="text-4xl md:text-6xl font-border text-yellow-500 mb-16 text-center montserrat">
    Frequently Asked Questions
  </h1>

  {/* FAQ Items */}
  <div style={{backgroundColor:'black'}} className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-[60px] w-full  max-w-6xl">
    <div className="flex items-center space-x-6 ">
      <div style={{color:'#d19d2a' , borderColor:'#d19d2a'}} className="w-11 h-11 flex items-center justify-center border-2 border-yellow-500 lg:ml-[-140px] ">
        <span style={{color:'#d19d2a' , borderColor:'#d19d2a'}} className="  text-2xl m-3">&#9654;</span>
      </div>
      <p className="text-2xl comfortaa">How does it Work?</p>
    </div>

    <div className="flex items-center space-x-6">
      <div style={{color:'#d19d2a' , borderColor:'#d19d2a'}} className="w-11 h-11 flex items-center justify-center border-2  ">
        <span style={{color:'#d19d2a' , borderColor:'#d19d2a'}} className="text-yellow-500 font-bold text-2xl m-3">&#9654;</span>
      </div>
      <p  className="text-2xl leading-relaxed comfortaa">How can I change my profile details?</p>
    </div>

    <div className="flex items-center space-x-6">
      <div style={{color:'#d19d2a' , borderColor:'#d19d2a'}} className="w-11 h-11 flex items-center justify-center border-2 border-yellow-500 lg:ml-[-140px]">
        <span style={{color:'#d19d2a' , borderColor:'#d19d2a'}} className="text-yellow-500 font-bold text-2xl m-3">&#9654;</span>
      </div>
      <p className="text-2xl leading-relaxed comfortaa">Are NFC products secure?</p>
    </div>

    <div className="flex items-center space-x-6">
      <div style={{color:'#d19d2a' , borderColor:'#d19d2a'}} className="w-11 h-11 flex items-center justify-center border-2 border-red-500  ">
        <span style={{color:'#d19d2a' , borderColor:'#d19d2a'}} className="text-red-500 font-bold text-2xl m-3">&#9654;</span>
      </div>
      <p className="text-2xl leading-relaxed comfortaa">How to activate NFC on Android and iPhone?</p>
    </div>

    <div className="flex items-center space-x-6">
      <div style={{color:'#d19d2a' , borderColor:'#d19d2a'}} className="w-11 h-11 flex items-center justify-center border-2 border-yellow-500 lg:ml-[-140px] ">
        <span style={{color:'#d19d2a' , borderColor:'#d19d2a'}} className=" text-yellow-500 font-bold text-2xl m-3">&#9654;</span>
      </div>
      <p className="lg:ml-[-140px] text-2xl  leading-relaxed comfortaa">How to use NFC business cards in devices that do not support NFC technology?</p>
    </div>

    <div className="flex items-center space-x-6">
      <div style={{color:'#d19d2a' , borderColor:'#d19d2a'}} className="w-11 h-11 flex items-center justify-center border-2 border-yellow-500 ">
        <span style={{color:'#d19d2a' , borderColor:'#d19d2a'}} className="text-yellow-500 font-bold text-2xl m-3">&#9654;</span>
      </div>
      <p className="text-2xl leading-relaxed comfortaa">Does a smartphone need any app to use this technology?</p>
    </div>
  </div>


          {/* Box Section */}

  <div className="w-full bg-black flex items-center justify-center py-10 lg:mt-[180px]">
      <div className="w-full max-w-screen-xl bg-white grid grid-cols-1 md:grid-cols-2 gap-16 p-16 shadow-lg">
        {/* Left Section */}
        <div className="flex flex-col justify-center montserrat">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 ">
            Get started with
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            NFC Connect
          </h2>
        </div>
        
        {/* Right Section */}
        <div className="bg-black p-10 shadow-md">
          {/* Product Orientation */}
          <div className="mb-6">
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


              <div className="mb-6">
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
        </div>
      </div>
    </div>

                </div>
                <img style={{width:'100%'}} className='mt-3' src={testimonals} />


</div>

  )
}

export default Questions
