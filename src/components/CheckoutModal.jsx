// import React, { useState } from 'react';
// import { useCart } from '../context/CartContext';
// import { useAuth } from '../context/AuthContext';

// const CheckoutModal = ({ isOpen, onClose }) => {
//     const { cart, clearCart } = useCart();
//     const { user } = useAuth();
//     const [step, setStep] = useState(1);
//     const [orderData, setOrderData] = useState({
//         shipping: {
//             fullName: user?.name || '',
//             email: user?.email || '',
//             address: '',
//             city: '',
//             zipCode: '',
//             country: ''
//         },
//         payment: {
//             cardNumber: '',
//             expiryDate: '',
//             cvv: '',
//             cardName: ''
//         }
//     });
//     const [isProcessing, setIsProcessing] = useState(false);

//     const handleInputChange = (section, field, value) => {
//         setOrderData(prev => ({
//             ...prev,
//             [section]: {
//                 ...prev[section],
//                 [field]: value
//             }
//         }));
//     };

//     const handlePlaceOrder = async () => {
//         setIsProcessing(true);

//         // Simulate order processing
//         setTimeout(() => {
//             setIsProcessing(false);
//             setStep(4); // Success step
//             clearCart();
//         }, 2000);
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold">Checkout</h2>
//                     <button
//                         onClick={onClose}
//                         className="text-gray-500 hover:text-gray-700 text-2xl"
//                     >
//                         ×
//                     </button>
//                 </div>

//                 {/* Progress Steps */}
//                 <div className="flex mb-8">
//                     {['Cart', 'Shipping', 'Payment', 'Complete'].map((stepName, index) => (
//                         <div key={stepName} className="flex-1 flex items-center">
//                             <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step > index + 1 ? 'bg-green-500 text-white' :
//                                     step === index + 1 ? 'bg-coral-red text-white' :
//                                         'bg-gray-200 text-gray-600'
//                                 }`}>
//                                 {step > index + 1 ? '✓' : index + 1}
//                             </div>
//                             <span className="ml-2 text-sm">{stepName}</span>
//                             {index < 3 && <div className="flex-1 h-px bg-gray-200 mx-4" />}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Step 1: Cart Review */}
//                 {step === 1 && (
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
//                         <div className="space-y-4 mb-6">
//                             {cart.items.map((item) => (
//                                 <div key={item.id} className="flex items-center space-x-4">
//                                     <img src={item.imgURL} alt={item.name} className="w-16 h-16 object-cover rounded" />
//                                     <div className="flex-1">
//                                         <h4 className="font-medium">{item.name}</h4>
//                                         <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                                     </div>
//                                     <p className="font-semibold">{item.price}</p>
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="border-t pt-4 mb-6">
//                             <div className="flex justify-between text-lg font-semibold">
//                                 <span>Total: ${cart?.total?.toFixed(2)}</span>
//                             </div>
//                         </div>
//                         <button
//                             onClick={() => setStep(2)}
//                             className="w-full bg-coral-red text-white py-3 rounded-lg hover:bg-coral-red/90"
//                         >
//                             Continue to Shipping
//                         </button>
//                     </div>
//                 )}

//                 {/* Step 2: Shipping Information */}
//                 {step === 2 && (
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
//                         <div className="grid grid-cols-2 gap-4 mb-6">
//                             <input
//                                 type="text"
//                                 placeholder="Full Name"
//                                 value={orderData.shipping.fullName}
//                                 onChange={(e) => handleInputChange('shipping', 'fullName', e.target.value)}
//                                 className="col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                             <input
//                                 type="email"
//                                 placeholder="Email"
//                                 value={orderData.shipping.email}
//                                 onChange={(e) => handleInputChange('shipping', 'email', e.target.value)}
//                                 className="col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Address"
//                                 value={orderData.shipping.address}
//                                 onChange={(e) => handleInputChange('shipping', 'address', e.target.value)}
//                                 className="col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="City"
//                                 value={orderData.shipping.city}
//                                 onChange={(e) => handleInputChange('shipping', 'city', e.target.value)}
//                                 className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="ZIP Code"
//                                 value={orderData.shipping.zipCode}
//                                 onChange={(e) => handleInputChange('shipping', 'zipCode', e.target.value)}
//                                 className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Country"
//                                 value={orderData.shipping.country}
//                                 onChange={(e) => handleInputChange('shipping', 'country', e.target.value)}
//                                 className="col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                         </div>
//                         <div className="flex space-x-4">
//                             <button
//                                 onClick={() => setStep(1)}
//                                 className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400"
//                             >
//                                 Back
//                             </button>
//                             <button
//                                 onClick={() => setStep(3)}
//                                 className="flex-1 bg-coral-red text-white py-3 rounded-lg hover:bg-coral-red/90"
//                             >
//                                 Continue to Payment
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {/* Step 3: Payment Information */}
//                 {step === 3 && (
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
//                         <div className="space-y-4 mb-6">
//                             <input
//                                 type="text"
//                                 placeholder="Cardholder Name"
//                                 value={orderData.payment.cardName}
//                                 onChange={(e) => handleInputChange('payment', 'cardName', e.target.value)}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Card Number (1234 5678 9012 3456)"
//                                 value={orderData.payment.cardNumber}
//                                 onChange={(e) => handleInputChange('payment', 'cardNumber', e.target.value)}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                             <div className="grid grid-cols-2 gap-4">
//                                 <input
//                                     type="text"
//                                     placeholder="MM/YY"
//                                     value={orderData.payment.expiryDate}
//                                     onChange={(e) => handleInputChange('payment', 'expiryDate', e.target.value)}
//                                     className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                     required
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="CVV"
//                                     value={orderData.payment.cvv}
//                                     onChange={(e) => handleInputChange('payment', 'cvv', e.target.value)}
//                                     className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div className="bg-gray-50 p-4 rounded-lg mb-6">
//                             <div className="flex justify-between items-center">
//                                 <span className="font-semibold">Total Amount:</span>
//                                 <span className="text-xl font-bold text-coral-red">${cart?.total?.toFixed(2)}</span>
//                             </div>
//                         </div>

//                         <div className="flex space-x-4">
//                             <button
//                                 onClick={() => setStep(2)}
//                                 className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400"
//                             >
//                                 Back
//                             </button>
//                             <button
//                                 onClick={handlePlaceOrder}
//                                 disabled={isProcessing}
//                                 className="flex-1 bg-coral-red text-white py-3 rounded-lg hover:bg-coral-red/90 disabled:opacity-50"
//                             >
//                                 {isProcessing ? 'Processing...' : 'Place Order'}
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {/* Step 4: Order Complete */}
//                 {step === 4 && (
//                     <div className="text-center">
//                         <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                             </svg>
//                         </div>
//                         <h3 className="text-2xl font-bold text-green-600 mb-2">Order Placed Successfully!</h3>
//                         <p className="text-gray-600 mb-6">
//                             Thank you for your purchase. You will receive a confirmation email shortly.
//                         </p>
//                         <p className="text-sm text-gray-500 mb-6">
//                             Order ID: #{Date.now()}
//                         </p>
//                         <button
//                             onClick={onClose}
//                             className="bg-coral-red text-white px-6 py-3 rounded-lg hover:bg-coral-red/90"
//                         >
//                             Continue Shopping
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CheckoutModal;



// import React, { useState, useEffect } from 'react';
// import { useCart } from '../context/CartContext';
// import { useAuth } from '../context/AuthContext';

// const CheckoutModal = ({ isOpen, onClose }) => {
//     const { cart, clearCart } = useCart();
//     const { user } = useAuth();
//     const [step, setStep] = useState(1);
//     const [orderData, setOrderData] = useState({
//         shipping: {
//             fullName: user?.name || '',
//             email: user?.email || '',
//             address: '',
//             city: '',
//             zipCode: '',
//             country: ''
//         },
//         payment: {
//             cardNumber: '',
//             expiryDate: '',
//             cvv: '',
//             cardName: ''
//         }
//     });
//     const [isProcessing, setIsProcessing] = useState(false);

//     // Reset modal state when it opens
//     useEffect(() => {
//         if (isOpen) {
//             setStep(1);
//             setIsProcessing(false);
//             setOrderData({
//                 shipping: {
//                     fullName: user?.name || '',
//                     email: user?.email || '',
//                     address: '',
//                     city: '',
//                     zipCode: '',
//                     country: ''
//                 },
//                 payment: {
//                     cardNumber: '',
//                     expiryDate: '',
//                     cvv: '',
//                     cardName: ''
//                 }
//             });
//         }
//     }, [isOpen, user]);

//     const handleInputChange = (section, field, value) => {
//         setOrderData(prev => ({
//             ...prev,
//             [section]: {
//                 ...prev[section],
//                 [field]: value
//             }
//         }));
//     };

//     const handlePlaceOrder = async () => {
//         setIsProcessing(true);

//         // Simulate order processing
//         setTimeout(() => {
//             setIsProcessing(false);
//             setStep(4); // Success step
//             clearCart();
//         }, 2000);
//     };

//     const handleClose = () => {
//         // Reset everything when closing
//         setStep(1);
//         setIsProcessing(false);
//         setOrderData({
//             shipping: {
//                 fullName: user?.name || '',
//                 email: user?.email || '',
//                 address: '',
//                 city: '',
//                 zipCode: '',
//                 country: ''
//             },
//             payment: {
//                 cardNumber: '',
//                 expiryDate: '',
//                 cvv: '',
//                 cardName: ''
//             }
//         });
//         onClose();
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//             <div className="bg-white rounded-lg p-6 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-2xl max-h-[90vh] overflow-y-auto">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold">Checkout</h2>
//                     <button
//                         onClick={handleClose}
//                         className="text-gray-500 hover:text-gray-700 text-2xl"
//                     >
//                         ×
//                     </button>
//                 </div>

//                 {/* Progress Steps */}
//                 <div className="flex mb-8">
//                     {['Cart', 'Shipping', 'Payment', 'Complete'].map((stepName, index) => (
//                         <div key={stepName} className="flex-1 flex items-center">
//                             <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step > index + 1 ? 'bg-green-500 text-white' :
//                                 step === index + 1 ? 'bg-coral-red text-white' :
//                                     'bg-gray-200 text-gray-600'
//                                 }`}>
//                                 {step > index + 1 ? '✓' : index + 1}
//                             </div>
//                             <span className="ml-2 text-sm">{stepName}</span>
//                             {index < 3 && <div className="flex-1 h-px bg-gray-200 mx-4" />}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Step 1: Cart Review */}
//                 {step === 1 && (
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
//                         <div className="space-y-4 mb-6">
//                             {cart.items.map((item) => (
//                                 <div key={item.id} className="flex items-center space-x-4">
//                                     <img src={item.imgURL} alt={item.name} className="w-16 h-16 object-cover rounded" />
//                                     <div className="flex-1">
//                                         <h4 className="font-medium">{item.name}</h4>
//                                         <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                                     </div>
//                                     <p className="font-semibold">{item.price}</p>
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="border-t pt-4 mb-6">
//                             <div className="flex justify-between text-lg font-semibold">
//                                 <span>Total: ${cart?.total?.toFixed(2)}</span>
//                             </div>
//                         </div>
//                         <button
//                             onClick={() => setStep(2)}
//                             className="w-full bg-coral-red text-white py-3 rounded-lg hover:bg-coral-red/90"
//                         >
//                             Continue to Shipping
//                         </button>
//                     </div>
//                 )}

//                 {/* Step 2: Shipping Information */}
//                 {step === 2 && (
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4">Shipping Information</h3>
//                         <div className="grid grid-cols-2 gap-4 mb-6">
//                             <input
//                                 type="text"
//                                 placeholder="Full Name"
//                                 value={orderData.shipping.fullName}
//                                 onChange={(e) => handleInputChange('shipping', 'fullName', e.target.value)}
//                                 className="col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                             <input
//                                 type="email"
//                                 placeholder="Email"
//                                 value={orderData.shipping.email}
//                                 onChange={(e) => handleInputChange('shipping', 'email', e.target.value)}
//                                 className="col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Address"
//                                 value={orderData.shipping.address}
//                                 onChange={(e) => handleInputChange('shipping', 'address', e.target.value)}
//                                 className="col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="City"
//                                 value={orderData.shipping.city}
//                                 onChange={(e) => handleInputChange('shipping', 'city', e.target.value)}
//                                 className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="ZIP Code"
//                                 value={orderData.shipping.zipCode}
//                                 onChange={(e) => handleInputChange('shipping', 'zipCode', e.target.value)}
//                                 className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Country"
//                                 value={orderData.shipping.country}
//                                 onChange={(e) => handleInputChange('shipping', 'country', e.target.value)}
//                                 className="col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                         </div>
//                         <div className="flex space-x-4">
//                             <button
//                                 onClick={() => setStep(1)}
//                                 className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400"
//                             >
//                                 Back
//                             </button>
//                             <button
//                                 onClick={() => setStep(3)}
//                                 className="flex-1 bg-coral-red text-white py-3 rounded-lg hover:bg-coral-red/90"
//                             >
//                                 Continue to Payment
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {/* Step 3: Payment Information */}
//                 {step === 3 && (
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
//                         <div className="space-y-4 mb-6">
//                             <input
//                                 type="text"
//                                 placeholder="Cardholder Name"
//                                 value={orderData.payment.cardName}
//                                 onChange={(e) => handleInputChange('payment', 'cardName', e.target.value)}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                             <input
//                                 type="text"
//                                 placeholder="Card Number (1234 5678 9012 3456)"
//                                 value={orderData.payment.cardNumber}
//                                 onChange={(e) => handleInputChange('payment', 'cardNumber', e.target.value)}
//                                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                 required
//                             />
//                             <div className="grid grid-cols-2 gap-4">
//                                 <input
//                                     type="text"
//                                     placeholder="MM/YY"
//                                     value={orderData.payment.expiryDate}
//                                     onChange={(e) => handleInputChange('payment', 'expiryDate', e.target.value)}
//                                     className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                     required
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="CVV"
//                                     value={orderData.payment.cvv}
//                                     onChange={(e) => handleInputChange('payment', 'cvv', e.target.value)}
//                                     className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div className="bg-gray-50 p-4 rounded-lg mb-6">
//                             <div className="flex justify-between items-center">
//                                 <span className="font-semibold">Total Amount:</span>
//                                 <span className="text-xl font-bold text-coral-red">${cart?.total?.toFixed(2)}</span>
//                             </div>
//                         </div>

//                         <div className="flex space-x-4">
//                             <button
//                                 onClick={() => setStep(2)}
//                                 className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400"
//                             >
//                                 Back
//                             </button>
//                             <button
//                                 onClick={handlePlaceOrder}
//                                 disabled={isProcessing}
//                                 className="flex-1 bg-coral-red text-white py-3 rounded-lg hover:bg-coral-red/90 disabled:opacity-50"
//                             >
//                                 {isProcessing ? 'Processing...' : 'Place Order'}
//                             </button>
//                         </div>
//                     </div>
//                 )}

//                 {/* Step 4: Order Complete */}
//                 {step === 4 && (
//                     <div className="text-center">
//                         <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                             </svg>
//                         </div>
//                         <h3 className="text-2xl font-bold text-green-600 mb-2">Order Placed Successfully!</h3>
//                         <p className="text-gray-600 mb-6">
//                             Thank you for your purchase. You will receive a confirmation email shortly.
//                         </p>
//                         <p className="text-sm text-gray-500 mb-6">
//                             Order ID: #{Date.now()}
//                         </p>
//                         <button
//                             onClick={handleClose}
//                             className="bg-coral-red text-white px-6 py-3 rounded-lg hover:bg-coral-red/90"
//                         >
//                             Continue Shopping
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CheckoutModal;


import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const CheckoutModal = ({ isOpen, onClose }) => {
    const { cart, clearCart } = useCart();
    const { user } = useAuth();
    const [step, setStep] = useState(1);
    const [orderData, setOrderData] = useState({
        shipping: {
            fullName: user?.name || '',
            email: user?.email || '',
            address: '',
            city: '',
            zipCode: '',
            country: ''
        },
        payment: {
            cardNumber: '',
            expiryDate: '',
            cvv: '',
            cardName: ''
        }
    });
    const [isProcessing, setIsProcessing] = useState(false);

    // Reset modal state when it opens
    useEffect(() => {
        if (isOpen) {
            setStep(1);
            setIsProcessing(false);
            setOrderData({
                shipping: {
                    fullName: user?.name || '',
                    email: user?.email || '',
                    address: '',
                    city: '',
                    zipCode: '',
                    country: ''
                },
                payment: {
                    cardNumber: '',
                    expiryDate: '',
                    cvv: '',
                    cardName: ''
                }
            });
        }
    }, [isOpen, user]);

    const handleInputChange = (section, field, value) => {
        setOrderData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    const handlePlaceOrder = async () => {
        setIsProcessing(true);

        // Simulate order processing
        setTimeout(() => {
            setIsProcessing(false);
            setStep(4); // Success step
            clearCart();
        }, 2000);
    };

    const handleClose = () => {
        // Reset everything when closing
        setStep(1);
        setIsProcessing(false);
        setOrderData({
            shipping: {
                fullName: user?.name || '',
                email: user?.email || '',
                address: '',
                city: '',
                zipCode: '',
                country: ''
            },
            payment: {
                cardNumber: '',
                expiryDate: '',
                cvv: '',
                cardName: ''
            }
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white rounded-lg p-4 sm:p-6 w-[95%] md:w-[70%] lg:w-[50%] xl:w-[50%] max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Checkout</h2>
                    <button
                        onClick={handleClose}
                        className="text-gray-500 hover:text-gray-700 text-xl sm:text-2xl"
                    >
                        ×
                    </button>
                </div>

                {/* Progress Steps */}
                <div className="flex mb-6 sm:mb-8">
                    {['Cart', 'Shipping', 'Payment', 'Complete'].map((stepName, index) => (
                        <div key={stepName} className="flex-1 flex items-center">
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${step > index + 1 ? 'bg-green-500 text-white' :
                                step === index + 1 ? 'bg-coral-red text-white' :
                                    'bg-gray-200 text-gray-600'
                                }`}>
                                {step > index + 1 ? '✓' : index + 1}
                            </div>
                            <span className="ml-1 sm:ml-2 text-xs sm:text-sm hidden sm:inline">{stepName}</span>
                            <span className="ml-1 text-xs sm:hidden">{stepName.slice(0, 4)}</span>
                            {index < 3 && <div className="flex-1 h-px bg-gray-200 mx-2 sm:mx-4" />}
                        </div>
                    ))}
                </div>

                {/* Step 1: Cart Review */}
                {step === 1 && (
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Order Summary</h3>
                        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                            {cart.items.map((item) => (
                                <div key={item.id} className="flex items-center space-x-3 sm:space-x-4">
                                    <img src={item.imgURL} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded" />
                                    <div className="flex-1">
                                        <h4 className="font-medium text-sm sm:text-base">{item.name}</h4>
                                        <p className="text-xs sm:text-sm text-gray-600">Quantity: {item.quantity}</p>
                                    </div>
                                    <p className="font-semibold text-sm sm:text-base">{item.price}</p>
                                </div>
                            ))}
                        </div>
                        <div className="border-t pt-3 sm:pt-4 mb-4 sm:mb-6">
                            <div className="flex justify-between text-base sm:text-lg font-semibold">
                                <span>Total: ${cart?.total?.toFixed(2)}</span>
                            </div>
                        </div>
                        <button
                            onClick={() => setStep(2)}
                            className="w-full bg-coral-red text-white py-2.5 sm:py-3 rounded-lg hover:bg-coral-red/90 text-sm sm:text-base"
                        >
                            Continue to Shipping
                        </button>
                    </div>
                )}

                {/* Step 2: Shipping Information */}
                {step === 2 && (
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Shipping Information</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={orderData.shipping.fullName}
                                onChange={(e) => handleInputChange('shipping', 'fullName', e.target.value)}
                                className="col-span-1 sm:col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red text-sm sm:text-base"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={orderData.shipping.email}
                                onChange={(e) => handleInputChange('shipping', 'email', e.target.value)}
                                className="col-span-1 sm:col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red text-sm sm:text-base"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                value={orderData.shipping.address}
                                onChange={(e) => handleInputChange('shipping', 'address', e.target.value)}
                                className="col-span-1 sm:col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red text-sm sm:text-base"
                                required
                            />
                            <input
                                type="text"
                                placeholder="City"
                                value={orderData.shipping.city}
                                onChange={(e) => handleInputChange('shipping', 'city', e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red text-sm sm:text-base"
                                required
                            />
                            <input
                                type="text"
                                placeholder="ZIP Code"
                                value={orderData.shipping.zipCode}
                                onChange={(e) => handleInputChange('shipping', 'zipCode', e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red text-sm sm:text-base"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Country"
                                value={orderData.shipping.country}
                                onChange={(e) => handleInputChange('shipping', 'country', e.target.value)}
                                className="col-span-1 sm:col-span-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red text-sm sm:text-base"
                                required
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={() => setStep(1)}
                                className="flex-1 bg-gray-300 text-gray-700 py-2.5 sm:py-3 rounded-lg hover:bg-gray-400 text-sm sm:text-base"
                            >
                                Back
                            </button>
                            <button
                                onClick={() => setStep(3)}
                                className="flex-1 bg-coral-red text-white py-2.5 sm:py-3 rounded-lg hover:bg-coral-red/90 text-sm sm:text-base"
                            >
                                Continue to Payment
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Payment Information */}
                {step === 3 && (
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Payment Information</h3>
                        <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                            <input
                                type="text"
                                placeholder="Cardholder Name"
                                value={orderData.payment.cardName}
                                onChange={(e) => handleInputChange('payment', 'cardName', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red text-sm sm:text-base"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Card Number (1234 5678 9012 3456)"
                                value={orderData.payment.cardNumber}
                                onChange={(e) => handleInputChange('payment', 'cardNumber', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red text-sm sm:text-base"
                                required
                            />
                            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    value={orderData.payment.expiryDate}
                                    onChange={(e) => handleInputChange('payment', 'expiryDate', e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red text-sm sm:text-base"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="CVV"
                                    value={orderData.payment.cvv}
                                    onChange={(e) => handleInputChange('payment', 'cvv', e.target.value)}
                                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red text-sm sm:text-base"
                                    required
                                />
                            </div>
                        </div>

                        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-sm sm:text-base">Total Amount:</span>
                                <span className="text-lg sm:text-xl font-bold text-coral-red">${cart?.total?.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                            <button
                                onClick={() => setStep(2)}
                                className="flex-1 bg-gray-300 text-gray-700 py-2.5 sm:py-3 rounded-lg hover:bg-gray-400 text-sm sm:text-base"
                            >
                                Back
                            </button>
                            <button
                                onClick={handlePlaceOrder}
                                disabled={isProcessing}
                                className="flex-1 bg-coral-red text-white py-2.5 sm:py-3 rounded-lg hover:bg-coral-red/90 disabled:opacity-50 text-sm sm:text-base"
                            >
                                {isProcessing ? 'Processing...' : 'Place Order'}
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 4: Order Complete */}
                {step === 4 && (
                    <div className="text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mb-2">Order Placed Successfully!</h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                            Thank you for your purchase. You will receive a confirmation email shortly.
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                            Order ID: #{Date.now()}
                        </p>
                        <button
                            onClick={handleClose}
                            className="bg-coral-red text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-coral-red/90 text-sm sm:text-base"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CheckoutModal;
