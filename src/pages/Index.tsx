
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Send, Github, Linkedin, Mail, Brain, Code, Database, Bot, UserCheck, Rocket, ChevronRight, Leaf, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [expandedSkills, setExpandedSkills] = useState<string[]>([]);

  const technicalSkills = {
    "Programming & Development": ["Python", "Jupyter Notebook", "Git", "Docker"],
    "Machine Learning & Deep Learning": ["RNN", "CNN", "PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "ONNX"],
    "Natural Language Processing": ["Sentiment Analysis", "BERT", "GPT", "Word2Vec", "FastText", "GloVe", "TF-IDF", "SpaCy", "NLTK", "Hugging Face Transformers", "StanfordNLP", "SparkNLP", "NLPAug"],
    "Large Language Models & Fine-Tuning": ["OpenAI API", "Hugging Face Transformers", "LangChain", "LoRA", "PEFT", "DeepSpeed"],
    "Data Preprocessing & Feature Engineering": ["Pandas", "NumPy", "PySpark"],
    "Databases & Information Retrieval": ["PostgreSQL", "MySQL", "MongoDB", "FAISS", "Weaviate", "ChromaDB", "Elasticsearch"],
    "MLOps, Cloud Computing, CI/CD": ["AWS", "Azure AI", "Hugging Face Inference API", "MLflow", "Jenkins", "Grafana"]
  };

  const softSkills = {
    "Communication & Collaboration": ["Technical Writing", "Presentation Skills", "Team Work", "Mentoring"],
    "Leadership & Task Management": ["Problem Solving", "Critical Thinking", "Analytical Skills", "Innovation", "Project Planning", "Decision Making", "Accountability"],
    "Research & Development": ["Experimentation", "Continuous Learning", "Hypothesis Testing", "Evaluation"]
  };

  const toggleSkill = (skill: string) => {
    setExpandedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          if (!entry.target.classList.contains('active')) {
            entry.target.classList.add('active');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-sections">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center space-y-6 animate-fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
            AI/NLP Engineer
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-center bg-gradient-green bg-clip-text text-transparent leading-tight pb-2">
            Enhancing human-computer interaction through intelligence
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Specializing in building advanced AI systems and NLP solutions with 5+ years of experience in developing machine learning models and language understanding systems
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </section>

      {/* Bio Section */}
      <section id="about" className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-on-scroll">
            <h2 className="section-heading text-center bg-gradient-green bg-clip-text text-transparent">
              Who I Am
            </h2>
            <div className="profile-image">
              <img 
                src="IMG_1449.png"
                alt="Professional portrait"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              I am an NLP/AI Engineer with 5+ years of industry experience, specializing in Machine Learning and Large Language Models, backed by a strong linguistics background. 
I've worked on diverse NLP applications, including Automatic Speech Recognition and Generative AI, always aiming to enhance human-computer interaction and drive real-world impact. 
Passionate about knowledge sharing and staying at the forefront of AI, I strive to advance the field and develop intelligent systems that make a difference.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link 
                to="/timeline"
                className="inline-block px-6 py-3 bg-primary text-white rounded-elliptical bg-gradient-green hover:bg-primary-dark transition-colors"
              >
                More About My Journey
              </Link>
              <Link 
                to="/resources"
                className="inline-block px-6 py-3 border border-primary text-primary rounded-elliptical hover:bg-primary/10 transition-colors"
              >
                View Resources
              </Link>
            </div>
          </div>
          <div className="space-y-8 animate-on-scroll">
            <div className="glass-panel rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-gradient-green bg-clip-text">Technical Skills</h3>
              <div className="space-y-4">
                {Object.entries(technicalSkills).map(([skill, tools]) => (
                  <div key={skill} className="border-b border-accent pb-2">
                    <button
                      onClick={() => toggleSkill(skill)}
                      className="w-full flex items-center justify-between text-left hover:text-primary transition-colors"
                    >
                      <span>{skill}</span>
                      <ChevronRight 
                        className={`transition-transform ${expandedSkills.includes(skill) ? 'rotate-90' : ''}`}
                      />
                    </button>
                    {expandedSkills.includes(skill) && (
                      <div className="mt-2 pl-4 text-sm text-gray-300 animate-unfold overflow-hidden">
                        {tools.join(" • ")}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-panel rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-transparent bg-gradient-green bg-clip-text">Soft Skills</h3>
              <div className="space-y-4">
                {Object.entries(softSkills).map(([skill, abilities]) => (
                  <div key={skill} className="border-b border-accent pb-2">
                    <button
                      onClick={() => toggleSkill(skill)}
                      className="w-full flex items-center justify-between text-left hover:text-primary transition-colors"
                    >
                      <span>{skill}</span>
                      <ChevronRight 
                        className={`transition-transform ${expandedSkills.includes(skill) ? 'rotate-90' : ''}`}
                      />
                    </button>
                    {expandedSkills.includes(skill) && (
                      <div className="mt-2 pl-4 text-sm text-gray-300 animate-unfold overflow-hidden">
                        {abilities.join(" • ")}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="section-container bg-surface-dark">
        <h2 className="section-heading text-center text-transparent bg-gradient-green bg-clip-text">Areas of Expertise</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          <div className="glass-panel rounded-lg p-8 animate-on-scroll flex flex-col">
            <Brain className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-transparent bg-gradient-green bg-clip-text">Machine Learning</h3>
            <p className="text-gray-300 flex-grow">
              Experienced in developing various Machine Learning applications
            </p>
            <Link 
              to="/projects"
              className="mt-4 inline-block px-6 py-2 bg-gradient-green text-white rounded-elliptical hover:opacity-90 transition-colors text-center"
            >
              View Projects
            </Link>
          </div>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll flex flex-col">
            <Code className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-transparent bg-gradient-green bg-clip-text">NLP Engineering</h3>
            <p className="text-gray-300 flex-grow">
              Extensive experience in building NLP pipelines and solutions
            </p>
            <Link 
              to="/projects"
              className="mt-4 inline-block px-6 py-2 bg-gradient-green text-white rounded-elliptical hover:opacity-90 transition-colors text-center"
            >
              View Projects
            </Link>
          </div>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll flex flex-col">
            <Bot className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-transparent bg-gradient-green bg-clip-text">Large Language Models</h3>
            <p className="text-gray-300 flex-grow">
              Specialized in developing custom architectures, fine-tuning and optimizing LLMs
            </p>
            <Link 
              to="/projects"
              className="mt-4 inline-block px-6 py-2 bg-gradient-green text-white rounded-elliptical hover:opacity-90 transition-colors text-center"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-container">
        <h2 className="section-heading text-center text-transparent bg-gradient-green bg-clip-text">How I Can Help</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          <div className="glass-panel rounded-lg p-8 animate-on-scroll flex flex-col">
            <Leaf className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 bg-gradient-green bg-clip-text text-transparent">
              AI Consulting
            </h3>
            <p className="text-gray-300 flex-grow">
              Providing expert guidance on AI strategy and implementation. Help organizations identify opportunities 
              for AI integration and develop roadmaps for successful deployment of ML/NLP solutions.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll flex flex-col">
            <Sprout className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 bg-gradient-green bg-clip-text text-transparent">
              Custom NLP Solutions
            </h3>
            <p className="text-gray-300 flex-grow">
              Building tailored NLP systems for specific business needs. From chatbots to document analysis systems, 
              I develop scalable solutions that deliver measurable business value.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll flex flex-col">
            <Leaf className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 bg-gradient-green bg-clip-text text-transparent">
              Model Optimization
            </h3>
            <p className="text-gray-300 flex-grow">
              Improving performance and efficiency of existing AI systems. Specialized in model compression, 
              inference optimization, and reducing computational costs while maintaining accuracy.
            </p>
          </div>
          <div className="glass-panel rounded-lg p-8 animate-on-scroll flex flex-col col-start-2">
            <Sprout className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3 bg-gradient-green bg-clip-text text-transparent">
              Professional Blogging
            </h3>
            <p className="text-gray-300 flex-grow">
              Sharing insights and knowledge through blogs and video content.
            </p>
            <Link 
              to="/blog"
              className="mt-4 inline-block px-6 py-2 text-white rounded-lg bg-gradient-green hover:opacity-90 transition-opacity text-center"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center text-transparent bg-gradient-green bg-clip-text">Get In Touch</h2>
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
              <button className="w-full px-6 py-3 rounded-lg bg-gradient-green text-white font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="text-gray-600 hover:text-transparent hover:bg-gradient-green hover:bg-clip-text transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-transparent hover:bg-gradient-green hover:bg-clip-text transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-transparent hover:bg-gradient-green hover:bg-clip-text transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
