// import React from "react";
// import { services } from "../constants";
// import SerivceCard from "../components/SerivceCard";

// const Services = () => {
//   return (
//     <div className="max-container flex justify-center flex-wrap gap-9">
//       {services.map((service) => (
//         <SerivceCard key={service.label} {...service} />
//       ))}
//     </div>
//   );
// };

// export default Services;


// import React, { useState } from "react";
// import { services } from "../constants";
// import SerivceCard from "../components/SerivceCard";

// const Services = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [servicesPerPage] = useState(3);

//   const totalPages = Math.ceil(services.length / servicesPerPage);
//   const currentServices = services.slice(
//     currentPage * servicesPerPage,
//     (currentPage + 1) * servicesPerPage
//   );

//   return (
//     <section className="sm:padding bg-gradient-to-b from-slate-50 to-white">
//       <div className="max-container">

//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <div className="inline-block bg-coral-red text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
//             Our Services
//           </div>

//           <h2 className="text-4xl lg:text-5xl font-palanquin font-bold mb-6">
//             Why Choose <span className="text-coral-red">Nike</span>?
//           </h2>

//           <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed mb-8">
//             We provide exceptional services to ensure your shopping experience is seamless,
//             secure, and satisfying. Your satisfaction is our top priority.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="relative h-auto">
//           <div className="px-4 md:px-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-20 mb-12">
//             {currentServices.map((service, index) => (
//               <div
//                 key={`${currentPage}-${service.id}`}
//                 className="animate-slideInUp"
//                 style={{
//                   animationDelay: `${index * 200}ms`,
//                   animationFillMode: 'both'
//                 }}
//               >
//                 <SerivceCard
//                   key={service.id}
//                   {...service}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Pagination */}
//         {totalPages > 1 && (
//           <div className="flex justify-center items-center gap-4 mb-12">
//             <button
//               onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
//               disabled={currentPage === 0}
//               className="px-4 py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             <div className="flex gap-2">
//               {Array.from({ length: totalPages }, (_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentPage(i)}
//                   className={`w-10 h-10 rounded-lg font-medium transition-all ${currentPage === i
//                     ? 'bg-coral-red text-white shadow-lg'
//                     : 'bg-white text-slate-600 hover:bg-coral-red hover:text-white border border-gray-200'
//                     }`}
//                 >
//                   {i + 1}
//                 </button>
//               ))}
//             </div>

//             <button
//               onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
//               disabled={currentPage === totalPages - 1}
//               className="px-4 py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         )}

//         {/* Trust Indicators */}
//         <div className="bg-white rounded-2xl p-8 shadow-lg">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-3xl font-bold text-coral-red mb-2">10M+</div>
//               <div className="text-slate-600">Happy Customers</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-coral-red mb-2">99.9%</div>
//               <div className="text-slate-600">Uptime</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-coral-red mb-2">24/7</div>
//               <div className="text-slate-600">Support</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-coral-red mb-2">50+</div>
//               <div className="text-slate-600">Countries</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import React, { useState } from "react";
import { services } from "../constants";
import SerivceCard from "../components/SerivceCard";

const Services = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [servicesPerPage] = useState(3);

  const totalPages = Math.ceil(services.length / servicesPerPage);
  const currentServices = services.slice(
    currentPage * servicesPerPage,
    (currentPage + 1) * servicesPerPage
  );

  return (
    <section className="sm:padding padding-y bg-gradient-to-b from-slate-50 to-white">
      <div className="max-container">

        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block bg-coral-red text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Our Services
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-palanquin font-bold mb-4 sm:mb-6 leading-tight">
            Why Choose <span className="text-coral-red">Nike</span>?
          </h2>

          <p className="max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
            We provide exceptional services to ensure your shopping experience is seamless,
            secure, and satisfying. Your satisfaction is our top priority.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative h-auto">
          <div className="px-4 md:px-0 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-20 mb-12">
            {currentServices.map((service, index) => (
              <div
                key={`${currentPage}-${service.id}`}
                className="animate-slideInUp"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'both'
                }}
              >
                <SerivceCard
                  key={service.id}
                  {...service}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="sm:hidden">Previous</span>
            </button>

            <div className="flex gap-1 sm:gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-medium transition-all text-sm sm:text-base ${currentPage === i
                    ? 'bg-coral-red text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-coral-red hover:text-white border border-gray-200'
                    }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <span className="sm:hidden">Next</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="p-2 sm:p-0">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-coral-red mb-1 sm:mb-2">10M+</div>
              <div className="text-xs sm:text-sm lg:text-base text-slate-600 leading-tight">Happy Customers</div>
            </div>
            <div className="p-2 sm:p-0">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-coral-red mb-1 sm:mb-2">99.9%</div>
              <div className="text-xs sm:text-sm lg:text-base text-slate-600 leading-tight">Uptime</div>
            </div>
            <div className="p-2 sm:p-0">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-coral-red mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm lg:text-base text-slate-600 leading-tight">Support</div>
            </div>
            <div className="p-2 sm:p-0">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-coral-red mb-1 sm:mb-2">50+</div>
              <div className="text-xs sm:text-sm lg:text-base text-slate-600 leading-tight">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
