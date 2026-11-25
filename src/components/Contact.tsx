import React, { useState, useRef } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, Twitter } from 'lucide-react';
import SectionHeader from './story/SectionHeader';
import Reveal from './story/Reveal';
import SocialLink from './SocialLink';

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
    { icon: <Mail className="h-6 w-6 text-nebula" />, label: 'SMTP', value: 'kunalchandra2506@gmail.com' },
    { icon: <MapPin className="h-6 w-6 text-nebula" />, label: 'localhost', value: 'New Delhi, IN' },
  ];

  const socials = [
    {
      href: 'https://www.linkedin.com/in/kunal-chandra007',
      icon: () => <Linkedin size={22} />,
      label: 'LinkedIn',
      handle: 'in/kunal-chandra007',
      role: 'Software Engineer',
      cta: 'Connect on LinkedIn',
    },
    {
      href: 'https://github.com/Kunalchandra007',
      icon: () => <Github size={22} />,
      label: 'GitHub',
      handle: 'Kunalchandra007',
      role: 'Software Engineer',
      cta: 'Follow on GitHub',
    },
    {
      href: 'https://x.com/KunalChandra777',
      icon: () => <Twitter size={22} />,
      label: 'X',
      handle: '@KunalChandra777',
      role: 'Software Engineer',
      cta: 'Follow on X',
    },
  ];

  return (
    <section id="contact" className="pt-24 pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            title="Let’s build something"
            subtitle="Internships, collabs, or a bug you can’t crack. I reply to every message."
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Contact information */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 font-serif text-2xl italic text-ink">ping me</h3>
                <p className="leading-relaxed text-ink-dim">
                  Got an idea, a project, or an open role? Say hello and I’ll get back to you.
                  Always up for talking to builders, researchers, and anyone shipping real AI.
                </p>
              </div>

              <div className="space-y-4">
                {infoRows.map((row) => (
                  <div key={row.label} className="flex items-center gap-4">
                    <div className="rounded-full border border-hairline bg-nebula/10 p-3">{row.icon}</div>
                    <div>
                      <h4 className="font-mono text-[0.68rem] tracking-wide text-ink-faint">{row.label}</h4>
                      <p className="text-ink">{row.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <h4 className="mb-4 font-mono text-[0.68rem] tracking-wide text-ink-faint">find me on</h4>
                <div className="flex gap-4">
                  {socials.map((s) => (
                    <SocialLink
                      key={s.label}
                      {...s}
                      side="up"
                      className="bg-surface-2 group-hover:border-nebula-soft/50 group-hover:text-ice"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={1}>
            <div className="panel p-8">
              <h3 className="mb-6 font-serif text-2xl text-ink">Open a new issue</h3>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block font-mono text-sm text-ink-dim">
                    name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="who’s this?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-mono text-sm text-ink-dim">
                    reply-to
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
                  <label htmlFor="message" className="mb-2 block font-mono text-sm text-ink-dim">
                    payload
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell me what you’re building, or just say hello, world."
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
                  className={
                    isSubmitting
                      ? 'inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-hairline bg-surface-2 px-6 py-3 text-ink-faint'
                      : 'btn-primary w-full'
                  }
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'pushing...' : 'git push'}</span>
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
