import { Play } from 'lucide-react';
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
      image: "1.webp",
      description: "A curated list of resources to stay current with AI and NLP developments"
    },
    {
      title: "Lessons Learned from Working as an NLP Engineer",
      type: "article",
      link: "https://medium.com/@maobedkova/lessons-learned-from-working-as-an-nlp-engineer-60d6ff0c77f",
      image: "2.webp",
      description: "Key insights and experiences from my career as an NLP Engineer"
    },
    {
      title: "Cross-Lingual Transfer for ABSA",
      type: "article",
      link: "https://medium.com/trustyou-engineering/cross-lingual-transfer-for-absa-6e9ae08a428a",
      image: "3.webp",
      description: "Exploring transfer learning techniques for Aspect-Based Sentiment Analysis across languages"
    },
    {
      title: "Data Augmentation for ABSA",
      type: "article",
      link: "https://medium.com/trustyou-engineering/data-augmentation-for-absa-bb61540673e3",
      image: "4.webp",
      description: "Techniques to enhance training data for Aspect-Based Sentiment Analysis"
    },
    {
      title: "Topic Modelling with PySPark and Spark NLP",
      type: "article",
      link: "https://medium.com/trustyou-engineering/topic-modelling-with-pyspark-and-spark-nlp-a99d063f1a6e",
      image: "5.webp",
      description: "Using distributed computing for efficient topic modeling on large text corpora"
    },
    {
      title: "Acoustic Word Embeddings",
      type: "article",
      link: "https://medium.com/@maobedkova/acoustic-word-embeddings-fc3f1a8f0519",
      image: "6.webp",
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
            <a
              key={index}
              href={post.type === 'video' ? `https://youtu.be/L9i0_cH-6b0` : post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-panel rounded-[1.5rem] overflow-hidden shadow-lg h-full transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <AspectRatio ratio={16/9}>
                  {post.type === 'video' ? (
                    <div className="relative w-full h-full">
                      <img 
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/70 rounded-full p-4 transition-colors duration-300 group-hover:bg-primary">
                          <Play className="w-8 h-8 text-white" fill="white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h2 className="absolute bottom-0 left-0 p-4 text-xl font-bold text-white">
                  {post.title}
                </h2>
              </div>
              
              <div className="p-5">
                <p className="text-white/80">{post.description}</p>
              </div>
            </a>
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
