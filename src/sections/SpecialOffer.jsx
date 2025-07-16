// import React from "react";
// import Button from "../components/Button";
// import { offer } from "../assets/images";
// import { arrowRight } from "../assets/icons";
// function SpecialOffer() {
//   return (
//     <div className="flex max-container gap-10 justify-wrap items-center max-xl:flex-col-reverse">
//       <div className="flex-1">
//         <img
//           src={offer}
//           className="object-contain w-full"
//           width={773}
//           height={687}
//           alt="offer"
//         />
//       </div>
//       <div className="flex flex-1 flex-col">
//         <h2 className="font-palanquin text-4xl font-bold">
//           <span className="text-coral-red">Special</span> Offer
//         </h2>
//         <p className="mt-4 info-text">
//           Embark on a shopping journey that redefines your experience with
//           unbeatable deals. From premier selections to incredible savings, we
//           offer unparalleled value that sets us apart.
//         </p>
//         <p className="mt-6 info-text">
//           Navigate a realm of possibilities designed to fulfill your unique
//           desires, surpassing the loftiest expectations. Your journey with us is
//           nothing short of exceptional.
//         </p>
//         <div className="mt-11 flex gap-3 font-montserrat">
//           <Button
//             label="Shop now"
//             iconUrl={arrowRight}
//             className="px-7 flex justify-center items-center text-white bg-coral-red w-48 text-center py-4 rounded-full text-lg gap-3"
//           />
//           <Button
//             label="Learn more"
//             backgroundColor="bg-white"
//             borderColor="border-slate-gray"
//             textColor="text-slate-gray"
//             className="px-7 flex justify-center items-center border w-48 text-center py-4 rounded-full text-lg gap-3"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SpecialOffer;


import React, { useState } from "react";
import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

function SpecialOffer() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const features = [
    { icon: "🎯", text: "Unbeatable deals on premium selections" },
    { icon: "💎", text: "Incredible savings up to 50% off" },
    { icon: "🚀", text: "Unparalleled value that sets us apart" },
    { icon: "⭐", text: "Exceptional quality guaranteed" }
  ];

  const handleShopNow = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleLearnMore = () => {
    // You can add a modal or redirect to more info
    console.log('Learn more clicked');
  };

  return (
    <section className="padding bg-gradient-to-br from-white via-slate-50 to-coral-red/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-coral-red/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-container flex flex-col xl:flex-row gap-8 sm:gap-10 lg:gap-12 xl:gap-16 justify-center items-center">

        {/* Image Section */}
        <div className="flex-1 relative group order-2 xl:order-1">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xlshadow-2xl">

            {/* Loading Skeleton */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-coral-red border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <img
              src={offer}
              className={`object-contain w-full h-auto transition-all duration-700 transform group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              width={773}
              height={687}
              alt="Special offer on Nike shoes"
              onLoad={() => setImageLoaded(true)}
            />

            {/* Image Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Floating Badge */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-coral-red text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-bounce">
              LIMITED TIME
            </div>

            {/* Discount Badge */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-yellow-400 text-slate-900 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
              UP TO 50% OFF
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-coral-red/20 rounded-full animate-ping"></div>
          <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500/20 rounded-full animate-ping delay-1000"></div>
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col order-1 xl:order-2 text-center xl:text-left">

          {/* Badge */}
          <div className="inline-flex items-center justify-center xl:justify-start gap-2 bg-coral-red/10 text-coral-red px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-coral-red/20 w-fit mx-auto xl:mx-0">
            <div className="w-2 h-2 bg-coral-red rounded-full animate-pulse"></div>
            Special Offer
          </div>

          {/* Main Heading */}
          <h2 className="font-palanquin text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            <span className="text-coral-red relative">
              Special
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-coral-red/30 rounded-full"></div>
            </span>{" "}
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto xl:mx-0">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <span className="text-lg sm:text-xl flex-shrink-0">{feature.icon}</span>
                <span className="text-xs sm:text-sm font-medium text-slate-700 leading-tight">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          {/* Additional Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto xl:mx-0">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us is
            nothing short of exceptional.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 font-montserrat justify-center xl:justify-start">
            <Button
              onClick={handleShopNow}
              label="Shop now"
              iconUrl={arrowRight}
              className="group px-6 sm:px-8 py-3 sm:py-4 flex justify-center items-center text-white bg-coral-red rounded-full text-sm sm:text-base lg:text-lg gap-3 hover:bg-coral-red/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden min-w-[160px] sm:min-w-[180px]"
            />

            <Button
              onClick={handleLearnMore}
              label="Learn more"
              className="group px-6 sm:px-8 py-3 sm:py-4 flex justify-center items-center border-2 border-slate-300 text-slate-700 bg-black hover:bg-slate-50 rounded-full text-sm sm:text-base lg:text-lg gap-3 hover:border-coral-red hover:text-coral-red transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-[160px] sm:min-w-[180px]"
            />
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center xl:justify-start items-center gap-4 sm:gap-6 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Free Shipping</span>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>30-Day Returns</span>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Secure Payment</span>
            </div>
          </div>

          {/* Countdown Timer (Optional) */}
          <div className="mt-6 sm:mt-8 p-4 bg-gradient-to-r from-coral-red/10 to-pink-500/10 rounded-lg border border-coral-red/20">
            <div className="text-center">
              <p className="text-xs sm:text-sm font-medium text-coral-red mb-2">
                ⏰ Limited Time Offer Ends Soon!
              </p>
              <div className="flex justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-slate-900">
                <div className="bg-white px-2 py-1 rounded shadow">
                  <span>23</span>
                  <div className="text-xs text-slate-500">DAYS</div>
                </div>
                <div className="bg-white px-2 py-1 rounded shadow">
                  <span>14</span>
                  <div className="text-xs text-slate-500">HRS</div>
                </div>
                <div className="bg-white px-2 py-1 rounded shadow">
                  <span>35</span>
                  <div className="text-xs text-slate-500">MIN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
