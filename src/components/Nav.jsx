// import React from "react";
// import { headerLogo } from "../assets/images/index";
// import { hamburger } from "../assets/icons/index";
// import { navLinks } from "../constants";

// const Nav = () => {
//   return (
//     <header className="padding-x py-8 absolute w-full z-10">
//       <nav className="flex justify-between items-center max-container">
//         <a href="/">
//           <img src={headerLogo} width={130} height={29} alt="" />
//         </a>
//         {/* <img
//           src={hamburger}
//           width={30}
//           height={29}
//           alt=""
//         /> */}
//         <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
//           {navLinks.map((item, index) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 className="font-montserrat leading-normal text-lg text-slate-gray"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
//           <a href="/">Sign in </a>
//           <span>/ </span>
//           <a href="/">Explore now</a>
//         </div>
//         <div className="max-lg:block hidden">
//           <img
//             src={hamburger}
//             // className="max-lg:block hidden"
//             width={25}
//             height={25}
//             alt=""
//           />
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;

import React, { useState, useEffect } from 'react';
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import LoginModal from './LoginModal';
import ShoppingCart from './ShoppingCart';
import CheckoutModal from './CheckoutModal';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { getCartItemsCount } = useCart();
  const [showShoppingCartCheckoutModal, setShowShoppingCartCheckoutModal] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  // Scroll behavior states
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleProceedToCheckout = () => {
    setShowShoppingCartCheckoutModal(false);
    setShowCheckoutModal(true);
  };

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add background when scrolled
      setIsScrolled(currentScrollY > 50);

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`
          padding-x py-4 fixed top-0 left-0 right-0 z-50 w-full
          transition-all duration-300 ease-in-out
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
            : 'bg-transparent'
          }
        `}
      >
        <nav className="flex justify-between items-center max-container">
          <a href="/" className="flex-shrink-0">
            <img
              src={headerLogo}
              alt="Logo"
              width={130}
              height={29}
              className="transition-all duration-300"
            />
          </a>

          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`
                    font-montserrat leading-normal text-lg transition-colors duration-300
                    ${isScrolled
                      ? 'text-slate-gray hover:text-coral-red'
                      : 'text-slate-gray hover:text-coral-red'
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 max-lg:hidden">
            {/* Cart Icon */}
            <button
              className={`
                relative p-2 rounded-lg transition-all duration-300
                ${isScrolled
                  ? 'text-slate-gray hover:text-coral-red hover:bg-gray-100'
                  : 'text-slate-gray hover:text-coral-red hover:bg-white/20'
                }
              `}
              onClick={() => setShowShoppingCartCheckoutModal(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-coral-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {getCartItemsCount()}
                </span>
              )}
            </button>

            {/* User Authentication */}
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <span className={`text-sm transition-colors duration-300 ${isScrolled ? 'text-slate-gray' : 'text-slate-gray'}`}>
                  Hi, {user.name}
                </span>
                <button
                  onClick={logout}
                  className="text-sm text-coral-red hover:underline transition-all duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="text-sm bg-coral-red text-white px-4 py-2 rounded-lg hover:bg-coral-red/90 transition-all duration-300 transform hover:scale-105"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="hidden max-lg:block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                p-2 rounded-lg transition-all duration-300
                ${isScrolled
                  ? 'text-slate-gray hover:bg-gray-100'
                  : 'text-slate-gray hover:bg-white/20'
                }
              `}
            >
              <img
                src={hamburger}
                alt="Menu"
                width={25}
                height={25}
                className="cursor-pointer"
              />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className={`
            mt-4 rounded-lg shadow-lg p-4 mx-4
            ${isScrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-md'}
          `}>
            <ul className="space-y-4">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red transition-colors duration-300 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t border-gray-200">
              {/* Mobile Cart Button */}
              <button
                onClick={() => {
                  setShowShoppingCartCheckoutModal(true);
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 mb-4 p-2 text-slate-gray hover:text-coral-red transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
                <span>Cart ({getCartItemsCount()})</span>
              </button>

              {isAuthenticated ? (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-gray">Hi, {user.name}</span>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="text-sm text-coral-red hover:underline transition-all duration-300"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setShowLoginModal(true);
                    setIsOpen(false);
                  }}
                  className="w-full text-sm bg-coral-red text-white px-4 py-2 rounded-lg hover:bg-coral-red/90 transition-all duration-300 transform hover:scale-105"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>

      {/* Login Modal */}
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />

      {/* Shopping Cart Modal */}
      {showShoppingCartCheckoutModal && (
        <ShoppingCart
          onClose={() => setShowShoppingCartCheckoutModal(false)}
          onProceedToCheckout={handleProceedToCheckout}
        />
      )}

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={showCheckoutModal}
        onClose={() => setShowCheckoutModal(false)}
      />
    </>
  );
};

export default Nav;
