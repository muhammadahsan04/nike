// import React, { useState } from 'react';

// const ProductFilter = ({ products, onFilterChange, onSortChange, onPriceRangeChange }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [filters, setFilters] = useState({
//         sortBy: 'name',
//         priceRange: [0, 300],
//         rating: 0,
//         category: 'all'
//     });

//     const categories = ['all', 'Air Jordan', 'Air Max', 'Air Force'];
//     const sortOptions = [
//         { value: 'name', label: 'Name A-Z' },
//         { value: 'price-low', label: 'Price: Low to High' },
//         { value: 'price-high', label: 'Price: High to Low' },
//         { value: 'rating', label: 'Highest Rated' },
//         { value: 'newest', label: 'Newest First' }
//     ];

//     const handleSortChange = (sortValue) => {
//         setFilters(prev => ({ ...prev, sortBy: sortValue }));
//         onSortChange(sortValue);
//     };

//     const handlePriceRangeChange = (min, max) => {
//         setFilters(prev => ({ ...prev, priceRange: [min, max] }));
//         onPriceRangeChange(min, max);
//     };

//     const handleRatingFilter = (rating) => {
//         setFilters(prev => ({ ...prev, rating }));
//         const filtered = products.filter(product => product.rating >= rating);
//         onFilterChange(filtered);
//     };

//     const handleCategoryFilter = (category) => {
//         setFilters(prev => ({ ...prev, category }));
//         if (category === 'all') {
//             onFilterChange(products);
//         } else {
//             const filtered = products.filter(product =>
//                 product.name.toLowerCase().includes(category.toLowerCase())
//             );
//             onFilterChange(filtered);
//         }
//     };

//     const clearAllFilters = () => {
//         setFilters({
//             sortBy: 'name',
//             priceRange: [0, 300],
//             rating: 0,
//             category: 'all'
//         });
//         onFilterChange(products);
//         onSortChange('name');
//     };

//     return (
//         <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
//             {/* Mobile Filter Toggle */}
//             <div className="lg:hidden">
//                 <button
//                     onClick={() => setIsOpen(!isOpen)}
//                     className="flex items-center justify-between w-full p-2 text-left"
//                 >
//                     <span className="font-medium">Filters & Sort</span>
//                     <svg
//                         className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                 </button>
//             </div>

//             {/* Filter Content */}
//             <div className={`${isOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

//                     {/* Sort By */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Sort By
//                         </label>
//                         <select
//                             value={filters.sortBy}
//                             onChange={(e) => handleSortChange(e.target.value)}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                         >
//                             {sortOptions.map(option => (
//                                 <option key={option.value} value={option.value}>
//                                     {option.label}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     {/* Category Filter */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Category
//                         </label>
//                         <select
//                             value={filters.category}
//                             onChange={(e) => handleCategoryFilter(e.target.value)}
//                             className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red"
//                         >
//                             {categories.map(category => (
//                                 <option key={category} value={category}>
//                                     {category === 'all' ? 'All Categories' : category}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     {/* Price Range */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
//                         </label>
//                         <div className="flex items-center space-x-2">
//                             <input
//                                 type="range"
//                                 min="0"
//                                 max="300"
//                                 value={filters.priceRange[0]}
//                                 onChange={(e) => handlePriceRangeChange(parseInt(e.target.value), filters.priceRange[1])}
//                                 className="flex-1"
//                             />
//                             <input
//                                 type="range"
//                                 min="0"
//                                 max="300"
//                                 value={filters.priceRange[1]}
//                                 onChange={(e) => handlePriceRangeChange(filters.priceRange[0], parseInt(e.target.value))}
//                                 className="flex-1"
//                             />
//                         </div>
//                     </div>

//                     {/* Rating Filter */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                             Minimum Rating
//                         </label>
//                         <div className="flex space-x-1">
//                             {[1, 2, 3, 4, 5].map(star => (
//                                 <button
//                                     key={star}
//                                     onClick={() => handleRatingFilter(star)}
//                                     className={`text-2xl ${star <= filters.rating ? 'text-yellow-400' : 'text-gray-300'
//                                         } hover:text-yellow-400 transition-colors`}
//                                 >
//                                     ★
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Active Filters & Clear */}
//                 <div className="flex flex-wrap items-center justify-between mt-4 pt-4 border-t border-gray-200">
//                     <div className="flex flex-wrap gap-2">
//                         {filters.category !== 'all' && (
//                             <span className="px-3 py-1 bg-coral-red text-white text-sm rounded-full">
//                                 {filters.category}
//                                 <button
//                                     onClick={() => handleCategoryFilter('all')}
//                                     className="ml-2 hover:text-gray-200"
//                                 >
//                                     ×
//                                 </button>
//                             </span>
//                         )}
//                         {filters.rating > 0 && (
//                             <span className="px-3 py-1 bg-coral-red text-white text-sm rounded-full">
//                                 {filters.rating}+ Stars
//                                 <button
//                                     onClick={() => handleRatingFilter(0)}
//                                     className="ml-2 hover:text-gray-200"
//                                 >
//                                     ×
//                                 </button>
//                             </span>
//                         )}
//                         {(filters.priceRange[0] > 0 || filters.priceRange[1] < 300) && (
//                             <span className="px-3 py-1 bg-coral-red text-white text-sm rounded-full">
//                                 ${filters.priceRange[0]} - ${filters.priceRange[1]}
//                                 <button
//                                     onClick={() => handlePriceRangeChange(0, 300)}
//                                     className="ml-2 hover:text-gray-200"
//                                 >
//                                     ×
//                                 </button>
//                             </span>
//                         )}
//                     </div>

//                     <button
//                         onClick={clearAllFilters}
//                         className="px-4 py-2 text-sm text-gray-600 hover:text-coral-red border border-gray-300 rounded-lg hover:border-coral-red transition-colors"
//                     >
//                         Clear All Filters
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductFilter;



import React, { useState, useEffect } from 'react';
import { filterOptions } from '../constants';

const ProductFilter = ({ products, filteredProducts, onFilterChange, onSortChange, onPriceRangeChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
        sortBy: 'name',
        priceRange: [0, 300],
        rating: 0,
        category: 'all',
        size: 'all',
        color: 'all'
    });
    const [activeFiltersCount, setActiveFiltersCount] = useState(0);

    useEffect(() => {
        // Count active filters
        let count = 0;
        if (filters.category !== 'all') count++;
        if (filters.rating > 0) count++;
        if (filters.priceRange[0] > 0 || filters.priceRange[1] < 300) count++;
        if (filters.size !== 'all') count++;
        if (filters.color !== 'all') count++;
        setActiveFiltersCount(count);
    }, [filters]);

    const applyFilters = () => {
        // Use the products prop (which now contains search results) as the base
        let filtered = [...products];

        // Category filter
        if (filters.category !== 'all') {
            filtered = filtered.filter(product =>
                product.category && product.category.toLowerCase().includes(filters.category.toLowerCase())
            );
        }

        // Rating filter
        if (filters.rating > 0) {
            filtered = filtered.filter(product => product.rating && product.rating >= filters.rating);
        }

        // Price range filter
        filtered = filtered.filter(product => {
            const price = parseFloat(product.price.replace('$', ''));
            return price >= filters.priceRange[0] && price <= filters.priceRange[1];
        });

        // Size filter
        if (filters.size !== 'all') {
            filtered = filtered.filter(product =>
                product.sizes && product.sizes.includes(filters.size)
            );
        }

        // Color filter
        if (filters.color !== 'all') {
            filtered = filtered.filter(product =>
                product.colors && product.colors.includes(filters.color)
            );
        }

        onFilterChange(filtered);
    };

    // Apply filters whenever filters change OR when products (search results) change
    useEffect(() => {
        applyFilters();
    }, [filters, products]);

    // Reset filters when products change (new search)
    useEffect(() => {
        setFilters({
            sortBy: 'name',
            priceRange: [0, 300],
            rating: 0,
            category: 'all',
            size: 'all',
            color: 'all'
        });
    }, [products]);

    const handleSortChange = (sortValue) => {
        setFilters(prev => ({ ...prev, sortBy: sortValue }));
        onSortChange(sortValue);
    };

    const handlePriceRangeChange = (min, max) => {
        setFilters(prev => ({ ...prev, priceRange: [min, max] }));
    };

    const handleRatingFilter = (rating) => {
        setFilters(prev => ({ ...prev, rating }));
    };

    const handleCategoryFilter = (category) => {
        setFilters(prev => ({ ...prev, category }));
    };

    const handleSizeFilter = (size) => {
        setFilters(prev => ({ ...prev, size }));
    };

    const handleColorFilter = (color) => {
        setFilters(prev => ({ ...prev, color }));
    };

    const clearAllFilters = () => {
        setFilters({
            sortBy: 'name',
            priceRange: [0, 300],
            rating: 0,
            category: 'all',
            size: 'all',
            color: 'all'
        });
        onFilterChange(products); // Reset to current search results
        onSortChange('name');
    };

    const clearSpecificFilter = (filterType) => {
        switch (filterType) {
            case 'category':
                handleCategoryFilter('all');
                break;
            case 'rating':
                handleRatingFilter(0);
                break;
            case 'price':
                handlePriceRangeChange(0, 300);
                break;
            case 'size':
                handleSizeFilter('all');
                break;
            case 'color':
                handleColorFilter('all');
                break;
            default:
                break;
        }
    };

    // Default filter options if not provided in constants
    const defaultFilterOptions = {
        sortOptions: [
            { value: 'name', label: 'Name A-Z' },
            { value: 'price-low', label: 'Price: Low to High' },
            { value: 'price-high', label: 'Price: High to Low' },
            { value: 'rating', label: 'Highest Rated' },
            { value: 'newest', label: 'Newest First' }
        ],
        categories: ['all', 'Air Jordan', 'Basketball', 'Running', 'Casual'],
        sizes: ['7', '8', '9', '10', '11', '12'],
        colors: ['Black', 'White', 'Red', 'Blue', 'Gray', 'Gold']
    };

    const currentFilterOptions = filterOptions || defaultFilterOptions;

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between w-full p-2 text-left hover:bg-gray-50 rounded-lg transition-colors"
                >
                    <div className="flex items-center">
                        <span className="font-medium">Filters & Sort</span>
                        {activeFiltersCount > 0 && (
                            <span className="ml-2 px-2 py-1 bg-coral-red text-white text-xs rounded-full">
                                {activeFiltersCount}
                            </span>
                        )}
                    </div>
                    <svg
                        className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>

            {/* Desktop Filter Header */}
            <div className="hidden lg:flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Filter Products</h3>
                {activeFiltersCount > 0 && (
                    <span className="px-3 py-1 bg-coral-red text-white text-sm rounded-full">
                        {activeFiltersCount} active filter{activeFiltersCount !== 1 ? 's' : ''}
                    </span>
                )}
            </div>

            {/* Filter Content */}
            <div className={`${isOpen ? 'block' : 'hidden'} lg:block mt-4 lg:mt-0`}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">

                    {/* Sort By */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Sort By
                        </label>
                        <select
                            value={filters.sortBy}
                            onChange={(e) => handleSortChange(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent"
                        >
                            {currentFilterOptions.sortOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Category Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category
                        </label>
                        <select
                            value={filters.category}
                            onChange={(e) => handleCategoryFilter(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent"
                        >
                            {currentFilterOptions.categories.map(category => (
                                <option key={category} value={category}>
                                    {category === 'all' ? 'All Categories' : category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Size Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Size
                        </label>
                        <select
                            value={filters.size}
                            onChange={(e) => handleSizeFilter(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent"
                        >
                            <option value="all">All Sizes</option>
                            {currentFilterOptions.sizes.map(size => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Color Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Color
                        </label>
                        <select
                            value={filters.color}
                            onChange={(e) => handleColorFilter(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent"
                        >
                            <option value="all">All Colors</option>
                            {currentFilterOptions.colors.map(color => (
                                <option key={color} value={color}>
                                    {color}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Price Range */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}
                        </label>
                        <div className="space-y-2">
                            <input
                                type="range"
                                min="0"
                                max="300"
                                step="10"
                                value={filters.priceRange[0]}
                                onChange={(e) => handlePriceRangeChange(parseInt(e.target.value), filters.priceRange[1])}
                                className="w-full accent-coral-red"
                            />
                            <input
                                type="range"
                                min="0"
                                max="300"
                                step="10"
                                value={filters.priceRange[1]}
                                onChange={(e) => handlePriceRangeChange(filters.priceRange[0], parseInt(e.target.value))}
                                className="w-full accent-coral-red"
                            />
                        </div>
                    </div>

                    {/* Rating Filter */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Minimum Rating
                        </label>
                        <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map(star => (
                                <button
                                    key={star}
                                    onClick={() => handleRatingFilter(star === filters.rating ? 0 : star)}
                                    className={`text-xl ${star <= filters.rating ? 'text-yellow-400' : 'text-gray-300'
                                        } hover:text-yellow-400 transition-colors`}
                                    title={`${star} star${star !== 1 ? 's' : ''} & up`}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                        {filters.rating > 0 && (
                            <p className="text-xs text-gray-500 mt-1">
                                {filters.rating}+ stars
                            </p>
                        )}
                    </div>
                </div>

                {/* Active Filters & Clear */}
                <div className="flex flex-wrap items-center justify-between mt-6 pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2 mb-2 lg:mb-0">
                        {filters.category !== 'all' && (
                            <span className="inline-flex items-center px-3 py-1 bg-coral-red text-white text-sm rounded-full">
                                Category: {filters.category}
                                <button
                                    onClick={() => clearSpecificFilter('category')}
                                    className="ml-2 hover:text-gray-200 transition-colors"
                                    title="Remove category filter"
                                >
                                    ×
                                </button>
                            </span>
                        )}

                        {filters.rating > 0 && (
                            <span className="inline-flex items-center px-3 py-1 bg-coral-red text-white text-sm rounded-full">
                                {filters.rating}+ Stars
                                <button
                                    onClick={() => clearSpecificFilter('rating')}
                                    className="ml-2 hover:text-gray-200 transition-colors"
                                    title="Remove rating filter"
                                >
                                    ×
                                </button>
                            </span>
                        )}

                        {(filters.priceRange[0] > 0 || filters.priceRange[1] < 300) && (
                            <span className="inline-flex items-center px-3 py-1 bg-coral-red text-white text-sm rounded-full">
                                ${filters.priceRange[0]} - ${filters.priceRange[1]}
                                <button
                                    onClick={() => clearSpecificFilter('price')}
                                    className="ml-2 hover:text-gray-200 transition-colors"
                                    title="Remove price filter"
                                >
                                    ×
                                </button>
                            </span>
                        )}

                        {filters.size !== 'all' && (
                            <span className="inline-flex items-center px-3 py-1 bg-coral-red text-white text-sm rounded-full">
                                Size: {filters.size}
                                <button
                                    onClick={() => clearSpecificFilter('size')}
                                    className="ml-2 hover:text-gray-200 transition-colors"
                                    title="Remove size filter"
                                >
                                    ×
                                </button>
                            </span>
                        )}

                        {filters.color !== 'all' && (
                            <span className="inline-flex items-center px-3 py-1 bg-coral-red text-white text-sm rounded-full">
                                Color: {filters.color}
                                <button
                                    onClick={() => clearSpecificFilter('color')}
                                    className="ml-2 hover:text-gray-200 transition-colors"
                                    title="Remove color filter"
                                >
                                    ×
                                </button>
                            </span>
                        )}
                    </div>

                    {activeFiltersCount > 0 && (
                        <button
                            onClick={clearAllFilters}
                            className="px-4 py-2 text-sm text-gray-600 hover:text-coral-red border border-gray-300 rounded-lg hover:border-coral-red transition-colors"
                        >
                            Clear All Filters ({activeFiltersCount})
                        </button>
                    )}
                </div>

                {/* Quick Filter Buttons */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm font-medium text-gray-700 mb-2">Quick Filters:</p>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => {
                                handleCategoryFilter('Air Jordan');
                                handlePriceRangeChange(200, 300);
                            }}
                            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-coral-red hover:text-white transition-colors"
                        >
                            Premium Air Jordan
                        </button>
                        <button
                            onClick={() => {
                                handleRatingFilter(4);
                                handlePriceRangeChange(0, 220);
                            }}
                            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-coral-red hover:text-white transition-colors"
                        >
                            Best Value (4+ stars)
                        </button>
                        <button
                            onClick={() => {
                                handlePriceRangeChange(0, 200);
                                handleRatingFilter(4);
                            }}
                            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-coral-red hover:text-white transition-colors"
                        >
                            Budget Friendly
                        </button>
                        <button
                            onClick={() => {
                                handleRatingFilter(5);
                                handleCategoryFilter('Air Jordan');
                            }}
                            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-coral-red hover:text-white transition-colors"
                        >
                            Top Rated Jordan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;
