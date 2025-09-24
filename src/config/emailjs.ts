// EmailJS Configuration
// Replace these with your actual EmailJS credentials from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};

// Email template parameters interface
export interface EmailTemplateParams extends Record<string, unknown> {
  to_email: string;
  from_name: string;
  from_email: string;
  phone: string;
  company: string;
  service_type: string;
  message: string;
  subject: string;
}

// EmailJS rate limiting configuration
export const EMAIL_CONFIG = {
  limitRate: {
    throttle: 10000, // 10 seconds between emails to prevent spam
  },
};
