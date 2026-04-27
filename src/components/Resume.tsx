import { Download, FileText, Eye } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/22 via-black/5 to-black/22 pointer-events-none z-[1]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Download my resume to learn more about my experience, skills, and accomplishments.
          </p>
          
          <div 
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 max-w-2xl mx-auto border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 group relative"
          >
            <div className="flex justify-center mb-8 relative z-20">
              <div className="bg-gradient-to-r from-blue-500/20 to-indigo-600/20 p-6 rounded-full border border-blue-500/30 group-hover:border-blue-400/50 transition-all duration-300 group-hover:scale-110">
                <FileText className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-4 relative z-20 group-hover:text-blue-100 transition-colors duration-300">Kunal Chandra - Resume</h3>
            <p className="text-gray-400 mb-8 relative z-20 group-hover:text-gray-300 transition-colors duration-300">
              Complete overview of my education, skills, projects, and professional experience in data science and machine learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
              <a
                href="/Kunal Resume till 17th april.pdf"
                download="Kunal_Chandra_Resume.pdf"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/30 group-hover:from-blue-400 group-hover:to-indigo-500"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
              
              <a
                href="/Kunal Resume till 17th april.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 border-2 border-blue-400/50 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400/10 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:text-blue-300 group-hover:border-blue-300/50"
              >
                <Eye size={20} />
                <span>View Online</span>
              </a>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 relative z-20 group-hover:text-gray-400 transition-colors duration-300">
              <p className="font-mono">PDF Format • Last Updated: February 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
