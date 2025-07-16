import React, { createContext, useContext, useReducer, useEffect } from 'react';

const ReviewsContext = createContext();

const reviewsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_REVIEW':
            return {
                ...state,
                [action.payload.productId]: [
                    ...(state[action.payload.productId] || []),
                    {
                        id: Date.now(),
                        ...action.payload.review,
                        date: new Date().toISOString()
                    }
                ]
            };

        case 'LOAD_REVIEWS':
            return action.payload;

        default:
            return state;
    }
};

export const ReviewsProvider = ({ children }) => {
    const [reviews, dispatch] = useReducer(reviewsReducer, {});

    useEffect(() => {
        const savedReviews = localStorage.getItem('nike_reviews');
        if (savedReviews) {
            dispatch({ type: 'LOAD_REVIEWS', payload: JSON.parse(savedReviews) });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('nike_reviews', JSON.stringify(reviews));
    }, [reviews]);

    const addReview = (productId, review) => {
        dispatch({ type: 'ADD_REVIEW', payload: { productId, review } });
    };

    const getProductReviews = (productId) => {
        return reviews[productId] || [];
    };

    const getAverageRating = (productId) => {
        const productReviews = reviews[productId] || [];
        if (productReviews.length === 0) return 0;

        const sum = productReviews.reduce((acc, review) => acc + review.rating, 0);
        return (sum / productReviews.length).toFixed(1);
    };

    return (
        <ReviewsContext.Provider value={{
            reviews,
            addReview,
            getProductReviews,
            getAverageRating
        }}>
            {children}
        </ReviewsContext.Provider>
    );
};

export const useReviews = () => {
    const context = useContext(ReviewsContext);
    if (!context) {
        throw new Error('useReviews must be used within a ReviewsProvider');
    }
    return context;
};
