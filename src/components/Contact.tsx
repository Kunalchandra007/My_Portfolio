import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import SectionHeader from './story/SectionHeader';
import Reveal from './story/Reveal';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mrbylezy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    'w-full rounded-lg border border-hairline bg-surface-2 px-4 py-3 text-ink placeholder-ink-faint transition-all duration-300 focus:border-nebula-soft/50 focus:outline-none focus:ring-2 focus:ring-nebula/40';

  const infoRows = [
    { icon: <Mail className="h-6 w-6 text-ice" />, label: 'Email', value: 'kunalworkrelated@gmail.com' },
    { icon: <Phone className="h-6 w-6 text-ice" />, label: 'Phone', value: '+91 9911566654', mono: true },
    { icon: <MapPin className="h-6 w-6 text-ice" />, label: 'Location', value: 'Haridwar, Uttarakhand, India' },
  ];

  const socials = [
    { href: 'https://www.linkedin.com/in/kunal-chandra007', icon: <Linkedin size={22} />, label: 'LinkedIn' },
    { href: 'https://github.com/Kunalchandra007', icon: <Github size={22} />, label: 'GitHub' },
    { href: 'https://x.com/KunalChandra777', icon: <Twitter size={22} />, label: 'Twitter' },
  ];

  return (
    <section id="contact" className="pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            index="08"
            label="Open Channel"
            title="Get In Touch"
            subtitle="I'm always open to discussing new opportunities, collaborations, or just having a chat about data science and technology."
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Contact information */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 font-serif text-2xl text-ink">Let's Connect</h3>
                <p className="leading-relaxed text-ink-dim">
                  Feel free to reach out to me for any inquiries, project collaborations, or just to
                  say hello. I'm always excited to connect with fellow{' '}
                  <span className="text-ice">data enthusiasts</span> and professionals.
                </p>
              </div>

              <div className="space-y-4">
                {infoRows.map((row) => (
                  <div key={row.label} className="flex items-center gap-4">
                    <div className="rounded-full border border-hairline bg-nebula/10 p-3">{row.icon}</div>
                    <div>
                      <h4 className="telemetry text-[0.6rem] text-ink-faint">{row.label}</h4>
                      <p className={`text-ink ${row.mono ? 'font-mono text-sm' : ''}`}>{row.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <h4 className="telemetry mb-4 text-[0.6rem] text-ink-faint">Follow Me</h4>
                <div className="flex gap-4">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="rounded-full border border-hairline bg-surface-2 p-3 text-ink-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-nebula-soft/50 hover:text-ice"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={1}>
            <div className="panel p-8">
              <h3 className="mb-6 font-serif text-2xl text-ink">Send Message</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-dim">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-dim">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-dim">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="rounded-lg border border-ice/30 bg-ice/10 p-4 text-center text-ice">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="rounded-lg border border-ember/30 bg-ember/10 p-4 text-center text-ember">
                    Something went wrong. Please try again or contact me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-300 ${
                    isSubmitting
                      ? 'cursor-not-allowed border border-hairline bg-surface-2 text-ink-faint'
                      : 'bg-gradient-to-r from-nebula to-nebula-soft text-white shadow-[0_0_28px_-6px_rgba(139,92,246,0.7)] hover:brightness-110 hover:shadow-[0_0_36px_-4px_rgba(139,92,246,0.9)]'
                  }`}
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </Reveal>
        </div>

        {/* Sign-off */}
        <Reveal delay={2}>
          <p className="telemetry mt-16 text-center text-[0.6rem] text-ink-faint">
            End of transmission · Kunal Chandra · {new Date().getFullYear()}
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
