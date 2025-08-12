// import React from 'react';

// export default function IntegrationsSection() {
//   const logos = [
//     "/images/box1.png",
//     "/images/box2.png",
//     "/images/box3.png",
//     "/images/box4.png",
//     "/images/box6.png",
//     "/images/box7.png",
//   ];

//   return (
//     <div className="bg-white font-sans text-gray-900 py-16 px-4 md:px-16 flex flex-col items-center">
//       <div className="container mx-auto max-w-7xl">
//         <div className="text-center mb-8">
//           <p className="text-sm font-semibold text-blue-600 uppercase mb-2">
//             Integrations
//           </p>
//           <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
//             Integrate everywhere. <br /> Automate anything
//           </h2>
//           <p className="text-lg text-gray-700">
//             Our developer tools let you scale chat and voice agents across any workflow
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center border-t border-b border-dashed border-gray-300">
//           {logos.map((logoUrl, i) => (
//             <div
//               key={i}
//               className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 border-r border-dashed border-gray-300 last:border-r-0 flex items-center justify-center h-24"
//             >
//               <img
//                 src={logoUrl}
//                 alt={`Logo ${i + 1}`}
//                 className="max-h-16 object-contain"
//               />
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-8">
//           <button className="flex items-center space-x-2 mx-auto bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white font-bold py-3 px-6 rounded-full">
//             <span>See Integrations</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-arrow-right"
//             >
//               <path d="M5 12h14" />
//               <path d="m12 5 7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
