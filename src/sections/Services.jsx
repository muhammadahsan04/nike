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
    <section className="padding bg-gradient-to-b from-slate-50 to-white">
      <div className="max-container">

        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block bg-coral-red text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>

          <h2 className="text-4xl lg:text-5xl font-palanquin font-bold mb-6">
            Why Choose <span className="text-coral-red">Nike</span>?
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed mb-8">
            We provide exceptional services to ensure your shopping experience is seamless,
            secure, and satisfying. Your satisfaction is our top priority.
          </p>
        </div>

        {/* Services Grid */}
        <div className="relative h-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-20 mb-12">
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
          <div className="flex justify-center items-center gap-4 mb-12">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="px-4 py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all ${currentPage === i
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
              className="px-4 py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-coral-red mb-2">10M+</div>
              <div className="text-slate-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-coral-red mb-2">99.9%</div>
              <div className="text-slate-600">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-coral-red mb-2">24/7</div>
              <div className="text-slate-600">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-coral-red mb-2">50+</div>
              <div className="text-slate-600">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
