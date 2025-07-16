// import Nav from "./components/Nav";
// import {
//   CustomerReview,
//   Footer,
//   Hero,
//   PopularProducts,
//   Services,
//   SpecialOffer,
//   Subscribe,
//   SuperQuality,
// } from "./sections/index";
// const App = () => (
//   <main className="relative">
//     <Nav />
//     <section className="xl:padding-l wide:padding-r padding-b">
//       <Hero />
//     </section>
//     <section className="padding">
//       <PopularProducts />
//     </section>
//     <section className="padding">
//       <SuperQuality />
//     </section>
//     <section className="padding-x py-10">
//       <Services />
//     </section>
//     <section className="padding">
//       <SpecialOffer />
//     </section>
//     <section className="bg-pale-blue padding">
//       <CustomerReview />
//     </section>
//     <section className="padding-x sm:py-32 py-16 w-full ">
//       <Subscribe />
//     </section>
//     <section className="bg-black padding-x padding-t pb-8 text-white">
//       <Footer />
//     </section>
//   </main>
// );

// export default App;

import React from 'react';
import {
  CustomerReview,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from './sections';
import Nav from './components/Nav';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <main className="relative">
            <Nav />
            <section className="xl:padding-l wide:padding-r padding-b">
              <Hero />
            </section>
            <section className="padding">
              <PopularProducts />
            </section>
            <section className="padding-x">
              <SuperQuality />
            </section>
            <section className="padding-x py-10">
              <Services />
            </section>
            <section className="padding-x">
              <SpecialOffer />
            </section>
            <section className="bg-pale-blue padding">
              <CustomerReview />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
              <Subscribe />
            </section>
            <section className="bg-black padding-x padding-t pb-8">
              <Footer />
            </section>
          </main>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
