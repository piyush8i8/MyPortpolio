import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id',
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id',
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key',
};

// Initialize EmailJS
export const initEmailJS = () => {
  try {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('EmailJS initialized successfully');
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
  }
};

// Send email function
export const sendEmail = async (formData) => {
  try {
    // Validate required configuration
    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
      throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'Portfolio Contact Form',
      message: formData.message,
      to_name: 'Piyush Kumar', // Your name
      to_email: 'piyush7p54@gmail.com', // Your email
      reply_to: formData.email,
      timestamp: new Date().toLocaleString(),
    };

    console.log('Sending email with parameters:', templateParams);

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log('Email sent successfully:', response);
    return {
      success: true,
      message: 'Your message has been sent successfully! I\'ll get back to you soon.',
      response: response
    };

  } catch (error) {
    console.error('Failed to send email:', error);
    
    let errorMessage = 'Failed to send email. Please try again later.';
    
    // Handle specific EmailJS errors
    if (error.status === 400) {
      errorMessage = 'Invalid email configuration. Please contact the administrator.';
    } else if (error.status === 401) {
      errorMessage = 'Email service authentication failed. Please contact the administrator.';
    } else if (error.status === 403) {
      errorMessage = 'Email service access denied. Please contact the administrator.';
    } else if (error.status === 413) {
      errorMessage = 'Message too large. Please shorten your message and try again.';
    } else if (error.status === 429) {
      errorMessage = 'Too many requests. Please wait a moment and try again.';
    } else if (error.text) {
      errorMessage = error.text;
    }

    return {
      success: false,
      message: errorMessage,
      error: error
    };
  }
};

// Alternative send method using form reference (for forms)
export const sendEmailFromForm = async (formRef, additionalData = {}) => {
  try {
    if (!formRef.current) {
      throw new Error('Form reference is not available');
    }

    const response = await emailjs.sendForm(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      formRef.current,
      EMAILJS_CONFIG.PUBLIC_KEY
    );

    console.log('Email sent successfully via form:', response);
    return {
      success: true,
      message: 'Your message has been sent successfully! I\'ll get back to you soon.',
      response: response
    };

  } catch (error) {
    console.error('Failed to send email via form:', error);
    
    return {
      success: false,
      message: error.text || 'Failed to send email. Please try again later.',
      error: error
    };
  }
};

export default EMAILJS_CONFIG;
