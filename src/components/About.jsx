import { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const education = [
    {
      school: "Dr. Sudhir Chandra Sur Institute of Technology and Sports Complex",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2022 - 2026",
      performance: "CGPA: 8.3 (till now)",
      logo: "surtech.jpeg",
    },
    {
      school: "Panchal High School",
      degree: "12th Grade",
      period: "2021",
      performance: "Percentage: 86.4%",
      logo: "high-school-logo.png",
    },
    {
      school: "Ichharia High School",
      degree: "10th Grade",
      period: "2019",
      performance: "Percentage: 85.2%",
      logo: "school-logo.png",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Profile Image - Left Side */}
            <div
              className={`lg:col-span-4 transition-all duration-1000 delay-300 transform ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-indigo-100 dark:border-indigo-900">
                  <img
                    src="/profile.png"
                    alt="Jeet Mahapatra"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/500x500/4f46e5/ffffff?text=J";
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-indigo-600 dark:bg-indigo-500 opacity-10 -z-10"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full bg-indigo-600 dark:bg-indigo-500 opacity-10 -z-10"></div>
              </div>
            </div>

            {/* Content - Right Side */}
            <div
              className={`lg:col-span-8 transition-all duration-1000 delay-500 transform ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  Full Stack Web Developer
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  I am Jeet Mahapatra, a full-stack web developer with expertise in modern web technologies.
                  Passionate about creating user-friendly applications and solving complex problems with
                  clean, efficient code.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  My skill set includes frontend technologies like React and Tailwind CSS,
                  backend development with Node.js and Express, and database management with
                  MongoDB and SQL. I have a strong foundation in data structures and algorithms,
                  which helps me build optimized solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span className="text-gray-700 dark:text-gray-300">C/C++</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span className="text-gray-700 dark:text-gray-300">React</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span className="text-gray-700 dark:text-gray-300">Node.js</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span className="text-gray-700 dark:text-gray-300">MongoDB</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span className="text-gray-700 dark:text-gray-300">Express</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                    <span className="text-gray-700 dark:text-gray-300">SQL</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a 
                    href="#contact" 
                    className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Contact Me
                  </a>
                  <a 
                    href="/JEETMAHAPATRA_ATS.pdf" 
                    target="_blank" 
                    className="px-6 py-2 border-2 border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 font-medium rounded-lg transition-colors"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Education Timeline Section */}
          <div
            className={`mt-16 transition-all duration-1000 delay-700 transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-center mb-10 text-gray-800 dark:text-gray-100">
              Education <span className="text-indigo-600 dark:text-indigo-400">Timeline</span>
            </h3>

            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-indigo-100 dark:bg-indigo-900/50 rounded-full"></div>

              <div className="space-y-8 md:space-y-0">
                {education.map((item, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Circle for desktop */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-gray-900"></div>

                    {/* Card */}
                    <div 
                      className={`md:w-5/12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg
                        border border-gray-100 dark:border-gray-700
                        ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} 
                        transition-all duration-700 delay-${300 + index * 200}
                        ${isVisible 
                          ? "opacity-100 translate-y-0" 
                          : "opacity-0 translate-y-10"
                        }`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-lg p-2 h-16 w-16 flex items-center justify-center">
                          {/* Use a placeholder or logo */}
                          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                            {item.school.split(' ')[0][0]}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                            {item.school}
                          </h4>
                          <div className="text-indigo-600 dark:text-indigo-400 font-medium">
                            {item.degree}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {item.period}
                          </div>
                          <div className="mt-2 font-medium text-gray-700 dark:text-gray-300">
                            {item.performance}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;