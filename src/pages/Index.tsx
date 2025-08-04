import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wind, BarChart3, Users, Globe, Leaf, Zap, Microscope, Building2, GraduationCap } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Index = () => {
  const features = [
    {
      icon: Wind,
      title: 'Air Quality Monitoring',
      description: 'Advanced sensor networks providing real-time air quality data across urban and rural areas.'
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Comprehensive analysis of environmental data to identify trends and inform policy decisions.'
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Working directly with communities to address local air quality concerns and health impacts.'
    },
    {
      icon: Globe,
      title: 'Global Partnerships',
      description: 'Collaborating with international organizations to tackle air pollution on a global scale.'
    }
  ];

  const stats = [
    { value: '15+', label: 'Years of Research' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Expert Team Members' },
    { value: '100+', label: 'Communities Served' }
  ];

  const recentPosts = [
    {
      title: 'New Air Quality Monitoring Technologies',
      excerpt: 'Exploring the latest innovations in environmental sensor technology...',
      date: '2024-01-15',
      category: 'Technology'
    },
    {
      title: 'Community Health Impact Studies',
      excerpt: 'Research findings on air pollution effects in urban communities...',
      date: '2024-01-10',
      category: 'Research'
    },
    {
      title: 'Policy Recommendations for Clean Air',
      excerpt: 'Evidence-based policy proposals for improved air quality standards...',
      date: '2024-01-05',
      category: 'Policy'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/lovable-uploads/895b1e5e-fcd1-426a-b7e5-ddc16ddeb6bc.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-sky-blue/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Leading Air Quality Research
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Cleaner Air for
              <span className="text-air-light"> Healthier Communities</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Advancing scientific research, innovative monitoring, and evidence-based advocacy 
              to protect community health through improved air quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Explore Our Research
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Missions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Our Purpose</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Missions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading Center of nexus of air quality, health, ecosystem and climate in Asia and beyond 
              with a focus on integrated approach to air pollution reduction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/10">
              <CardContent className="p-6 text-center">
                <Microscope className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold text-foreground mb-3">High-quality Research</h3>
                <p className="text-muted-foreground">
                  Conduct high-quality research demonstrated by real-life applications for improving air quality in Asia and beyond.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/10">
              <CardContent className="p-6 text-center">
                <Globe className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold text-foreground mb-3">International Cooperation</h3>
                <p className="text-muted-foreground">
                  Continue and expand international cooperation in conducting research projects, consultancies, training, etc.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/10">
              <CardContent className="p-6 text-center">
                <BarChart3 className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold text-foreground mb-3">Multidisciplinary Approach</h3>
                <p className="text-muted-foreground">
                  Focus on the multi-pollutant and multi-effect approach to provide cost-effective solutions to complex air pollution problems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/10">
              <CardContent className="p-6 text-center">
                <Building2 className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold text-foreground mb-3">Government Assistance</h3>
                <p className="text-muted-foreground">
                  Provide assistance to governments, and other development partners in the planning, designing, scaling up, and implementation of clean air action plans.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/10">
              <CardContent className="p-6 text-center">
                <Leaf className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold text-foreground mb-3">Co-benefits Assessment</h3>
                <p className="text-muted-foreground">
                  Demonstrate and quantitatively assess the co-benefits to air quality and climate of integrated measures applicable in local context.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/10">
              <CardContent className="p-6 text-center">
                <GraduationCap className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold text-foreground mb-3">Capacity Building</h3>
                <p className="text-muted-foreground">
                  Build capacity and promote multi-disciplinary approaches in atmospheric sciences within AIT and internationally.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">What We Do</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Core Areas of Focus</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From cutting-edge research to community engagement, we tackle air quality challenges 
              through multiple integrated approaches.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/10">
                <CardContent className="p-6 text-center">
                  <feature.icon className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Latest Updates</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Recent Research & News</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed about our latest findings, projects, and developments in air quality science.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">{post.category}</Badge>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More <ArrowRight className="ml-1" size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Strategic Partners Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Partnerships</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-6">Strategic Partners</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Collaborating with leading organizations to advance air quality research and policy worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Globe className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold text-foreground mb-3">Clean Air Asia</h3>
                <p className="text-muted-foreground">
                  Leading regional network promoting clean air solutions and sustainable transport across Asia.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Users className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold text-foreground mb-3">Family Health International (FHI 360)</h3>
                <p className="text-muted-foreground">
                  Global health and development organization improving lives through integrated approaches.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Microscope className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold text-foreground mb-3">Health Effects Institute</h3>
                <p className="text-muted-foreground">
                  Independent research organization studying the health effects of air pollution worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary/10 to-sky-blue/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <Leaf className="mx-auto mb-6 text-primary" size={64} />
              <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Whether you're a researcher, community member, or organization, there are many ways 
                to contribute to cleaner air and healthier communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Zap className="mr-2" size={20} />
                  Get Involved
                </Button>
                <Button size="lg" variant="outline">
                  Partner With Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
