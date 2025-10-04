import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Intelligence Fusion & Strategic Operations (IFSO) Special Cell, Delhi Police",
      position: "Data Science Intern",
      duration: "1st August 2025 - 31st August 2025",
      location: "Delhi, India",
      logo: "/delhipolice.jpg",
      achievements: [
        "Contributed to data-driven projects analyzing intelligence and operational data to enhance strategic decision-making.",
        "Developed several impactful projects using machine learning and data analytics to identify patterns and support law enforcement initiatives.",
        "Collaborated closely with the IFSO Special Cell team onsite to implement actionable insights from complex datasets."
      ],
      type: "internship"
    },
    {
      id: 2,
      company: "Bizplus4u",
      position: "Frontend Web Developer",
      duration: "2nd December 2024 - 28th February 2025",
      location: "Remote",
      logo: null,
      website: "https://bizplus4u.com/",
      achievements: [
        "Frontend Development Skills – Gained hands-on experience in HTML, CSS, JavaScript, and responsive design while building an e-commerce platform.",
        "UI/UX Enhancement – Worked on improving user interface and experience to ensure a smooth shopping journey for customers.",
        "API Integration – Integrated backend APIs for seamless product display, user authentication, and cart functionality.",
        "Performance Optimization – Optimized website speed and responsiveness for better user engagement and SEO ranking."
      ],
      type: "job"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 dark:bg-gray-900 bg-gray-50 relative overflow-hidden transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-4xl font-bold text-white dark:text-white text-gray-900 mb-4">Experience</h2>
          <p className="text-gray-300 dark:text-gray-300 text-gray-600 max-w-2xl mx-auto">
            My professional journey in data science and web development
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line - centered for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 from-blue-500 via-indigo-500 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>
          
          {/* Timeline line - left side for mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600 from-blue-500 via-indigo-500 to-purple-500 md:hidden"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Desktop version */}
                <div
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} hidden md:flex`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-duration="800"
                  data-aos-delay={`${200 + index * 200}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-400 dark:to-blue-500 from-blue-500 to-indigo-500 rounded-full border-4 border-gray-900 dark:border-gray-900 border-gray-50 z-10 transform -translate-x-1/2"></div>
                  
                  {/* Content card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div 
                      className="bg-gray-900/80 dark:bg-gray-900/80 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-700/50 dark:border-gray-700/50 border-gray-200/50 p-8 hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/10 hover:shadow-blue-500/10 transition-all duration-300 group"
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay={`${400 + index * 200}`}
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          {exp.logo ? (
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} Logo`} 
                              className="w-12 h-12 rounded-lg object-cover border border-gray-600 dark:border-gray-600 border-gray-300"
                            />
                          ) : (
                            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-400 dark:to-blue-500 from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                              <Building2 className="w-6 h-6 text-white" />
                            </div>
                          )}
                          <div>
                            <h3 className="text-xl font-semibold text-cyan-400 dark:text-cyan-400 text-blue-600 group-hover:text-cyan-300 dark:group-hover:text-cyan-300 group-hover:text-blue-500 transition-colors">
                              {exp.website ? (
                                <a href={exp.website} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:underline">
                                  <span>{exp.company}</span>
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              ) : (
                                exp.company
                              )}
                            </h3>
                            <p className="text-lg text-white dark:text-white text-gray-900 font-medium mt-1">
                              {exp.position}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                        <div className="flex items-center space-x-2 text-gray-300 dark:text-gray-300 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300 dark:text-gray-300 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            exp.type === 'internship' 
                              ? 'bg-purple-500/10 text-purple-400 dark:text-purple-400 border border-purple-500/30 dark:border-purple-500/30' 
                              : 'bg-green-500/10 text-green-400 dark:text-green-400 border border-green-500/30 dark:border-green-500/30'
                          }`}>
                            {exp.type === 'internship' ? 'Internship' : 'Full-time'}
                          </span>
                        </div>
                      </div>
                      
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li 
                            key={achievementIndex}
                            className="flex items-start space-x-3 text-gray-300 dark:text-gray-300 text-gray-700"
                            data-aos="fade-up"
                            data-aos-duration="400"
                            data-aos-delay={`${600 + index * 200 + achievementIndex * 100}`}
                          >
                            <div className="w-2 h-2 bg-cyan-400 dark:bg-cyan-400 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Mobile version */}
                <div
                  className="relative flex items-start md:hidden"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={`${200 + index * 200}`}
                >
                  {/* Timeline dot for mobile */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-400 dark:to-blue-500 from-blue-500 to-indigo-500 rounded-full border-4 border-gray-900 dark:border-gray-900 border-gray-50 z-10"></div>
                  
                  {/* Content card for mobile */}
                  <div className="ml-16 flex-1">
                    <div 
                      className="bg-gray-900/80 dark:bg-gray-900/80 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-700/50 dark:border-gray-700/50 border-gray-200/50 p-6 hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/10 hover:shadow-blue-500/10 transition-all duration-300 group"
                      data-aos="zoom-in"
                      data-aos-duration="600"
                      data-aos-delay={`${400 + index * 200}`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          {exp.logo ? (
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} Logo`} 
                              className="w-10 h-10 rounded-lg object-cover border border-gray-600 dark:border-gray-600 border-gray-300"
                            />
                          ) : (
                            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-400 dark:to-blue-500 from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                              <Building2 className="w-5 h-5 text-white" />
                            </div>
                          )}
                          <div>
                            <h3 className="text-lg font-semibold text-cyan-400 dark:text-cyan-400 text-blue-600 group-hover:text-cyan-300 dark:group-hover:text-cyan-300 group-hover:text-blue-500 transition-colors">
                              {exp.website ? (
                                <a href={exp.website} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:underline">
                                  <span className="text-sm">{exp.company}</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              ) : (
                                <span className="text-sm">{exp.company}</span>
                              )}
                            </h3>
                            <p className="text-base text-white dark:text-white text-gray-900 font-medium">
                              {exp.position}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 mb-4 text-xs">
                        <div className="flex items-center space-x-1 text-gray-300 dark:text-gray-300 text-gray-600">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-300 dark:text-gray-300 text-gray-600">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            exp.type === 'internship' 
                              ? 'bg-purple-500/10 text-purple-400 dark:text-purple-400 border border-purple-500/30 dark:border-purple-500/30' 
                              : 'bg-green-500/10 text-green-400 dark:text-green-400 border border-green-500/30 dark:border-green-500/30'
                          }`}>
                            {exp.type === 'internship' ? 'Internship' : 'Full-time'}
                          </span>
                        </div>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li 
                            key={achievementIndex}
                            className="flex items-start space-x-2 text-gray-300 dark:text-gray-300 text-gray-700 text-sm"
                            data-aos="fade-up"
                            data-aos-duration="400"
                            data-aos-delay={`${600 + index * 200 + achievementIndex * 100}`}
                          >
                            <div className="w-1.5 h-1.5 bg-cyan-400 dark:bg-cyan-400 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  </section>
);
};

export default Experience; 