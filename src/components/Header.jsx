import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Enhanced link click handler
  const handleLinkClick = (sectionId) => {
    // Close mobile menu if open
    if (isOpen) {
      setIsOpen(false);
    }
    
    // Force scroll to section, particularly important for home
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: sectionId === 'home' ? 0 : section.offsetTop - 70, // Adjust for header height
        behavior: 'auto'
      });
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 
        ${scrolled 
          ? 'bg-gradient-to-r from-gray-900 to-slate-800 shadow-lg' 
          : 'bg-gradient-to-r from-gray-900/90 to-slate-800/90 backdrop-blur-sm'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="flex items-center"
              onClick={() => handleLinkClick('home')}
            >
              <img 
                src="/Jeetlogo.png" 
                alt="Jeet Logo" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => {
                const lowercaseItem = item.toLowerCase();
                return (
                  <li key={item}>
                    <a
                      href={`#${lowercaseItem}`}
                      onClick={() => handleLinkClick(lowercaseItem)}
                      className={`font-medium px-3 py-2 rounded-md transition-all duration-200 relative
                        text-gray-300 hover:text-white
                        after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full
                        after:bg-indigo-400 after:transition-all after:duration-300`}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none
                text-gray-300 hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 shadow-lg rounded-b-lg border-t border-gray-700">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => {
            const lowercaseItem = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${lowercaseItem}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                onClick={() => handleLinkClick(lowercaseItem)}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};



export default Header;