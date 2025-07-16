// import React, { createContext, useContext, useReducer } from 'react';

// const CartContext = createContext();

// const cartReducer = (state, action) => {
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             const existingItem = state.items.find(item => item.id === action.payload.id);
//             if (existingItem) {
//                 return {
//                     ...state,
//                     items: state.items.map(item =>
//                         item.id === action.payload.id
//                             ? { ...item, quantity: item.quantity + 1 }
//                             : item
//                     ),
//                     total: state.total + parseFloat(action.payload.price.replace('$', ''))
//                 };
//             }
//             return {
//                 ...state,
//                 items: [...state.items, { ...action.payload, quantity: 1 }],
//                 total: state.total + parseFloat(action.payload.price.replace('$', ''))
//             };

//         case 'REMOVE_FROM_CART':
//             const itemToRemove = state.items.find(item => item.id === action.payload);
//             return {
//                 ...state,
//                 items: state.items.filter(item => item.id !== action.payload),
//                 total: state.total - (itemToRemove.price * itemToRemove.quantity)
//             };

//         case 'UPDATE_QUANTITY':
//             const item = state.items.find(item => item.id === action.payload.id);
//             const priceDiff = (action.payload.quantity - item.quantity) * parseFloat(item.price.replace('$', ''));

//             return {
//                 ...state,
//                 items: state.items.map(item =>
//                     item.id === action.payload.id
//                         ? { ...item, quantity: action.payload.quantity }
//                         : item
//                 ),
//                 total: state.total + priceDiff
//             };

//         case 'CLEAR_CART':
//             return {
//                 items: [],
//                 total: 0
//             };

//         default:
//             return state;
//     }
// };

// export const CartProvider = ({ children }) => {
//     const [cart, dispatch] = useReducer(cartReducer, {
//         items: [],
//         total: 0
//     });

//     const addToCart = (product) => {
//         dispatch({ type: 'ADD_TO_CART', payload: product });
//     };

//     const removeFromCart = (productId) => {
//         dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
//     };

//     const updateQuantity = (productId, quantity) => {
//         dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
//     };

//     const clearCart = () => {
//         dispatch({ type: 'CLEAR_CART' });
//     };

//     return (
//         <CartContext.Provider value={{
//             cart,
//             addToCart,
//             removeFromCart,
//             updateQuantity,
//             clearCart
//         }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error('useCart must be used within a CartProvider');
//     }
//     return context;
// };


import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                };
            }
            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }]
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };

        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ).filter(item => item.quantity > 0)
            };

        case 'CLEAR_CART':
            return {
                ...state,
                items: []
            };

        case 'LOAD_CART':
            return {
                ...state,
                items: action.payload
            };

        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.items));
    }, [state.items]);

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const removeFromCart = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    };

    const updateQuantity = (productId, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const getCartTotal = () => {
        return state.items.reduce((total, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return total + (price * item.quantity);
        }, 0);
    };

    const getCartItemsCount = () => {
        return state.items.reduce((count, item) => count + item.quantity, 0);
    };

    const value = {
        cart: state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemsCount
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
