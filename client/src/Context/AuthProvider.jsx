import { createContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const currUser = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/users/profile`,
          { withCredentials: true }
        );
        setUser(currUser.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    getUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
