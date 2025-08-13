
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import LogoCarousel from "./Logocarousal";
import TestimonialsSection from "./Testimonialsection";
import Securityfeatures from "./Securityfeature";
import Communitysection from "./Communitysection";


export default function Home() {
  return (
    <>

    <div className="bg-[#1E2227] text-white w-full  overflow-x-hidden mt-0">
      <section className=" w-full px-12 py-0  md:px-28 grid md:grid-cols-2 items-center gap-40 mt-10 relative">
        {/* Left Content */}
        <div className="text-center md:text-left mt-[-32px]">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight ">
            Custom Chatbots <br className="hidden sm:block" />
            That Speak Your <br className="hidden sm:block" />
            Brand&apos;s Language
          </h1>
          <p className="mt-4 text-gray-300 text-base md:text-lg max-w-lg mx-auto md:mx-0">
            Deliver intelligent AI chat and voice agents tailored for global
            customer experience.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/get-started"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-6 py-3 rounded-full text-white font-medium transition"
            >
              Get started free <ArrowRight size={18} />
            </Link>
            <Link
              to="/request-demo"
              className="border border-gray-500 px-6 py-3 rounded-full text-gray-300 hover:text-white hover:border-white transition"
            >
              Request a Demo
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center max-w-full">
          <img
            src="./images/main.png"
            alt="Flourish Digital App"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl overflow-x-hidden h-auto object-contain -mt-60"
          />
        </div>
      </section>
    
<div className="text-center px-6 mt-8 ">
  <h1 className="text-xl md:text-2xl font-extrabold leading-tight ">
    🚀 Join 10,000+ Businesses Worldwide Building Smart AI Chatbots with Flourish Digital
  </h1>
</div>

</div>


        {/* Logo Carousel */}
        <LogoCarousel />



       {/* Feature Sections */}
<div>
 <div className="bg-white font-sans w-full text-gray-900 py-16 px-20 md:px-60 flex flex-col  items-center ">

    <div className="container mx-auto w-full">
      {/* Parent flex with responsive gaps */}
      <div className="flex flex-col md:flex-row md:items-stretch  gap-y-12 md:gap-y-0 md:gap-x-14 lg:gap-x-34">
        
        {/* Left Column */}
        <div className="flex flex-col gap-y-8 max-w-md w-full flex-1 px-4 ">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Make every customer call feel personal with AI
          </h2>
          <p className="text-md text-gray-500">
            Build human-like voice assistants—test, train, and deploy
            with speed and confidence.
          </p>

          {/* Outer Box */}
          <div className="bg-[#1a1a1f] p-4 rounded-2xl shadow-xl border  border-gray-700 flex-1 flex ">
            {/* Inner Image */}
            <div className="bg-[#121215] rounded-2xl flex-1 relative overflow-hidden">
              <img
                src="./images/im2.png"
                alt="Voice Assistant"
                className="w-full h-full object-contain rounded-xl"
              />
              <div className="absolute top-0 left-0 w-full h-full"></div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-y-8 max-w-md  w-full flex-1 px-4 min-h-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Chat Agents with Advanced Customization
          </h2>
          <p className="text-md text-gray-500">
            Build AI-powered Chat Agents with deep functio and
            fully customizable interfaces—tailored to your brand.
          </p>

          {/* Outer Box */}
          <div className="bg-[#1a1a1f] p-4 rounded-3xl shadow-xl border border-gray-700 flex-1 flex min-h-0">
            {/* Inner Image */}
            <div className="bg-[#121215] rounded-2xl flex-1 relative overflow-hidden">
              <img
                src="./images/chat.png"
                alt="Chat Mockup"
                className="w-full h-full object-contain rounded-2xl"
              />
              <div className="absolute top-0 left-0 w-full h-full "></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>








              

        

           

        {/* Use Case Section */}
<div className="bg-white font-sans text-black min-h-screen py-20 px-6 md:px-16 flex flex-col items-center">
  <div className="container mx-auto max-w-5xl text-center mb-20">
<p className="text-lg font-semibold text-blue-600 mb-4 uppercase tracking-wide hover:text-blue-800 cursor-pointer">
  Use Case
</p>

    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
      Start smart with support, scale smarter
      <br className="hidden md:inline" />
      with endless AI possibilities.
    </h1>
    <p className="text-xl text-gray-700 max-w-3xl mx-auto">
      Confidently begin with support, then expand into every interaction.
    </p>
  </div>

  <div className="container mx-auto max-w-7xl">
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-16 lg:gap-24">
      
      
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-md w-full mb-12 lg:mb-0">
        <div className="w-28 h-28 rounded-lg mb-8 flex items-center justify-center shadow-md">
          <img
            src="./images/am.jpg"
            alt="AI Illustration"
            className="max-h-40 max-w-full object-cover"
          />
        </div>
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 leading-snug">
          70% fewer support tickets—
          <br className="hidden md:inline" />
          $425K saved post-launch
        </h2>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Flourish Digital’s AI solution helped a growing SaaS company
          handle Level 1 support across their entire product suite with
          ease.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white font-bold py-3 px-8 rounded-full shadow-lg">
          Read Case Study
        </button>
      </div>

      {/* Large Image */}
      <div className="relative flex flex-col items-center w-full max-w-lg  rounded-2xl p-8 ">
        <img
          src="./images/aim.png"
          alt="AI use case"
          className="w-full h-auto max-h-[400px] object-contain"
        />
      </div>

    </div>
  </div>
</div>

        {/* Other sections */}
        <TestimonialsSection />
        <Securityfeatures />
        <Communitysection />
        

        {/* CTA Section */}
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-[#2563EB] text-white rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:16px_16px] pointer-events-none"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Create smarter AI Agents for customer support and beyond
                </h2>
                <p className="mt-3 text-blue-100">
                  Let Flourish Digital help your team get started — talk to us
                  today.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    to="/start-trial"
                    className="bg-white text-black px-5 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition"
                  >
                    Start free trial <FaArrowRight />
                  </Link>

                  <Link
                    to="/request-demo"
                    className="bg-[#4B5563] text-white px-5 py-3 rounded-full hover:bg-gray-600 transition"
                  >
                    Request a Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
     
    </>
  );
}
