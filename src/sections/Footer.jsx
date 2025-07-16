// import { copyrightSign } from "../assets/icons";
// import { footerLogo } from "../assets/images";
// import { footerLinks, socialMedia } from "../constants";

// const Footer = () => {
//   return (
//     <footer className="max-container">
//       <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
//         <div className="flex flex-col item-start">
//           {/* <div> */}
//           <a href="">
//             <img src={footerLogo} width={150} height={46} alt="" />
//           </a>
//           <p className="font-montserrat sm:max-w-sm mt-6 text-base leading-7 text-white-400">
//             Get shoes ready for the new term at your nearest Nike store. Find
//             Your perfect Size In Store. Get Rewards
//           </p>
//           <div className="flex justify-start gap-5 mt-8">
//             {socialMedia.map((icon) => (
//               <div className="bg-white rounded-full flex justify-center items-center w-12 h-12">
//                 <a href={icon.link}>
//                   <img src={icon.src} alt={icon.alt} width={24} height={24} />
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//         {/* </div> */}

//         <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
//           {footerLinks.map((section) => (
//             <div key={section}>
//               <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6">
//                 {section.title}
//               </h4>

//               <ul>
//                 {section.links.map((link) => (
//                   <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
//                     <a href={link.link}>{link.name}</a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* <div className="">fadsfs</div>
//         <div className="">fadsfs</div>
//         <div className="flex flex-col gap-20">
//           <div>logo</div>
//           <div>copyright</div>
//         </div> */}

//       <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center font-montserrat">
//         <div className="flex items-start flex-1">
//           {/* <p>© Copyright. All rights reserved.</p> */}
//           <img
//             src={copyrightSign}
//             width={20}
//             height={20}
//             className="rounded-full m-0"
//             alt=""
//           />
//           <p>&nbsp;Copyright. All rights reserved.</p>
//         </div>
//         <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React, { useState } from 'react';
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <img
                src={footerLogo}
                width={150}
                height={46}
                alt="Nike Logo"
                className="hover:opacity-80 transition-opacity"
              />
            </a>

            <p className="font-montserrat text-base leading-7 text-white-400 mb-6 max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>

            {/* Social Media */}
            <div className="mb-8">
              <h4 className="font-montserrat text-lg font-medium mb-4 text-white">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {socialMedia.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-full flex justify-center items-center w-12 h-12 hover:bg-coral-red hover:scale-110 transition-all duration-300 group"
                    aria-label={icon.alt}
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      width={24}
                      height={24}
                      className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            {/* <div>
              <h4 className="font-montserrat text-lg font-medium mb-4 text-white">
                Stay Updated
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="w-full bg-coral-red text-white py-3 px-4 rounded-lg font-medium hover:bg-coral-red/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
                </button>
              </form>
            </div> */}
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <h4 className="font-montserrat text-xl leading-normal font-medium mb-6 text-white">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.link}
                          className="text-white-400 font-montserrat text-base leading-normal hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

            {/* Contact Info */}
            <div>
              <h5 className="font-montserrat font-medium mb-3 text-white">Contact Us</h5>
              <div className="space-y-2 text-white-400 text-sm">
                <p>📞 1-800-NIKE-123</p>
                <p>✉️ support@nike.com</p>
                <p>📍 One Bowerman Drive, Beaverton, OR</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div>
              <h5 className="font-montserrat font-medium mb-3 text-white">Why Choose Nike</h5>
              <div className="space-y-2 text-white-400 text-sm">
                <p>✓ Free shipping on orders $50+</p>
                <p>✓ 30-day return policy</p>
                <p>✓ Exclusive member benefits</p>
              </div>
            </div>

            {/* Back to Top */}
            <div className="flex flex-col items-center md:items-end sm:hidden hidden md:block">
              <button
                onClick={scrollToTop}
                className="bg-coral-red text-white p-3 rounded-full hover:bg-coral-red/90 hover:scale-110 transition-all duration-300 mb-4"
                aria-label="Back to top"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
              <p className="text-white-400 text-sm">Back to top</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-container padding-x py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <div className="flex items-center text-white-400 font-montserrat text-sm">
              <img
                src={copyrightSign}
                width={20}
                height={20}
                className="rounded-full mr-2"
                alt="Copyright"
              />
              <span>2024 Nike, Inc. All rights reserved.</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-white-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-white-400 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <span className="text-white-400 text-sm mr-2">We accept:</span>
              <div className="flex gap-2">
                {['💳', '💰', '🏦', '📱'].map((icon, index) => (
                  <div key={index} className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center text-sm">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-Optimized Floating Action */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={scrollToTop}
          className="bg-coral-red text-white p-4 rounded-full shadow-lg hover:bg-coral-red/90 hover:scale-110 transition-all duration-300"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
