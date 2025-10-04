import React, { useState } from 'react';
import { Award, ExternalLink, Download, ChevronDown, ChevronUp } from 'lucide-react';

const Certificates = () => {
  const [expandedCertificates, setExpandedCertificates] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedCertificates);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCertificates(newExpanded);
  };

  const truncateDescription = (description: string, maxLength: number = 200) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };
  const certificates = [
    {
      name: "Python for Data Science",
      organization: "NPTEL - IIT Madras",
      date: "2024",
      description: "Successfully completed the NPTEL Online Certification course on Python for Data Science from Indian Institute of Technology, Madras, earning an Elite tag and Silver medal with a consolidated score of 79%. This 4-week course significantly enhanced my skills in using Python for data analysis and manipulation.",
      image: "/Python for Data Science (1)_page-0001 (1).jpg",
      learning: "Enhanced Python skills for data analysis, manipulation, and scientific computing with practical applications."
    },
    {
      name: "Programming in Java",
      organization: "NPTEL",
      date: "2023",
      description: "Completed a comprehensive course on Java programming, covering OOP concepts, data structures, and algorithms.",
      image: "/programming in java.jpeg",
      learning: "Strengthened Java fundamentals and problem-solving skills."
    },
    {
      name: "Summer Analytics 2025",
      organization: "IIT Guwahati",
      date: "2025",
      description: "Participated in and successfully completed the 6-week 'Summer Analytics 2025' program organized by the Consulting & Analytics Club, IIT Guwahati. The program provided hands-on experience and a deep dive into the fields of Data Science and Machine Learning.",
      image: "/summer.jpg",
      learning: "Gained comprehensive knowledge in Data Science and Machine Learning through hands-on projects and industry exposure."
    },
    {
      name: "DSA in Java",
      organization: "Apna College",
      date: "2023",
      description: "Mastered data structures and algorithms in Java, including arrays, linked lists, trees, and sorting algorithms.",
      image: "/DSA in java.jpeg",
      learning: "Improved algorithmic thinking and coding efficiency."
    },
    {
      name: "Project Management",
      organization: "Coursera",
      date: "2023",
      description: "Learned project planning, execution, and agile methodologies for effective project delivery.",
      image: "/project management.jpeg",
      learning: "Gained skills in managing software projects and teamwork."
    },
    {
      name: "Power BI Training",
      organization: "Ducat India",
      date: "2024",
      description: "Completed a Power BI training course with practical exercises and real-world data visualization projects.",
      image: "/ducat india.jpeg",
      learning: "Enhanced data visualization and dashboarding skills using Power BI."
    },
    {
      name: "GirlScript Summer of Code 2025",
      organization: "GirlScript Foundation",
      date: "2025",
      description: "Contributed to GirlScript Summer of Code 2025, a prominent open-source program. This experience involved collaborating with a team to contribute to an open-source project, enhancing my practical coding skills and understanding of version control systems.",
      image: "/gssoc.jpg",
      learning: "Gained hands-on experience in open-source development, version control, and collaborative coding practices."
    },
    {
      name: "Web Development",
      organization: "Apna College",
      date: "2023",
      description: "Hands-on training in HTML, CSS, JavaScript, and modern web frameworks for building responsive websites.",
      image: "/Webdev.jpeg",
      learning: "Built several web projects and learned best practices in frontend development."
    },
    {
      name: "AI & ML Internship",
      organization: "Teachnook",
      date: "2023",
      description: "Interned in AI & ML, working on real projects involving data preprocessing, model building, and evaluation.",
      image: "/teachnook.jpeg",
      learning: "Applied machine learning concepts to solve real-world problems."
    },
    {
      name: "Tata Data Analytics Workshop",
      organization: "Tata Consultancy Services",
      date: "2024",
      description: "Participated in a hands-on workshop focused on data analytics, business intelligence, and real-world case studies.",
      image: "/Tata.jpeg",
      learning: "Gained practical experience in data analytics tools and industry best practices."
    },
    {
      name: "Won Intra College Cricket Tournament",
      organization: "Haridwar University",
      date: "2024",
      description: "Achieved first place in the Intra College cricket tournament with my whole team. This victory was a testament to our hard work, dedication, and the power of teamwork.",
      image: "/cricket.jpeg",
      learning: "Learned the importance of collaboration, perseverance, and supporting each other to achieve a common goal."
    },
    {
      name: "HackWithIndia: National Coding Challenge Finalist",
      organization: "HackWithIndia 2024",
      date: "2024",
      description: "Secured a spot in the top 5000 among 25,000+ teams from all over India in the prestigious HackWithIndia coding competition.",
      image: "/hackwithindia.jpeg",
      learning: "Demonstrated problem-solving, teamwork, and coding skills at a national level."
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-black dark:bg-black bg-white relative overflow-hidden transition-colors duration-300">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/5 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/5 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-4xl font-bold text-white dark:text-white text-gray-900 mb-4">
            Certificates & <span className="bg-gradient-to-r from-purple-400 to-pink-500 dark:from-purple-400 dark:to-pink-500 from-purple-600 to-pink-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 text-gray-600 max-w-3xl mx-auto">
            Professional certifications and courses that demonstrate my commitment to continuous learning and skill development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-700/50 dark:border-gray-700/50 border-gray-200/50 overflow-hidden hover:border-purple-500/30 dark:hover:border-purple-500/30 hover:border-purple-500/30 hover:bg-gray-900/70 dark:hover:bg-gray-900/70 hover:bg-white/70 transition-all duration-300 group"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={`${200 + index * 100}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-48 object-contain bg-black group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => window.open(cert.image, '_blank')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-500/20 backdrop-blur-sm p-2 rounded-full border border-yellow-500/30">
                    <Award className="w-6 h-6 text-yellow-400" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white dark:text-white text-gray-900 mb-2 group-hover:text-purple-400 dark:group-hover:text-purple-400 group-hover:text-purple-600 transition-colors duration-300">{cert.name}</h3>
                <p className="text-cyan-400 dark:text-cyan-400 text-blue-600 font-medium mb-2">{cert.organization}</p>
                <p className="text-gray-500 dark:text-gray-500 text-gray-600 text-sm mb-3 font-mono">{cert.date}</p>
                <p className="text-gray-400 dark:text-gray-400 text-gray-600 mb-4">
                  {expandedCertificates.has(index) ? cert.description : truncateDescription(cert.description)}
                </p>
                {cert.description.length > 200 && (
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="flex items-center space-x-1 text-purple-400 dark:text-purple-400 text-purple-600 hover:text-purple-300 dark:hover:text-purple-300 hover:text-purple-500 transition-colors duration-300 mb-4"
                  >
                    <span className="text-sm font-medium">
                      {expandedCertificates.has(index) ? 'Read Less' : 'Read More'}
                    </span>
                    {expandedCertificates.has(index) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                )}
                <p className="text-gray-300 dark:text-gray-300 text-gray-700 italic mb-2">{cert.learning}</p>
                <button
                  className="mt-2 px-4 py-1 bg-cyan-600 dark:bg-cyan-600 bg-blue-600 text-white rounded hover:bg-cyan-700 dark:hover:bg-cyan-700 hover:bg-blue-700 transition"
                  onClick={() => window.open(cert.image, '_blank')}
                  data-aos="zoom-in"
                  data-aos-duration="400"
                  data-aos-delay={`${400 + index * 100}`}
                >
                  View Full Image
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;