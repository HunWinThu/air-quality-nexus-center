import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, User } from 'lucide-react';

const Blog = () => {
  const ongoingProjects = [
    {
      id: 1,
      title: 'Real-time Air Quality Monitoring Network for Southeast Asia',
      excerpt: 'Developing a comprehensive monitoring network across multiple countries to track air pollution patterns in real-time.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Monitoring',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'Community Health Impact Assessment in Urban Areas',
      excerpt: 'Ongoing study examining the correlation between air quality and public health outcomes in major metropolitan areas.',
      author: 'Dr. Michael Chen',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Health Research',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Policy Framework Development for Clean Air Standards',
      excerpt: 'Working with government agencies to develop evidence-based policies for improved air quality management.',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Policy',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop'
    }
  ];

  const completedProjects = [
    {
      id: 4,
      title: 'Industrial Emissions Reduction Initiative',
      excerpt: 'Successfully reduced air pollution in industrial districts through collaborative partnerships and innovative solutions.',
      author: 'Dr. Robert Kim',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Case Study',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      title: 'Citizen Science Air Quality Program',
      excerpt: 'Completed community engagement project that empowered local residents to participate in air quality monitoring.',
      author: 'Dr. Lisa Wang',
      date: '2023-12-20',
      readTime: '5 min read',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      title: 'International Climate and Air Quality Database',
      excerpt: 'Established comprehensive database through partnerships with global research institutions.',
      author: 'Dr. James Martinez',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Collaboration',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop'
    }
  ];

  const upcomingProjects = [
    {
      id: 7,
      title: 'AI-Powered Air Quality Prediction System',
      excerpt: 'Developing machine learning models to predict air quality trends and pollution events for better preparedness.',
      author: 'Dr. Anna Park',
      date: '2024-03-01',
      readTime: '12 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
    },
    {
      id: 8,
      title: 'Regional Climate Change Impact Assessment',
      excerpt: 'Planning comprehensive study on how climate change affects air quality patterns across the region.',
      author: 'Dr. David Thompson',
      date: '2024-04-15',
      readTime: '15 min read',
      category: 'Climate Research',
      image: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=800&h=600&fit=crop'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Technology: 'bg-sky-blue/20 text-ocean-blue',
      'Health Research': 'bg-nature-green/20 text-earth-green',
      Policy: 'bg-purple-100 text-purple-800',
      'Case Study': 'bg-orange-100 text-orange-800',
      Community: 'bg-blue-100 text-blue-800',
      Collaboration: 'bg-green-100 text-green-800',
      Monitoring: 'bg-cyan-100 text-cyan-800',
      'Climate Research': 'bg-teal-100 text-teal-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const renderProjectCards = (projects: typeof ongoingProjects) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Card key={project.id} className="group hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background to-accent/10">
          <div className="relative overflow-hidden rounded-t-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <Badge className={getCategoryColor(project.category)}>
                {project.category}
              </Badge>
            </div>
          </div>
          
          <CardHeader className="pb-2">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </h3>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-muted-foreground line-clamp-3">
              {project.excerpt}
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <User size={14} />
                <span>{project.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{new Date(project.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{project.readTime}</span>
              </div>
            </div>
            
            <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              Learn More
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Projects
            </h1>
          </div>
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="ongoing" orientation="vertical" className="flex gap-8">
            <TabsList className="flex-col h-fit w-64 bg-muted p-1">
              <TabsTrigger 
                value="ongoing" 
                className="w-full justify-start text-lg py-4 data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                On-going Projects
              </TabsTrigger>
              <TabsTrigger 
                value="completed" 
                className="w-full justify-start text-lg py-4 data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                Completed Projects
              </TabsTrigger>
              <TabsTrigger 
                value="upcoming" 
                className="w-full justify-start text-lg py-4 data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                Up Coming Projects
              </TabsTrigger>
            </TabsList>
            
            <div className="flex-1">
              <TabsContent value="ongoing" className="mt-0">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    On-going Projects
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl">
                    Current research initiatives actively making impact in air quality science
                  </p>
                </div>
                {renderProjectCards(ongoingProjects)}
              </TabsContent>
              
              <TabsContent value="completed" className="mt-0">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Completed Projects
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl">
                    Successfully completed research projects with measurable outcomes
                  </p>
                </div>
                {renderProjectCards(completedProjects)}
              </TabsContent>
              
              <TabsContent value="upcoming" className="mt-0">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Up Coming Projects
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl">
                    Future initiatives planned to advance air quality research and solutions
                  </p>
                </div>
                {renderProjectCards(upcomingProjects)}
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;