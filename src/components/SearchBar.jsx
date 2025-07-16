// import React, { useState, useEffect } from 'react';

// const SearchBar = ({ products, onSearchResults }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   useEffect(() => {
//     if (searchTerm.length > 0) {
//       const filtered = products.filter(product =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         product.description.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       setSuggestions(filtered);
//       setShowSuggestions(true);
//       onSearchResults(filtered);
//     } else {
//       setSuggestions([]);
//       setShowSuggestions(false);
//       onSearchResults(products);
//     }
//   }, [searchTerm, products, onSearchResults]);

//   const handleSuggestionClick = (product) => {
//     setSearchTerm(product.name);
//     setShowSuggestions(false);
//     onSearchResults([product]);
//   };

//   return (
//     <div className="relative w-full max-w-md">
//       <div className="relative">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent"
//         />
//         <svg
//           className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//           />
//         </svg>
//         {searchTerm && (
//           <button
//             onClick={() => {
//               setSearchTerm('');
//               setShowSuggestions(false);
//               onSearchResults(products);
//             }}
//             className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
//           >
//             ×
//           </button>
//         )}
//       </div>

//       {showSuggestions && suggestions.length > 0 && (
//         <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
//           {suggestions.map((product) => (
//             <div
//               key={product.id}
//               onClick={() => handleSuggestionClick(product)}
//               className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
//             >
//               <img
//                 src={product.imgURL}
//                 alt={product.name}
//                 className="w-10 h-10 object-cover rounded mr-3"
//               />
//               <div>
//                 <p className="font-medium text-sm">{product.name}</p>
//                 <p className="text-coral-red text-sm">{product.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
;


import React, { useState, useEffect, useRef } from 'react';
import { productTags } from '../constants';

const SearchBar = ({ products, onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = products.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const categoryMatch = product.category.toLowerCase().includes(searchTerm.toLowerCase());
        const descriptionMatch = product.description?.toLowerCase().includes(searchTerm.toLowerCase());

        // Check tags if they exist
        const tags = productTags?.[product.id] || [];
        const tagMatch = tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        return nameMatch || categoryMatch || descriptionMatch || tagMatch;
      });

      onSearchResults(filtered);

      // Generate suggestions
      const suggestionSet = new Set();

      // Add product names
      products.forEach(product => {
        if (product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          suggestionSet.add(product.name);
        }

        // Add categories
        if (product.category.toLowerCase().includes(searchTerm.toLowerCase())) {
          suggestionSet.add(product.category);
        }

        // Add tags if they exist
        const tags = productTags?.[product.id] || [];
        tags.forEach(tag => {
          if (tag.toLowerCase().includes(searchTerm.toLowerCase())) {
            suggestionSet.add(tag);
          }
        });
      });

      setSuggestions(Array.from(suggestionSet).slice(0, 5));
    } else {
      onSearchResults(products);
      setSuggestions([]);
    }
  }, [searchTerm, products, onSearchResults]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setShowSuggestions(false);

    // Add to recent searches
    const newRecentSearches = [term, ...recentSearches.filter(s => s !== term)].slice(0, 5);
    setRecentSearches(newRecentSearches);
    localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));
  };

  const clearSearch = () => {
    setSearchTerm('');
    onSearchResults(products);
    setShowSuggestions(false);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(true);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchTerm);
    }
    if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="relative w-full max-w-md" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search products, categories, or styles..."
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onKeyDown={handleKeyDown}
          className="w-full px-4 py-3 pl-12 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-coral-red focus:border-transparent"
        />

        {/* Search Icon */}
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>

        {/* Clear Button */}
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          {/* Recent Searches */}
          {recentSearches.length > 0 && searchTerm === '' && (
            <div className="p-3 border-b border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Recent Searches</span>
                <button
                  onClick={clearRecentSearches}
                  className="text-xs text-coral-red hover:underline"
                >
                  Clear
                </button>
              </div>
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(search)}
                  className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                >
                  <svg className="inline w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {search}
                </button>
              ))}
            </div>
          )}

          {/* Search Suggestions */}
          {suggestions.length > 0 && (
            <div className="p-3">
              <span className="text-sm font-medium text-gray-700 mb-2 block">Suggestions</span>
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(suggestion)}
                  className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                >
                  <svg className="inline w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* No Results */}
          {searchTerm && suggestions.length === 0 && (
            <div className="p-4 text-center text-gray-500">
              <svg className="w-8 h-8 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.691-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <p className="text-sm">No suggestions found</p>
            </div>
          )}

          {/* Popular Searches */}
          {searchTerm === '' && recentSearches.length === 0 && (
            <div className="p-3">
              <span className="text-sm font-medium text-gray-700 mb-2 block">Popular Searches</span>
              {['Air Jordan', 'Basketball', 'Running', 'Casual', 'Premium'].map((popular, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(popular)}
                  className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded"
                >
                  <svg className="inline w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {popular}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
