// API Configuration
const API_CONFIG = {
  // Backend base URL - Update this when deploying
  BASE_URL: process.env.REACT_APP_API_URL || 'https://my-portpolio-e9eq.vercel.app',
  
  // API endpoints
  ENDPOINTS: {
    SEND_EMAIL: '/api/v1/portfolio/sendEmail'
  }
};

// Helper function to get full API URL
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

export default API_CONFIG;
