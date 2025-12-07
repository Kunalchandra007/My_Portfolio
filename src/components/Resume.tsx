import { useRef } from 'react';
import { Download, FileText, Eye } from 'lucide-react';

const Resume = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Enhanced tilt and glow effect handler for resume card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Subtle tilt effect
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    
    // Glow effect
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section id="resume" className="py-20 bg-black relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Download my resume to learn more about my experience, skills, and accomplishments.
          </p>
          
          <div 
            ref={cardRef}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-12 max-w-2xl mx-auto border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer relative"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="200"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              transformStyle: 'preserve-3d',
              '--mouse-x': '50%',
              '--mouse-y': '50%'
            } as React.CSSProperties}
          >
            {/* Enhanced glow effect overlay */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10 opacity-0 group-hover:opacity-100 rounded-2xl"
              style={{
                background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.15), rgba(147,197,253,0.08) 40%, transparent 70%)'
              }}
            />
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
                href="/Kunal Resume till 8th december.pdf"
                download="Kunal_Chandra_Resume.pdf"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border border-blue-400/30 group-hover:from-blue-400 group-hover:to-indigo-500"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="400"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
              
              <a
                href="/Kunal Resume till 8th december.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 border-2 border-blue-400/50 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-400/10 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group-hover:text-blue-300 group-hover:border-blue-300/50"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="500"
              >
                <Eye size={20} />
                <span>View Online</span>
              </a>
            </div>
            
            <div className="mt-8 text-sm text-gray-500 relative z-20 group-hover:text-gray-400 transition-colors duration-300">
              <p className="font-mono">PDF Format • Last Updated: December 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;