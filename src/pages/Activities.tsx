import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, ExternalLink } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: 'Urban Air Quality Monitoring Network Expansion',
      description: 'Deploying 50 new air quality sensors across metropolitan areas to create comprehensive monitoring network.',
      location: 'Multiple Cities',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'ongoing',
      participants: 25,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      category: 'Research'
    },
    {
      id: 2,
      title: 'Community Education Workshop Series',
      description: 'Monthly workshops educating communities about air quality issues and personal protection strategies.',
      location: 'Community Centers',
      startDate: '2024-02-01',
      endDate: '2024-11-30',
      status: 'ongoing',
      participants: 150,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      category: 'Education'
    },
    {
      id: 3,
      title: 'Industrial Emissions Reduction Partnership',
      description: 'Collaborating with local industries to implement cleaner technologies and reduce harmful emissions.',
      location: 'Industrial District',
      startDate: '2023-09-01',
      endDate: '2024-08-31',
      status: 'ongoing',
      participants: 12,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      category: 'Partnership'
    },
    {
      id: 4,
      title: 'Clean Air Policy Advocacy Campaign',
      description: 'Working with policymakers to develop and implement stronger air quality regulations.',
      location: 'Government Buildings',
      startDate: '2024-03-01',
      endDate: '2024-09-30',
      status: 'ongoing',
      participants: 8,
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      category: 'Advocacy'
    },
    {
      id: 5,
      title: 'Green Transportation Initiative',
      description: 'Promoting electric vehicles and public transportation to reduce vehicular emissions.',
      location: 'City-wide',
      startDate: '2023-06-01',
      endDate: '2024-05-31',
      status: 'completed',
      participants: 45,
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop',
      category: 'Initiative'
    },
    {
      id: 6,
      title: 'International Air Quality Conference 2024',
      description: 'Annual conference bringing together global experts to discuss latest research and solutions.',
      location: 'Convention Center',
      startDate: '2024-06-15',
      endDate: '2024-06-17',
      status: 'upcoming',
      participants: 300,
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop',
      category: 'Conference'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      ongoing: 'bg-nature-green/20 text-earth-green',
      completed: 'bg-blue-100 text-blue-800',
      upcoming: 'bg-sky-blue/20 text-ocean-blue'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Research: 'bg-purple-100 text-purple-800',
      Education: 'bg-green-100 text-green-800',
      Partnership: 'bg-orange-100 text-orange-800',
      Advocacy: 'bg-red-100 text-red-800',
      Initiative: 'bg-blue-100 text-blue-800',
      Conference: 'bg-yellow-100 text-yellow-800'
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
            <Badge variant="secondary" className="mb-4">Our Work</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Activities & Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our ongoing research projects, community initiatives, and collaborative efforts to improve air quality worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activities.map((activity) => (
              <Card key={activity.id} className="group hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background to-accent/10">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 space-x-2">
                    <Badge className={getStatusColor(activity.status)}>
                      {activity.status.charAt(0).toUpperCase() + activity.status.slice(1)}
                    </Badge>
                    <Badge className={getCategoryColor(activity.category)}>
                      {activity.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {activity.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {activity.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{activity.participants} participants</span>
                    </div>
                    <div className="flex items-center space-x-1 col-span-2">
                      <Calendar size={14} />
                      <span>
                        {new Date(activity.startDate).toLocaleDateString()} - {' '}
                        {new Date(activity.endDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ExternalLink size={16} className="mr-2" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-sky-blue/10 border-primary/20">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Get Involved</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join our mission to improve air quality. Whether you're a researcher, community member, or organization, 
                  there are many ways to contribute to our ongoing projects.
                </p>
                <div className="space-x-4">
                  <Button size="lg">Volunteer</Button>
                  <Button size="lg" variant="outline">Partner With Us</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;