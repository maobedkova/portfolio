import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, Briefcase, Code, Award, GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Projects = () => {
  // States to track expanded sections
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    work: false,
    openSource: false,
    hackathon: false,
    university: false
  });

  // Function to toggle section expansion
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Function to generate abstract AI image URLs with a better uniqueness strategy
  const getAbstractImageUrl = (sectionIndex: number, projectIndex: number) => {
    // Collection of abstract AI-generated images
    const imageUrls = [
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620121684840-edffcfc4b878?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1633354931133-17d8f014b5b4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604076913837-52ab5629fba9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507908708918-778587c9e563?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541969487406-1f1adf3884ab?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620064916958-605375619af8?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562907550-096d3bf9b25c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=1000&auto=format&fit=crop",
    ];
    
    // Use a combination of sectionIndex and projectIndex to create a unique index
    // Multiply sectionIndex by a large enough number to ensure no overlap
    const uniqueIndex = (sectionIndex * 10 + projectIndex) % imageUrls.length;
    return imageUrls[uniqueIndex];
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
      description: "Developed a speech recognition model for Russian and open-sourced it on the HuggingFace hub.",
      tags: ["ASR", "Russian", "HuggingFace"],
      links: {
        github: "https://huggingface.co/models?other=robust-speech-event"
      }
    },
    {
      title: "NL-Augmenter",
      description: "Contributed with a sentiment filter to the NL-Augmenter project that helps with augmentation for sentiment analysis tasks.",
      tags: ["NLP", "Data Augmentation", "Sentiment Analysis"],
      links: {
        github: "https://github.com/GEM-benchmark/NL-Augmenter"
      }
    }
  ];

  // Hackathon projects
  const hackathonProjects = [
    {
      title: "Junction: SunCatcher",
      description: "Project aimed at encouraging sustainability for retail. Done in collaboration with K Group.",
      tags: ["Hackathon", "Sustainability", "Retail"],
      links: {
        github: "https://github.com/Shakurova/SunCatcher"
      }
    },
    {
      title: "Junction: Sustage",
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
      description: "Developed a pronunciation generation method for ASR based on AWEs. MA thesis.",
      tags: ["ASR", "Pronunciation", "Thesis"],
      links: {}
    },
    {
      title: "Unsupervised Machine Translation",
      description: "Investigated Cross-Lingual Word Embeddings for Unsupervised Neural Machine Translation for a rus-eng pair. Course project.",
      tags: ["NMT", "Word Embeddings", "Unsupervised Learning"],
      links: {}
    },
    {
      title: "Russian Sketches",
      description: "Developed the collocation extraction method on the basis of syntactical structure for Russian. BA thesis.",
      tags: ["Collocation", "Russian", "Thesis"],
      links: {}
    },
    {
      title: "Amharic Corpus",
      description: "Developed the Amharic corpus with Part-of-Speech Tagging using a Machine Learning approach. Presented at the \"ConCort\" conference on Digital Humanities.",
      tags: ["Corpus Linguistics", "POS Tagging", "Amharic"],
      links: {
        demo: "http://www.web-corpora.net/AmharicCorpus/search/"
      }
    },
    {
      title: "Tokenizer and Splitter for Russian Web Texts",
      description: "Developed the advanced tokenizer and splitter for Geekrya corpora.",
      tags: ["Tokenization", "Russian", "Web Corpus"],
      links: {}
    },
    {
      title: "Database of Comparative Constructions",
      description: "Developed the database of constructions 'Verb like Noun' and studied some semantic patterns using this database within a research group.",
      tags: ["Database", "Linguistics", "Semantics"],
      links: {}
    },
    {
      title: "Automatic Authorship Attribution",
      description: "Investigated different approaches of authorship determination and their statistical evaluation. Presented at the \"Digital Humanities\" conference in Tartu.",
      tags: ["Authorship", "NLP", "Statistics"],
      links: {}
    }
  ];

  // Function to render project card
  const renderProjectCard = (project: any, sectionIndex: number, projectIndex: number) => (
    <motion.div
      key={projectIndex}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
      viewport={{ once: true }}
      className="glass-panel rounded-[1.5rem] overflow-hidden shadow-lg h-full flex flex-col"
    >
      <div className="relative overflow-hidden">
        <AspectRatio ratio={16/9}>
          <img 
            src={getAbstractImageUrl(sectionIndex, projectIndex)} 
            alt="Abstract background"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <h3 className="absolute bottom-0 left-0 p-4 text-xl font-bold text-white">{project.title}</h3>
      </div>
      
      <div className="p-5 flex-grow flex flex-col justify-between">
        <p className="text-white/80 mb-6">{project.description}</p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string, tagIndex: number) => (
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

  // Function to render project section with show more/less toggle
  const renderProjectSection = (projects: any[], icon: JSX.Element, title: string, sectionKey: string, sectionIndex: number) => {
    const isExpanded = expandedSections[sectionKey];
    const visibleProjects = isExpanded ? projects : projects.slice(0, 4);
    const hasMoreProjects = projects.length > 4;
    
    return (
      <div className="mb-24">
        <div className="flex items-center gap-3 mb-8">
          {icon}
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">
            {title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => renderProjectCard(project, sectionIndex, index))}
        </div>
        
        {hasMoreProjects && (
          <div className="mt-8 text-center">
            <button
              onClick={() => toggleSection(sectionKey)}
              className="inline-flex items-center gap-2 bg-primary-dark/30 hover:bg-primary-dark/50 text-white px-4 py-2 rounded-full transition-colors"
            >
              <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}
      </div>
    );
  };

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

        {renderProjectSection(
          workProjects, 
          <Briefcase className="w-7 h-7 text-primary-dark" />, 
          "Work Projects", 
          "work",
          0
        )}
        
        {renderProjectSection(
          openSourceProjects, 
          <Code className="w-7 h-7 text-primary-dark" />, 
          "Open-Source Projects", 
          "openSource",
          1
        )}
        
        {renderProjectSection(
          hackathonProjects, 
          <Award className="w-7 h-7 text-primary-dark" />, 
          "Hackathon Projects", 
          "hackathon",
          2
        )}
        
        {renderProjectSection(
          universityProjects, 
          <GraduationCap className="w-7 h-7 text-primary-dark" />, 
          "university",
          3
        )}

        <div className="text-center mt-16">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-dark to-primary hover:from-primary hover:to-primary-light text-white px-6 py-3 rounded-[1.5rem] transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
