import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  // Initial animation effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Projects data - easily editable
  const projectsData = [
    {
      id: 1,
      title: " NeuroBite - Mental Wellness & Productivity Companion",
      description: "NeuroBite is a mental wellness and productivity platform that tracks moods, organizes tasks, and offers wellness resources. It helps optimize productivity while improving mental health through insightful data visualization and personalized recommendations.",
      image: "/projects/neurobite.png",
      tags: ["React", "Recharts", "Framer Motion", "MongoDB","Node.js","Express.js"],
      category: "fullstack",
      liveLink: "https://neurobite.vercel.app",
      githubLink: "https://github.com/jeet-mahapatra/neurobite"
    },
    {
      id: 2,
      title: "Tasty Food - A Order Platform",
      description: "Developed a MERN stack food ordering platform with Stripe payment integration, enabling secure transactions, and added an admin panel for managing orders and users effectively.",
      image: "/projects/tastyfood.png",
      tags: ["React", "Express", "Stripe", "Node.js",""],
      category: "fullstack",
      liveLink: "https://tastyfood123.vercel.app",
      githubLink: "https://github.com/jeet-mahapatra/Food-Delivery-App-FullStack"
    },
    {
      id: 3,
      title: "Blog Application",
      description: "A blog app built with EJS, allowing users to create accounts, post, and read blogs. Features JWT authentication for secure login and unique, popular blog content.",
      image: "/projects/blog.png",
      tags: ["Ejs", "Express", "JWT"],
      category: "fullstack",
      liveLink: "https://blog-app-backend-1l9y.onrender.com",
      githubLink: "https://github.com/jeet-mahapatra/Blog-App-Backend"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "A beautiful weather app providing real-time weather updates for any location, using a weather API. Includes sunrise and sunset times, built with HTML, CSS, and JavaScript.",
      image: "/projects/weatherapp.png",
      tags: ["HTML", "Vanila CSS", "Weather API", "Js"],
      category: "frontend",
      liveLink: "https://jeet-mahapatra.github.io/Weather-App",
      githubLink: "https://github.com/jeet-mahapatra/Weather-App"
    },
  ];

  // Filter function
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for creating meaningful and user-friendly applications.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 
              ${activeFilter === 'all' 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}
              `}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('frontend')}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 
              ${activeFilter === 'frontend' 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}
              `}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 
              ${activeFilter === 'fullstack' 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}
              `}
            >
              Full Stack
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* More Projects Link */}
          <div className="text-center mt-12">
            <a 
              href="https://github.com/jeet-mahapatra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
            >
              View more projects on GitHub
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Project Card Component with animations and hover effects
const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Project Image with Overlay */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/600x400/4f46e5/ffffff?text=Project+Image";
          }}
        />
        
        {/* Tags positioned over the image */}
        <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-medium bg-indigo-600/80 text-white rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium bg-gray-700/80 text-white rounded-full backdrop-blur-sm">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {project.description}
        </p>
        
        {/* Links */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <a 
            href={project.liveLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium"
          >
            <span>Live Demo</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          
          <a 
            href={project.githubLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
          >
            <span>GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Corner Decoration (optional) */}
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-indigo-500/20 to-transparent rounded-tl-full"></div>
    </motion.div>
  );
};

export default Projects;