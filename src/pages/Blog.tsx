
const Blog = () => {
  const blogPosts = [
    {
      title: "ChatGPT Explained for Non-Tech People",
      video: "https://youtu.be/L9i0_cH-6b0?si=sYvz7HhLmuIi9H46",
      description: "How ChatGPT works under the hood"
    },
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
              <div className="aspect-video mb-4">
                <iframe
                  src={post.video}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                  title={post.title}
                />
              </div>
              <p className="text-gray-600">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
