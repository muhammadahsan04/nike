// import React from "react";
// import { star } from "../assets/icons";
// import ReviewCard from "../components/ReviewCard";
// import { reviews } from "../constants";

// const CustomerReview = () => {
//   return (
//     <div className="flex flex-col justify-center items-center">
//       <div className="flex justify-center items-center text-center flex-col">
//         <h2 className="text-4xl font-semibold">
//           What Our <span className="text-coral-red">Customers</span> Say?
//         </h2>
//         <p className="m-auto mt-4 max-w-lg text-center info-text">
//           Hear genuine stories from our satisfied customers about their
//           exceptional experiences with us.
//         </p>
//       </div>

//       <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
//         {reviews.map((review, index) => (
//           <ReviewCard
//             key={index}
//             imgURL={review.imgURL}
//             customerName={review.customerName}
//             rating={review.rating}
//             feedback={review.feedback}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CustomerReview;

import React, { useState, useEffect } from "react";
import { star } from "../assets/icons";
import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReview = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(3);
  const [filteredReviews, setFilteredReviews] = useState(reviews);
  const [selectedRating, setSelectedRating] = useState('all');

  // Responsive reviews per page
  // useEffect(() => {
  //   const updateReviewsPerPage = () => {
  //     if (window.innerWidth < 768) {
  //       setReviewsPerPage(1);
  //     } else if (window.innerWidth < 1024) {
  //       setReviewsPerPage(2);
  //     } else {
  //       setReviewsPerPage(3);
  //     }
  //   };

  //   updateReviewsPerPage();
  //   window.addEventListener('resize', updateReviewsPerPage);
  //   return () => window.removeEventListener('resize', updateReviewsPerPage);
  // }, []);

  useEffect(() => {
    const updateReviewsPerPage = () => {
      if (window.innerWidth < 980) {
        setReviewsPerPage(1); // 1 column, 2 rows = 2 cards
      } else if (window.innerWidth < 1024) {
        setReviewsPerPage(1); // 2 columns, 2 rows = 4 cards
      } else if (window.innerWidth < 1440) {
        setReviewsPerPage(2); // 2 columns, 2 rows = 4 cards (lg)
      } else {
        setReviewsPerPage(2); // 3 columns, 2 rows = 6 cards (xl)
      }
    };

    updateReviewsPerPage();
    window.addEventListener('resize', updateReviewsPerPage);
    return () => window.removeEventListener('resize', updateReviewsPerPage);
  }, []);


  // Filter reviews by rating
  useEffect(() => {
    if (selectedRating === 'all') {
      setFilteredReviews(reviews);
    } else {
      const rating = parseFloat(selectedRating);
      setFilteredReviews(reviews.filter(review => review.rating >= rating));
    }
    setCurrentPage(0);
  }, [selectedRating]);

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);
  const currentReviews = filteredReviews.slice(
    currentPage * reviewsPerPage,
    (currentPage + 1) * reviewsPerPage
  );

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  const ratingDistribution = {
    5: reviews.filter(r => r.rating === 5).length,
    4: reviews.filter(r => r.rating >= 4 && r.rating < 5).length,
    3: reviews.filter(r => r.rating >= 3 && r.rating < 4).length,
    2: reviews.filter(r => r.rating >= 2 && r.rating < 3).length,
    1: reviews.filter(r => r.rating >= 1 && r.rating < 2).length,
  };

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

  return (
    <section className="px-4 padding-y sm:padding bg-gradient-to-b from-white to-slate-50">
      <div className="max-container">

        {/* Header Section */}
        <div className="text-center mb-16">
          {/* <div className="inline-block bg-coral-red text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            Customer Reviews
          </div>

          <h2 className="text-4xl lg:text-5xl font-palanquin font-bold mb-6">
            What Our <span className="text-coral-red">Customers</span> Say?
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed mb-8">
            Hear genuine stories from our satisfied customers about their
            exceptional experiences with us. Real reviews from real people.
          </p> */}

          <div className="inline-block bg-coral-red text-white px-3 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Customer Reviews
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-palanquin font-bold mb-4 sm:mb-6">
            What Our <span className="text-coral-red">Customers</span> Say?
          </h2>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8">
            Hear genuine stories from our satisfied customers about their
            exceptional experiences with us. Real reviews from real people.
          </p>

          {/* Responsive Submit and Cancel Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md mx-auto mb-8 sm:mb-12">
            <button className="bg-coral-red text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-coral-red/90 transition-colors text-sm sm:text-base">
              Write a Review
            </button>

            <button className="bg-gray-200 text-gray-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors text-sm sm:text-base">
              View All Reviews
            </button>
          </div>


          {/* Rating Overview */}
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

              {/* Average Rating */}
              <div className="text-center">
                <div className="text-5xl font-bold text-coral-red mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-2">
                  {renderStars(averageRating)}
                </div>
                <div className="text-slate-600">
                  Based on {totalReviews} reviews
                </div>
              </div>

              {/* Rating Distribution */}
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-2">
                    <span className="text-sm font-medium w-8">{rating}★</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-coral-red h-2 rounded-full transition-all duration-500"
                        style={{
                          width: `${(ratingDistribution[rating] / totalReviews) * 100}%`
                        }}
                      ></div>
                    </div>
                    <span className="text-sm text-slate-600 w-8">
                      {ratingDistribution[rating]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Verified Reviews</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-blue-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="font-medium">Trusted Platform</span>
                </div>
                <div className="text-sm text-slate-600">
                  98% recommend Nike products
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedRating('all')}
            className={`px-6 py-3 rounded-full font-medium transition-all ${selectedRating === 'all'
              ? 'bg-coral-red text-white shadow-lg'
              : 'bg-white text-slate-600 hover:bg-coral-red hover:text-white border border-gray-200'
              }`}
          >
            All Reviews ({reviews.length})
          </button>

          {[5, 4, 3].map((rating) => (
            <button
              key={rating}
              onClick={() => setSelectedRating(rating.toString())}
              className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${selectedRating === rating.toString()
                ? 'bg-coral-red text-white shadow-lg'
                : 'bg-white text-slate-600 hover:bg-coral-red hover:text-white border border-gray-200'
                }`}
            >
              <span>{rating}★ & up</span>
              <span className="text-sm">({reviews.filter(r => r.rating >= rating).length})</span>
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentReviews.map((review) => (
            <ReviewCard
              key={review.id}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
              location={review.location}
              verified={review.verified}
              date={review.date}
              productPurchased={review.productPurchased}
            />
          ))}
        </div> */}

        {/* Pagination */}
        {/* {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="px-4 py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-gray-300"
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
              className="px-4 py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-gray-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )} */}

        {/* // Replace lines 236-291 with this updated code: */}

        {/* Reviews Grid */}
        <div className="relative h-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-12">
            {currentReviews.map((review, index) => (
              <div
                key={`${currentPage}-${review.id}`}
                className="animate-slideInUp h-full"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className="h-full">
                  <ReviewCard
                    imgURL={review.imgURL}
                    customerName={review.customerName}
                    rating={review.rating}
                    feedback={review.feedback}
                    location={review.location}
                    verified={review.verified}
                    date={review.date}
                    productPurchased={review.productPurchased}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {/* {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="px-4 py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-gray-300"
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
              className="px-4 py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-gray-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )} */}


        {/* Reviews Grid */}
        {/* <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {currentReviews.map((review, index) => (
              <div
                key={`${currentPage}-${review.id}`}
                className="animate-slideInUp h-full"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className="h-full">
                  <ReviewCard
                    imgURL={review.imgURL}
                    customerName={review.customerName}
                    rating={review.rating}
                    feedback={review.feedback}
                    location={review.location}
                    verified={review.verified}
                    date={review.date}
                    productPurchased={review.productPurchased}
                  />
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Pagination */}
        {/* {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-gray-300 flex items-center justify-center"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="sm:hidden">Previous</span>
            </button>

            <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
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
              className="w-full sm:w-auto px-3 sm:px-4 py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-gray-300 flex items-center justify-center"
            >
              <span className="sm:hidden">Next</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )} */}
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 sm:gap-4">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="p-2 sm:px-4 sm:py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-gray-300 flex items-center justify-center"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-1 sm:gap-2 items-center">
              {/* Show first page */}
              <button
                onClick={() => setCurrentPage(0)}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-medium transition-all text-sm sm:text-base ${currentPage === 0
                  ? 'bg-coral-red text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-coral-red hover:text-white border border-gray-200'
                  }`}
              >
                1
              </button>

              {/* Show dots if there are pages between first and current */}
              {currentPage > 2 && (
                <span className="px-2 text-slate-400">...</span>
              )}

              {/* Show current page and adjacent pages */}
              {Array.from({ length: totalPages }, (_, i) => {
                if (i === 0 || i === totalPages - 1) return null; // Skip first and last
                if (i < currentPage - 1 || i > currentPage + 1) return null; // Skip distant pages

                return (
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
                );
              })}

              {/* Show dots if there are pages between current and last */}
              {currentPage < totalPages - 3 && (
                <span className="px-2 text-slate-400">...</span>
              )}

              {/* Show last page */}
              {totalPages > 1 && (
                <button
                  onClick={() => setCurrentPage(totalPages - 1)}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg font-medium transition-all text-sm sm:text-base ${currentPage === totalPages - 1
                    ? 'bg-coral-red text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-coral-red hover:text-white border border-gray-200'
                    }`}
                >
                  {totalPages}
                </button>
              )}
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 sm:px-4 sm:py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-gray-300 flex items-center justify-center"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}


        {/* Pagination */}
        {/* {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="px-4 py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-gray-300"
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
              className="px-4 py-2 rounded-lg border border-gray-300 text-slate-600 hover:bg-coral-red hover:text-white hover:border-coral-red transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-gray-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )} */}

        {/* Call to Action */}
        {/* <div className="text-center mt-16 bo">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
            <p className="text-slate-600 mb-6">
              Have you purchased from us? We'd love to hear about your experience!
            </p>
            <button className="bg-coral-red text-white px-8 py-3 rounded-lg font-medium hover:bg-coral-red/90 transition-colors">
              Write a Review
            </button>
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Share Your Experience</h3>
            <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6">
              Have you purchased from us? We'd love to hear about your experience!
            </p>

            {/* Responsive Submit and Cancel Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-coral-red text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-coral-red/90 transition-colors text-sm sm:text-base">
                Write a Review
              </button>

              <button className="bg-gray-200 text-gray-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors text-sm sm:text-base">
                Maybe Later
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CustomerReview;
