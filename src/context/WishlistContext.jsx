// import React, { createContext, useContext, useReducer, useEffect } from 'react';

// const WishlistContext = createContext();

// const wishlistReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_TO_WISHLIST':
//             if (state.items.find(item => item.id === action.payload.id)) {
//                 return state;
//             }
//             return {
//                 ...state,
//                 items: [...state.items, action.payload]
//             };

//         case 'REMOVE_FROM_WISHLIST':
//             return {
//                 ...state,
//                 items: state.items.filter(item => item.id !== action.payload)
//             };

//         case 'CLEAR_WISHLIST':
//             return {
//                 items: []
//             };

//         case 'LOAD_WISHLIST':
//             return {
//                 items: action.payload
//             };

//         default:
//             return state;
//     }
// };

// export const WishlistProvider = ({ children }) => {
//     const [wishlist, dispatch] = useReducer(wishlistReducer, {
//         items: []
//     });

//     useEffect(() => {
//         const savedWishlist = localStorage.getItem('nike_wishlist');
//         if (savedWishlist) {
//             dispatch({ type: 'LOAD_WISHLIST', payload: JSON.parse(savedWishlist) });
//         }
//     }, []);

//     useEffect(() => {
//         localStorage.setItem('nike_wishlist', JSON.stringify(wishlist.items));
//     }, [wishlist.items]);

//     const addToWishlist = (product) => {
//         dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
//     };

//     const removeFromWishlist = (productId) => {
//         dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
//     };

//     const clearWishlist = () => {
//         dispatch({ type: 'CLEAR_WISHLIST' });
//     };

//     const isInWishlist = (productId) => {
//         return wishlist.items.some(item => item.id === productId);
//     };

//     return (
//         <WishlistContext.Provider value={{
//             wishlist,
//             addToWishlist,
//             removeFromWishlist,
//             clearWishlist,
//             isInWishlist
//         }}>
//             {children}
//         </WishlistContext.Provider>
//     );
// };

// export const useWishlist = () => {
//     const context = useContext(WishlistContext);
//     if (!context) {
//         throw new Error('useWishlist must be used within a WishlistProvider');
//     }
//     return context;
// };


import React, { createContext, useContext, useReducer, useEffect } from 'react';

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
            const exists = state.items.find(item => item.id === action.payload.id);
            if (exists) {
                return state;
            }
            return {
                ...state,
                items: [...state.items, action.payload]
            };

        case 'REMOVE_FROM_WISHLIST':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };

        case 'CLEAR_WISHLIST':
            return {
                ...state,
                items: []
            };

        case 'LOAD_WISHLIST':
            return {
                ...state,
                items: action.payload
            };

        default:
            return state;
    }
};

export const WishlistProvider = ({ children }) => {
    const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

    useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            dispatch({ type: 'LOAD_WISHLIST', payload: JSON.parse(savedWishlist) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(state.items));
    }, [state.items]);

    const addToWishlist = (product) => {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
    };

    const removeFromWishlist = (productId) => {
        dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
    };

    const clearWishlist = () => {
        dispatch({ type: 'CLEAR_WISHLIST' });
    };

    const isInWishlist = (productId) => {
        return state.items.some(item => item.id === productId);
    };

    const value = {
        wishlist: state,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        isInWishlist
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};
