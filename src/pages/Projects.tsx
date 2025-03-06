
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Briefcase, Code, Award, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Work projects
  const workProjects = [
    {
      title: "TrustYou Semantic Analysis",
      description: "Developed a system that performs multilingual Aspect-Based Sentiment Analysis for more than 20 languages using Transformer architecture.",
      image: "https://images.unsplash.com/photo-1546146830-2cca9512c68e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["NLP", "Transformers", "Multilingual"],
      links: {
        demo: "https://www.trustyou.com/products/customer_experience_platform/"
      }
    },
    {
      title: "TrustYou ResponseAI",
      description: "Developed an automated review response system using LLMs and RAG.",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["LLM", "RAG", "Automation"],
      links: {
        demo: "https://www.trustyou.com/products/customer_experience_platform/"
      }
    },
    {
      title: "TrustYou SummaryAI",
      description: "Developed a review summarisation and key insights extraction system using LLMs and optimized it for a large number of reviews.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["LLM", "Summarization", "Optimization"],
      links: {
        demo: "https://www.trustyou.com/products/customer_experience_platform/"
      }
    },
    {
      title: "TrustYou Impact Score",
      description: "Developed an ML system for detecting impactful factors for hospitality businesses.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["ASR", "Russian", "HuggingFace"],
      links: {
        github: "https://huggingface.co/models?other=robust-speech-event"
      }
    },
    {
      title: "NL-Augmenter",
      description: "Contributed with a sentiment filter to the NL-Augmenter project that helps with augmentation for sentiment analysis tasks. Took part in Sep 2021.",
      image: "https://images.unsplash.com/photo-1456428746267-a1756408f782?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Hackathon", "Sustainability", "Retail"],
      links: {
        github: "https://github.com/Shakurova/SunCatcher"
      }
    },
    {
      title: "Junction 2018: Sustage",
      description: "Project aimed at preventing the SAD condition due to lack of vitamin D for people living in northern countries.",
      image: "https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["ASR", "Pronunciation", "Thesis"]
    },
    {
      title: "Unsupervised Machine Translation",
      description: "Investigated Cross-Lingual Word Embeddings for Unsupervised Neural Machine Translation for a rus-eng pair. Course project in 2018.",
      image: "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["NMT", "Word Embeddings", "Unsupervised Learning"]
    },
    {
      title: "Russian Sketches",
      description: "Developed the collocation extraction method on the basis of syntactical structure for Russian. BA thesis in 2017.",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Collocation", "Russian", "Thesis"]
    },
    {
      title: "Amharic Corpus",
      description: "Developed the Amharic corpus with Part-of-Speech Tagging using a Machine Learning approach. Presented at the \"ConCort\" conference on Digital Humanities in 2016.",
      image: "https://images.unsplash.com/photo-1543702303-111efbea00db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Corpus Linguistics", "POS Tagging", "Amharic"],
      links: {
        demo: "http://www.web-corpora.net/AmharicCorpus/search/"
      }
    },
    {
      title: "Tokenizer and Splitter for Russian Web Texts",
      description: "Developed the advanced tokenizer and splitter for Geekrya corpora. Developed in 2016.",
      image: "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Tokenization", "Russian", "Web Corpus"]
    },
    {
      title: "Database of Comparative Constructions",
      description: "Developed the database of constructions 'Verb like Noun' and studied some semantic patterns using this database within a research group. Developed in 2016.",
      image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Database", "Linguistics", "Semantics"]
    },
    {
      title: "Automatic Authorship Attribution",
      description: "Investigated different approaches of authorship determination and their statistical evaluation. Presented at the \"Digital Humanities\" conference in Tartu in 2015.",
      image: "https://images.unsplash.com/photo-1472745433479-4556f22e32c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tags: ["Authorship", "NLP", "Statistics"]
    }
  ];

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
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-panel rounded-[1.5rem] overflow-hidden shadow-lg h-full"
          >
            <div className="relative h-40 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://placehold.co/600x200/10B981/FFFFFF?text=Project+Preview";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <h3 className="absolute bottom-0 left-0 p-4 text-xl font-bold text-white">{project.title}</h3>
            </div>
            
            <div className="p-5">
              <p className="text-white/80 mb-4">{project.description}</p>
              
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
              
              {project.links && (
                <div className="flex gap-4 mt-auto">
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
          </motion.div>
        ))}
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
