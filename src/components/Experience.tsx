import React from 'react';

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Delhi Police Experience Card */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
          <div className="flex items-center mb-4">
            <img 
              src="/delhipolice.jpg" 
              alt="Delhi Police Logo" 
              className="w-12 h-12 rounded-lg mr-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-cyan-400">
              Intelligence Fusion & Strategic Operations (IFSO) Special Cell, Delhi Police
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
            <span className="text-lg text-white font-medium">Data Science Intern</span>
            <span className="text-cyan-400 text-sm font-semibold mt-1 sm:mt-0 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/30">1st August 2025 - 31st August 2025</span>
          </div>
          <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
            <li>Contributed to data-driven projects analyzing intelligence and operational data to enhance strategic decision-making.</li>
            <li>Developed several impactful projects using machine learning and data analytics to identify patterns and support law enforcement initiatives.</li>
            <li>Collaborated closely with the IFSO Special Cell team onsite to implement actionable insights from complex datasets.</li>
          </ul>
        </div>

        {/* Bizplus4u Experience Card */}
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">
            <a href="https://bizplus4u.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Bizplus4u</a>
          </h3>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
            <span className="text-lg text-white font-medium">Frontend Web Developer</span>
            <span className="text-cyan-400 text-sm font-semibold mt-1 sm:mt-0 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/30">2nd December 2024 - 28th February 2025</span>
          </div>
          <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
            <li>Frontend Development Skills – Gained hands-on experience in HTML, CSS, JavaScript, and responsive design while building an e-commerce platform.</li>
            <li>UI/UX Enhancement – Worked on improving user interface and experience to ensure a smooth shopping journey for customers.</li>
            <li>API Integration – Integrated backend APIs for seamless product display, user authentication, and cart functionality.</li>
            <li>Performance Optimization – Optimized website speed and responsiveness for better user engagement and SEO ranking.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Experience; 