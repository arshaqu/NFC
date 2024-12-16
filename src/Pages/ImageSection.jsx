import React from 'react';
import Setup1 from '../Assets/Setup1.png';
import Setup2 from '../Assets/Setup2.png';
import Setup3 from '../Assets/Setup3.png';
import Setup4 from '../Assets/Setup4.png';

function ImageSection() {
  return (
    <div className="bg-black min-h-screen py-20 montserrat">
      <h1 style={{ color: 'gray' }} className="font-semibold lg:ml-[100px] text-white text-5xl lg:text-6xl ml-3">
        NFC Connect takes <br /> minutes to set up
      </h1>
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:px-32 ">
        {/* Image Card 1 */}
        <div className="relative group transition-all lg:ml-[120px] lg:mt-[100px] lg:mx-[120px] duration-300 cursor-pointer m-3 lg:mt-[120px]">
  <img
    className="rounded-lg w-full"
    src={Setup1}
    alt="Create your online experience"
  />
  {/* This div contains the text that will be hidden on hover */}
  <div className="absolute text-5xl px-4 text-lg text-white bottom-6 montserrat opacity-100 group-hover:opacity-0 transition-opacity duration-300">
    <h1 className="text-start arrows text-8xl" style={{ color: '#d19d2a' }}>01</h1>
    <p className='text-4xl' style={{ color: '#d19d2a' }}>Create your smart <br /> visiting card</p>
  </div>
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  </div>
  <div className="absolute px-4 text-5xl text-lg text-white bottom-6 group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:text-center group-hover:opacity-100 opacity-0 transition-all duration-400">
    <h1 className="text-start arrows text-1xl" style={{ color: '#d19d2a',fontSize:'62px' }}>01</h1>
    <p className='Montserrat mt-2' style={{ color: '#d19d2a',fontSize:'32px',width:'350px',textAlign:'start' }}>Create your smart<br/>visiting Card</p>
    <p className='mt-3' style={{ color: '#d19d2a',fontSize:'22px',width:'350px',color:'white',textAlign:"start"  }}>Customize one of our templates with <br/>your own text and images.</p>
  </div>
</div>


        {/* Image Card 2 */}
        <div className="relative group transition-all lg:ml-[-50px] lg:mt-[120px] lg:mx-[290px] duration-300 cursor-pointer m-3">
  <img
    className="rounded-lg w-full"
    src={Setup2}
    alt="Create your online experience"
  />
  {/* This div contains the text that will be hidden on hover */}
  <div className="absolute text-5xl px-4 text-lg text-white bottom-6 montserrat opacity-100 group-hover:opacity-0 transition-opacity duration-300">
    <h1  className="text-start arrows text-8xl" style={{ color: '#d19d2a' }}>02</h1>
    <p className='text-4xl' style={{ color: '#d19d2a' }}> Create your online <br />experience</p>
  </div>
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  </div>
  <div className="absolute px-4 text-5xl text-lg text-white bottom-6 group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:text-center group-hover:opacity-100 opacity-0 transition-all duration-400">
  <h1 className="text-start arrows text-1xl" style={{ color: '#d19d2a',fontSize:'62px' }}>02</h1>
    <p className='Montserrat mt-3' style={{ color: '#d19d2a',fontSize:'32px',width:'350px',textAlign:'start' }}>Create your Online<br/>Experience</p>
    <p className='mt-3' style={{ color: '#d19d2a',fontSize:'22px',width:'350px',color:'white' ,textAlign:'start' }}>Choose what customers will see (or do)<br/> when  they scan your NFC enabled business card.</p>
  </div>
</div>




        {/* Image Card 3 */}
        <div className="relative group transition-all lg:ml-[120px] lg:mt-[100px] lg:mx-[120px] duration-300 cursor-pointer m-3 lg:mt-[120px]">
  <img
    className="rounded-lg w-full"
    src={Setup3}
    alt="Create your online experience"
  />
  {/* This div contains the text that will be hidden on hover */}
  <div className="absolute text-5xl px-4 text-lg text-white bottom-6 montserrat opacity-100 group-hover:opacity-0 transition-opacity duration-300">
    <h1 className="text-start arrows text-8xl" style={{ color: '#d19d2a' }}>03</h1>
    <p className='text-4xl' style={{ color: '#d19d2a' }}>Place Your Order</p>
  </div>
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  </div>
  <div className="absolute px-4 text-5xl text-lg text-white bottom-6 group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:text-center group-hover:opacity-100 opacity-0 transition-all duration-400">
  <h1 className="text-start arrows text-1xl" style={{ color: '#d19d2a',fontSize:'62px' }}>03</h1>
    <p className='Montserrat mt-3' style={{ color: '#d19d2a',fontSize:'35px',width:'350px',textAlign:'start' }}>Place Your Order</p>
    <p className='mt-3' style={{ color: '#d19d2a',fontSize:'23px',width:'350px',color:'white',textAlign:'start'  }}>There’s no extra fee for VistaConnect,<br/> and you can update it anytime.</p>
  </div>
</div>


        {/* Image Card 4 */}
        <div className="relative group transition-all lg:ml-[-50px] lg:mt-[120px] lg:mx-[290px] duration-300 cursor-pointer m-3">
  <img
    className="rounded-lg w-full"
    src={Setup4}
    alt="Create your online experience"
  />
  {/* This div contains the text that will be hidden on hover */}
  <div className="absolute text-5xl px-4 text-lg text-white bottom-6 montserrat opacity-100 group-hover:opacity-0 transition-opacity duration-300">
    <h1 className="text-start arrows text-8xl" style={{ color: '#d19d2a' }}>04</h1>
    <p className='text-4xl' style={{ color: '#d19d2a' }}>Activate NFC Connect</p>
  </div>
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  </div>
  <div className="absolute px-4 text-5xl text-lg text-white bottom-6 group-hover:top-1/2 group-hover:left-1/2 group-hover:transform group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:text-center group-hover:opacity-100 opacity-0 transition-all duration-400">
  <h1 className="text-start arrows text-1xl" style={{ color: '#d19d2a',fontSize:'62px',textAlign:'start' }}>04</h1>
    <p className='Montserrat mt-3' style={{ color: '#d19d2a',fontSize:'35px',width:'350px',textAlign:'start' }}>Activate NFC Connect</p>
    <p className='mt-3' style={{ color: '#d19d2a',fontSize:'23px',width:'350px',color:'white',textAlign:'start'  }}>Be sure to publish your web<br/> experience via your Workspace.</p>
  </div>
</div>
      </div>
    </div>
  );
}

export default ImageSection;
