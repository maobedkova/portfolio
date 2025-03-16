
import { motion } from 'framer-motion';
import { ExternalLink, Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Timeline = () => {
  const experiences = [
    {
      period: "Sep 2022 - present",
      work: {
        title: "Senior NLP Engineer",
        company: "TrustYou",
        companyUrl: "https://www.trustyou.com/",
        details: "Working on GenAI solutions and their improvement lifecycle. Improving a Transformer-based solution for ABSA, scaling it up for multiple languages and bigger review load. Defining system designs for ML and DL applications."
      },
      skills: [
        "ML", "LLMs", "ABSA", "GenAI", "CI/CD", "MLOps", "RAG", "BERT", "GPT", 
        "Python", "PyTorch", "HuggingFace Transformers", "LangChain", "MLFlow"
      ]
    },
    {
      period: "Apr 2020 - Aug 2022",
      work: {
        title: "NLP Engineer",
        company: "TrustYou",
        companyUrl: "https://www.trustyou.com/",
        details: "Developed a Transformer-based solution for ABSA and put it in production. Researched approaches to ABSA and performed data analyses. Supported and maintained the legacy system that performed sentiment analysis using CFG."
      },
      skills: [
        "ML", "LLMs", "ABSA", "CI/CD", "BERT", "GPT", "Python", 
        "PyTorch", "HuggingFace Transformers", "MLFlow", "CFG"
      ]
    },
    {
      period: "Feb 2019 - Jul 2019",
      work: {
        title: "ASR Research Intern",
        company: "Sony's European Technology Center",
        companyUrl: "https://www.sony.com/en/SonyInfo/research/about/stuttgart-laboratory1/",
        details: "Researched different deep learning approaches to pronunciation generation for speech recognition. Investigated Acoustic Word Embeddings and improved their quality for a pronunciation discrimination task. Developed a completely new data-driven method of pronunciation generation for ASR purposes."
      },
      skills: [
        "ASR", "AWE", "DL", "Python", "TensorFlow", "Java", "Kaldi"
      ]
    },
    {
      period: "Oct 2016 - Dec 2018",
      work: {
        title: "NLP Engineer",
        company: "Fact Read",
        companyUrl: null,
        details: "Implemented the morphological-syntactical pipeline and improved its quality. Developed the anaphora resolution module for news texts using a machine learning approach. Supervised linguists and coordinated the interaction of linguists and programmers in a team."
      },
      skills: [
        "Fact Extraction", "Coreference Resolution", "WSD", "ML", "Python", "scikit-learn"
      ]
    },
    {
      period: "Jan 2017 - Sep 2017",
      work: {
        title: "Computational Linguist",
        company: "ABBYY",
        companyUrl: "https://www.abbyy.com/",
        details: "Developed various solutions for Fact Extraction using ABBYY tools. Implemented unit testing for the Fact Extraction system."
      },
      skills: [
        "NER", "Unit Testing", "Ontologies", "Knowledge Graphs"
      ]
    },
    {
      period: "Jan 2016 - Jun 2016",
      work: {
        title: "Computational Linguistics Intern",
        company: "ABBYY Labs",
        companyUrl: "https://www.abbyy.flexicapture-sdk/",
        details: "Developed the advanced tokenizer for Russian corpora in the Geekrya project."
      },
      skills: [
        "Syntax", "Tokenisation & Splitting", "Python", "Perl", "regexp"
      ]
    }
  ];

  const education = [
    {
      period: "2017 - 2019",
      degree: "MA Computational Linguistics",
      institutions: [
        {
          name: "Charles University - CUNI",
          location: "Prague, Czech Republic"
        },
        {
          name: "University of Basque Country - UPV/EHU",
          location: "San Sebastian, Spain"
        }
      ],
      details: "Erasmus Mundus Joint Degree with Erasmus Mundus Scholarship Award",
      link: "https://lct-master.org/"
    },
    {
      period: "2013 - 2017",
      degree: "BA Fundamental and Applied Linguistics",
      institutions: [
        {
          name: "National Research University Higher School of Economics - NRU HSE",
          location: "Moscow, Russia"
        }
      ],
      awards: [
        "Increased State Academic Scholarship for Academic Achievements by NRU HSE",
        "Student Research Paper Competition by NRU HSE - laureate certificate"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary-dark mb-12 text-center">Professional Journey</h1>
        
        <div className="relative">
          {/* Experience Section */}
          <h2 className="text-3xl font-semibold text-primary-dark mb-8">Experience</h2>
          {experiences.map((exp, index) => (
            <motion.div
              key={`exp-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-16 relative pl-8 border-l-2 border-primary/30"
            >
              {/* Date badge - Now aligned with the card */}
              <div className="absolute -left-4 top-6 bg-accent/80 backdrop-blur-sm border border-primary/20 rounded-elliptical px-4 py-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary-dark" />
                  <span className="text-white font-medium">{exp.period}</span>
                </div>
              </div>

              {/* Work content */}
              <Card className="bg-surface/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm mt-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                  <h3 className="text-xl font-semibold text-primary-light">
                    {exp.work.title}
                  </h3>
                  <span className="text-white/60">at</span>
                  {exp.work.companyUrl ? (
                    <a 
                      href={exp.work.companyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white font-medium hover:text-primary-light transition-colors flex items-center gap-1"
                    >
                      {exp.work.company}
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-white font-medium">{exp.work.company}</span>
                  )}
                </div>
                
                <p className="text-white/80 mb-6">{exp.work.details}</p>
                
                {/* Skills - Centered in a widget */}
                <div className="bg-accent/70 rounded-xl p-4">
                  <p className="text-primary-dark font-medium text-sm mb-3 text-center">Tools & Technologies</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span 
                        key={`skill-${index}-${skillIndex}`}
                        className="bg-surface/70 px-3 py-1 rounded-elliptical text-xs text-primary-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Connector dot */}
              <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-primary-dark" />
            </motion.div>
          ))}

          {/* Education Section */}
          <h2 className="text-3xl font-semibold text-primary-dark mb-8">Education</h2>
          {education.map((edu, index) => (
            <motion.div
              key={`edu-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-16 relative pl-8 border-l-2 border-primary/30"
            >
              {/* Date badge - Now aligned with the card */}
              <div className="absolute -left-4 top-6 bg-accent/80 backdrop-blur-sm border border-primary/20 rounded-elliptical px-4 py-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary-dark" />
                  <span className="text-white font-medium">{edu.period}</span>
                </div>
              </div>

              {/* Education content */}
              <Card className="bg-surface/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={20} className="text-primary-dark" />
                  <h3 className="text-xl font-semibold text-primary-light">
                    {edu.degree}
                  </h3>
                </div>

                {/* Institutions - Without locations */}
                <div className="space-y-2 mb-4">
                  {edu.institutions.map((inst, instIndex) => (
                    <div key={`inst-${index}-${instIndex}`} className="flex flex-col">
                      <span className="text-white font-medium">{inst.name}</span>
                    </div>
                  ))}
                </div>

                {edu.link && (
                  <a 
                    href={edu.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary-light transition-colors mb-4 flex items-center gap-1"
                  >
                    <span>{edu.details}</span>
                    <ExternalLink size={14} />
                  </a>
                )}

                {!edu.link && edu.details && (
                  <p className="text-white/80 mb-4">{edu.details}</p>
                )}

                {/* Awards */}
                {edu.awards && edu.awards.length > 0 && (
                  <div className="mt-4 bg-accent/70 rounded-xl p-4">
                    <h4 className="text-primary-dark font-medium text-sm mb-3 text-center">Awards & Achievements</h4>
                    <ul className="list-disc list-inside space-y-1 text-white/80">
                      {edu.awards.map((award, awardIndex) => (
                        <li key={`award-${index}-${awardIndex}`}>{award}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>

              {/* Connector dot */}
              <div className="absolute -left-[9px] top-8 w-4 h-4 rounded-full bg-primary-dark" />
            </motion.div>
          ))}
        </div>

        {/* Button to the main page */}
        <div className="flex justify-center mt-16">
          <motion.a 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-green text-white rounded-elliptical hover:opacity-90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to Main Page</span>
            <ExternalLink size={16} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
