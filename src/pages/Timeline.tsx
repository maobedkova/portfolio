import { motion } from 'framer-motion';
import { ExternalLink, Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

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
    <div className="min-h-screen bg-accent/30 pb-16">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary-dark mb-4">Professional Journey</h1>
          <div className="flex items-center justify-center">
            <Separator className="w-16 bg-primary-dark h-0.5" />
          </div>
        </div>
        
        <div className="mb-16">
          <div className="flex items-center mb-8 gap-3">
            <Briefcase className="text-primary-dark h-6 w-6" />
            <h2 className="text-3xl font-semibold text-primary-dark">Experience</h2>
          </div>
          
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-dark"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={`exp-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-16 relative"
              >
                <div className="absolute -left-[60px] top-0">
                  <div className="inline-flex items-center px-4 py-1.5 bg-primary-dark text-white rounded-full shadow-sm">
                    <Calendar size={14} className="mr-2" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>
                
                <div className="ml-6">
                  <Card className="bg-surface/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/10">
                    <div className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold text-primary-light">
                          {exp.work.title}
                        </h3>
                        <div className="mt-1 text-center">
                          {exp.work.companyUrl ? (
                            <a 
                              href={exp.work.companyUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-white font-medium hover:text-primary-light transition-colors flex items-center justify-center gap-1"
                            >
                              {exp.work.company}
                              <ExternalLink size={14} />
                            </a>
                          ) : (
                            <span className="text-white font-medium">{exp.work.company}</span>
                          )}
                        </div>
                      </div>
                      <p className="text-white/90">{exp.work.details}</p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, skillIndex) => (
                          <span 
                            key={`skill-${index}-${skillIndex}`}
                            className="bg-surface/90 px-3 py-1 rounded-full text-xs text-primary-light border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-8 gap-3">
            <GraduationCap className="text-primary-dark h-6 w-6" />
            <h2 className="text-3xl font-semibold text-primary-dark">Education</h2>
          </div>
          
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary-dark"></div>
            
            {education.map((edu, index) => (
              <motion.div
                key={`edu-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-16 relative"
              >
                <div className="absolute -left-[60px] top-0">
                  <div className="inline-flex items-center px-4 py-1.5 bg-primary-dark text-white rounded-full shadow-sm">
                    <Calendar size={14} className="mr-2" />
                    <span className="text-sm font-medium">{edu.period}</span>
                  </div>
                </div>
                
                <div className="ml-6">
                  <Card className="bg-surface/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-white/10">
                    <div className="space-y-4">
                      <div className="flex items-center justify-center gap-2">
                        <GraduationCap size={18} className="text-primary-light" />
                        <h3 className="text-xl font-semibold text-primary-light">
                          {edu.degree}
                        </h3>
                      </div>

                      <div className="space-y-1 text-center">
                        {edu.institutions.map((inst, instIndex) => (
                          <p key={`inst-${index}-${instIndex}`} className="text-white/90">
                            {inst.name}
                          </p>
                        ))}
                      </div>

                      {edu.link ? (
                        <a 
                          href={edu.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block text-center text-white/90 hover:text-primary-light transition-colors inline-flex items-center justify-center gap-1"
                        >
                          {edu.details}
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <p className="text-center text-white/90">{edu.details}</p>
                      )}

                      {edu.awards && edu.awards.length > 0 && (
                        <div className="mt-4">
                          <p className="text-primary-light font-medium text-sm mb-3 text-center">Awards & Achievements</p>
                          <ul className="space-y-2">
                            {edu.awards.map((award, awardIndex) => (
                              <li 
                                key={`award-${index}-${awardIndex}`}
                                className="text-white/90 text-sm flex items-start"
                              >
                                <span className="text-primary-light mr-2">•</span>
                                <span>{award}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <motion.a 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-green text-white rounded-full hover:opacity-90 transition-all shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to Main Page</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
