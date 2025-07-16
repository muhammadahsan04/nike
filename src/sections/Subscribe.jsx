// import Button from "../components/Button";

// const Subscribe = () => {
//   return (
//     <section
//       className="max-container flex justify-between items-center max-lg:flex-col gap-10"
//       id="contact-us"
//     >
//       <div>
//         <h2 className="text-4xl font-bold leading-[68px] font-palanquin lg:max-w-md">
//           Sign Up for <span className="text-coral-red">Updates</span> &
//           Newsletter
//         </h2>
//       </div>
//       <div className="lg:max-w-[44%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 border rounded-full">
//         <input
//           type="text"
//           // py-4 px-6 border border-slate-gray
//           className="input"
//           placeholder="subcribe@nike.com"
//         />
//         <div className="flex max-sm:justify-end items-center max-sm:w-full">
//           <Button
//             label="Sign Up"
//             className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none"
//             fullWidth
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Subscribe;


// import React, { useState } from 'react';
// import Button from '../components/Button';

// const Subscribe = () => {
//   const [email, setEmail] = useState('');
//   const [status, setStatus] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!email) {
//       setStatus('Please enter your email address');
//       return;
//     }

//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setStatus('Please enter a valid email address');
//       return;
//     }

//     // Simulate API call
//     setIsLoading(true);
//     setStatus('Subscribing...');

//     setTimeout(() => {
//       setIsLoading(false);
//       setStatus('Successfully subscribed!');
//       setEmail('');
//       setTimeout(() => setStatus(''), 4000);
//     }, 1500);
//   };

//   const benefits = [
//     { icon: '🎯', text: 'Exclusive deals & early access' },
//     { icon: '👟', text: 'New product launches' },
//     { icon: '🏆', text: 'Member-only events' },
//     { icon: '📦', text: 'Free shipping updates' }
//   ];

//   return (
//     <section
//       id="contact-us"
//       className="max-container padding-x py-0 lg:py-0"
//     >
//       <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl p-8 lg:p-16 shadow-xl">
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-12">

//           {/* Left Content */}
//           <div className="flex-1 text-center lg:text-left">
//             <div className="mb-6">
//               <span className="inline-block bg-coral-red text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
//                 Stay Connected
//               </span>
//               <h3 className="text-3xl lg:text-4xl xl:text-5xl leading-tight font-palanquin font-bold text-slate-900 mb-4">
//                 Sign Up for
//                 <span className="text-coral-red"> Updates </span>
//                 & Newsletter
//               </h3>
//               <p className="text-lg text-slate-600 mb-8 max-w-md mx-auto lg:mx-0">
//                 Be the first to know about new arrivals, exclusive offers, and special events. Join our community of Nike enthusiasts!
//               </p>
//             </div>

//             {/* Benefits Grid */}
//             <div className="grid grid-cols-2 gap-4 mb-8 lg:mb-0">
//               {benefits.map((benefit, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
//                 >
//                   <span className="text-2xl">{benefit.icon}</span>
//                   <span className="text-sm font-medium text-slate-700">{benefit.text}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Content - Form */}
//           <div className="flex-1 w-full max-w-md">
//             <div className="bg-white rounded-2xl p-8 shadow-lg">
//               <form onSubmit={handleSubmit} className="space-y-6">

//                 {/* Email Input */}
//                 <div className="relative">
//                   <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <input
//                       id="email"
//                       type="email"
//                       placeholder="Enter your email address"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="w-full px-4 py-4 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent transition-all text-slate-900 placeholder-slate-400"
//                       disabled={isLoading}
//                     />
//                     <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                       <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <Button
//                   label={isLoading ? 'Subscribing...' : 'Subscribe Now'}
//                   type="submit"
//                   disabled={isLoading}
//                   className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 ${isLoading
//                       ? 'bg-gray-400 cursor-not-allowed'
//                       : 'bg-coral-red hover:bg-coral-red/90 hover:scale-105 active:scale-95'
//                     } text-white border-0 flex items-center justify-center gap-2`}
//                 />

//                 {/* Privacy Notice */}
//                 <p className="text-xs text-slate-500 text-center">
//                   By subscribing, you agree to our{' '}
//                   <a href="#" className="text-coral-red hover:underline">Privacy Policy</a>
//                   {' '}and{' '}
//                   <a href="#" className="text-coral-red hover:underline">Terms of Service</a>
//                 </p>
//               </form>

//               {/* Status Message */}
//               {status && (
//                 <div className={`mt-6 p-4 rounded-lg text-center font-medium transition-all duration-300 ${status.includes('Successfully')
//                     ? 'bg-green-50 text-green-700 border border-green-200'
//                     : status.includes('Please')
//                       ? 'bg-red-50 text-red-700 border border-red-200'
//                       : 'bg-blue-50 text-blue-700 border border-blue-200'
//                   }`}>
//                   <div className="flex items-center justify-center gap-2">
//                     {status.includes('Successfully') && (
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                     )}
//                     {status.includes('Please') && (
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     )}
//                     {status.includes('Subscribing') && (
//                       <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//                     )}
//                     <span>{status}</span>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Social Proof */}
//             <div className="mt-6 text-center">
//               <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
//                 <div className="flex -space-x-2">
//                   {[1, 2, 3, 4].map((i) => (
//                     <div key={i} className="w-8 h-8 bg-gradient-to-br from-coral-red to-pink-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
//                       {String.fromCharCode(65 + i)}
//                     </div>
//                   ))}
//                 </div>
//                 <span>Join 50,000+ Nike enthusiasts</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Stats */}
//         <div className="mt-16 pt-8 border-t border-gray-200">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div className="space-y-2">
//               <div className="text-3xl font-bold text-coral-red">50K+</div>
//               <div className="text-sm text-slate-600">Active Subscribers</div>
//             </div>
//             <div className="space-y-2">
//               <div className="text-3xl font-bold text-coral-red">Weekly</div>
//               <div className="text-sm text-slate-600">Newsletter Updates</div>
//             </div>
//             <div className="space-y-2">
//               <div className="text-3xl font-bold text-coral-red">Exclusive</div>
//               <div className="text-sm text-slate-600">Member Benefits</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Subscribe;


import React, { useState } from 'react';
import Button from '../components/Button';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('Please enter a valid email address');
      return;
    }

    // Simulate API call
    setIsLoading(true);
    setStatus('Subscribing...');

    setTimeout(() => {
      setIsLoading(false);
      setStatus('Successfully subscribed!');
      setEmail('');
      setTimeout(() => setStatus(''), 4000);
    }, 1500);
  };

  const benefits = [
    { icon: '🎯', text: 'Exclusive deals & early access' },
    { icon: '👟', text: 'New product launches' },
    { icon: '🏆', text: 'Member-only events' },
    { icon: '📦', text: 'Free shipping updates' }
  ];

  return (
    <section
      id="contact-us"
      // className="max-container padding-x py-8 sm:py-12 lg:py-16"
      // className="padding-x sm:py-0 lg:py-0"
      className="max-container sm:py-0 lg:py-0"
      // className="sm:py-0 lg:py-0"
    >
      <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-16 shadow-xl">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-10 lg:gap-12">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left w-full">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block bg-coral-red text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                Stay Connected
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight font-palanquin font-bold text-slate-900 mb-3 sm:mb-4">
                Sign Up for
                <span className="text-coral-red"> Updates </span>
                & Newsletter
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Be the first to know about new arrivals, exclusive offers, and special events. Join our community of Nike enthusiasts!
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-0">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-lg sm:text-xl lg:text-2xl flex-shrink-0">{benefit.icon}</span>
                  <span className="text-xs sm:text-sm font-medium text-slate-700 leading-tight">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">

                {/* Email Input */}
                <div className="relative">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-slate-700 mb-1.5 sm:mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 pl-10 sm:pl-12 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent transition-all text-sm sm:text-base text-slate-900 placeholder-slate-400"
                      disabled={isLoading}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  label={isLoading ? 'Subscribing...' : 'Subscribe Now'}
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 ${isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-coral-red hover:bg-coral-red/90 hover:scale-105 active:scale-95'
                    } text-white border-0 flex items-center justify-center gap-2`}
                />

                {/* Privacy Notice */}
                <p className="text-xs text-slate-500 text-center leading-relaxed">
                  By subscribing, you agree to our{' '}
                  <a href="#" className="text-coral-red hover:underline">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="#" className="text-coral-red hover:underline">Terms of Service</a>
                </p>
              </form>

              {/* Status Message */}
              {status && (
                <div className={`mt-4 sm:mt-6 p-3 sm:p-4 rounded-lg text-center font-medium transition-all duration-300 ${status.includes('Successfully')
                  ? 'bg-green-50 text-green-700 border border-green-200'
                  : status.includes('Please')
                    ? 'bg-red-50 text-red-700 border border-red-200'
                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                  <div className="flex items-center justify-center gap-2">
                    {status.includes('Successfully') && (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {status.includes('Please') && (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {status.includes('Subscribing') && (
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    )}
                    <span className="text-xs sm:text-sm">{status}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Social Proof */}
            <div className="mt-4 sm:mt-6 text-center">
              <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-600">
                <div className="flex -space-x-1 sm:-space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-coral-red to-pink-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="ml-1">Join 50,000+ Nike enthusiasts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-coral-red">50K+</div>
              <div className="text-xs sm:text-sm text-slate-600">Active Subscribers</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-coral-red">Weekly</div>
              <div className="text-xs sm:text-sm text-slate-600">Newsletter Updates</div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-bold text-coral-red">Exclusive</div>
              <div className="text-xs sm:text-sm text-slate-600">Member Benefits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
