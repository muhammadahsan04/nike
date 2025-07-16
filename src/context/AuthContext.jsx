// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         // Check if user is logged in from localStorage
//         const savedUser = localStorage.getItem('nike_user');
//         if (savedUser) {
//             setUser(JSON.parse(savedUser));
//         }
//         setIsLoading(false);
//     }, []);

//     const login = async (email, password) => {
//         setIsLoading(true);

//         // Simulate API call
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (email === 'demo@nike.com' && password === 'password') {
//                     const userData = {
//                         id: 1,
//                         email,
//                         name: 'Demo User',
//                         avatar: 'https://via.placeholder.com/40'
//                     };
//                     setUser(userData);
//                     localStorage.setItem('nike_user', JSON.stringify(userData));
//                     setIsLoading(false);
//                     resolve(userData);
//                 } else {
//                     setIsLoading(false);
//                     reject(new Error('Invalid credentials'));
//                 }
//             }, 1000);
//         });
//     };

//     const register = async (name, email, password) => {
//         setIsLoading(true);

//         // Simulate API call
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const userData = {
//                     id: Date.now(),
//                     email,
//                     name,
//                     avatar: 'https://via.placeholder.com/40'
//                 };
//                 setUser(userData);
//                 localStorage.setItem('nike_user', JSON.stringify(userData));
//                 setIsLoading(false);
//                 resolve(userData);
//             }, 1000);
//         });
//     };

//     const logout = () => {
//         setUser(null);
//         localStorage.removeItem('nike_user');
//     };

//     return (
//         <AuthContext.Provider value={{
//             user,
//             login,
//             register,
//             logout,
//             isLoading
//         }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error('useAuth must be used within an AuthProvider');
//     }
//     return context;
// };



import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Load user from localStorage on app start
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            try {
                const userData = JSON.parse(savedUser);
                setUser(userData);
                setIsAuthenticated(true);
            } catch (error) {
                console.error('Error parsing saved user data:', error);
                localStorage.removeItem('user');
            }
        }
        setLoading(false);
    }, []);

    // Login function
    const login = async (email, password) => {
        try {
            setLoading(true);

            // Simulate API call - replace with your actual authentication logic
            const mockUser = {
                id: '1',
                email: email,
                name: email.split('@')[0],
                avatar: null,
                createdAt: new Date().toISOString()
            };

            // In a real app, you would make an API call here
            // const response = await fetch('/api/auth/login', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ email, password })
            // });
            // const userData = await response.json();

            setUser(mockUser);
            setIsAuthenticated(true);
            localStorage.setItem('user', JSON.stringify(mockUser));

            return { success: true, user: mockUser };
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    };

    // Register function
    const register = async (email, password, name) => {
        try {
            setLoading(true);

            // Simulate API call - replace with your actual registration logic
            const mockUser = {
                id: Date.now().toString(),
                email: email,
                name: name,
                avatar: null,
                createdAt: new Date().toISOString()
            };

            setUser(mockUser);
            setIsAuthenticated(true);
            localStorage.setItem('user', JSON.stringify(mockUser));

            return { success: true, user: mockUser };
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    };

    // Logout function
    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
        localStorage.removeItem('cart');
        localStorage.removeItem('wishlist');
    };

    // Update user profile
    const updateProfile = (updatedData) => {
        const updatedUser = { ...user, ...updatedData };
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
    };

    const value = {
        user,
        loading,
        isAuthenticated,
        login,
        register,
        logout,
        updateProfile
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
