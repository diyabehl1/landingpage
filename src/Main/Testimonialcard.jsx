import React from "react";

export default function Testimonialcard({ quote, image, name, role }) {
  return (
    <div className="p-8 border border-dashed border-gray-600 rounded-xl max-w-sm mx-auto h-full flex flex-col justify-between bg-[#1E2227]">
      <div>
        <p className="text-xl text-gray-200 mb-6">"{quote}"</p>
      </div>
      <div className="flex items-center mt-6">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}

