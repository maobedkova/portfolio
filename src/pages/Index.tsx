
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Send, Github, Linkedin, Mail, Brain, Code, Database, Bot, UserCheck, Rocket } from 'lucide-react';

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
            AI/NLP Engineer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-dark">
            Transforming Ideas into Intelligent Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized in developing cutting-edge AI and Natural Language Processing solutions that bridge the gap between human language and machine understanding
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

      {/* Bio Section */}
      <section id="about" className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="section-heading">Who I Am</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm a passionate AI/NLP Engineer with a deep fascination for language, cognition, and machine learning. 
              My journey in artificial intelligence has led me to develop innovative solutions that push the boundaries 
              of what's possible in natural language processing.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With expertise in both research and practical applications, I bridge the gap between academic advances 
              and real-world solutions, helping organizations leverage the power of AI to solve complex problems.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll">
            <div className="grid grid-cols-2 gap-6">
              {[
                'Machine Learning',
                'Natural Language Processing',
                'Deep Learning',
                'Python',
                'TensorFlow',
                'PyTorch',
                'BERT/Transformers',
                'Neural Networks'
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="section-container bg-surface-dark">
        <h2 className="section-heading text-center">Areas of Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="glass-panel rounded-lg p-8 animate-on-scroll">
            <Brain className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
            <p className="text-gray-600">
              Developing and implementing sophisticated machine learning models for complex data analysis and prediction tasks.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll">
            <Code className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">NLP Engineering</h3>
            <p className="text-gray-600">
              Creating advanced natural language processing solutions for text analysis, classification, and generation.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll">
            <Database className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Large Language Models</h3>
            <p className="text-gray-600">
              Fine-tuning and deploying large language models for various applications and use cases.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-container">
        <h2 className="section-heading text-center">How I Can Help</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="glass-panel rounded-lg p-8 animate-on-scroll">
            <Bot className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">AI Consulting</h3>
            <p className="text-gray-600">
              Strategic guidance on implementing AI solutions for your specific business needs and challenges.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll">
            <UserCheck className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Custom NLP Solutions</h3>
            <p className="text-gray-600">
              Development of tailored NLP models and systems for specific industry applications.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll">
            <Rocket className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Model Optimization</h3>
            <p className="text-gray-600">
              Improving efficiency and performance of existing AI/ML models and systems.
            </p>
          </div>
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
