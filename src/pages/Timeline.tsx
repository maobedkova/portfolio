
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Timeline = () => {
  const milestones = [
    {
      period: "2022-Present",
      work: {
        title: "AI Research Director",
        description: "Tech Corp",
        details: "Leading research department"
      },
      projects: [
        {
          title: "Open Source Framework",
          description: "10k+ GitHub stars"
        }
      ]
    },
    {
      period: "2020-2022",
      work: {
        title: "Senior ML Engineer",
        description: "Tech Corp",
        details: "Leading AI product development"
      },
      projects: [
        {
          title: "LLM Optimization",
          description: "Novel training approach"
        },
        {
          title: "Conference Talk",
          description: "Keynote at AI Summit"
        }
      ]
    },
    {
      period: "2018-2020",
      education: {
        title: "Stanford University",
        description: "Ph.D. in Computer Science",
        details: "Focus on NLP and ML"
      },
      work: {
        title: "AI Research Lead",
        description: "Tech Corp",
        details: "Leading research initiatives in NLP"
      },
      projects: [
        {
          title: "ML Framework",
          description: "Built optimization framework"
        },
        {
          title: "Research Paper",
          description: "Published in top conference"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-primary-dark mb-12 text-center">Journey Through Time</h1>
        
        <div className="relative">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-24 relative"
            >
              {/* Period indicator - Now less visually intrusive */}
              <div className="absolute left-0 -top-4 bg-primary-light/20 backdrop-blur-sm rounded-elliptical px-4 py-1 shadow-sm">
                <span className="text-primary-dark font-medium text-sm">{milestone.period}</span>
              </div>

              <div className="ml-8 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Education & Work Column */}
                <div className="lg:col-span-5">
                  {milestone.education && (
                    <div className="bg-surface/30 backdrop-blur-sm rounded-2xl p-6 mb-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-primary-dark mb-2">
                        {milestone.education.title}
                      </h3>
                      <p className="text-sm text-white mb-1">{milestone.education.description}</p>
                      <p className="text-xs text-white/70">{milestone.education.details}</p>
                    </div>
                  )}
                  
                  {milestone.work && (
                    <div className="bg-surface/30 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-primary-dark mb-2">
                        {milestone.work.title}
                      </h3>
                      <p className="text-sm text-white mb-1">{milestone.work.description}</p>
                      <p className="text-xs text-white/70">{milestone.work.details}</p>
                    </div>
                  )}
                </div>

                {/* Projects Column - Modified for greater visual variation */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {milestone.projects.map((project, projectIndex) => (
                      <motion.div
                        key={projectIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + projectIndex * 0.1 }}
                        className={`bg-accent/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow 
                          ${projectIndex % 2 === 0 ? 'rounded-tr-3xl rounded-bl-3xl' : 'rounded-tl-3xl rounded-br-3xl'}`}
                      >
                        <h4 className="text-base font-semibold text-primary-light mb-2">
                          {project.title}
                        </h4>
                        <p className="text-sm text-white/90">{project.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              {index < milestones.length - 1 && (
                <div className="absolute left-24 bottom-0 w-px h-24 bg-primary-dark opacity-20" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Added button to the main page */}
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
