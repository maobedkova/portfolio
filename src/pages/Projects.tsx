import { motion } from 'framer-motion';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Advanced NLP Framework",
      description: "An open-source framework for natural language processing tasks, featuring state-of-the-art transformer models and optimized training pipelines.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["NLP", "Python", "PyTorch"],
      links: {
        github: "https://github.com/username/nlp-framework",
        demo: "https://demo.nlp-framework.com"
      },
      featured: true
    },
    {
      title: "ML Model Optimization Suite",
      description: "A comprehensive toolkit for optimizing machine learning models, reducing inference time while maintaining accuracy.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Machine Learning", "Optimization", "TensorFlow"],
      links: {
        github: "https://github.com/username/ml-optimizer"
      }
    },
    {
      title: "Intelligent Document Analysis",
      description: "Enterprise-grade document analysis system using advanced OCR and NLP techniques for automated information extraction.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Computer Vision", "NLP", "Enterprise"],
      links: {
        demo: "https://demo.doc-analysis.com"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-sections relative overflow-hidden">
      {/* Removed duplicate background blobs as they're now in the BackgroundBlobs component */}
      
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 inline-block bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Exploring the intersection of artificial intelligence, natural language processing, and practical applications.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Background pattern */}
              <div 
                className="absolute inset-0 bg-primary-light/20 rounded-3xl -rotate-1 transform"
                style={{ 
                  clipPath: index % 2 === 0 
                    ? 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)' 
                    : 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)'
                }}
              />

              <div className={`grid md:grid-cols-2 gap-8 items-center p-8 ${
                index % 2 === 0 ? 'md:grid-flow-row' : 'md:grid-flow-row-dense'
              }`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl aspect-video"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">{project.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-surface rounded-elliptical text-sm text-primary-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        className="inline-flex items-center gap-2 text-primary-light hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.links.demo && (
                      <a 
                        href={project.links.demo}
                        className="inline-flex items-center gap-2 text-primary-light hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-dark to-primary hover:from-primary hover:to-primary-light text-white px-6 py-3 rounded-elliptical transition-all duration-300"
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
