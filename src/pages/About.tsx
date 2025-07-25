import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Award, Users } from 'lucide-react';
import teamImage from '@/assets/team-placeholder.jpg';

const About = () => {
  const stats = [
    { icon: Award, label: 'Years of Research', value: '15+' },
    { icon: Users, label: 'Team Members', value: '50+' },
    { icon: Target, label: 'Projects Completed', value: '200+' },
    { icon: Eye, label: 'Communities Served', value: '100+' },
  ];

  const values = [
    {
      title: 'Scientific Excellence',
      description: 'We conduct rigorous, peer-reviewed research to advance understanding of air quality issues.'
    },
    {
      title: 'Community Focus',
      description: 'Our work centers on improving air quality for all communities, especially those most affected.'
    },
    {
      title: 'Policy Impact',
      description: 'We translate research into actionable policy recommendations for meaningful change.'
    },
    {
      title: 'Innovation',
      description: 'We develop cutting-edge technologies and methodologies for air quality monitoring.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Our Story</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About Air Quality Nexus
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading the charge in air quality research, monitoring, and advocacy for cleaner, healthier communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center">
                  <Target className="mr-3 text-primary" size={32} />
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To conduct cutting-edge research, develop innovative monitoring technologies, and advocate for evidence-based policies that improve air quality and protect public health in communities worldwide.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center">
                  <Eye className="mr-3 text-primary" size={32} />
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A world where every community has access to clean, healthy air, supported by robust scientific understanding and effective environmental policies.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={teamImage} 
                alt="Our team in action" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <stat.icon className="mx-auto mb-4 text-primary" size={48} />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-gradient-to-br from-background to-accent/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;