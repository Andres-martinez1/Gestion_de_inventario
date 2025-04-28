import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // Esto permite guardar cookies automáticamente
});

export default instance;
