import React from "react"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const keyFeatures = [
  { id: 1, icon: "🤖", title: "AI-Powered", desc: "Intelligent conversations 24/7" },
  { id: 2, icon: "🌐", title: "Multilingual", desc: "Supports multiple languages" },
  { id: 3, icon: "⚙️", title: "Easy Integration", desc: "Connects with your existing tools" },
  { id: 4, icon: "🔒", title: "Secure & Compliant", desc: "Data privacy & security ensured" },
  { id: 5, icon: "📊", title: "Analytics", desc: "Real-time insights & reports" },
  { id: 6, icon: "🕒", title: "Fast Response", desc: "Instant answers to customers" },
  { id: 7, icon: "🎯", title: "Customizable", desc: "Tailor-made to fit your brand" },
];


export default function KeyFeaturesCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { arrows: true, variableWidth: true },
      },
      {
        breakpoint: 768,
        settings: { arrows: true, variableWidth: true },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          dots: true,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <div className="bg-[#1E2227] py-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-blue-500 mb-8 mt-12 drop-shadow-md tracking-wide">
        Key Features
      </h2>

      <div className="max-w-4xl mx-auto px-4">
        <Slider {...settings}>
          {keyFeatures.map(({ id, icon, title, desc }) => (
            <div 
              key={id} 
              className="px-3"
              style={{
                width: window.innerWidth < 480 ? 160 : 220,
                height: window.innerWidth < 480 ? 160 : 220,
                boxSizing: 'border-box',
              }}
            >
              <div
                className="
                  bg-gray-800 
                  rounded-full  
                  shadow-md
                  flex flex-col items-center justify-center
                  p-4 text-white cursor-pointer hover:bg-blue-600 transition
                  overflow-hidden break-words max-w-full
                  aspect-square
                "
                style={{ width: "100%", height: "100%" }}
              >
                <div className="text-4xl sm:text-4xl md:text-4xl mb-3 select-none">{icon}</div>
                <h3 className="text-sm sm:text-lg md:text-md font-bold mb-2 text-center break-words max-w-full">
                  {title}
                </h3>
                <p className="text-center text-xs sm:text-sm md:text-base text-gray-300 px-3 break-words max-w-full">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}




