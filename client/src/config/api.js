import axios from 'axios';

// API Configuration
const API_CONFIG = {
  // Backend base URL - Update this when deploying
  BASE_URL: process.env.REACT_APP_API_URL || 'https://my-portpolio-e9eq.vercel.app',
  
  // API endpoints
  ENDPOINTS: {
    SEND_EMAIL: '/api/v1/portfolio/sendEmail'
  },
  
  // Request timeout in milliseconds
  TIMEOUT: 30000, // 30 seconds
  
  // Retry configuration
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000 // 1 second
};

// Create axios instance with default configuration
export const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to:`, config.url);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor with retry logic
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    // Handle CORS errors
    if (error.message.includes('CORS')) {
      console.error('CORS Error:', error);
      throw new Error('Cross-origin request blocked. Please check server CORS configuration.');
    }
    
    // Handle network errors with retry
    if (
      error.code === 'NETWORK_ERROR' ||
      error.code === 'ECONNABORTED' ||
      (error.response && error.response.status >= 500)
    ) {
      if (!originalRequest._retry && originalRequest._retryCount < API_CONFIG.RETRY_ATTEMPTS) {
        originalRequest._retryCount = originalRequest._retryCount || 0;
        originalRequest._retryCount++;
        originalRequest._retry = true;
        
        console.log(`Retrying request (${originalRequest._retryCount}/${API_CONFIG.RETRY_ATTEMPTS})...`);
        
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, API_CONFIG.RETRY_DELAY * originalRequest._retryCount));
        
        return apiClient(originalRequest);
      }
    }
    
    return Promise.reject(error);
  }
);

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Enhanced API call function with better error handling
export const sendEmailAPI = async (formData) => {
  try {
    const response = await apiClient.post(API_CONFIG.ENDPOINTS.SEND_EMAIL, {
      name: formData.name,
      email: formData.email,
      msg: formData.message
    });
    
    return response.data;
  } catch (error) {
    console.error('Email API Error:', error);
    
    // Handle different types of errors
    if (error.response) {
      // Server responded with error status
      const errorData = error.response.data;
      throw new Error(errorData.message || 'Server error occurred');
    } else if (error.request) {
      // Request made but no response received
      throw new Error('No response from server. Please check your internet connection.');
    } else {
      // Something else happened
      throw new Error(error.message || 'An unexpected error occurred');
    }
  }
};

export default API_CONFIG;
