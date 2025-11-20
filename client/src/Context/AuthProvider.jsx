import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();  // IMPORTANT

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const currUser = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/users/profile`,
          { withCredentials: true }
        );
        setUser(currUser.data);
      } catch (error) {
        // user not logged in
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
