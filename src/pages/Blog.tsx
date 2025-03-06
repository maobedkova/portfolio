
import { ArrowRight, Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: "ChatGPT Explained for Non-Tech People",
      type: "video",
      // Convert YouTube watch URL to embed URL format
      video: "https://www.youtube.com/embed/L9i0_cH-6b0",
      thumbnail: "https://img.youtube.com/vi/L9i0_cH-6b0/maxresdefault.jpg",
      description: "How ChatGPT works under the hood"
    },
    {
      title: "How I Stay Up-To-Date with AI and NLP",
      type: "article",
      link: "https://medium.com/@maobedkova/how-i-stay-up-to-date-with-ai-and-nlp-656de9e284d9",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*3vNKhz6K-oGQ9M_RpW6-0A.png",
      description: "A curated list of resources to stay current with AI and NLP developments"
    },
    {
      title: "Lessons Learned from Working as an NLP Engineer",
      type: "article",
      link: "https://medium.com/@maobedkova/lessons-learned-from-working-as-an-nlp-engineer-60d6ff0c77f",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*R-oovBfAGNt3TxgM0dr5og.jpeg",
      description: "Key insights and experiences from my career as an NLP Engineer"
    },
    {
      title: "Cross-Lingual Transfer for ABSA",
      type: "article",
      link: "https://medium.com/trustyou-engineering/cross-lingual-transfer-for-absa-6e9ae08a428a",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*JcYViNESm-xrQu1iYzlD2w.png",
      description: "Exploring transfer learning techniques for Aspect-Based Sentiment Analysis across languages"
    },
    {
      title: "Data Augmentation for ABSA",
      type: "article",
      link: "https://medium.com/trustyou-engineering/data-augmentation-for-absa-bb61540673e3",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*QZ7LyRXRxH3jVIBykgnG4Q.jpeg",
      description: "Techniques to enhance training data for Aspect-Based Sentiment Analysis"
    },
    {
      title: "Topic Modelling with PySPark and Spark NLP",
      type: "article",
      link: "https://medium.com/trustyou-engineering/topic-modelling-with-pyspark-and-spark-nlp-a99d063f1a6e",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*xJRLnT5FXnVbXzIyoBdoiQ.jpeg",
      description: "Using distributed computing for efficient topic modeling on large text corpora"
    },
    {
      title: "Acoustic Word Embeddings",
      type: "article",
      link: "https://medium.com/@maobedkova/acoustic-word-embeddings-fc3f1a8f0519",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*zRrYLGrKRBl2tpv_CLGHFA.jpeg",
      description: "Exploring vector representations of spoken words for speech processing tasks"
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-dark mb-12 text-center">Blog & Videos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="glass-panel p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
              
              {post.type === 'article' ? (
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="block mb-4">
                  <div className="aspect-video relative overflow-hidden rounded-lg">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/600x400/10B981/FFFFFF?text=Article+Preview";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium flex items-center">
                        Read on Medium <ExternalLink className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </a>
              ) : post.type === 'video' && (
                <div className="aspect-video mb-4 relative">
                  <a 
                    href={`https://youtu.be/L9i0_cH-6b0`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block relative"
                  >
                    <img 
                      src={post.thumbnail} 
                      alt={post.title} 
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://placehold.co/600x400/10B981/FFFFFF?text=Video+Preview";
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/70 rounded-full p-4 hover:bg-primary transition-colors duration-300">
                        <Play className="w-8 h-8 text-white" fill="white" />
                      </div>
                    </div>
                  </a>
                </div>
              )}
              
              <p className="text-gray-400">{post.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-dark to-primary hover:from-primary hover:to-primary-light text-white px-6 py-3 rounded-[1.5rem] transition-all duration-300"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
