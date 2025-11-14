// // AuthContext.js (For managing authentication state)
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState(null); // Add state for user data

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');
//     const storedUser = localStorage.getItem('user');
//    if (token && storedUser) {
//       try {
//         const parsedUser = JSON.parse(storedUser);
//         if (parsedUser && typeof parsedUser === 'object') { // Extra check to ensure it's valid
//           setIsAuthenticated(true);
//           setUser(parsedUser);
//         } else {
//           // Invalid user data; clear it
//           localStorage.removeItem('user');
//           localStorage.removeItem('authToken');
//         }
//       } catch (error) {
//         console.error('Failed to parse stored user:', error);
//         // Clear invalid storage
//         localStorage.removeItem('user');
//         localStorage.removeItem('authToken');
//       }
//     }
//   }, []);

//   const login = (token, userData) => {
//     localStorage.setItem('authToken', token);
//     localStorage.setItem('user', JSON.stringify(userData));
//     setIsAuthenticated(true);
//     setUser(userData);
//   };

//   const logout = () => {
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('user');
//     setIsAuthenticated(false);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

//  export function useAuth() {
//   return useContext(AuthContext);
// }


// AuthContext.js (For managing authentication state)
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Add state for user data

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');
    if (token && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser && typeof parsedUser === 'object') { // Extra check to ensure it's valid
          setIsAuthenticated(true);
          setUser(parsedUser);
        } else {
          // Invalid user data; clear it
          localStorage.removeItem('user');
          localStorage.removeItem('authToken');
        }
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        // Clear invalid storage
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
      }
    }
  }, []);

  const login = (token, userData) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}