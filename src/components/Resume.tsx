import React from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Download my resume to learn more about my experience, skills, and accomplishments.
          </p>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 max-w-2xl mx-auto border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 p-6 rounded-full border border-cyan-500/30">
                <FileText className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
            
            <h3 className="text-2xl font-semibold text-white mb-4">Kunal Chandra - Resume</h3>
            <p className="text-gray-400 mb-8">
              Complete overview of my education, skills, projects, and professional experience in data science and machine learning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/Kunal Resume till 3rd August.pdf"
                download="Kunal_Chandra_Resume.pdf"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 border border-cyan-400/30"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
              
              <a
                href="/Kunal Resume till 3rd August.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 border-2 border-cyan-400/50 text-cyan-400 px-8 py-3 rounded-full font-semibold hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
              >
                <Eye size={20} />
                <span>View Online</span>
              </a>
            </div>
            
            <div className="mt-8 text-sm text-gray-500">
              <p className="font-mono">PDF Format • Last Updated: August 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;