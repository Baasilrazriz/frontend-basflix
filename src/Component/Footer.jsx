import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 w-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-start text-lg">
          <div className="w-1/2 md:w-auto mb-6 md:mb-0">
            <p className="text-white mb-2">Questions? Call 1-844-505-2993</p>
            <ul className="space-y-2">
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">FAQ</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Investor Relations</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Buy Gift Cards</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Cookie Preferences</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Legal Notices</a></li>
            </ul>
          </div>
          <div className="w-1/2 md:w-auto mb-6 md:mb-0">
            <ul className="space-y-2">
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Help Center</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Jobs</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Ways to Watch</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Corporate Information</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Only on Netflix</a></li>
            </ul>
          </div>
          <div className="w-1/2 md:w-auto mb-6 md:mb-0">
            <ul className="space-y-2">
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Account</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Netflix Shop</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Redeem Gift Cards</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Terms of Use</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-1/2 md:w-auto">
            <ul className="space-y-2">
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Media Center</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Privacy</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Speed Test</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Ad Choices</a></li>
              <li className="hover:scale-105 transform transition-transform duration-200"><a href="#">Do Not Sell or Share Personal Information</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <select className="bg-black border border-gray-600 text-gray-400 py-2 px-4">
            <option>English</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
