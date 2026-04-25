import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-1 h-6 bg-white"></div>
              <div className="w-1 h-6 bg-gray-400"></div>
              <div className="w-1 h-6 bg-gray-600"></div>
            </div>
            <h2 className="text-xl font-bold tracking-wide">Sahil</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            High level experience in web design and development knowledge, producing quality work.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Use Cases</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white transition cursor-pointer">Web-designers</li>
            <li className="hover:text-white transition cursor-pointer">Marketers</li>
            <li className="hover:text-white transition cursor-pointer">Small Business</li>
            <li className="hover:text-white transition cursor-pointer">Website Builder</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Company</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white transition cursor-pointer">About Us</li>
            <li className="hover:text-white transition cursor-pointer">Careers</li>
            <li className="hover:text-white transition cursor-pointer">FAQs</li>
            <li className="hover:text-white transition cursor-pointer">Teams</li>
            <li className="hover:text-white transition cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Follow us</h3>
          <div className="flex gap-6 text-2xl">
            <i className="fa-brands fa-facebook hover:text-blue-500 transition cursor-pointer"></i>
            <i className="fa-brands fa-twitter hover:text-cyan-400 transition cursor-pointer"></i>
            <i className="fa-brands fa-instagram hover:text-pink-500 transition cursor-pointer"></i>
            <i className="fa-brands fa-linkedin hover:text-blue-700 transition cursor-pointer"></i>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-900 text-center text-gray-500 text-xs">
        © 2026 Sahil. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;