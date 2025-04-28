import { useEffect, useState } from 'react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [certificateLoaded, setCertificateLoaded] = useState(true);

  // Fade-in animation effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Smooth scroll function for the CTA buttons
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Toggle image modal
  const toggleModal = () => {
    setShowModal(!showModal);
    // Prevent body scroll when modal is open
    if (!showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 md:px-8">
      <div 
        className={`container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 transition-opacity duration-1000 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Text Content - Left Side */}
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-xl md:text-2xl font-medium text-indigo-600 dark:text-indigo-400 mb-3">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-4">
            JEET MAHAPATRA
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Full Stack Web Developer |
            <span className="flex items-center justify-center lg:justify-start mt-2 space-x-2">
              <span>Smart India Hacathon Grand Finalist - 2024</span>
              <button 
                onClick={toggleModal}
                className="inline-flex items-center text-indigo-500 hover:text-indigo-600 focus:outline-none"
                aria-label="View Smart India Hackathon certificate"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </span>
          </h3>

          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-transparent text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium border-2 border-indigo-600 dark:border-indigo-400 hover:border-indigo-700 dark:hover:border-indigo-300 rounded-lg transition-all duration-300 hover:shadow-md w-full sm:w-auto"
            >
              Contact Me
            </button>
          </div>

          <div className="mt-12 flex justify-center lg:justify-start space-x-6">
            <a href="https://github.com/jeet-mahapatra" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/jeet-mahapatra" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Profile Image - Right Side */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <div className="w-full h-full rounded-full border-4 border-indigo-500 dark:border-indigo-400 overflow-hidden shadow-xl">
            <img 
              src="/Photo.jpg" 
              alt="Profile of Jeet" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400x400/4f46e5/ffffff?text=J";
              }}
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-pink-400 dark:bg-pink-500 opacity-20 -z-10"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-indigo-400 dark:bg-indigo-500 opacity-20 -z-10"></div>
        </div>
      </div>

      {/* Optimized Modal for SIH certificate/image */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 transition-opacity">
          <div className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 z-50 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none shadow-md"
              onClick={toggleModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </button>
            
            {/* Modal content with responsive container */}
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform transition-all w-full h-full">
              <div className="overflow-auto max-h-[80vh] p-2">
                {certificateLoaded ? (
                  <img 
                    src="/sih-certificate.jpg" 
                    alt="Smart India Hackathon Certificate" 
                    className="w-full h-auto object-contain"
                    onLoad={() => setCertificateLoaded(true)}
                    onError={(e) => {
                      console.log("Certificate failed to load");
                      e.target.onerror = null;
                      setCertificateLoaded(false);
                    }}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-indigo-400 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      Smart India Hackathon Certificate
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
                      Jeet Mahapatra participated in Smart India Hackathon 2024 and achieved Grand Finalist status.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-gray-500 dark:text-gray-400" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Home;