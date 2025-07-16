import React, { useState } from 'react';
import { products } from '../constants';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import ProductFilter from '../components/ProductFilter';
import ProductReviews from '../components/ProductReviews';

const Shop = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchResults, setSearchResults] = useState(products);

    const handleSearchResults = (results) => {
        setSearchResults(results);
        setFilteredProducts(results);
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
        <div className="min-h-screen bg-gray-50 pt-24">
            <div className="max-container padding-x">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-palanquin font-bold mb-4">
                        Nike <span className="text-coral-red">Shop</span>
                    </h1>
                    <p className="text-lg text-slate-gray max-w-2xl mx-auto">
                        Discover our complete collection of premium Nike shoes. Find your perfect pair with advanced search and filtering options.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-8 flex justify-center">
                    <div className="w-full max-w-2xl">
                        <SearchBar products={products} onSearchResults={handleSearchResults} />
                    </div>
                </div>

                {/* Product Filter */}
                <ProductFilter
                    products={searchResults}
                    filteredProducts={filteredProducts}
                    onFilterChange={handleFilterChange}
                    onSortChange={handleSortChange}
                    onPriceRangeChange={handlePriceRangeChange}
                />

                {/* Results Summary */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <p className="text-gray-600">
                        Showing {filteredProducts.length} of {products.length} products
                    </p>

                    {/* Quick Sort Buttons */}
                    <div className="flex gap-2 flex-wrap">
                        <button
                            onClick={() => handleSortChange('price-low')}
                            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:border-coral-red hover:text-coral-red transition-colors"
                        >
                            Price: Low to High
                        </button>
                        <button
                            onClick={() => handleSortChange('price-high')}
                            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:border-coral-red hover:text-coral-red transition-colors"
                        >
                            Price: High to Low
                        </button>
                        <button
                            onClick={() => handleSortChange('rating')}
                            className="px-4 py-2 text-sm border border-gray-300 rounded-lg hover:border-coral-red hover:text-coral-red transition-colors"
                        >
                            Highest Rated
                        </button>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mb-16">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4">
                                <ProductCard {...product} />
                                <button
                                    onClick={() => setSelectedProduct(product)}
                                    className="mt-4 w-full text-sm text-coral-red hover:underline py-2"
                                >
                                    View Reviews & Details
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16">
                            <div className="max-w-md mx-auto">
                                <svg className="w-20 h-20 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.691-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                                <h3 className="text-2xl font-semibold text-gray-700 mb-4">No products found</h3>
                                <p className="text-gray-500 mb-6">
                                    We couldn't find any products matching your criteria. Try adjusting your filters or search terms.
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchResults(products);
                                        setFilteredProducts(products);
                                    }}
                                    className="px-8 py-3 bg-coral-red text-white rounded-lg hover:bg-coral-red/90 transition-colors"
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
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-3xl font-bold">{selectedProduct.name}</h2>
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="text-gray-500 hover:text-gray-700 text-3xl"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-8 mb-8">
                                <img
                                    src={selectedProduct.imgURL}
                                    alt={selectedProduct.name}
                                    className="w-full lg:w-80 h-80 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{selectedProduct.description}</p>
                                    <p className="text-3xl font-bold text-coral-red mb-6">{selectedProduct.price}</p>
                                    <div className="flex items-center mb-6">
                                        <div className="flex text-yellow-500 mr-3">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className={i < Math.floor(selectedProduct.rating) ? 'text-yellow-500' : 'text-gray-300'}>
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-lg">{selectedProduct.rating} out of 5</span>
                                    </div>

                                    {selectedProduct.features && (
                                        <div className="mb-6">
                                            <h4 className="font-semibold mb-3">Features:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                {selectedProduct.features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <ProductReviews productId={selectedProduct.id} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;
