
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Send, Github, Linkedin, Mail } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
    });

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center space-y-6 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark font-medium">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-dark">
            Creative Developer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I craft beautiful, functional websites and applications with attention to detail and user experience
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors">
              View Projects
            </button>
            <button className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary/5 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="section-heading">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate developer focused on creating intuitive and engaging digital experiences. 
              With a strong foundation in modern web technologies, I bring ideas to life through clean code and thoughtful design.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll">
            <div className="grid grid-cols-2 gap-6">
              {['React', 'TypeScript', 'Node.js', 'Tailwind'].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container bg-surface-dark">
        <h2 className="section-heading text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="glass-panel rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all animate-on-scroll"
            >
              <div className="h-48 bg-accent/20" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                <p className="text-gray-600">
                  A brief description of the project and the technologies used.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center">Get In Touch</h2>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-md bg-white/50 border border-accent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md bg-white/50 border border-accent"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-md bg-white/50 border border-accent"
              />
              <button className="w-full px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
