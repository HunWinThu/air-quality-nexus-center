import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Latest Air Quality Monitoring Technologies: A Comprehensive Review',
      excerpt: 'Exploring the newest developments in sensor technology and data collection methods for environmental monitoring.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'Community Health Impact of Urban Air Pollution',
      excerpt: 'New research findings on how air pollution affects community health outcomes in metropolitan areas.',
      author: 'Dr. Michael Chen',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Research',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Policy Changes Needed for Cleaner Air Standards',
      excerpt: 'Analyzing current environmental policies and proposing evidence-based improvements for better air quality.',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Policy',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      title: 'Success Story: Reducing Emissions in Industrial Districts',
      excerpt: 'Case study of our collaboration with industrial partners to significantly reduce air pollution.',
      author: 'Dr. Robert Kim',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Case Study',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      title: 'Citizen Science: Empowering Communities in Air Quality Research',
      excerpt: 'How community members can contribute to air quality research through citizen science initiatives.',
      author: 'Dr. Lisa Wang',
      date: '2023-12-20',
      readTime: '5 min read',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      title: 'International Collaboration on Climate and Air Quality',
      excerpt: 'Updates on our partnerships with global research institutions working on environmental challenges.',
      author: 'Dr. James Martinez',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Collaboration',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Technology: 'bg-sky-blue/20 text-ocean-blue',
      Research: 'bg-nature-green/20 text-earth-green',
      Policy: 'bg-purple-100 text-purple-800',
      'Case Study': 'bg-orange-100 text-orange-800',
      Community: 'bg-blue-100 text-blue-800',
      Collaboration: 'bg-green-100 text-green-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Latest Updates</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Research Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest research, insights, and developments in air quality science and environmental policy.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background to-accent/10">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;