// import React from "react";

// const SerivceCard = ({ label, imgURL, subtext }) => {
//   return (
//     <div className="flex-1 sm:w-[350px] sm:min-[350px] w-full justify-center items-start flex-col px-10 py-16 border shadow-3xl rounded-[20px]">
//       <div className="flex justify-center items-center bg-coral-red rounded-full h-[40px] w-[40px]">
//         <img src={imgURL} width={24} height={24} alt={label} />
//       </div>
//       <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
//         {label}
//       </h3>
//       <p className="mt-3 break-words font-montserrat leading-normal text-slate-gray">
//         {subtext}
//       </p>
//     </div>
//   );
// };

// export default SerivceCard;


import React, { useState } from "react";

const SerivceCard = ({ id, label, imgURL, subtext, features }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="flex-1 sm:w-auto sm:min-w-[350px] w-full group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">

        {/* Icon Section */}
        {/* <div className="flex justify-center items-center mb-6">
          <div className={`flex justify-center items-center rounded-full h-16 w-16 transition-all duration-300 ${isHovered
              ? 'bg-coral-red scale-110 shadow-lg'
              : 'bg-coral-red/10'
            }`}>
            <img
              src={imgURL}
              width={28}
              height={28}
              alt={label}
              className={`transition-all duration-300 ${isHovered ? 'filter brightness-0 invert' : ''
                }`}
            />
          </div>
        </div> */}

        {/* Icon Section */}
        <div className="flex justify-center items-center mb-6">
          <div className={`flex justify-center items-center rounded-full h-16 w-16 transition-all duration-300 ${isHovered
              ? 'bg-coral-red scale-110 shadow-lg'
              : 'bg-coral-red/10'
            }`}>
            <img
              src={imgURL}
              width={28}
              height={28}
              alt={label}
              className={`transition-all duration-300 ${isHovered
                  ? 'filter brightness-0 invert'
                  : 'filter brightness-0 opacity-70'
                }`}
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center flex-1 flex flex-col">
          <h3 className="font-palanquin text-2xl leading-normal font-bold mb-4 group-hover:text-coral-red transition-colors">
            {label}
          </h3>

          <p className="break-words font-montserrat leading-relaxed text-slate-gray mb-6 flex-1">
            {subtext}
          </p>

          {/* Features List */}
          {features && (
            <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-slate-900 mb-3 text-sm">Key Features:</h4>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-slate-600">
                      <svg className="w-4 h-4 text-coral-red mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Action Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`mt-auto px-6 py-3 rounded-lg font-medium transition-all duration-300 ${isHovered
              ? 'bg-coral-red text-white shadow-lg'
              : 'bg-gray-100 text-slate-700 hover:bg-coral-red hover:text-white'
              }`}
          >
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>
        </div>

        {/* Decorative Element */}
        <div className={`absolute top-0 right-0 w-20 h-20 bg-coral-red/5 rounded-full -translate-y-10 translate-x-10 transition-all duration-300 ${isHovered ? 'scale-150 bg-coral-red/10' : ''
          }`}></div>
      </div>
    </div>
  );
};

export default SerivceCard;
