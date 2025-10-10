import { Card } from './ui/card';
import { Calendar, User, ArrowRight, Eye } from 'lucide-react';

export const OurBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Entrepreneurship",
      author: "E-CELL Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      views: "1.2k",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      excerpt: "Exploring how artificial intelligence is revolutionizing the startup ecosystem and creating new opportunities for entrepreneurs to innovate and scale their businesses.",
      category: "Technology",
      featured: true
    },
    {
      id: 2,
      title: "Building a Successful Startup Team",
      author: "John Doe",
      date: "March 10, 2024",
      readTime: "7 min read",
      views: "890",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
      excerpt: "Learn the essential strategies for assembling and managing a high-performing startup team that can drive your venture towards success.",
      category: "Team Building",
      featured: false
    },
    {
      id: 3,
      title: "Funding Your Startup: A Complete Guide",
      author: "Jane Smith",
      date: "March 5, 2024",
      readTime: "10 min read",
      views: "2.1k",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop",
      excerpt: "Comprehensive guide covering all funding options available to startups, from bootstrapping to venture capital, with practical tips for each stage.",
      category: "Finance",
      featured: true
    },
    {
      id: 4,
      title: "Digital Marketing for Startups",
      author: "Mike Johnson",
      date: "February 28, 2024",
      readTime: "6 min read",
      views: "750",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      excerpt: "Discover cost-effective digital marketing strategies that can help startups build brand awareness and acquire customers on a limited budget.",
      category: "Marketing",
      featured: false
    },
    {
      id: 5,
      title: "Sustainable Business Models",
      author: "Sarah Wilson",
      date: "February 20, 2024",
      readTime: "8 min read",
      views: "1.5k",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      excerpt: "How modern entrepreneurs are building sustainable and environmentally conscious business models that create value for all stakeholders.",
      category: "Sustainability",
      featured: true
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 blur-xl rounded-full animate-pulse"></div>
            <h2 className="relative text-5xl md:text-7xl font-bold gradient-text-hero bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
              OUR BLOGS
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Insights, trends, and stories from the entrepreneurship world
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto overflow-hidden">
          <div className="flex animate-scroll space-x-6" style={{
            animation: 'scroll 25s linear infinite',
            width: 'calc(100% * 2)'
          }}>
            {/* First set of blog cards */}
            {blogs.map((blog) => (
              <div key={`first-${blog.id}`} className="flex-shrink-0 w-full max-w-4xl">
                <div className="perspective-1000">
                  <Card className="card-float bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur-xl border border-white/20 overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transform hover:rotateY-5 transition-all duration-700 preserve-3d">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
                      <div className="relative h-80 lg:h-96 overflow-hidden">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                        
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-white rounded-full">
                            {blog.category}
                          </span>
                        </div>
                        
                        {blog.featured && (
                          <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full animate-pulse">
                              Featured
                            </span>
                          </div>
                        )}
                        
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center justify-between text-white text-sm">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                <span>{blog.author}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{blog.date}</span>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              <span>{blog.views}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                          {blog.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed text-lg line-clamp-3">
                          {blog.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-sm text-primary font-medium">
                            {blog.readTime}
                          </span>
                          <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        </div>
                        
                        <button className="btn-3d group/btn flex items-center justify-center space-x-2 w-full py-4 text-lg font-semibold bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary hover:to-secondary transform hover:scale-105 transition-all duration-300">
                          <span>Read Article</span>
                          <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {blogs.map((blog) => (
              <div key={`second-${blog.id}`} className="flex-shrink-0 w-full max-w-4xl">
                  <div className="perspective-1000">
                    <Card className="card-float bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur-xl border border-white/20 overflow-hidden group hover:shadow-2xl hover:shadow-primary/20 transform hover:rotateY-5 transition-all duration-700 preserve-3d">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
                        <div className="relative h-80 lg:h-96 overflow-hidden">
                            <img
                              src={blog.image}
                              alt={blog.title}
                              loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent"></div>
                          
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary to-secondary text-white rounded-full">
                              {blog.category}
                            </span>
                          </div>
                          
                          {blog.featured && (
                            <div className="absolute top-4 right-4">
                              <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full animate-pulse">
                                Featured
                              </span>
                            </div>
                          )}
                          
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center justify-between text-white text-sm">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                  <User className="h-4 w-4 mr-1" />
                                  <span>{blog.author}</span>
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  <span>{blog.date}</span>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <Eye className="h-4 w-4 mr-1" />
                                <span>{blog.views}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                          
                          <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                            {blog.title}
                          </h3>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed text-lg line-clamp-3">
                            {blog.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between mb-6">
                            <span className="text-sm text-primary font-medium">
                              {blog.readTime}
                            </span>
                            <div className="flex space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                          </div>
                          
                          <button className="btn-3d group/btn flex items-center justify-center space-x-2 w-full py-4 text-lg font-semibold bg-gradient-to-r from-primary/20 to-secondary/20 hover:from-primary hover:to-secondary transform hover:scale-105 transition-all duration-300">
                            <span>Read Article</span>
                            <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                          </button>
                        </div>
                      </div>
                    </Card>
                  </div>
              </div>
              ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};