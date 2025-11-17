import axios from 'axios';

// Create an Axios instance with default configuration
export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === 'development'
    ? 'http://localhost:8000/api' // Development API URL
    : '/api',
    withCredentials: true,
}); 