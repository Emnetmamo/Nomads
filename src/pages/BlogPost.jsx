/* src/components/Blog.jsx */


import '../assets/css/Blog.css';

const Blog = () => {
  // Sample blog posts
  const blogPosts = [
    {
      title: 'Exploring the Future of Transportation',
      date: 'January 15, 2024',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
    },
    {
      title: 'The Impact of Technology on Urban Development',
      date: 'February 5, 2024',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
    },
    {
      title: 'The Impact of Technology on Urban Development',
      date: 'February 5, 2024',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
    },
    
    // Add more blog posts as needed
  ];

  return (
    <section className="blog">
      <div className="container">
        <h2>Our Latest Blog Posts</h2>
        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-post">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-date">{post.date}</p>
              <p className="post-content">{post.content}</p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
