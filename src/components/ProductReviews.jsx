// import React, { useState } from 'react';
// import { useReviews } from '../context/ReviewsContext';
// import { useAuth } from '../context/AuthContext';
// import { star } from '../assets/icons';

// const ProductReviews = ({ productId }) => {
//     const { getProductReviews, addReview, getAverageRating } = useReviews();
//     const { user } = useAuth();
//     const [showReviewForm, setShowReviewForm] = useState(false);
//     const [newReview, setNewReview] = useState({
//         rating: 5,
//         comment: ''
//     });

//     const reviews = getProductReviews(productId);
//     const averageRating = getAverageRating(productId);

//     const handleSubmitReview = (e) => {
//         e.preventDefault();
//         if (!user) {
//             alert('Please login to leave a review');
//             return;
//         }

//         addReview(productId, {
//             ...newReview,
//             userName: user.name,
//             userAvatar: user.avatar
//         });

//         setNewReview({ rating: 5, comment: '' });
//         setShowReviewForm(false);
//     };

//     const renderStars = (rating) => {
//         return Array.from({ length: 5 }, (_, i) => (
//             <img
//                 key={i}
//                 src={star}
//                 alt="star"
//                 className={`w-4 h-4 ${i < rating ? 'opacity-100' : 'opacity-30'}`}
//             />
//         ));
//     };

//     return (
//         <div className="mt-8">
//             <div className="flex justify-between items-center mb-6">
//                 <div>
//                     <h3 className="text-2xl font-bold">Customer Reviews</h3>
//                     <div className="flex items-center mt-2">
//                         <div className="flex">{renderStars(Math.round(averageRating))}</div>
//                         <span className="ml-2 text-sm text-gray-600">
//                             {averageRating} out of 5 ({reviews.length} reviews)
//                         </span>
//                     </div>
//                 </div>

//                 <button
//                     onClick={() => setShowReviewForm(!showReviewForm)}
//                     className="bg-coral-red text-white px-4 py-2 rounded-lg hover:bg-coral-red/90"
//                 >
//                     Write a Review
//                 </button>
//             </div>

//             {showReviewForm && (
//                 <form onSubmit={handleSubmitReview} className="mb-6 p-4 bg-gray-50 rounded-lg">
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium mb-2">Rating</label>
//                         <div className="flex space-x-1">
//                             {[1, 2, 3, 4, 5].map((rating) => (
//                                 <button
//                                     key={rating}
//                                     type="button"
//                                     onClick={() => setNewReview({ ...newReview, rating })}
//                                     className="focus:outline-none"
//                                 >
//                                     <img
//                                         src={star}
//                                         alt="star"
//                                         className={`w-6 h-6 ${rating <= newReview.rating ? 'opacity-100' : 'opacity-30'}`}
//                                     />
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-sm font-medium mb-2">Comment</label>
//                         <textarea
//                             value={newReview.comment}
//                             onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//                             rows="4"
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                             placeholder="Share your experience with this product..."
//                             required
//                         />
//                     </div>

//                     <div className="flex space-x-2">
//                         <button
//                             type="submit"
//                             className="bg-coral-red text-white px-4 py-2 rounded-lg hover:bg-coral-red/90"
//                         >
//                             Submit Review
//                         </button>
//                         <button
//                             type="button"
//                             onClick={() => setShowReviewForm(false)}
//                             className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </form>
//             )}

//             <div className="space-y-4">
//                 {reviews.length === 0 ? (
//                     <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
//                 ) : (
//                     reviews.map((review) => (
//                         <div key={review.id} className="border-b pb-4">
//                             <div className="flex items-center mb-2">
//                                 <img
//                                     src={review.userAvatar}
//                                     alt={review.userName}
//                                     className="w-8 h-8 rounded-full mr-3"
//                                 />
//                                 <div>
//                                     <p className="font-medium">{review.userName}</p>
//                                     <div className="flex items-center">
//                                         <div className="flex mr-2">{renderStars(review.rating)}</div>
//                                         <span className="text-sm text-gray-600">
//                                             {new Date(review.date).toLocaleDateString()}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <p className="text-gray-700">{review.comment}</p>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default ProductReviews;


// import React, { useState, useEffect } from 'react';
// import { productReviews } from '../constants';

// const ProductReviews = ({ productId }) => {
//     const [reviews, setReviews] = useState([]);
//     const [sortBy, setSortBy] = useState('newest');
//     const [filterRating, setFilterRating] = useState(0);
//     const [showReviewForm, setShowReviewForm] = useState(false);
//     const [newReview, setNewReview] = useState({
//         rating: 5,
//         comment: '',
//         userName: ''
//     });
//     const [isSubmitting, setIsSubmitting] = useState(false);


//     useEffect(() => {
//         const productReviewsData = productReviews[productId] || [];
//         let filteredReviews = [...productReviewsData];

//         // Filter by rating
//         if (filterRating > 0) {
//             filteredReviews = filteredReviews.filter(review => review.rating === filterRating);
//         }

//         // Sort reviews
//         filteredReviews.sort((a, b) => {
//             switch (sortBy) {
//                 case 'newest':
//                     return new Date(b.date) - new Date(a.date);
//                 case 'oldest':
//                     return new Date(a.date) - new Date(b.date);
//                 case 'highest':
//                     return b.rating - a.rating;
//                 case 'lowest':
//                     return a.rating - b.rating;
//                 case 'helpful':
//                     return b.helpful - a.helpful;
//                 default:
//                     return 0;
//             }
//         });

//         setReviews(filteredReviews);
//     }, [productId, sortBy, filterRating]);

//     // Then update your submit handler to use this state
//     const handleSubmitReview = async (e) => {
//         e.preventDefault();

//         if (!newReview.comment.trim()) {
//             alert('Please write a review comment');
//             return;
//         }

//         setIsSubmitting(true);

//         try {
//             // Simulate API call
//             await new Promise(resolve => setTimeout(resolve, 1500));

//             const review = {
//                 id: Date.now(),
//                 userName: user?.name || 'Anonymous User',
//                 rating: newReview.rating,
//                 comment: newReview.comment.trim(),
//                 date: new Date().toISOString(),
//                 verified: !!user,
//                 helpful: 0
//             };

//             setReviews(prev => [review, ...prev]);
//             setNewReview({ rating: 5, comment: '' });
//             setShowReviewForm(false);

//             // Show success message
//             alert('Review submitted successfully!');
//         } catch (error) {
//             alert('Failed to submit review. Please try again.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };


//     const calculateAverageRating = () => {
//         if (reviews.length === 0) return 0;
//         const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
//         return (sum / reviews.length).toFixed(1);
//     };

//     const getRatingDistribution = () => {
//         const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
//         reviews.forEach(review => {
//             distribution[review.rating]++;
//         });
//         return distribution;
//     };

//     const renderStars = (rating, size = 'text-base') => {
//         const stars = [];
//         for (let i = 1; i <= 5; i++) {
//             stars.push(
//                 <span
//                     key={i}
//                     className={`${size} ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                 >
//                     ★
//                 </span>
//             );
//         }
//         return stars;
//     };

//     const distribution = getRatingDistribution();
//     const averageRating = calculateAverageRating();

//     return (
//         <div className="space-y-6">
//             {/* Reviews Summary */}
//             <div className="bg-gray-50 p-6 rounded-lg">
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                     <div>
//                         <h3 className="text-2xl font-bold mb-2">Customer Reviews</h3>
//                         <div className="flex items-center space-x-2">
//                             <div className="flex">{renderStars(Math.round(averageRating), 'text-xl')}</div>
//                             <span className="text-xl font-semibold">{averageRating}</span>
//                             <span className="text-gray-600">({reviews.length} reviews)</span>
//                         </div>
//                     </div>

//                     <button
//                         onClick={() => setShowReviewForm(!showReviewForm)}
//                         className="mt-4 md:mt-0 px-6 py-2 bg-coral-red text-white rounded-lg hover:bg-coral-red/90 transition-colors"
//                     >
//                         Write a Review
//                     </button>
//                 </div>

//                 {/* Rating Distribution */}
//                 <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
//                     {[5, 4, 3, 2, 1].map(rating => (
//                         <div key={rating} className="flex items-center space-x-2">
//                             <span className="text-sm">{rating}★</span>
//                             <div className="flex-1 bg-gray-200 rounded-full h-2">
//                                 <div
//                                     className="bg-yellow-400 h-2 rounded-full"
//                                     style={{
//                                         width: `${reviews.length > 0 ? (distribution[rating] / reviews.length) * 100 : 0}%`
//                                     }}
//                                 ></div>
//                             </div>
//                             <span className="text-sm text-gray-600">{distribution[rating]}</span>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* Review Form */}
//             {showReviewForm && (
//                 <div className="bg-white border border-gray-200 rounded-lg p-6">
//                     <h4 className="text-lg font-semibold mb-4">Write Your Review</h4>
//                     <form onSubmit={handleSubmitReview} className="space-y-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Your Name
//                             </label>
//                             <input
//                                 type="text"
//                                 value={newReview.userName}
//                                 onChange={(e) => setNewReview(prev => ({ ...prev, userName: e.target.value }))}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 placeholder="Enter your name"
//                                 required
//                             />
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Rating
//                             </label>
//                             <div className="flex space-x-1">
//                                 {[1, 2, 3, 4, 5].map(star => (
//                                     <button
//                                         key={star}
//                                         type="button"
//                                         onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
//                                         className={`text-2xl ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'
//                                             } hover:text-yellow-400 transition-colors`}
//                                     >
//                                         ★
//                                     </button>
//                                 ))}
//                             </div>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Your Review
//                             </label>
//                             <textarea
//                                 value={newReview.comment}
//                                 onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
//                                 rows={4}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 placeholder="Share your experience with this product..."
//                                 required
//                             />
//                         </div>

//                         {/* Submit and Cancel Buttons */}
//                         <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6">
//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className="flex-1 bg-coral-red text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-coral-red/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base font-medium"
//                             >
//                                 {isSubmitting ? 'Submitting...' : 'Submit Review'}
//                             </button>

//                             <button
//                                 type="button"
//                                 onClick={() => {
//                                     setShowReviewForm(false);
//                                     setNewReview({ rating: 5, comment: '' });
//                                 }}
//                                 className="flex-1 bg-gray-200 text-gray-700 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-300 transition-colors text-sm sm:text-base font-medium"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             )}




//             {/* Filter and Sort Controls */}
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
//                 <div className="flex items-center space-x-4">
//                     <div>
//                         <label className="text-sm font-medium text-gray-700 mr-2">Filter by rating:</label>
//                         <select
//                             value={filterRating}
//                             onChange={(e) => setFilterRating(parseInt(e.target.value))}
//                             className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-coral-red"
//                         >
//                             <option value={0}>All ratings</option>
//                             <option value={5}>5 stars</option>
//                             <option value={4}>4 stars</option>
//                             <option value={3}>3 stars</option>
//                             <option value={2}>2 stars</option>
//                             <option value={1}>1 star</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div>
//                     <label className="text-sm font-medium text-gray-700 mr-2">Sort by:</label>
//                     <select
//                         value={sortBy}
//                         onChange={(e) => setSortBy(e.target.value)}
//                         className="px-3 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-coral-red"
//                     >
//                         <option value="newest">Newest first</option>
//                         <option value="oldest">Oldest first</option>
//                         <option value="highest">Highest rated</option>
//                         <option value="lowest">Lowest rated</option>
//                         <option value="helpful">Most helpful</option>
//                     </select>
//                 </div>
//             </div>

//             {/* Reviews List */}
//             {/* <div className="space-y-4 border-4">
//                 {reviews.length === 0 ? (
//                     <div className="text-center py-8">
//                         <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.66-.4c-.54-.18-1.12-.3-1.34-.48L7 19H3v-4l.35-2c.18-.22.3-.8.48-1.34.4-.88.6-1.74.4-2.66C4 8.582 7.582 5 12 5s8 3.582 8 7z" />
//                         </svg>
//                         <p className="text-gray-500">No reviews found for the selected filters.</p>
//                         <button
//                             onClick={() => {
//                                 setFilterRating(0);
//                                 setSortBy('newest');
//                             }}
//                             className="mt-2 text-coral-red hover:underline"
//                         >
//                             Clear filters
//                         </button>
//                     </div>
//                 ) : (
//                     reviews.map((review) => (
//                         <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-6">
//                             <div className="flex items-start justify-between mb-3">
//                                 <div className="flex items-center space-x-3">
//                                     <div className="w-10 h-10 bg-coral-red text-white rounded-full flex items-center justify-center font-semibold">
//                                         {review.userName.charAt(0).toUpperCase()}
//                                     </div>
//                                     <div>
//                                         <div className="flex items-center space-x-2">
//                                             <h5 className="font-semibold text-gray-900">{review.userName}</h5>
//                                             {review.verified && (
//                                                 <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                                                     <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                                                         <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                                                     </svg>
//                                                     Verified Purchase
//                                                 </span>
//                                             )}
//                                         </div>
//                                         <div className="flex items-center space-x-2 mt-1">
//                                             <div className="flex">{renderStars(review.rating, 'text-sm')}</div>
//                                             <span className="text-sm text-gray-500">
//                                                 {new Date(review.date).toLocaleDateString('en-US', {
//                                                     year: 'numeric',
//                                                     month: 'long',
//                                                     day: 'numeric'
//                                                 })}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>

//                             <div className="flex items-center justify-between">
//                                 <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-coral-red transition-colors">
//                                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
//                                     </svg>
//                                     <span>Helpful ({review.helpful})</span>
//                                 </button>

//                                 <button className="text-sm text-gray-500 hover:text-coral-red transition-colors">
//                                     Report
//                                 </button>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div> */}


//             {/* Reviews List */}
//             <div className="space-y-3 sm:space-y-4 border-4">
//                 {reviews.length === 0 ? (
//                     <div className="text-center py-6 sm:py-8">
//                         <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-gray-300 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.66-.4c-.54-.18-1.12-.3-1.34-.48L7 19H3v-4l.35-2c.18-.22.3-.8.48-1.34.4-.88.6-1.74.4-2.66C4 8.582 7.582 5 12 5s8 3.582 8 7z" />
//                         </svg>
//                         <p className="text-sm sm:text-base text-gray-500 mb-3 sm:mb-4">No reviews found for the selected filters.</p>
//                         <button
//                             onClick={() => {
//                                 setFilterRating(0);
//                                 setSortBy('newest');
//                             }}
//                             className="mt-2 text-sm sm:text-base text-coral-red hover:underline px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-coral-red/10 transition-colors"
//                         >
//                             Clear filters
//                         </button>
//                     </div>
//                 ) : (
//                     reviews.map((review) => (
//                         <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
//                             <div className="flex items-start justify-between mb-2 sm:mb-3">
//                                 <div className="flex items-center space-x-2 sm:space-x-3">
//                                     <div className="w-8 h-8 sm:w-10 sm:h-10 bg-coral-red text-white rounded-full flex items-center justify-center font-semibold text-sm sm:text-base">
//                                         {review.userName.charAt(0).toUpperCase()}
//                                     </div>
//                                     <div>
//                                         <div className="flex items-center space-x-1 sm:space-x-2">
//                                             <h5 className="font-semibold text-sm sm:text-base text-gray-900">{review.userName}</h5>
//                                             {review.verified && (
//                                                 <span className="inline-flex items-center px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
//                                                     <svg className="w-2 h-2 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" fill="currentColor" viewBox="0 0 20 20">
//                                                         <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                                                     </svg>
//                                                     <span className="hidden sm:inline">Verified Purchase</span>
//                                                     <span className="sm:hidden">Verified</span>
//                                                 </span>
//                                             )}
//                                         </div>
//                                         <div className="flex items-center space-x-1 sm:space-x-2 mt-1">
//                                             <div className="flex">{renderStars(review.rating, 'text-xs sm:text-sm')}</div>
//                                             <span className="text-xs sm:text-sm text-gray-500">
//                                                 {new Date(review.date).toLocaleDateString('en-US', {
//                                                     year: 'numeric',
//                                                     month: 'long',
//                                                     day: 'numeric'
//                                                 })}
//                                             </span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">{review.comment}</p>

//                             <div className="flex items-center justify-between">
//                                 <button className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500 hover:text-coral-red transition-colors px-2 py-1 rounded-lg hover:bg-gray-50">
//                                     <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
//                                     </svg>
//                                     <span>Helpful ({review.helpful})</span>
//                                 </button>

//                                 <button className="text-xs sm:text-sm text-gray-500 hover:text-coral-red transition-colors px-2 py-1 rounded-lg hover:bg-gray-50">
//                                     Report
//                                 </button>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>

//             {/* Load More Button (if needed) */}
//             {reviews.length > 0 && reviews.length >= 5 && (
//                 <div className="text-center">
//                     <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
//                         Load More Reviews
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ProductReviews;


import React, { useState, useEffect } from 'react';
import { productReviews } from '../constants';
import { useAuth } from '../context/AuthContext';

const ProductReviews = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [sortBy, setSortBy] = useState('newest');
    const [filterRating, setFilterRating] = useState(0);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [newReview, setNewReview] = useState({
        rating: 5,
        comment: '',
        userName: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        const productReviewsData = productReviews[productId] || [];
        let filteredReviews = [...productReviewsData];

        // Filter by rating
        if (filterRating > 0) {
            filteredReviews = filteredReviews.filter(review => review.rating === filterRating);
        }

        // Sort reviews
        filteredReviews.sort((a, b) => {
            switch (sortBy) {
                case 'newest':
                    return new Date(b.date) - new Date(a.date);
                case 'oldest':
                    return new Date(a.date) - new Date(b.date);
                case 'highest':
                    return b.rating - a.rating;
                case 'lowest':
                    return a.rating - b.rating;
                case 'helpful':
                    return b.helpful - a.helpful;
                default:
                    return 0;
            }
        });

        setReviews(filteredReviews);
    }, [productId, sortBy, filterRating]);

    // Updated submit handler with proper error handling
    const handleSubmitReview = async (e) => {
        e.preventDefault();

        if (!newReview.comment.trim()) {
            // alert('Please write a review comment');
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call - this should succeed
            await new Promise((resolve) => setTimeout(resolve, 1500));

            const review = {
                id: Date.now(),
                userName: newReview.userName || user?.name || 'Anonymous User',
                rating: newReview.rating,
                comment: newReview.comment.trim(),
                date: new Date().toISOString(),
                verified: !!user,
                helpful: 0
            };

            setReviews(prev => [review, ...prev]);
            setNewReview({ rating: 5, comment: '', userName: '' });
            setShowReviewForm(false);

            // Show success message
            // alert('Review submitted successfully!');
        } catch (error) {
            console.error('Review submission error:', error);
            // alert('Failed to submit review. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const calculateAverageRating = () => {
        if (reviews.length === 0) return 0;
        const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
        return (sum / reviews.length).toFixed(1);
    };

    const getRatingDistribution = () => {
        const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        reviews.forEach(review => {
            distribution[review.rating]++;
        });
        return distribution;
    };

    const renderStars = (rating, size = 'text-base') => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`${size} ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    const distribution = getRatingDistribution();
    const averageRating = calculateAverageRating();

    return (
        <div className="space-y-6">
            {/* Reviews Summary */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-2">Customer Reviews</h3>
                        <div className="flex items-center space-x-2">
                            <div className="flex">{renderStars(Math.round(averageRating), 'text-lg sm:text-xl')}</div>
                            <span className="text-lg sm:text-xl font-semibold">{averageRating}</span>
                            <span className="text-sm sm:text-base text-gray-600">({reviews.length} reviews)</span>
                        </div>
                    </div>

                    <button
                        onClick={() => setShowReviewForm(!showReviewForm)}
                        className="mt-4 md:mt-0 px-4 sm:px-6 py-2 bg-coral-red text-white rounded-lg hover:bg-coral-red/90 transition-colors text-sm sm:text-base"
                    >
                        Write a Review
                    </button>
                </div>

                {/* Rating Distribution */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
                    {[5, 4, 3, 2, 1].map(rating => (
                        <div key={rating} className="flex items-center space-x-2">
                            <span className="text-xs sm:text-sm">{rating}★</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-yellow-400 h-2 rounded-full"
                                    style={{
                                        width: `${reviews.length > 0 ? (distribution[rating] / reviews.length) * 100 : 0}%`
                                    }}
                                ></div>
                            </div>
                            <span className="text-xs sm:text-sm text-gray-600">{distribution[rating]}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Review Form */}
            {showReviewForm && (
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg font-semibold mb-4">Write Your Review</h4>
                    <form onSubmit={handleSubmitReview} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                value={newReview.userName}
                                onChange={(e) => setNewReview(prev => ({ ...prev, userName: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red text-sm sm:text-base"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Rating
                            </label>
                            <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                                        className={`text-xl sm:text-2xl ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'
                                            } hover:text-yellow-400 transition-colors`}
                                    >
                                        ★
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Your Review
                            </label>
                            <textarea
                                value={newReview.comment}
                                onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red text-sm sm:text-base"
                                placeholder="Share your experience with this product..."
                                required
                            />
                        </div>

                        {/* Submit and Cancel Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 bg-coral-red text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-coral-red/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base font-medium"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Review'}
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setShowReviewForm(false);
                                    setNewReview({ rating: 5, comment: '', userName: '' });
                                }}
                                disabled={isSubmitting}
                                className="flex-1 bg-gray-200 text-gray-700 py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-gray-300 disabled:opacity-50 transition-colors text-sm sm:text-base font-medium"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Filter and Sort Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                    <div>
                        <label className="text-xs sm:text-sm font-medium text-gray-700 mr-2">Filter by rating:</label>
                        <select
                            value={filterRating}
                            onChange={(e) => setFilterRating(parseInt(e.target.value))}
                            className="px-3 py-1 border border-gray-300 rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-coral-red"
                        >
                            <option value={0}>All ratings</option>
                            <option value={5}>5 stars</option>
                            <option value={4}>4 stars</option>
                            <option value={3}>3 stars</option>
                            <option value={2}>2 stars</option>
                            <option value={1}>1 star</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="text-xs sm:text-sm font-medium text-gray-700 mr-2">Sort by:</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-coral-red"
                    >
                        <option value="newest">Newest first</option>
                        <option value="oldest">Oldest first</option>
                        <option value="highest">Highest rated</option>
                        <option value="lowest">Lowest rated</option>
                        <option value="helpful">Most helpful</option>
                    </select>
                </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-3 sm:space-y-4">
                {reviews.length === 0 ? (
                    <div className="text-center py-6 sm:py-8">
                        <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-gray-300 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-2.66-.4c-.54-.18-1.12-.3-1.34-.48L7 19H3v-4l.35-2c.18-.22.3-.8.48-1.34.4-.88.6-1.74.4-2.66C4 8.582 7.582 5 12 5s8 3.582 8 7z" />
                        </svg>
                        <p className="text-sm sm:text-base text-gray-500 mb-3 sm:mb-4">No reviews found for the selected filters.</p>
                        <button
                            onClick={() => {
                                setFilterRating(0);
                                setSortBy('newest');
                            }}
                            className="mt-2 text-sm sm:text-base text-coral-red hover:underline px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-coral-red/10 transition-colors"
                        >
                            Clear filters
                        </button>
                    </div>
                ) : (
                    reviews.map((review) => (
                        <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                            <div className="flex items-start justify-between mb-2 sm:mb-3">
                                <div className="flex items-center space-x-2 sm:space-x-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-coral-red text-white rounded-full flex items-center justify-center font-semibold text-sm sm:text-base">
                                        {review.userName.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-1 sm:space-x-2">
                                            <h5 className="font-semibold text-sm sm:text-base text-gray-900">{review.userName}</h5>
                                            {review.verified && (
                                                <span className="inline-flex items-center px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                    <svg className="w-2 h-2 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="hidden sm:inline">Verified Purchase</span>
                                                    <span className="sm:hidden">Verified</span>
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center space-x-1 sm:space-x-2 mt-1">
                                            <div className="flex">{renderStars(review.rating, 'text-xs sm:text-sm')}</div>
                                            <span className="text-xs sm:text-sm text-gray-500">
                                                {new Date(review.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">{review.comment}</p>

                            <div className="flex items-center justify-between">
                                <button className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500 hover:text-coral-red transition-colors px-2 py-1 rounded-lg hover:bg-gray-50">
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                    <span>Helpful ({review.helpful})</span>
                                </button>

                                <button className="text-xs sm:text-sm text-gray-500 hover:text-coral-red transition-colors px-2 py-1 rounded-lg hover:bg-gray-50">
                                    Report
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductReviews;
