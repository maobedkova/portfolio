
import { ArrowRight, Play, ExternalLink, BookOpen, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Blog = () => {
  const blogPosts = [
    {
      title: "ChatGPT Explained for Non-Tech People",
      type: "video",
      video: "https://www.youtube.com/embed/L9i0_cH-6b0",
      thumbnail: "https://img.youtube.com/vi/L9i0_cH-6b0/maxresdefault.jpg",
      description: "How ChatGPT works under the hood"
    },
    {
      title: "How I Stay Up-To-Date with AI and NLP",
      type: "article",
      link: "https://medium.com/@maobedkova/how-i-stay-up-to-date-with-ai-and-nlp-656de9e284d9",
      image: "/1.webp",
      description: "A curated list of resources to stay current with AI and NLP developments"
    },
    {
      title: "Lessons Learned from Working as an NLP Engineer",
      type: "article",
      link: "https://medium.com/@maobedkova/lessons-learned-from-working-as-an-nlp-engineer-60d6ff0c77f",
      image: "/2.webp",
      description: "Key insights and experiences from my career as an NLP Engineer"
    },
    {
      title: "Cross-Lingual Transfer for ABSA",
      type: "article",
      link: "https://medium.com/trustyou-engineering/cross-lingual-transfer-for-absa-6e9ae08a428a",
      image: "/3.webp",
      description: "Exploring transfer learning techniques for Aspect-Based Sentiment Analysis across languages"
    },
    {
      title: "Data Augmentation for ABSA",
      type: "article",
      link: "https://medium.com/trustyou-engineering/data-augmentation-for-absa-bb61540673e3",
      image: "/4.webp",
      description: "Techniques to enhance training data for Aspect-Based Sentiment Analysis"
    },
    {
      title: "Topic Modelling with PySPark and Spark NLP",
      type: "article",
      link: "https://medium.com/trustyou-engineering/topic-modelling-with-pyspark-and-spark-nlp-a99d063f1a6e",
      image: "/5.webp",
      description: "Using distributed computing for efficient topic modeling on large text corpora"
    },
    {
      title: "Acoustic Word Embeddings",
      type: "article",
      link: "https://medium.com/@maobedkova/acoustic-word-embeddings-fc3f1a8f0519",
      image: "/6.webp",
      description: "Exploring vector representations of spoken words for speech processing tasks"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">
            Blog & Videos
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Sharing knowledge and insights about AI, NLP, and speech processing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="glass-panel rounded-[1.5rem] overflow-hidden shadow-lg h-full flex flex-col"
            >
              <div className="relative overflow-hidden">
                <AspectRatio ratio={16/9}>
                  {post.type === 'video' ? (
                    <a 
                      href={`https://youtu.be/L9i0_cH-6b0`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative w-full h-full"
                    >
                      <img 
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/70 rounded-full p-4 hover:bg-primary transition-colors duration-300">
                          <Play className="w-8 h-8 text-white" fill="white" />
                        </div>
                      </div>
                    </a>
                  ) : (
                    <a 
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </a>
                  )}
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h2 className="absolute bottom-0 left-0 p-4 text-xl font-bold text-white">
                  {post.title}
                </h2>
              </div>
              
              <div className="p-5 flex-grow flex flex-col justify-between">
                <p className="text-white/80 mb-6">{post.description}</p>
                
                <div className="mt-auto flex items-center justify-end">
                  <a 
                    href={post.type === 'video' ? `https://youtu.be/L9i0_cH-6b0` : post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-light hover:text-primary transition-colors"
                  >
                    {post.type === 'video' ? (
                      <>
                        <Play className="w-5 h-5" />
                        <span>Watch on YouTube</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-5 h-5" />
                        <span>Read on Medium</span>
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

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

export default Blog;
