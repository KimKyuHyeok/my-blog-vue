import axios from 'axios';

// const API_URL = import.meta.env.VITE_API_URL;
const API_URL = 'https://api.devkyu96.site'

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

apiClient.interceptors.request.use(config => {
    const token = localStorage.getItem('admin_token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
})

export default apiClient;