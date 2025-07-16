// import React, { useState } from 'react';
// import { useCart } from '../context/CartContext';
// import { star } from '../assets/icons';

// const ProductCard = ({ imgURL, name, price, id, rating = 4.5 }) => {
//     const { addToCart } = useCart();
//     const [isAdding, setIsAdding] = useState(false);

//     const handleAddToCart = () => {
//         setIsAdding(true);
//         addToCart({
//             id: id || name,
//             name,
//             price,
//             imgURL,
//             rating
//         });

//         setTimeout(() => setIsAdding(false), 1000);
//     };

//     return (
//         <div className="flex flex-1 flex-col w-full max-sm:w-full bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
//             <div className="relative overflow-hidden rounded-t-lg">
//                 <img
//                     src={imgURL}
//                     alt={name}
//                     className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
//                     <img src={star} alt="rating" className="w-4 h-4" />
//                     <span className="text-xs ml-1">{rating}</span>
//                 </div>
//             </div>

//             <div className="p-4 flex-1 flex flex-col justify-between">
//                 <div>
//                     <h3 className="text-xl font-semibold text-slate-gray mb-2">{name}</h3>
//                     <p className="text-2xl font-bold text-coral-red">{price}</p>
//                 </div>

//                 <button
//                     onClick={handleAddToCart}
//                     disabled={isAdding}
//                     className={`mt-4 w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${isAdding
//                             ? 'bg-green-500 text-white'
//                             : 'bg-coral-red text-white hover:bg-coral-red/90 hover:shadow-lg'
//                         }`}
//                 >
//                     {isAdding ? 'Added!' : 'Add to Cart'}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;


import React, { useState } from 'react';
import { star } from '../assets/icons';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const ProductCard = ({ id, imgURL, name, price, rating, description }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const { addToCart } = useCart();
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

    const isInWishlist = wishlist.items.some(item => item.id === id);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        addToCart({ id, imgURL, name, price, rating, description });
    };

    const handleWishlistToggle = (e) => {
        e.stopPropagation();
        if (isInWishlist) {
            removeFromWishlist(id);
        } else {
            addToWishlist({ id, imgURL, name, price, rating, description });
        }
    };

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <span key={i} className="text-yellow-400">★</span>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <span key="half" className="text-yellow-400">☆</span>
            );
        }

        const remainingStars = 5 - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(
                <span key={`empty-${i}`} className="text-gray-300">★</span>
            );
        }

        return stars;
    };

    return (
        <div
            className="flex flex-1 flex-col w-full max-sm:w-full relative group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Product Image Container */}
            <div className="relative overflow-hidden rounded-lg bg-gray-100">
                {!imageLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-coral-red border-t-transparent rounded-full animate-spin"></div>
                    </div>
                )}

                <img
                    src={imgURL}
                    alt={name}
                    className={`w-full h-[280px] object-cover transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'
                        } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => setImageLoaded(true)}
                />

                {/* Wishlist Button */}
                <button
                    onClick={handleWishlistToggle}
                    className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${isInWishlist
                            ? 'bg-coral-red text-white'
                            : 'bg-white text-gray-600 hover:bg-coral-red hover:text-white'
                        } ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>

                {/* Quick View Overlay */}
                <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}>
                    <button
                        onClick={handleAddToCart}
                        className="bg-white text-coral-red px-6 py-2 rounded-lg font-semibold hover:bg-coral-red hover:text-white transition-colors duration-200 transform hover:scale-105"
                    >
                        Add to Cart
                    </button>
                </div>

                {/* Sale Badge (if applicable) */}
                {price.includes('$2') && (
                    <div className="absolute top-3 left-3 bg-coral-red text-white px-2 py-1 rounded-md text-xs font-semibold">
                        SALE
                    </div>
                )}
            </div>

            {/* Product Info */}
            <div className="mt-4 flex-1 flex flex-col">
                <div className="flex items-center mb-2">
                    <div className="flex items-center mr-2">
                        {renderStars(rating)}
                    </div>
                    <span className="text-sm text-gray-600">({rating})</span>
                </div>

                <h3 className="text-xl leading-normal font-semibold font-palanquin mb-2 group-hover:text-coral-red transition-colors">
                    {name}
                </h3>

                {description && (
                    <p className="text-sm text-slate-gray mb-3 line-clamp-2 flex-1">
                        {description}
                    </p>
                )}

                <div className="flex items-center justify-between mt-auto">
                    <p className="text-2xl leading-normal font-semibold font-montserrat text-coral-red">
                        {price}
                    </p>

                    <button
                        onClick={handleAddToCart}
                        className="opacity-0 group-hover:opacity-100 bg-coral-red text-white p-2 rounded-full hover:bg-coral-red/90 transition-all duration-200 transform hover:scale-110"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
