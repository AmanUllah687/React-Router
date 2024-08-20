// AuthContext.js
import { useState, createContext, useContext } from 'react';

// Create an Auth context
const AuthContext = createContext(null);

// AuthProvider to provide user state and login/logout functions
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext); 
};
