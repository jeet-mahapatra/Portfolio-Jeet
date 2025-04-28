import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  
  // Simplified state management
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });
  
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation on scroll
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "Message is too short";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setStatus({
      submitting: true,
      submitted: false,
      error: false,
      message: ''
    });
    
    try {
      // Using formRef to get form data directly
      await emailjs.sendForm(
       'sahajparasona', // Replace with your actual service ID
        'template_wfu0b2m', // Replace with your actual template ID
        formRef.current,
        'X50dxe34Yze7ZKxmD' // Replace with your actual public key
      );
      
      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully.'
      });
      
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({...prev, submitted: false, message: ''}));
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: `Failed to send message: ${error.text || 'Unknown error'}`
      });
    }
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div 
          className={`max-w-3xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
              Have a question or want to work together? Feel free to reach out using the form below.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 transition-all duration-300">
            {/* Status message */}
            {(status.submitted || status.error) && (
              <div 
                className={`mb-6 p-4 rounded-md ${
                  status.error 
                    ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400' 
                    : 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                }`}
              >
                <div className="flex">
                  <div className="flex-shrink-0">
                    {status.error ? (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{status.message}</p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Contact form with simplified state handling */}
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="mb-6">
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border ${
                    errors.name 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-300 dark:border-gray-600'
                  } text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="reply_to" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border ${
                    errors.email 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-300 dark:border-gray-600'
                  } text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border ${
                    errors.message 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-gray-300 dark:border-gray-600'
                  } text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                )}
              </div>
              
              {/* Hidden field for from_email that's required by some EmailJS templates */}
              <input 
                type="hidden" 
                name="from_email" 
                value={email} 
              />
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className={`px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg 
                    hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 
                    disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
                    relative overflow-hidden group w-full sm:w-auto`}
                >
                  <span className="relative z-10">
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <span className="absolute top-0 left-0 w-0 h-full bg-indigo-800 
                    transition-all duration-300 ease-out group-hover:w-full"></span>
                </button>
              </div>
            </form>
          </div>
          
          <div className="text-center mt-8 text-gray-600 dark:text-gray-400 text-sm">
            <p>Alternatively, you can reach me at <a href="mailto:jeetmahapatrareal@gmail.com" 
               className="text-indigo-600 dark:text-indigo-400 hover:underline">jeetmahapatrareal@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



