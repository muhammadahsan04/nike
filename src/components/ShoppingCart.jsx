// import React, { useState } from 'react';
// import { useCart } from '../context/CartContext';

// const ShoppingCart = () => {
//     const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <>
//             {/* Cart Icon */}
//             <div className="relative">
//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="relative p-2 text-slate-gray hover:text-coral-red transition-colors"
//                 >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
//                     </svg>
//                     {cart.items.length > 0 && (
//                         <span className="absolute -top-1 -right-1 bg-coral-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                             {cart.items.reduce((sum, item) => sum + item.quantity, 0)}
//                         </span>
//                     )}
//                 </button>
//             </div>

//             {/* Cart Dropdown */}
//             {isOpen && (
//                 <div className="absolute right-0 top-16 w-96 bg-white shadow-xl rounded-lg z-50 max-h-96 overflow-y-auto">
//                     <div className="p-4 border-b">
//                         <h3 className="text-lg font-semibold">Shopping Cart</h3>
//                     </div>

//                     {cart.items.length === 0 ? (
//                         <div className="p-4 text-center text-slate-gray">
//                             Your cart is empty
//                         </div>
//                     ) : (
//                         <>
//                             <div className="p-4 space-y-4">
//                                 {cart.items.map((item) => (
//                                     <div key={item.id} className="flex items-center space-x-4">
//                                         <img src={item.imgURL} alt={item.name} className="w-16 h-16 object-cover rounded" />
//                                         <div className="flex-1">
//                                             <h4 className="font-medium">{item.name}</h4>
//                                             <p className="text-coral-red font-semibold">{item.price}</p>
//                                         </div>
//                                         <div className="flex items-center space-x-2">
//                                             <button
//                                                 onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
//                                                 className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
//                                             >
//                                                 -
//                                             </button>
//                                             <span className="w-8 text-center">{item.quantity}</span>
//                                             <button
//                                                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                                                 className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
//                                             >
//                                                 +
//                                             </button>
//                                             <button
//                                                 onClick={() => removeFromCart(item.id)}
//                                                 className="text-red-500 hover:text-red-700 ml-2"
//                                             >
//                                                 ×
//                                             </button>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>

//                             <div className="p-4 border-t">
//                                 <div className="flex justify-between items-center mb-4">
//                                     <span className="font-semibold">Total: ${cart.total.toFixed(2)}</span>
//                                 </div>
//                                 <div className="space-y-2">
//                                     <button className="w-full bg-coral-red text-white py-2 rounded-lg hover:bg-coral-red/90">
//                                         Checkout
//                                     </button>
//                                     <button
//                                         onClick={clearCart}
//                                         className="w-full bg-gray-200 text-slate-gray py-2 rounded-lg hover:bg-gray-300"
//                                     >
//                                         Clear Cart
//                                     </button>
//                                 </div>
//                             </div>
//                         </>
//                     )}
//                 </div>
//             )}
//         </>
//     );
// };

// export default ShoppingCart;


import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

const ShoppingCart = ({ onClose, onProceedToCheckout }) => {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

    // Load cart from localStorage on component mount
    useEffect(() => {
        const savedCart = localStorage.getItem('nike_cart');
        if (savedCart) {
            // You would dispatch this to your cart context
            // This is handled in the CartContext with persistence
        }
    }, []);

    // Save cart to localStorage whenever cart changes
    useEffect(() => {
        localStorage.setItem('nike_cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <>
            {/* Cart Dropdown - Always show when component is rendered */}
            <div className="fixed inset-0 z-50">
                {/* Backdrop */}
                <div
                    className="fixed inset-0 bg-black bg-opacity-50"
                    onClick={onClose}
                ></div>

                {/* Cart Modal */}
                <div className="fixed top-24 inset-x-0 mx-auto border-4 w-[90%] bg-white shadow-xl rounded-lg z-50 overflow-y-auto ">
                    <div className="p-4 border-b flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Shopping Cart</h3>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {cart.items.length === 0 ? (
                        <div className="p-8 text-center">
                            <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h9" />
                            </svg>
                            <p className="text-slate-gray">Your cart is empty</p>
                            <p className="text-sm text-gray-500 mt-2">Add some products to get started</p>
                        </div>
                    ) : (
                        <>
                            <div className="p-4 space-y-4 max-h-64 overflow-y-auto">
                                {cart.items.map((item) => (
                                    <div key={item.id} className="flex items-center space-x-4 p-2 hover:bg-gray-50 rounded-lg">
                                        <img src={item.imgURL} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                        <div className="flex-1">
                                            <h4 className="font-medium text-sm">{item.name}</h4>
                                            <p className="text-coral-red font-semibold text-sm">{item.price}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm hover:bg-gray-300"
                                            >
                                                -
                                            </button>
                                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm hover:bg-gray-300"
                                            >
                                                +
                                            </button>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-500 hover:text-red-700 ml-2 p-1"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 border-t bg-gray-50">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-semibold">Total: ${cart?.total?.toFixed(2)}</span>
                                    <span className="text-sm text-gray-600">
                                        {cart.items.reduce((sum, item) => sum + item.quantity, 0)} items
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <button
                                        onClick={onProceedToCheckout}
                                        className="w-full bg-coral-red text-white py-2 rounded-lg hover:bg-coral-red/90 font-semibold"
                                    >
                                        Proceed to Checkout
                                    </button>
                                    <button
                                        onClick={clearCart}
                                        className="w-full bg-gray-200 text-slate-gray py-2 rounded-lg hover:bg-gray-300 text-sm"
                                    >
                                        Clear Cart
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
