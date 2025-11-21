import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // your backend URL
  withCredentials: true,                // VERY IMPORTANT for JWT cookies
});

export default api;
