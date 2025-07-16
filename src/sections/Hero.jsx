// import React, { useState } from "react";
// import Button from "../components/Button";
// import { arrowRight } from "../assets/icons";
// import { shoes, statistics } from "../constants";
// import { bigShoe1 } from "../assets/images";
// import ShoeCard from "../components/ShoeCard";
// const Hero = () => {
//   const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
//   return (
//     <scetion
//       id="home"
//       className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
//     >
//       <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
//         {/* div-above-the-heading */}
//         <p className="text-xl font-montserrat text-coral-red">
//           Our Summer collections
//         </p>
//         <h1 className="mt-10 font-palanquin text-8xl max-sm:leading-[82px] font-bold max-sm:text-[72px]">
//           <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
//             The New Arrival
//           </span>
//           <br />
//           <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
//         </h1>
//         <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
//           Discover stylish Nike arrivals, quality <br /> comfort, and innovation
//           for your active life.
//         </p>
//         <Button
//           className="py-4 px-5 border border-coral-red bg-coral-red rounded-full text-white flex justify-center items-center gap-3 text-lg w-48 font-montserrat"
//           label="Shop now"
//           iconUrl={arrowRight}
//           imgAlt="rightArrow"
//         />
//         <div className="w-full flex ujstify-start items-start flex-wrap mt-20 gap-16">
//           {statistics.map((stat) => (
//             <div key={stat.label}>
//               <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
//               <p className="leading-7 font-montserrat text-slate-gray">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
//         <img
//           src={bigShoeImg}
//           width={610}
//           height={500}
//           className="object-contain relative z-10"
//           alt="shoe collection"
//         />
//         <div className="flex absolute gap-4 sm:gap-6 -bottom-[5%] sm:left-[10%] max-sm:px-6">
//           {shoes.map((shoe) => (
//             <div key={shoe}>
//               <ShoeCard
//                 imgUrl={shoe}
//                 changeBigShoeImage={(shoe) => {
//                   setBigShoeImg(shoe);
//                 }}
//                 bigShoeImg={bigShoeImg}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </scetion>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [currentShoeIndex, setCurrentShoeIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate shoes every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentShoeIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % shoes.length;
          // Fix: Use the shoe object directly, not as an array element
          setBigShoeImg(shoes[nextIndex].bigShoe || shoes[nextIndex]);
          return nextIndex;
        });
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleShopNow = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleShoeChange = (shoe, index) => {
    if (index !== currentShoeIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        // Fix: Handle both object and direct image formats
        setBigShoeImg(shoe.bigShoe || shoe);
        setCurrentShoeIndex(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-coral-red/5 -z-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-coral-red/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      {/* Left Content Section */}
      <div className="relative xl:w-2/5 flex flex-col justify-start items-start w-full max-xl:padding-x pt-6 z-10">

        {/* Animated Badge */}
        <div className="animate-slideInLeft relative pr-8">
          <div className="inline-flex items-center gap-2 bg-coral-red/10 text-coral-red px-4 py-2 rounded-full text-sm font-medium mb-6 border border-coral-red/20">
            <div className="w-2 h-2 bg-coral-red rounded-full animate-ping"></div>
            Our Summer Collections
          </div>
          <span className="absolute top-1 -right-0 text-2xl animate-bounce">✨</span>
        </div>

        {/* Main Heading with Staggered Animation */}
        <div className="animate-slideInLeft delay-200">
          <h1 className="mt-4 font-palanquin text-6xl sm:text-8xl lg:text-8xl max-sm:leading-[82px] font-bold max-sm:text-[69px] leading-tight">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 inline-block">
              The New Arrival
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-coral-red to-transparent rounded-full"></div>
            </span>
            <br />
            <span className="text-coral-red inline-block mt-3 relative">
              Nike
            </span>
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Shoes
            </span>
          </h1>
        </div>

        {/* Description with Animation */}
        <div className="animate-slideInLeft delay-400">
          <p className="font-montserrat text-slate-gray text-lg leading-6 md:leading-8 mt-6 mb-8 sm:max-w-sm">
            Discover stylish Nike arrivals, quality comfort, and innovation
            for your active life. Step into excellence with every stride.
          </p>
        </div>

        {/* Enhanced Button with Animation */}
        <div className="animate-slideInLeft delay-600 ml-1.5">
          <Button
            onClick={handleShopNow}
            className="group py-4 px-8 border-2 border-coral-red bg-coral-red rounded-full text-white flex justify-center items-center gap-3 text-lg font-montserrat hover:bg-transparent hover:text-coral-red transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
            label="Shop now"
            iconUrl={arrowRight}
            imgAlt="rightArrow"
          />
        </div>

        {/* Enhanced Statistics with Animation */}
        <div className="w-full flex justify-start items-start flex-wrap mt-16 gap-8 lg:gap-16">
          {statistics.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-slideInUp group cursor-pointer"
              style={{ animationDelay: `${800 + index * 200}ms` }}
            >
              <div className="text-center transform transition-all duration-300 hover:scale-110">
                <p className="text-3xl lg:text-4xl font-palanquin font-bold text-slate-900 group-hover:text-coral-red transition-colors">
                  {stat.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray mt-1 group-hover:text-slate-900 transition-colors">
                  {stat.label}
                </p>
                <div className="w-full h-0.5 bg-coral-red/20 mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Section with Enhanced Animations */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-coral-red rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-blue-500 rounded-full animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-16 w-2 h-2 bg-yellow-500 rounded-full animate-float delay-2000"></div>

        {/* Main Shoe Image with Continuous Animation */}
        <div className="relative w-[610px] h-[500px] flex items-start justify-start">
          <div className="absolute inset-0 bg-gradient-to-r from-coral-red/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

          <img
            src={bigShoeImg}
            className={`max-w-full max-h-full object-contain relative z-10 transition-all duration-500 animate-continuousFloat ${isAnimating
              ? 'scale-95 opacity-70'
              : 'scale-100 opacity-100 hover:scale-105'
              }`}
            alt="shoe collection"
            style={{
              filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))'
            }}
            onError={(e) => {
              console.log('Image failed to load:', bigShoeImg);
            }}
            onLoad={() => {
              console.log('Image loaded successfully:', bigShoeImg);
            }}
          />

          {/* Shoe Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-coral-red/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
        </div>

        {/* Enhanced Shoe Selection Cards */}
        <div className="flex absolute gap-4 sm:gap-6 bottom-[4%] sm:left-[18%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div
              key={index}
              className={`transform transition-all duration-300 ${index === currentShoeIndex
                ? 'scale-110 -translate-y-2'
                : 'hover:scale-105 hover:-translate-y-1'
                }`}
            >
              <div className={`relative ${index === currentShoeIndex
                ? 'ring-4 ring-coral-red ring-opacity-50 rounded-xl'
                : ''
                }`}>
                <ShoeCard
                  imgUrl={shoe}
                  changeBigShoeImage={() => handleShoeChange(shoe, index)}
                  bigShoeImg={bigShoeImg}
                />

                {/* Active Indicator */}
                {index === currentShoeIndex && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-coral-red rounded-full animate-ping"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {shoes.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentShoeIndex
                ? 'bg-coral-red w-8'
                : 'bg-gray-300 hover:bg-gray-400'
                }`}
              onClick={() => handleShoeChange(shoes[index], index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
