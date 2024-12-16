import React from "react";
import Business from '../Assets/Business.png'
import Callnow from '../Assets/Callnow.png';
import AddContact from '../Assets/AddContact.png'
import WebsiteLink from '../Assets/Website.png'
import Social from '../Assets/Social.png'


function Options() {
  return (
    <div className="bg-black min-h-screen py-20 montserrat ">
      <h1
        className="lg:ml-[100px] text-white text-6xl lg:text-7xl font-500"
        style={{ color: "gray",fontWeight:'600' }}
      >
        NFC Connect Options
      </h1>

      <div className="bg-black py-6 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:ml-[100px] mt-[100px]">
        {/* Business Info */}
        <div className="flex items-center">
          <img src={Business} className="text-yellow-500 mr-4" />
          <div>
            <h3 className="text-white text-4xl ml-2">Business Info</h3>
            <p className="text-white text-2xl font-thin ml-2">Important info about<br/> you or your business</p>
          </div>
        </div>

        {/* Call Now Button */}
        <div className="flex items-center mt-3">
          <img src={Callnow} className="text-yellow-500 mr-4" />
          <div>
          <h3 className="text-4xl ml-2">
            <span style={{color:'#d19d2a'}} className="">Call Now</span>{' '}
            <span className="text-white">Button</span>
          </h3>

            <p className="text-white text-2xl font-thin ml-2"> A tappable button to 
            call you</p>
          </div>
        </div>

        {/* Add Contact Button */}
        <div className="flex items-center mt-3">
          <img src={AddContact} className="text-yellow-500 mr-4" />
          <div>
          <h3 className="text-4xl ml-2">
            <span style={{color:'#d19d2a'}} className="">Add Contact</span>{' '}
            <span className="text-white">Button</span>
          </h3>
            <p className="text-white text-2xl font-thin ml-2">Important info about you or your business</p>
          </div>
        </div>
      </div>
    </div>


    <div className="bg-black py-6 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:ml-[100px] lg:mt-[120px] ">
        {/* Business Info */}
        <div className="flex items-center mt-3">
          <img src={WebsiteLink} className="text-yellow-500 mr-4" />
          <div>
            <h3 className="text-white text-4xl ml-2"> Website link</h3>
            <p className="text-white text-2xl font-thin ml-2"> A link to your existing 
            <br/>site</p>
          </div>
        </div>

        {/* Call Now Button */}
        <div className="flex items-center">
          <img src={Social} className="text-yellow-500 mr-4 mt-3" />
          <div>
            <h3 className="text-white text-4xl ml-2"> Social links</h3>
            <p className="text-white text-2xl font-thin ml-2"> A tappable button to <br/>
            call you</p>
          </div>
        </div>

        {/* Add Contact Button */}
        <div className="flex items-center mt-3">
          <img src={WebsiteLink} className="text-yellow-500 mr-4" />
          <div>
            <h3 className="text-white text-4xl ml-2">Custom Link</h3>
            <p className="text-white text-2xl font-thin ml-2">A link to any site you 
            <br/> want</p>
          </div>
        </div>
      </div>
    </div>


    </div>
  );
}

export default Options;
