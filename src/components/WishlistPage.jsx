import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { star } from '../assets/icons';

const WishlistPage = () => {
    const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
    const { addToCart } = useCart();

    const handleMoveToCart = (product) => {
        addToCart(product);
        removeFromWishlist(product.id);
    };

    if (wishlist.items.length === 0) {
        return (
            <div className="max-container padding-x py-20">
                <div className="text-center">
                    <svg className="w-24 h-24 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <h2 className="text-3xl font-bold text-gray-700 mb-4">Your Wishlist is Empty</h2>
                    <p className="text-gray-500 mb-8">Save items you love to your wishlist and shop them later.</p>
                    <a
                        href="#products"
                        className="bg-coral-red text-white px-8 py-3 rounded-lg hover:bg-coral-red/90 inline-block"
                    >
                        Continue Shopping
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="max-container padding-x py-20">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-palanquin font-bold">
                    My <span className="text-coral-red">Wishlist</span>
                </h1>
                <div className="flex items-center gap-4">
                    <span className="text-gray-600">{wishlist.items.length} items</span>
                    <button
                        onClick={clearWishlist}
                        className="text-red-500 hover:text-red-700 text-sm"
                    >
                        Clear All
                    </button>
                </div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {wishlist.items.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative">
                            <img
                                src={item.imgURL}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                            />
                            <button
                                onClick={() => removeFromWishlist(item.id)}
                                className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-red-50"
                            >
                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-4">
                            <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>

                            <div className="flex items-center mb-3">
                                <img src={star} alt="rating" className="w-4 h-4 mr-1" />
                                <span className="text-sm text-gray-600">{item.rating}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-coral-red">{item.price}</span>
                                <button
                                    onClick={() => handleMoveToCart(item)}
                                    className="bg-coral-red text-white px-4 py-2 rounded-lg hover:bg-coral-red/90 text-sm"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishlistPage;
