import React from 'react';

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-900 relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
      </div>
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 mb-8">
        <h3 className="text-2xl font-semibold text-cyan-400 mb-2">
          <a href="https://bizplus4u.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Bizplus4u</a>
        </h3>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
          <span className="text-lg text-white font-medium">Frontend Web Developer</span>
          <span className="text-gray-400 text-sm mt-1 sm:mt-0">2nd December 2024 - 28th February 2025</span>
        </div>
        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
          <li>Frontend Development Skills – Gained hands-on experience in HTML, CSS, JavaScript, and responsive design while building an e-commerce platform.</li>
          <li>UI/UX Enhancement – Worked on improving user interface and experience to ensure a smooth shopping journey for customers.</li>
          <li>API Integration – Integrated backend APIs for seamless product display, user authentication, and cart functionality.</li>
          <li>Performance Optimization – Optimized website speed and responsiveness for better user engagement and SEO ranking.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience; 