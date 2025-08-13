import React from 'react';

const CommunityListItem = ({ icon, title, description }) => {
  return (
    <div className="flex items-start space-x-4 mb-6">
      <div className="w-8 h-8 flex items-center justify-center text-blue-600 text-xl mt-1 select-none">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default function Communitysection() {
  return (
    <div className="bg-white font-sans text-gray-900 py-16 px-4 md:px-16 flex flex-col items-center">
      <div className="container mx-auto max-w-3xl text-center mb-16">
        <p className="text-sm font-semibold text-blue-600 uppercase mb-4  tracking-wide hover:text-blue-800 cursor-pointer">
          Community
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          500,000+ Developers. <br /> One Mission — Smarter AI.
        </h1>
        <p className="text-xl text-gray-700">
          Connect with other builders, share agent functions, and learn how to create advanced AI automations.
        </p>
      </div>

      <div className="mb-16">
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white font-bold py-3 px-6 rounded-full">
          <span>Start free trial</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <CommunityListItem 
              icon="👩‍💻"
              title="Work with Certified Flourish Experts"
              description="Connect with trusted experts to design and launch your next AI chatbot or voice solution with confidence."
            />
            <CommunityListItem 
              icon="🌐"
              title="Join the Flourish Community"
              description="Be a part of our fast-growing global network of chatbot builders, voice designers, and automation enthusiasts."
            />
            <CommunityListItem 
              icon="🚀"
              title="Launch Faster with Ready Templates"
              description="Kickstart your project using professionally designed chatbot templates tailored for a wide range of industries and goals."
            />
          </div>
          <div>
            <CommunityListItem 
              icon="📚"
              title="Explore Expert Resources"
              description="Dive into curated resources, playbooks, and tips shared by top creators in the Flourish Digital ecosystem."
            />
            <CommunityListItem 
              icon="📝"
              title="The Flourish Blog"
              description="Read insights, trends, and how-tos for designers, developers, and forward-thinkers shaping the AI experience."
            />
            <CommunityListItem 
              icon="🤖"
              title="Build AI Agents for Customer Success"
              description="Design AI-driven chat and voice agents that scale support, boost engagement, and deliver real results."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

