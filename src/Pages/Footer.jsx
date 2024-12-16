import React from 'react'

function Footer() {
  return (
    <div>
       <footer className="bg-black text-white py-8 montserrat text-center lg:text-start">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Column 1: Let us help */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Let us help</h2>
          <ul className="space-y-2">
            <li>My Account</li>
            <li>Contact us</li>
            <li>All Products</li>
            <li>Bulk Order Inquiry</li>
          </ul>
        </div>

        {/* Column 2: Our Company */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Our Company</h2>
          <ul className="space-y-2">
            <li>Careers</li>
            <li>For Investors</li>
            <li>For Media</li>
            <li>Sustainability</li>
            <li>Annual Returns</li>
            <li>Corporate Social Responsibility</li>
          </ul>
        </div>

        {/* Column 3: Our Policies */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Our Policies</h2>
          <ul className="space-y-2">
            <li>Terms and Conditions</li>
            <li>Privacy and Cookie Policy</li>
            <li>Copyright matters</li>
            <li>Patents & trademarks</li>
          </ul>
          {/* Social Icons */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Follow us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white text-2xl">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" className="text-white text-2xl">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="text-white text-2xl">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="text-white text-2xl">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
