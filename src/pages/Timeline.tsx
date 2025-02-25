
import { motion } from 'framer-motion';

const Timeline = () => {
  const milestones = [
    {
      year: "2018",
      title: "Stanford University",
      description: "Ph.D. in Computer Science with focus on NLP and ML",
      color: "#4299E1" // Blue
    },
    {
      year: "2019",
      title: "AI Research Lead",
      description: "Leading AI research initiatives at Tech Corp",
      color: "#4299E1" // Blue
    },
    {
      year: "2020",
      title: "Tech Corp",
      description: "Senior ML Engineer",
      color: "#9F7AEA" // Purple
    },
    {
      year: "2021",
      title: "AI Conference Speaker",
      description: "Keynote speaker at AI Summit",
      color: "#9F7AEA" // Purple
    },
    {
      year: "2022",
      title: "Research Publication",
      description: "Published paper on LLM optimization",
      color: "#9F7AEA" // Purple
    },
    {
      year: "2023",
      title: "AI Framework",
      description: "Released open-source AI framework",
      color: "#9F7AEA" // Purple
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-sections flex items-center justify-center">
      <div className="w-full p-8">
        <h1 className="text-4xl font-bold text-primary-dark mb-12 text-center">Timeline</h1>
        
        <div className="overflow-x-auto pb-8">
          <div className="min-w-[1200px] relative p-12">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 h-0.5 bg-primary-dark top-1/2 transform -translate-y-1/2" />
            
            {/* Timeline dots and content */}
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="absolute"
                style={{
                  left: `${(index * 200) + 40}px`,
                  top: "50%",
                  transform: "translateY(-50%)"
                }}
              >
                {/* Vertical line */}
                <div 
                  className="absolute left-1/2 w-px bg-primary-dark" 
                  style={{ 
                    height: "40px",
                    top: index % 2 === 0 ? "-60px" : "20px"
                  }}
                />
                
                {/* Dot */}
                <div 
                  className="w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2"
                  style={{ 
                    backgroundColor: milestone.color,
                    border: "2px solid white"
                  }}
                />
                
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-48 p-4 ${
                    index % 2 === 0 ? "-top-32" : "top-12"
                  }`}
                >
                  <div className="text-center">
                    <span 
                      className="text-2xl font-bold block mb-2"
                      style={{ color: milestone.color }}
                    >
                      {milestone.year}
                    </span>
                    <h3 className="font-medium text-sm mb-1">{milestone.title}</h3>
                    <p className="text-xs text-gray-600">{milestone.description}</p>
                  </div>
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
