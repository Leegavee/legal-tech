import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

const axiosClient = axios.create({
  baseURL,
});

axiosClient.interceptors.request.use((config: any) => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('tkn')}`,
    },
  };
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    throw err.response.data;
  },
);

export default axiosClient;
