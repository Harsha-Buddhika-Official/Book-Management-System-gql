import { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ME } from "../graphql/queries";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const { data, error, refetch } = useQuery(GET_ME, {
    skip: !token,
    errorPolicy: "ignore",
  });

  useEffect(() => {
    if (data && data.me) {
      setUser(data.me);
      setIsAuthenticated(true);
    } else if (error) {
      logout();
    }
  }, [data, error]);

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    setToken(token);
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    refetch,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
