import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mrbylezy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-black dark:bg-black bg-white relative overflow-hidden transition-colors duration-300">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/10 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-4xl font-bold text-white dark:text-white text-gray-900 mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-500 dark:from-cyan-400 dark:to-purple-500 from-cyan-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about data science and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div 
            className="space-y-8"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white dark:text-white text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-400 dark:text-gray-400 text-gray-600 mb-8">
                Feel free to reach out to me for any inquiries, project collaborations, or just to say hello. 
                I'm always excited to connect with fellow <span className="text-cyan-400 dark:text-cyan-400 text-blue-600">data enthusiasts</span> and professionals.
              </p>
            </div>
            
            <div className="space-y-6">
              <div 
                className="flex items-center space-x-4 group"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="400"
              >
                <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 dark:from-cyan-500/20 dark:to-blue-600/20 from-blue-500/20 to-indigo-600/20 p-3 rounded-full border border-cyan-500/30 dark:border-cyan-500/30 border-blue-500/30 group-hover:border-cyan-400/50 dark:group-hover:border-cyan-400/50 group-hover:border-blue-400/50 transition-all duration-300">
                  <Mail className="w-6 h-6 text-cyan-400 dark:text-cyan-400 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-white dark:text-white text-gray-900">Email</h4>
                  <p className="text-gray-400 dark:text-gray-400 text-gray-600">kunalworkrelated@gmail.com</p>
                </div>
              </div>
              
              <div 
                className="flex items-center space-x-4 group"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="500"
              >
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 dark:from-blue-500/20 dark:to-purple-600/20 from-indigo-500/20 to-purple-600/20 p-3 rounded-full border border-blue-500/30 dark:border-blue-500/30 border-indigo-500/30 group-hover:border-blue-400/50 dark:group-hover:border-blue-400/50 group-hover:border-indigo-400/50 transition-all duration-300">
                  <Phone className="w-6 h-6 text-blue-400 dark:text-blue-400 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-white dark:text-white text-gray-900">Phone</h4>
                  <p className="text-gray-400 dark:text-gray-400 text-gray-600 font-mono">+91 9911566654</p>
                </div>
              </div>
              
              <div 
                className="flex items-center space-x-4 group"
                data-aos="fade-up"
                data-aos-duration="400"
                data-aos-delay="600"
              >
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 dark:from-purple-500/20 dark:to-pink-600/20 from-purple-500/20 to-pink-600/20 p-3 rounded-full border border-purple-500/30 dark:border-purple-500/30 border-purple-500/30 group-hover:border-purple-400/50 dark:group-hover:border-purple-400/50 group-hover:border-purple-400/50 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-purple-400 dark:text-purple-400 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-white dark:text-white text-gray-900">Location</h4>
                  <p className="text-gray-400 dark:text-gray-400 text-gray-600">Haridwar, Uttarakhand, India</p>
                </div>
              </div>
            </div>
            
            <div 
              className="pt-8"
              data-aos="fade-up"
              data-aos-duration="400"
              data-aos-delay="700"
            >
              <h4 className="font-semibold text-white dark:text-white text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/kunal-chandra007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 dark:from-blue-600/20 dark:to-blue-700/20 from-blue-600/20 to-blue-700/20 text-blue-400 dark:text-blue-400 text-blue-600 p-3 rounded-full border border-blue-500/30 dark:border-blue-500/30 border-blue-500/30 hover:border-blue-400/50 dark:hover:border-blue-400/50 hover:border-blue-400/50 hover:bg-blue-600/30 dark:hover:bg-blue-600/30 hover:bg-blue-600/30 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Kunalchandra007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-gray-700/20 to-gray-800/20 dark:from-gray-700/20 dark:to-gray-800/20 from-gray-700/20 to-gray-800/20 text-gray-400 dark:text-gray-400 text-gray-600 p-3 rounded-full border border-gray-600/30 dark:border-gray-600/30 border-gray-600/30 hover:border-gray-400/50 dark:hover:border-gray-400/50 hover:border-gray-400/50 hover:bg-gray-700/30 dark:hover:bg-gray-700/30 hover:bg-gray-700/30 transition-all duration-300 hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://x.com/KunalChandra777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 dark:from-cyan-500/20 dark:to-blue-600/20 from-cyan-500/20 to-blue-600/20 text-cyan-400 dark:text-cyan-400 text-cyan-600 p-3 rounded-full border border-cyan-500/30 dark:border-cyan-500/30 border-cyan-500/30 hover:border-cyan-400/50 dark:hover:border-cyan-400/50 hover:border-cyan-400/50 hover:bg-cyan-500/30 dark:hover:bg-cyan-500/30 hover:bg-cyan-500/30 transition-all duration-300 hover:scale-110"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className="bg-gray-900/50 dark:bg-gray-900/50 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-700/50 dark:border-gray-700/50 border-gray-200/50 p-8 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 hover:border-blue-500/30 transition-all duration-300"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-semibold text-white dark:text-white text-gray-900 mb-6">Send Message</h3>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-400/50 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-center">
                  Something went wrong. Please try again or contact me directly.
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 border flex items-center justify-center space-x-2 ${
                  isSubmitting 
                    ? 'bg-gray-600 text-gray-400 border-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 border-cyan-400/30'
                }`}
              >
                <Send size={20} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;