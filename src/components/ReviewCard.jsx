// import { star } from "../assets/icons";

// const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
//   return (
//     <div className="flex justify-center items-center flex-col">
//       <img
//         src={imgURL}
//         alt="customer"
//         className="rounded-full object-cover w-[120px] h-[120px]"
//       />
//       <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
//       <div className="mt-3 flex justify-center items-center gap-2.5">
//         <img
//           src={star}
//           width={24}
//           height={24}
//           alt="rating star"
//           className="object-contain m-0"
//         />
//         <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
//       </div>
//       <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
//         {customerName}
//       </h3>
//     </div>
//   );
// };

// export default ReviewCard;


import React, { useState } from 'react';
import { star } from "../assets/icons";

const ReviewCard = ({
  imgURL,
  customerName,
  rating,
  feedback,
  location,
  verified,
  date,
  productPurchased
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="half-fill">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill="url(#half-fill)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
    }

    return stars;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const shouldTruncate = feedback.length > 150;
  const displayFeedback = shouldTruncate && !isExpanded
    ? feedback.substring(0, 150) + '...'
    : feedback;

  return (
    // <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 max-w-md mx-auto">

    //   {/* Header */}
    //   <div className="flex items-center justify-between mb-6">
    //     <div className="flex items-center gap-4">
    //       <div className="relative">
    //         {!imageLoaded && (
    //           <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse"></div>
    //         )}
    //         <img
    //           src={imgURL}
    //           alt={customerName}
    //           className={`w-16 h-16 rounded-full object-cover border-4 border-coral-red/20 ${imageLoaded ? 'opacity-100' : 'opacity-0'
    //             } transition-opacity`}
    //           onLoad={() => setImageLoaded(true)}
    //         />
    //         {verified && (
    //           <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
    //             <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
    //               <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    //             </svg>
    //           </div>
    //         )}
    //       </div>

    //       <div>
    //         <h3 className="font-palanquin text-xl font-bold text-slate-900">
    //           {customerName}
    //         </h3>
    //         <div className="flex items-center gap-2 text-sm text-slate-600">
    //           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    //           </svg>
    //           <span>{location}</span>
    //           {verified && (
    //             <span className="text-green-600 font-medium">• Verified</span>
    //           )}
    //         </div>
    //       </div>
    //     </div>

    //     <div className="text-right">
    //       <div className="flex items-center gap-1 mb-1">
    //         {renderStars(rating)}
    //       </div>
    //       <div className="text-sm font-semibold text-slate-900">{rating}/5</div>
    //     </div>
    //   </div>

    //   {/* Product Info */}
    //   {productPurchased && (
    //     <div className="mb-4 p-3 bg-gray-50 rounded-lg">
    //       <div className="flex items-center gap-2 text-sm text-slate-600">
    //         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    //         </svg>
    //         <span>Purchased: <span className="font-medium text-slate-900">{productPurchased}</span></span>
    //       </div>
    //     </div>
    //   )}

    //   {/* Review Content */}
    //   <div className="mb-6">
    //     <p className="text-slate-700 leading-relaxed font-montserrat">
    //       "{displayFeedback}"
    //     </p>

    //     {shouldTruncate && (
    //       <button
    //         onClick={() => setIsExpanded(!isExpanded)}
    //         className="mt-2 text-coral-red hover:text-coral-red/80 font-medium text-sm transition-colors"
    //       >
    //         {isExpanded ? 'Show less' : 'Read more'}
    //       </button>
    //     )}
    //   </div>

    //   {/* Footer */}
    //   <div className="flex items-center justify-between pt-4 border-t border-gray-100">
    //     <div className="text-sm text-slate-500">
    //       {formatDate(date)}
    //     </div>

    //     <div className="flex items-center gap-4">
    //       <button className="flex items-center gap-1 text-sm text-slate-600 hover:text-coral-red transition-colors">
    //         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
    //         </svg>
    //         <span>Helpful</span>
    //       </button>

    //       <button className="flex items-center gap-1 text-sm text-slate-600 hover:text-coral-red transition-colors">
    //         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
    //         </svg>
    //         <span>Share</span>
    //       </button>
    //     </div>
    //   </div>
    // </div>


    // Replace the main container div in ReviewCard with:
    <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full h-full flex flex-col">

      {/* Header - keep existing code but update classes */}
      {/* <div className="flex items-start justify-between mb-4 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0">
            {!imageLoaded && (
              <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-200 rounded-full animate-pulse"></div>
            )}
            <img
              src={imgURL}
              alt={customerName}
              className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover border-4 border-coral-red/20 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                } transition-opacity`}
              onLoad={() => setImageLoaded(true)}
            />
            {verified && (
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                <svg className="w-2 h-2 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-palanquin text-lg lg:text-xl font-bold text-slate-900 truncate">
              {customerName}
            </h3>
            <div className="flex items-center gap-2 text-xs lg:text-sm text-slate-600">
              <svg className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="truncate">{location}</span>
              {verified && (
                <span className="text-green-600 font-medium whitespace-nowrap">• Verified</span>
              )}
            </div>
          </div>
        </div>

        <div className="text-right flex-shrink-0 ml-2 border">
          <div className="flex items-center gap-1 mb-1">
            {renderStars(rating)}
          </div>
          <div className="text-sm font-semibold text-slate-900">{rating}/5</div>
        </div>
      </div> */}

      {/* Header - Responsive layout */}
      <div className="flex items-start justify-between mb-4 flex-shrink-0 gap-3">
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <div className="relative flex-shrink-0">
            {!imageLoaded && (
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gray-200 rounded-full animate-pulse"></div>
            )}
            <img
              src={imgURL}
              alt={customerName}
              className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full object-cover border-2 sm:border-4 border-coral-red/20 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                } transition-opacity`}
              onLoad={() => setImageLoaded(true)}
            />
            {verified && (
              <div className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 bg-green-500 rounded-full p-0.5 sm:p-1">
                <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="font-palanquin text-base sm:text-lg lg:text-xl font-bold text-slate-900 truncate leading-tight">
              {customerName}
            </h3>
            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-slate-600 mt-0.5 sm:mt-1">
              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="truncate flex-1">{location}</span>
              {verified && (
                <span className="text-green-600 font-medium whitespace-nowrap text-xs sm:text-sm">
                  <span className="hidden sm:inline">• Verified</span>
                  <span className="sm:hidden">✓</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Rating section - always on right */}
        <div className="text-right flex-shrink-0 ml-2">
          <div className="flex items-center justify-end gap-0.5 sm:gap-1 mb-1">
            {renderStars(rating).map((star, index) => (
              <div key={index} className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5">
                {star}
              </div>
            ))}
          </div>
          <div className="text-xs sm:text-sm lg:text-base font-semibold text-slate-900">
            {rating}/5
          </div>
        </div>
      </div>

      {/* Product Info - keep existing but add flex-shrink-0 */}
      {productPurchased && (
        <div className="mb-4 p-3 bg-gray-50 rounded-lg flex-shrink-0">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="truncate">Purchased: <span className="font-medium text-slate-900">{productPurchased}</span></span>
          </div>
        </div>
      )}

      {/* Review Content - make this flexible */}
      <div className="mb-4 flex-1 flex flex-col">
        <p className="text-slate-700 leading-relaxed font-montserrat text-sm lg:text-base flex-1">
          "{displayFeedback}"
        </p>

        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-coral-red hover:text-coral-red/80 font-medium text-sm transition-colors self-start"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>

      {/* Footer - keep at bottom */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 flex-shrink-0">
        <div className="text-xs lg:text-sm text-slate-500">
          {formatDate(date)}
        </div>

        <div className="flex items-center gap-2 lg:gap-4">
          <button className="flex items-center gap-1 text-xs lg:text-sm text-slate-600 hover:text-coral-red transition-colors">
            <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            <span className="hidden sm:inline">Helpful</span>
          </button>

          <button className="flex items-center gap-1 text-xs lg:text-sm text-slate-600 hover:text-coral-red transition-colors">
            <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>
    </div>

  );
};

export default ReviewCard;
