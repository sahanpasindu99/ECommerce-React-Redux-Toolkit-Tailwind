import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaGooglePlusG,
  FaInstagram,
} from 'react-icons/fa';

// Example: Payment method icons as image imports
import visa from '../assets/Payment-icons/visa.png'; // Replace with actual paths to your images
import mastercard from '../assets/Payment-icons/mastercard.webp';
import jcb from '../assets/Payment-icons/jcb.webp';
import amex from '../assets/Payment-icons/american_express.webp';
import paypal from '../assets/Payment-icons/paypal.webp';
import googlepay from '../assets/Payment-icons/gpay.webp';
// import ideal from '../assets/Payment-icons/ideal.webp';
import blik from '../assets/Payment-icons/blik.webp';
import klarna from '../assets/Payment-icons/Klarna.webp';
import bancontact from '../assets/Payment-icons/Bancontact.webp';
import przelewy24 from '../assets/Payment-icons/prizelewy24.webp';
import payu from '../assets/Payment-icons/Payu.webp';
import applepay from '../assets/Payment-icons/applepay.webp';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div className="col-span-1">
  <h2 className="text-white font-semibold text-md md:text-lg ">SHOPEELAND</h2>

  {/* Replaced Content with New Options */}
  <ul className="mt-4 space-y-2">
    <li><a href="#" className="text-gray-400 hover:text-white">Customer service</a></li>
    <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
    <li><a href="#" className="text-gray-400 hover:text-white">Transaction Services Agreement for non-EU/UK Consumers</a></li>
    <li><a href="#" className="text-gray-400 hover:text-white">Terms and Conditions for EU/EEA/UK Consumers (Transactions)</a></li>
    <li><a href="#" className="text-gray-400 hover:text-white">Take our feedback survey</a></li>
  </ul>
</div>


        {/* Navigation Columns */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-white text-sm md:text-lg font-semibold">Shopping with us</h3>
          <ul className="mt-4 space-y-1">
            <li><a href="#" className="hover:text-white">Making payments</a></li>
            <li><a href="#" className="hover:text-white">Buyer protection</a></li>
            <li><a href="#" className="hover:text-white">Delivery options</a></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h3 className="text-white text-sm md:text-lg  font-semibold">Services</h3>
          <ul className="mt-4 space-y-1">
            <li><a href="#" className="hover:text-white">Products</a></li>
            <li><a href="#" className="hover:text-white">Publishing</a></li>
            <li><a href="#" className="hover:text-white">Solutions</a></li>
          </ul>
        </div>

        {/* Pay With Section */}
        <div className="col-span-2">
          <h3 className="text-white text-sm md:text-lg  font-semibold">Pay with</h3>
          <div className="flex flex-wrap mt-4 gap-4">
            <img src={visa} alt="Visa" className="h-8" />
            <img src={mastercard} alt="MasterCard" className="h-8" />
            <img src={jcb} alt="JCB" className="h-8" />
            <img src={amex} alt="American Express" className="h-8" />
            <img src={paypal} alt="PayPal" className="h-8" />
            <img src={googlepay} alt="Google Pay" className="h-8" />
            {/* <img src={ideal} alt="iDEAL" className="h-8" /> */}
            <img src={blik} alt="Blik" className="h-8" />
            <img src={klarna} alt="Klarna" className="h-8" />
            <img src={bancontact} alt="Bancontact" className="h-8" />
            <img src={przelewy24} alt="Przelewy24" className="h-8" />
            <img src={payu} alt="PayU" className="h-8" />
            <img src={applepay} alt="Apple Pay" className="h-8" />
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="col-span-1">
          <h3 className="text-white font-semibold">FOLLOW</h3>
          <div className="flex mt-2 space-x-4">
            <FaTwitter className="text-xl hover:text-white cursor-pointer" />
            <FaFacebookF className="text-xl hover:text-white cursor-pointer" />
            <FaYoutube className="text-xl hover:text-white cursor-pointer" />
            <FaPinterestP className="text-xl hover:text-white cursor-pointer" />
            <FaGooglePlusG className="text-xl hover:text-white cursor-pointer" />
            <FaInstagram className="text-xl hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Footer Links */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between text-sm">
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
          <div className="mt-4 md:mt-0">
            <p>Copyright 2024 © Shopeeland E-Commerce</p>
            <p>Website by Roman</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
