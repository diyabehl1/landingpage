import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1E2227] text-gray-300 w-full relative overflow-hidden">
      {/* Pattern overlays */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:10px_10px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:10px_10px] rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
        
        {/* Logo & About */}
        <div className="md:col-span-2">
          <img src="./images/loggo.png" alt="Flourish Digital" className="h-16 mb-4" />
          <p className="text-sm leading-relaxed">
            At Flourish Digital, we offer a full suite< br></br>of digital marketing services,
            including < br></br>SEO, SEM, social media marketing,< br></br> content marketing, and email
            marketing.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/team" className="hover:text-white">Our Team</Link></li>
            <li><Link to="/career" className="hover:text-white">Career</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Product Links */}
        <div>
          <h4 className="text-white font-semibold  mb-4">Product</h4>
          <ul className="space-y-2">
            <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link to="/changelog" className="hover:text-white">Changelog</Link></li>
            <li><Link to="/status" className="hover:text-white">Status</Link></li>
            <li><Link to="/ecommerce" className="hover:text-white">Ecommerce</Link></li>
            <li><Link to="/consulting" className="hover:text-white">Consulting</Link></li>
          </ul>
        </div>

        {/* Sales Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Sales</h4>
          <ul className="space-y-2">
            <li><Link to="/overview" className="hover:text-white">Overview</Link></li>
            <li><Link to="/security" className="hover:text-white">Security</Link></li>
            <li><Link to="/contact-sales" className="hover:text-white">Contact Sales</Link></li>
          </ul>
        </div>

      </div>

      {/* Social Icons */}
      <div className="max-w-7xl mx-auto px-6 pb-8 flex gap-4 relative z-10">
        <Link to='/' className="text-gray-300 hover:text-white text-lg"><FaFacebookF /></Link>
         <Link to='/' className="text-gray-300 hover:text-white text-lg"><FaInstagram /></Link>
         <Link to='/' className="text-gray-300 hover:text-white text-lg"><FaYoutube /></Link>
         <Link to='/' className="text-gray-300 hover:text-white text-lg"><FaTwitter /></Link>

      </div>
    </footer>
  );
}
