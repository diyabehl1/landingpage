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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-[#1E2227] py-6">
     <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-500 mb-8 mt-12 drop-shadow-md tracking-wide">
  Key Features
</h2>


      <div className="max-w-4xl mx-auto px-4">
        <Slider {...settings}>
          {keyFeatures.map(({ id, icon, title, desc }) => (
            <div key={id} className="px-2">
              <div className="bg-gray-800 rounded-lg shadow-md aspect-square flex flex-col items-center justify-center p-4 text-white cursor-pointer hover:bg-blue-600 transition">
                <div className="text-4xl mb-3">{icon}</div>
                <h3 className="text-lg font-bold mb-1">{title}</h3>
                <p className="text-center text-xs sm:text-sm text-gray-300">{desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
 


