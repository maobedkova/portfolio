
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
            Specializing in building advanced AI systems and NLP solutions with 5+ years of experience in developing 
            production-ready machine learning models and language understanding systems
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
              I'm a dedicated AI/NLP Engineer with a Ph.D. in Computer Science from Stanford University, 
              specializing in natural language processing and machine learning. Over the past 5 years, 
              I've developed innovative solutions for tech giants and startups alike, focusing on making 
              language models more efficient and accessible.
            </p>
            <p className="text-gray-600 leading-relaxed">
              My work has been published in top-tier conferences including NIPS, ICML, and ACL. I'm passionate 
              about democratizing AI technology and creating practical applications that solve real-world 
              problems. Currently, I'm focused on developing more efficient fine-tuning methods for large 
              language models and creating interpretable AI systems.
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
              Expert in developing sophisticated ML models for complex tasks. Specialized in deep learning architectures, 
              reinforcement learning, and neural network optimization with proven production deployment experience.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll">
            <Code className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">NLP Engineering</h3>
            <p className="text-gray-600">
              Extensive experience in building NLP pipelines, including sentiment analysis, named entity recognition, 
              and text classification systems. Proficient in both traditional ML and transformer-based approaches.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll">
            <Database className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Large Language Models</h3>
            <p className="text-gray-600">
              Specialized in fine-tuning and optimizing LLMs like GPT and BERT. Experience in prompt engineering, 
              model compression, and developing efficient inference pipelines for production environments.
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
              Providing expert guidance on AI strategy and implementation. Help organizations identify opportunities 
              for AI integration and develop roadmaps for successful deployment of ML/NLP solutions.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll">
            <UserCheck className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Custom NLP Solutions</h3>
            <p className="text-gray-600">
              Building tailored NLP systems for specific business needs. From chatbots to document analysis systems, 
              I develop scalable solutions that deliver measurable business value.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll">
            <Rocket className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Model Optimization</h3>
            <p className="text-gray-600">
              Improving performance and efficiency of existing AI systems. Specialized in model compression, 
              inference optimization, and reducing computational costs while maintaining accuracy.
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
