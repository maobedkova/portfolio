
import { motion } from 'framer-motion';

const Timeline = () => {
  const milestones = [
    {
      year: "2018",
      title: "Stanford University",
      description: "Ph.D. in Computer Science with focus on NLP and ML",
      type: "education"
    },
    {
      year: "2019",
      title: "AI Research Lead",
      description: "Leading AI research initiatives at Tech Corp",
      type: "work"
    },
    {
      year: "2020",
      title: "Tech Corp",
      description: "Senior ML Engineer",
      type: "work"
    },
    {
      year: "2021",
      title: "AI Conference Speaker",
      description: "Keynote speaker at AI Summit",
      type: "work"
    },
    {
      year: "2022",
      title: "Research Publication",
      description: "Published paper on LLM optimization",
      type: "project"
    },
    {
      year: "2023",
      title: "AI Framework",
      description: "Released open-source AI framework",
      type: "project"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-sections">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-primary-dark mb-12 text-center">My Journey</h1>
        
        <div className="overflow-x-auto pb-8">
          <div className="min-w-[1200px] relative p-20">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 h-0.5 bg-primary top-1/2 transform -translate-y-1/2" />
            
            {/* Timeline dots and content */}
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="absolute"
                style={{
                  left: `${(index * 200) + 40}px`,
                  top: milestone.type === "project" ? "60%" : "40%",
                  transform: "translateY(-50%)"
                }}
              >
                {/* Dot */}
                <div className="w-4 h-4 bg-primary rounded-full absolute left-1/2 top-0 transform -translate-x-1/2" 
                     style={{ top: milestone.type === "project" ? "-12px" : "12px" }}
                />
                
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: milestone.type === "project" ? -20 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass-panel p-4 rounded-lg w-40 absolute left-1/2 transform -translate-x-1/2 ${
                    milestone.type === "project" ? "top-4" : "bottom-4"
                  }`}
                >
                  <span className="text-primary-dark font-semibold block mb-1">{milestone.year}</span>
                  <h3 className="font-semibold text-sm mb-1">{milestone.title}</h3>
                  <p className="text-xs text-gray-600">{milestone.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
