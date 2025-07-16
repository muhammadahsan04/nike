// import React from "react";
// import Button from "../components/Button";
// import { shoe8 } from "../assets/images";

// const SuperQuality = () => {
//   return (
//     <div
//       id="about-us"
//       className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
//     >
//       <div className="flex flex-1 flex-col">
//         <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
//           We Provide You <span className="text-coral-red">Super</span>
//           <span className="text-coral-red"> Quality</span>
//           &nbsp;Shoes
//         </h2>
//         <p className="mt-4 lg:max-w-lg info-text">
//           Ensuring premium comfort and style, our meticulously crafted footwear
//           is designed to elevate your experience, providing you with unmatched
//           quality, innovation, and a touch of elegance.
//         </p>
//         <p className="mt-6 lg:max-w-lg info-text">
//           Our dedication to detail and excellence ensures your satisfaction
//         </p>
//         <div className="mt-11">
//           <Button
//             label="View details"
//             className="
// font-montserrat px-7 text-white bg-coral-red w-44 text-center py-4 rounded-full text-lg"
//           />
//         </div>
//       </div>
//       <div className="flex flex-1 justify-center items-center">
//         <img src={shoe8} width={570} height={522} alt="shoe8" />
//       </div>
//     </div>
//   );
// };

// export default SuperQuality;


// import React, { useState } from "react";
// import Button from "../components/Button";
// import { shoe8 } from "../assets/images";
// import { arrowRight } from "../assets/icons";

// const SuperQuality = () => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   const qualityFeatures = [
//     { icon: "👟", title: "Premium Materials", desc: "Finest leather and fabric construction" },
//     { icon: "💎", title: "Exceptional Craftsmanship", desc: "Meticulously designed for perfection" },
//     { icon: "🚀", title: "Advanced Technology", desc: "Innovation meets comfort and style" },
//     { icon: "⭐", title: "Unmatched Quality", desc: "Excellence in every detail" }
//   ];

//   const handleViewDetails = () => {
//     const productsSection = document.getElementById('products');
//     if (productsSection) {
//       productsSection.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   };

//   return (
//     <section
//       id="about-us"
//       className="padding bg-gradient-to-br from-white via-slate-50 to-coral-red/5 relative overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute top-20 left-20 w-64 h-64 bg-coral-red/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

//       <div className="max-container flex flex-col xl:flex-row justify-between items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16">

//         {/* Content Section */}
//         <div className="flex flex-1 flex-col text-center xl:text-left order-2 xl:order-1">

//           {/* Badge */}
//           <div className="inline-flex items-center justify-center xl:justify-start gap-2 bg-coral-red/10 text-coral-red px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-coral-red/20 w-fit mx-auto xl:mx-0">
//             <div className="w-2 h-2 bg-coral-red rounded-full animate-pulse"></div>
//             About Our Quality
//           </div>

//           {/* Main Heading */}
//           <h2 className="font-palanquin text-3xl sm:text-4xl lg:text-5xl xl:text-6xl capitalize font-bold lg:max-w-lg leading-10 sm:leading-tight mb-4 sm:mb-6">
//             We Provide You{" "}
//             <span className="text-coral-red relative">
//               Super
//               <div className="absolute -bottom-0 mb-0 sm:mb-1 left-0 w-full h-1 bg-coral-red/30 rounded-full"></div>
//             </span>
//             <br />
//             <span className="text-coral-red relative">
//               Quality
//               <div className="absolute -bottom-0 left-0 w-full h-1 bg-coral-red/30 rounded-full"></div>
//             </span>{" "}
//             <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//               Shoes
//             </span>
//           </h2>

//           {/* Main Description */}
//           <p className="mt-4 lg:max-w-lg text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto xl:mx-0">
//             Ensuring premium comfort and style, our meticulously crafted footwear
//             is designed to elevate your experience, providing you with unmatched
//             quality, innovation, and a touch of elegance.
//           </p>

//           {/* Quality Features Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 lg:max-w-2xl mx-auto xl:mx-0">
//             {qualityFeatures.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group"
//               >
//                 <span className="text-lg sm:text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
//                   {feature.icon}
//                 </span>
//                 <div className="text-left">
//                   <h4 className="font-semibold text-sm sm:text-base text-slate-900 mb-1">
//                     {feature.title}
//                   </h4>
//                   <p className="text-xs sm:text-sm text-slate-600 leading-tight">
//                     {feature.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Secondary Description */}
//           <p className="mt-4 sm:mt-6 lg:max-w-lg text-sm sm:text-base text-slate-600 leading-relaxed mb-6 sm:mb-8 lg:mb-11 max-w-2xl mx-auto xl:mx-0">
//             Our dedication to detail and excellence ensures your satisfaction.
//             Every pair is a testament to our commitment to quality and innovation.
//           </p>

//           {/* Action Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center xl:justify-start">
//             <Button
//               onClick={handleViewDetails}
//               label="View details"
//               iconUrl={arrowRight}
//               className="group font-montserrat px-6 sm:px-7 lg:px-8 text-white bg-coral-red rounded-full text-sm sm:text-base lg:text-lg py-3 sm:py-4 hover:bg-coral-red/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 min-w-[160px] sm:min-w-[180px]"
//             />

//             <button
//               className="group font-montserrat px-6 sm:px-7 lg:px-8 border-2 border-slate-300 text-slate-700 bg-white hover:bg-slate-50 rounded-full text-sm sm:text-base lg:text-lg py-3 sm:py-4 hover:border-coral-red hover:text-coral-red transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 min-w-[160px] sm:min-w-[180px]"
//             >
//               Learn More
//               <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>

//           {/* Trust Indicators */}
//           <div className="flex flex-wrap justify-center xl:justify-start items-center gap-4 sm:gap-6 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
//             <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
//               <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <span>Premium Quality</span>
//             </div>

//             <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
//               <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <span>Lifetime Warranty</span>
//             </div>

//             <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
//               <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <span>Expert Craftsmanship</span>
//             </div>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="flex flex-1 justify-center items-center relative group order-1 xl:order-2">
//           <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl">

//             {/* Loading Skeleton */}
//             {!imageLoaded && (
//               <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center w-full h-[300px] sm:h-[400px] lg:h-[522px]">
//                 <div className="w-12 h-12 border-4 border-coral-red border-t-transparent rounded-full animate-spin"></div>
//               </div>
//             )}

//             <img
//               src={shoe8}
//               width={570}
//               height={522}
//               alt="Super quality Nike shoe"
//               className={`object-contain w-full h-auto max-w-[300px] sm:max-w-[400px] lg:max-w-[570px] transition-all duration-700 transform group-hover:scale-105 group-hover:rotate-2 ${imageLoaded ? 'opacity-100' : 'opacity-0'
//                 }`}
//               onLoad={() => setImageLoaded(true)}
//             />

//             {/* Image Overlay Effects */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

//             {/* Quality Badge */}
//             <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-coral-red text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
//               PREMIUM
//             </div>

//             {/* Rating Badge */}
//             <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-yellow-400 text-slate-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-1">
//               <span>⭐</span>
//               <span>4.9</span>
//             </div>

//             {/* Floating Elements */}
//             <div className="absolute -top-4 -left-4 w-8 h-8 bg-coral-red/20 rounded-full animate-ping"></div>
//             <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500/20 rounded-full animate-ping delay-1000"></div>
//           </div>

//           {/* Background Glow */}
//           <div className="absolute inset-0 bg-gradient-to-r from-coral-red/10 to-transparent rounded-full blur-3xl -z-10"></div>
//         </div>
//       </div>

//       {/* Bottom Stats */}
//       <div className="mt-16 sm:mt-20 lg:mt-24 pt-8 sm:pt-12 border-t border-gray-200">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
//           <div className="space-y-2">
//             <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-coral-red">99%</div>
//             <div className="text-xs sm:text-sm lg:text-base text-slate-600">Customer Satisfaction</div>
//           </div>
//           <div className="space-y-2">
//             <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-coral-red">50+</div>
//             <div className="text-xs sm:text-sm lg:text-base text-slate-600">Quality Checks</div>
//           </div>
//           <div className="space-y-2">
//             <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-coral-red">25+</div>
//             <div className="text-xs sm:text-sm lg:text-base text-slate-600">Years Experience</div>
//           </div>
//           <div className="space-y-2">
//             <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-coral-red">1M+</div>
//             <div className="text-xs sm:text-sm lg:text-base text-slate-600">Happy Customers</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SuperQuality;


import React, { useState } from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const qualityFeatures = [
    { icon: "👟", title: "Premium Materials", desc: "Finest leather and fabric construction" },
    { icon: "💎", title: "Exceptional Craftsmanship", desc: "Meticulously designed for perfection" },
    { icon: "🚀", title: "Advanced Technology", desc: "Innovation meets comfort and style" },
    { icon: "⭐", title: "Unmatched Quality", desc: "Excellence in every detail" }
  ];

  const handleViewDetails = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section
      id="about-us"
      className="padding bg-gradient-to-br from-white via-slate-50 to-coral-red/5 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-coral-red/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-container flex flex-col xl:flex-row justify-between items-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16">

        {/* Content Section */}
        <div className="flex flex-1 flex-col text-center xl:text-left order-2 xl:order-1">

          {/* Badge */}
          <div className="inline-flex items-center justify-center xl:justify-start gap-2 bg-coral-red/10 text-coral-red px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 md:mb-6 border border-coral-red/20 w-fit mx-auto xl:mx-0">
            <div className="w-2 h-2 bg-coral-red rounded-full animate-pulse"></div>
            About Our Quality
          </div>

          {/* Main Heading */}
          <h2 className="font-palanquin text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl capitalize font-bold lg:max-w-lg leading-tight sm:leading-tight md:leading-tight mb-3 sm:mb-4 md:mb-6">
            We Provide You{" "}
            <span className="text-coral-red relative">
              Super
              <div className="absolute -bottom-0 mb-0 sm:mb-1 left-0 w-full h-1 bg-coral-red/30 rounded-full"></div>
            </span>
            <br />
            <span className="text-coral-red relative">
              Quality
              <div className="absolute -bottom-0 left-0 w-full h-1 bg-coral-red/30 rounded-full"></div>
            </span>{" "}
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Shoes
            </span>
          </h2>

          {/* Main Description */}
          <p className="mt-3 sm:mt-4 lg:max-w-lg text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed mb-3 sm:mb-4 md:mb-6 max-w-2xl mx-auto xl:mx-0">
            Ensuring premium comfort and style, our meticulously crafted footwear
            is designed to elevate your experience, providing you with unmatched
            quality, innovation, and a touch of elegance.
          </p>

          {/* Quality Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8 lg:max-w-2xl mx-auto xl:mx-0">
            {qualityFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group"
              >
                <span className="text-base sm:text-lg md:text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </span>
                <div className="text-left">
                  <h4 className="font-semibold text-xs sm:text-sm md:text-base text-slate-900 mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-tight">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Description */}
          <p className="mt-3 sm:mt-4 md:mt-6 lg:max-w-lg text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6 md:mb-8 lg:mb-11 max-w-2xl mx-auto xl:mx-0">
            Our dedication to detail and excellence ensures your satisfaction.
            Every pair is a testament to our commitment to quality and innovation.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center xl:justify-start">
            <Button
              onClick={handleViewDetails}
              label="View details"
              iconUrl={arrowRight}
              className="group font-montserrat px-4 sm:px-6 md:px-7 lg:px-8 text-white bg-coral-red rounded-full text-xs sm:text-sm md:text-base lg:text-lg py-2.5 sm:py-3 md:py-4 hover:bg-coral-red/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 sm:gap-3 min-w-[140px] sm:min-w-[160px] md:min-w-[180px]"
            />

            <button
              className="group font-montserrat px-4 sm:px-6 md:px-7 lg:px-8 border-2 border-slate-300 text-slate-700 bg-white hover:bg-slate-50 rounded-full text-xs sm:text-sm md:text-base lg:text-lg py-2.5 sm:py-3 md:py-4 hover:border-coral-red hover:text-coral-red transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 sm:gap-3 min-w-[140px] sm:min-w-[160px] md:min-w-[180px]"
            >
              Learn More
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center xl:justify-start items-center gap-3 sm:gap-4 md:gap-6 mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 md:pt-8 border-t border-gray-200">
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Premium Quality</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Lifetime Warranty</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Expert Craftsmanship</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-1 justify-center items-center relative group order-1 xl:order-2">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl">

            {/* Loading Skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[522px]">
                <div className="w-8 h-8 sm:w-12 sm:h-12 border-4 border-coral-red border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <img
              src={shoe8}
              width={570}
              height={522}
              alt="Super quality Nike shoe"
              className={`object-contain w-full h-auto max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[570px] transition-all duration-700 transform group-hover:scale-105 group-hover:rotate-2 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              onLoad={() => setImageLoaded(true)}
            />

            {/* Image Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Quality Badge */}
            <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 bg-coral-red text-white px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
              PREMIUM
            </div>

            {/* Rating Badge */}
            <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 bg-yellow-400 text-slate-900 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center gap-1">
              <span>⭐</span>
              <span>4.9</span>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-coral-red/20 rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500/20 rounded-full animate-ping delay-1000"></div>
          </div>

          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-coral-red/10 to-transparent rounded-full blur-3xl -z-10"></div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-6 sm:pt-8 md:pt-12 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
          <div className="space-y-1 sm:space-y-2">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-coral-red">99%</div>
            <div className="text-xs sm:text-sm lg:text-base text-slate-600">Customer Satisfaction</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-coral-red">50+</div>
            <div className="text-xs sm:text-sm lg:text-base text-slate-600">Quality Checks</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-coral-red">25+</div>
            <div className="text-xs sm:text-sm lg:text-base text-slate-600">Years Experience</div>
          </div>
          <div className="space-y-1 sm:space-y-2">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-coral-red">1M+</div>
            <div className="text-xs sm:text-sm lg:text-base text-slate-600">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperQuality;
