
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
    }
    // Add more blog posts as needed
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-dark mb-12 text-center">Blog & Videos</h1>
        
        <div className="grid gap-8">
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
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/70 rounded-full p-4 hover:bg-primary transition-colors duration-300">
                        <Play className="w-8 h-8 text-white" fill="white" />
                      </div>
                    </div>
                  </a>
                  <iframe
                    src={post.video}
                    className="w-full h-full rounded-lg hidden"
                    allowFullScreen
                    title={post.title}
                  />
                </div>
              )}
              
              <p className="text-gray-600">{post.description}</p>
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
