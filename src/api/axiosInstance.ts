import axios from "axios";

const BASE_URL = "https://offlinetestrepo.onrender.com/v1/api"

// Configura la instancia global de Axios
const axiosInstance = axios.create({
  baseURL: BASE_URL, // Cambia esta URL por la de tu API
  timeout: 10000, // Tiempo de espera (en milisegundos)
  headers: {
    "Content-Type": "application/json", // Formato de los datos enviados
    Accept: "application/json", // Formato de los datos recibidos
  },
});

// Interceptor de respuesta para manejar errores globales
axiosInstance.interceptors.response.use(
  (response) => response, // Si todo está bien, devuelve la respuesta
  (error) => {
    console.error("Error de Axios:", error.response || error.message);
    // Puedes mostrar un mensaje global o redirigir en función del error
    return Promise.reject(error);
  }
);

export default axiosInstance;
