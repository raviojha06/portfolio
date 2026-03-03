'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Twitter, Linkedin, Mail, ArrowRight, ExternalLink } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const projects = [
  {
    title: 'VibeStore',
    desc: 'AI-powered e-commerce platform built entirely with vibe coding (v0 + Cursor). 340% traffic growth in 3 months.',
    tech: ['Next.js 15', 'Tailwind', 'Stripe', 'Supabase'],
    live: 'https://vibestore.demo',
    github: 'https://github.com/raviojhax/vibestore',
    image: 'https://picsum.photos/id/1015/600/400',
  },
  {
    title: 'RankVibe SEO Dashboard',
    desc: 'Real-time keyword & competitor tracking tool used by 15+ agencies. Built in 48 hours with Claude + v0.',
    tech: ['Next.js', 'Recharts', 'SerpApi', 'Prisma'],
    live: 'https://rankvibe.dev',
    github: 'https://github.com/raviojhax/rankvibe',
    image: 'https://picsum.photos/id/106/600/400',
  },
  {
    title: 'Telegaon.com Redesign',
    desc: 'Complete SEO overhaul + new Next.js site. Organic traffic up 480% in 4 months.',
    tech: ['Next.js', 'Contentlayer', 'Framer Motion', 'Vercel'],
    live: 'https://telegaon.com',
    github: '#',
    image: 'https://picsum.photos/id/201/600/400',
  },
  {
    title: 'Cursor Vibe Templates',
    desc: 'Open-source collection of production-ready vibe-coded components (used by 8k+ devs).',
    tech: ['React', 'Tailwind', 'TypeScript', 'shadcn/ui'],
    live: 'https://cursor-vibe.raviojha.dev',
    github: 'https://github.com/raviojhax/cursor-vibe',
    image: 'https://picsum.photos/id/870/600/400',
  },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace with your Formspree / Resend / EmailJS endpoint later
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    alert("Message received loud and clear! I'll vibe back within 24h 🚀");
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-violet-600 flex items-center justify-center text-xl font-bold">R</div>
            <span className="font-semibold text-2xl tracking-tighter">RAVI OJHA</span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="hover:text-violet-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden md:block px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-violet-400 hover:text-white transition-all">
            Let’s vibe
          </a>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-zinc-900 border-t border-zinc-800 py-8"
          >
            <div className="flex flex-col items-center gap-8 text-lg">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="px-10 py-4 bg-white text-black rounded-full">
                Let’s vibe
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* HERO */}
      <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(139,92,246,0.15),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-full border border-zinc-700 text-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Available for freelance vibe projects
            </div>

            <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none">
              Hey, I’m <span className="text-violet-400 glow">Ravi Ojha</span>
            </h1>

            <p className="text-3xl md:text-4xl text-zinc-400 font-light">
              Vibe Coder &amp; SEO Consultant
            </p>

            <p className="max-w-md text-lg text-zinc-400">
              I code with AI at the speed of thought and make Google fall in love with every site I touch.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="group px-8 py-4 bg-violet-600 hover:bg-violet-500 rounded-2xl font-semibold flex items-center gap-3 transition-all">
                See the vibes
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </a>
              <a href="#contact" className="px-8 py-4 border border-zinc-700 hover:border-white rounded-2xl font-semibold transition">
                Let’s talk
              </a>
            </div>

            <div className="flex gap-8 text-sm pt-6">
              <div>
                <div className="text-3xl font-semibold">50+</div>
                <div className="text-zinc-500">Projects shipped</div>
              </div>
              <div>
                <div className="text-3xl font-semibold">12×</div>
                <div className="text-zinc-500">Average traffic growth</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
              <img 
                src="https://picsum.photos/id/64/800/800" 
                alt="Ravi Ojha" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-zinc-700 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="text-5xl">🚀</div>
                <div>
                  <div className="font-semibold">Currently vibing with</div>
                  <div className="text-sm text-emerald-400">Cursor • v0 • Claude 3.5 • Next.js 15</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-zinc-500">
          SCROLL TO EXPLORE
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-500 to-transparent" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <div className="sticky top-24">
                <div className="uppercase tracking-[4px] text-sm text-violet-400 mb-3">CHAPTER 01</div>
                <h2 className="text-5xl font-bold tracking-tighter">The Vibe Coder</h2>
              </div>
            </div>
            <div className="md:col-span-3 space-y-8 text-lg text-zinc-300">
              <p>
                I don’t write code line-by-line anymore. I describe the vibe, let AI do the heavy lifting, then polish it until it feels alive.
              </p>
              <p>
                On the other side of the screen, I help founders and agencies rank #1 on Google with technical SEO, content strategy, and conversion-focused websites.
              </p>
              <p>
                Previously built and scaled Telegaon (SEO agency), shipped multiple AI-powered products, and helped 40+ clients 10x their organic traffic.
              </p>

              <div className="pt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-violet-400 text-sm mb-2">CURRENT STACK</div>
                  <ul className="space-y-2 text-sm">
                    <li>Next.js 15 • React Server Components</li>
                    <li>Tailwind • shadcn/ui • Framer Motion</li>
                    <li>Cursor • v0 • Claude 3.5 Sonnet</li>
                    <li>Supabase • Vercel • Cloudflare</li>
                  </ul>
                </div>
                <div>
                  <div className="text-violet-400 text-sm mb-2">SEO SUPERPOWERS</div>
                  <ul className="space-y-2 text-sm">
                    <li>Technical SEO Audits</li>
                    <li>Core Web Vitals Optimization</li>
                    <li>Schema &amp; Rich Snippets</li>
                    <li>Link Building Systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="uppercase tracking-widest text-sm text-violet-400">CHAPTER 02</div>
            <h2 className="text-5xl font-bold tracking-tighter mt-3">What I deliver</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "Vibe Coding",
                desc: "Full-stack web apps & landing pages built 5–10× faster with AI. Production-ready, pixel-perfect, and blazing fast."
              },
              {
                icon: "📈",
                title: "SEO That Actually Works",
                desc: "End-to-end SEO strategy: keyword research, on-page, technical fixes, content systems, and link building that moves the needle."
              },
              {
                icon: "🚀",
                title: "Growth Systems",
                desc: "Combine vibe-coded websites with SEO & conversion optimization so your traffic actually turns into revenue."
              },
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-zinc-950 border border-zinc-800 rounded-3xl p-10 card-hover"
              >
                <div className="text-6xl mb-8">{service.icon}</div>
                <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="uppercase tracking-widest text-sm text-violet-400">CHAPTER 03</div>
              <h2 className="text-5xl font-bold tracking-tighter">Featured Vibes</h2>
            </div>
            <a href="https://github.com/raviojhax" target="_blank" className="flex items-center gap-2 text-sm hover:text-violet-400 transition">
              All projects on GitHub <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden card-hover"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-zinc-400 mb-6 line-clamp-3">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs px-3 py-1 bg-zinc-800 rounded-full">{t}</span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={project.live} target="_blank" className="flex-1 flex items-center justify-center gap-2 border border-zinc-700 hover:border-white py-3 rounded-2xl transition">
                      Live Demo <ExternalLink size={18} />
                    </a>
                    <a href={project.github} target="_blank" className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-3 rounded-2xl font-semibold hover:bg-zinc-200 transition">
                      <Github size={18} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 border-t border-zinc-800 bg-zinc-950">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="text-6xl mb-8">👋</div>
          <h2 className="text-5xl font-bold tracking-tighter mb-6">Let’s build something legendary</h2>
          <p className="text-xl text-zinc-400 mb-12">Whether you need a new website, SEO strategy, or just want to talk AI coding — I’m all ears.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-500"
              />
              <input
                type="email"
                placeholder="you@awesome.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-violet-500"
              />
            </div>
            <textarea
              placeholder="Tell me about your project or just say hi..."
              rows={6}
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              required
              className="w-full bg-zinc-900 border border-zinc-700 rounded-3xl px-6 py-4 focus:outline-none focus:border-violet-500 resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-white text-black rounded-3xl font-semibold text-lg hover:bg-violet-400 hover:text-white transition disabled:opacity-70"
            >
              {isSubmitting ? "Sending the vibe..." : "Send Message"}
            </button>
          </form>

          <div className="mt-16 flex justify-center gap-8">
            <a href="https://x.com/raviojhax" target="_blank"><Twitter className="w-6 h-6 hover:text-violet-400 transition" /></a>
            <a href="https://github.com/raviojhax" target="_blank"><Github className="w-6 h-6 hover:text-violet-400 transition" /></a>
            <a href="https://linkedin.com/in/raviojhax" target="_blank"><Linkedin className="w-6 h-6 hover:text-violet-400 transition" /></a>
            <a href="mailto:hello@raviojha.dev"><Mail className="w-6 h-6 hover:text-violet-400 transition" /></a>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-800 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Ravi Ojha • Built with vibe coding &amp; Next.js
      </footer>
    </>
  );
}
