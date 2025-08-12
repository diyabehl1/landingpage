  
  import React from 'react';
  import  Testimonialcard from './Testimonialcard'


  export default function TestimonialSection() {
    const testimonials = [
      {
        quote: "Flourish Digital's chatbot transformed our customer support. Response times dropped by 60% and our customer satisfaction has never been higher",
        image:"/images/test1.jpg",
        name: "Aman Verma",
        
      },
      {
        quote: "The AI integration helped us streamline communication and boosted our sales by 45%.",
        image:"/images/test2.jpg",
        name: "Riya Sharma",
        
      },
      {
        quote: "A seamless experience for both our team and customers, thanks to Flourish Digital's solutions.",
         image:"/images/test3.webp",
        name: "Karan Singh",
       
      },
    ];

    return (
      <div className="bg-[#0b0c0d] font-sans text-white py-16 px-4 md:px-16 flex flex-col items-center">
        <div className="container mx-auto max-w-3xl text-center mb-16">
          <p className="text-lg font-medium text-blue-500 mb-4">Customers</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Empowering teams of all sizes to create intelligent AI agents collaboratively.
          </h1>
          <p className="text-xl text-gray-400">
            See how others are winning with Flourish Digital
          </p>
        </div>

        <div className="mb-16">
          <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white font-bold py-3 px-6 rounded-full">
            <span>Request a Demo</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Testimonialcard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    );
  }
