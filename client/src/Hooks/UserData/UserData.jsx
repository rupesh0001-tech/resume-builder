import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

export const getUserData = () => {
    const {user, setUser} = useContext(AuthContext);
    return {user, setUser};
}