
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Briefcase, Code, Award, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Function to generate abstract gradient backgrounds
  const getAbstractBackground = (index) => {
    const gradients = [
      'linear-gradient(135deg, #059669 0%, #34D399 100%)',
      'linear-gradient(135deg, #10B981 30%, #059669 100%)',
      'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
      'linear-gradient(135deg, #047857 0%, #10B981 100%)',
      'linear-gradient(135deg, #065F46 0%, #059669 100%)',
      'linear-gradient(135deg, #059669 0%, #047857 100%)',
    ];
    
    return gradients[index % gradients.length];
  };

  // Work projects
  const workProjects = [
    {
      title: "TrustYou Semantic Analysis",
      description: "Developed a system that performs multilingual Aspect-Based Sentiment Analysis for more than 20 languages using Transformer architecture.",
      tags: ["NLP", "Transformers", "Multilingual"],
      links: {
        demo: "https://www.trustyou.com/products/customer_experience_platform/"
      }
    },
    {
      title: "TrustYou ResponseAI",
      description: "Developed an automated review response system using LLMs and RAG.",
      tags: ["LLM", "RAG", "Automation"],
      links: {
        demo: "https://www.trustyou.com/products/customer_experience_platform/"
      }
    },
    {
      title: "TrustYou SummaryAI",
      description: "Developed a review summarisation and key insights extraction system using LLMs and optimized it for a large number of reviews.",
      tags: ["LLM", "Summarization", "Optimization"],
      links: {
        demo: "https://www.trustyou.com/products/customer_experience_platform/"
      }
    },
    {
      title: "TrustYou Impact Score",
      description: "Developed an ML system for detecting impactful factors for hospitality businesses.",
      tags: ["ML", "Analytics", "Hospitality"],
      links: {
        demo: "https://www.trustyou.com/products/customer_experience_platform/"
      }
    }
  ];

  // Open-source projects
  const openSourceProjects = [
    {
      title: "HuggingFace Robust Speech Challenge",
      description: "Developed a speech recognition model for Russian and open-sourced it on the HuggingFace hub. Took part in Feb 2022.",
      tags: ["ASR", "Russian", "HuggingFace"],
      links: {
        github: "https://huggingface.co/models?other=robust-speech-event"
      }
    },
    {
      title: "NL-Augmenter",
      description: "Contributed with a sentiment filter to the NL-Augmenter project that helps with augmentation for sentiment analysis tasks. Took part in Sep 2021.",
      tags: ["NLP", "Data Augmentation", "Sentiment Analysis"],
      links: {
        github: "https://github.com/GEM-benchmark/NL-Augmenter"
      }
    }
  ];

  // Hackathon projects
  const hackathonProjects = [
    {
      title: "Junction 2019: SunCatcher",
      description: "Project aimed at encouraging sustainability for retail. Done in collaboration with K Group.",
      tags: ["Hackathon", "Sustainability", "Retail"],
      links: {
        github: "https://github.com/Shakurova/SunCatcher"
      }
    },
    {
      title: "Junction 2018: Sustage",
      description: "Project aimed at preventing the SAD condition due to lack of vitamin D for people living in northern countries.",
      tags: ["Hackathon", "Health", "Wellness"],
      links: {
        github: "https://github.com/Shakurova/Sustage"
      }
    }
  ];

  // University projects
  const universityProjects = [
    {
      title: "Pronunciation Generation for ASR",
      description: "Developed a pronunciation generation method for ASR based on AWEs. MA thesis in 2019.",
      tags: ["ASR", "Pronunciation", "Thesis"],
      links: {}
    },
    {
      title: "Unsupervised Machine Translation",
      description: "Investigated Cross-Lingual Word Embeddings for Unsupervised Neural Machine Translation for a rus-eng pair. Course project in 2018.",
      tags: ["NMT", "Word Embeddings", "Unsupervised Learning"],
      links: {}
    },
    {
      title: "Russian Sketches",
      description: "Developed the collocation extraction method on the basis of syntactical structure for Russian. BA thesis in 2017.",
      tags: ["Collocation", "Russian", "Thesis"],
      links: {}
    },
    {
      title: "Amharic Corpus",
      description: "Developed the Amharic corpus with Part-of-Speech Tagging using a Machine Learning approach. Presented at the \"ConCort\" conference on Digital Humanities in 2016.",
      tags: ["Corpus Linguistics", "POS Tagging", "Amharic"],
      links: {
        demo: "http://www.web-corpora.net/AmharicCorpus/search/"
      }
    },
    {
      title: "Tokenizer and Splitter for Russian Web Texts",
      description: "Developed the advanced tokenizer and splitter for Geekrya corpora. Developed in 2016.",
      tags: ["Tokenization", "Russian", "Web Corpus"],
      links: {}
    },
    {
      title: "Database of Comparative Constructions",
      description: "Developed the database of constructions 'Verb like Noun' and studied some semantic patterns using this database within a research group. Developed in 2016.",
      tags: ["Database", "Linguistics", "Semantics"],
      links: {}
    },
    {
      title: "Automatic Authorship Attribution",
      description: "Investigated different approaches of authorship determination and their statistical evaluation. Presented at the \"Digital Humanities\" conference in Tartu in 2015.",
      tags: ["Authorship", "NLP", "Statistics"],
      links: {}
    }
  ];

  // Function to render project card
  const renderProjectCard = (project, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass-panel rounded-[1.5rem] overflow-hidden shadow-lg h-full flex flex-col"
    >
      <div className="relative h-40 overflow-hidden">
        <div 
          className="w-full h-full" 
          style={{ background: getAbstractBackground(index) }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <h3 className="absolute bottom-0 left-0 p-4 text-xl font-bold text-white">{project.title}</h3>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <p className="text-white/80 mb-6 flex-grow">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span 
                key={tagIndex}
                className="px-3 py-1 bg-primary-dark/20 backdrop-blur-sm border border-primary-light/20 rounded-full text-sm text-primary-light"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {project.links && Object.keys(project.links).length > 0 && (
            <div className="flex gap-4">
              {project.links.github && (
                <a 
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-light hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              )}
              {project.links.demo && (
                <a 
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-light hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  // Function to render project section
  const renderProjectSection = (projects, icon, title) => (
    <div className="mb-24">
      <div className="flex items-center gap-3 mb-8">
        {icon}
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => renderProjectCard(project, index))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 inline-block bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A collection of my professional, open-source, hackathon, and academic projects in AI, NLP, and speech processing.
          </p>
        </div>

        {renderProjectSection(workProjects, <Briefcase className="w-7 h-7 text-primary-light" />, "Work Projects")}
        {renderProjectSection(openSourceProjects, <Code className="w-7 h-7 text-primary-light" />, "Open-Source Projects")}
        {renderProjectSection(hackathonProjects, <Award className="w-7 h-7 text-primary-light" />, "Hackathon Projects")}
        {renderProjectSection(universityProjects, <GraduationCap className="w-7 h-7 text-primary-light" />, "University Projects")}

        <div className="text-center mt-16">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-dark to-primary hover:from-primary hover:to-primary-light text-white px-6 py-3 rounded-[1.5rem] transition-all duration-300"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
