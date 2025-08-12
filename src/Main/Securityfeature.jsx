import React from "react";
import { HiShieldCheck, HiLightningBolt, HiCube, HiCog } from "react-icons/hi";

const FeatureCard = ({ title, description, Icon }) => {
  return (
    <div
      className="flex flex-col items-center text-center max-w-xs mx-auto p-6 bg-gradient-to-tr from-[#1F2937] to-[#111827] rounded-3xl
                 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer
                 transform hover:-translate-y-2"
    >
      <div
        className="mb-6 p-5 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-pink-500
                   text-white text-7xl flex items-center justify-center
                   shadow-lg hover:scale-110 transition-transform duration-500"
      >
        {Icon && <Icon />}
      </div>
      <h3 className="text-xl font-extrabold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

export default function Securityfeatures() {
  return (
    <div className="bg-[#121415] text-white p-8 md:p-16 rounded-[40px] shadow-2xl font-sans mx-auto max-w-7xl my-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div className="lg:pr-12">
          <p className="text-sm font-semibold text-orange-500 mb-2">Security</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Build smarter.<br />
            Stay secure.
          </h1>
          <p className="text-lg text-gray-400 mb-10">
            Let your teams create intelligent AI agents without compromising on compliance, data privacy,
            or system integrations.
          </p>
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors
                             text-white font-bold py-3 px-8 rounded-full shadow-lg">
            <span>Request a Demo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-center relative">
          <div
            className="w-full h-full bg-contain bg-center bg-no-repeat opacity-20"
            style={{ backgroundImage: `url('./images/back.png')` }}
          />
        </div>
   




      </div>

      <div className="w-full h-24"></div>

      {/* Feature cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <FeatureCard
          Icon={HiShieldCheck}
          title="The foundation for your AI success"
          description="Centralize your AI development with a secure, scalable platform designed for collaboration across every team."
        />
        <FeatureCard
          Icon={HiLightningBolt}
          title="Accelerate innovation, reduce time-to-value"
          description="Speed up your product cycles and ship AI-powered experiences quickly—without compromising on performance or flexibility."
        />
        <FeatureCard
          Icon={HiCube}
          title="Freedom to choose the best AI models"
          description="Stay flexible with a vendor-agnostic approach. Easily adapt to evolving LLM and NLU technologies without re-platforming."
        />
        <FeatureCard
          Icon={HiCog}
          title="Own every detail of your AI solution"
          description="Connect any data source or interface using secure, API-first integrations. Customize workflows using your preferred LLMs with full governance."
        />
      </div>
    </div>
  );
}

