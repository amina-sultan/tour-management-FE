import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5260/api'
});

export default axiosInstance;
