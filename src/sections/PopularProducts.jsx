// import { products } from "../constants";
// import PopularProductCard from "../components/PopularProductCard";

// const PopularProducts = () => {
//   return (
//     <section id="products" className="max-container max-sm:mt-12">
//       <div className="flex flex-col gap-5 justify-start">
//         <h2 className="text-4xl font-palanquin font-bold">
//           Our <span className="text-coral-red">Popular</span> Products
//         </h2>
//         <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
//           Experience top-notch quality and style with our sought-after
//           selections. Discover a world of comfort, design, and value
//         </p>
//       </div>

//       <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
//         {products.map((product) => (
//           <PopularProductCard key={product.name} {...product} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PopularProducts;


import React, { useState } from 'react';
import { products } from '../constants';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import ProductFilter from '../components/ProductFilter';
import ProductReviews from '../components/ProductReviews';

const PopularProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchResults, setSearchResults] = useState(products); // Add this to track search results

  const handleSearchResults = (results) => {
    setSearchResults(results);
    setFilteredProducts(results); // Update filtered products when search changes
  };

  const handleFilterChange = (filtered) => {
    setFilteredProducts(filtered);
  };

  const handleSortChange = (criteria) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      switch (criteria) {
        case 'price-low':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'price-high':
          return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.dateAdded || '2024-01-01') - new Date(a.dateAdded || '2024-01-01');
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
    setFilteredProducts(sorted);
  };

  const handlePriceRangeChange = (min, max) => {
    const filtered = searchResults.filter(product => {
      const price = parseFloat(product.price.replace('$', ''));
      return price >= min && price <= max;
    });
    setFilteredProducts(filtered);
  };

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      {/* Search Bar */}
      <div className="mt-8 mb-4">
        <SearchBar products={products} onSearchResults={handleSearchResults} />
      </div>

      {/* Product Filter Component - Now uses searchResults as base */}
      <ProductFilter
        products={searchResults}
        filteredProducts={filteredProducts}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
        onPriceRangeChange={handlePriceRangeChange}
      />

      {/* Results Summary */}
      <div className="flex justify-between items-center mb-6 border">
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
        </p>

        {/* Quick Sort Buttons */}
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => handleSortChange('price-low')}
            className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:border-coral-red hover:text-coral-red transition-colors"
          >
            Price ↑
          </button>
          <button
            onClick={() => handleSortChange('price-high')}
            className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:border-coral-red hover:text-coral-red transition-colors"
          >
            Price ↓
          </button>
          <button
            onClick={() => handleSortChange('rating')}
            className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:border-coral-red hover:text-coral-red transition-colors"
          >
            Rating ↓
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard {...product} />
              <button
                onClick={() => setSelectedProduct(product)}
                className="mt-2 w-full text-sm text-coral-red hover:underline"
              >
                View Reviews
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="max-w-md mx-auto">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.691-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchResults(products);
                  setFilteredProducts(products);
                }}
                className="px-6 py-2 bg-coral-red text-white rounded-lg hover:bg-coral-red/90 transition-colors"
              >
                Show All Products
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Product Reviews Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <img
                src={selectedProduct.imgURL}
                alt={selectedProduct.name}
                className="w-full md:w-64 h-64 object-cover rounded-lg"
              />
              <div className="flex-1">
                <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                <p className="text-2xl font-bold text-coral-red mb-4">{selectedProduct.price}</p>
                <div className="flex items-center mb-4">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span>{selectedProduct.rating} out of 5</span>
                </div>
              </div>
            </div>

            <ProductReviews productId={selectedProduct.id} />
          </div>
        </div>
      )}
    </section>
  );
};

export default PopularProducts;
