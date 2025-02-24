
import { motion } from 'framer-motion';

const Timeline = () => {
  const milestones = [
    {
      year: "2018-2022",
      title: "Stanford University",
      description: "Ph.D. in Computer Science with focus on NLP and ML",
      type: "education"
    },
    {
      year: "2020-Present",
      title: "AI Research Lead",
      description: "Leading AI research initiatives at Tech Corp",
      type: "work"
    },
    // Add more milestones as needed
  ];

  const projects = [
    {
      year: "2022",
      title: "LLM Optimization Framework",
      description: "Developed a framework for optimizing large language models"
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen bg-gradient-sections p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-dark mb-12 text-center">My Journey</h1>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-primary-dark mb-6">Education & Career</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-panel p-6 rounded-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-primary-dark font-semibold">{milestone.year}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary-dark mb-6">Notable Projects</h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-panel p-6 rounded-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0">
                      <span className="text-primary-dark font-semibold">{project.year}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
