import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wind, BarChart3, Users, Globe, Leaf, Zap, Microscope, Building2, GraduationCap } from 'lucide-react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Home from '@/assets/HOME.jpg';
import missionsHero from '@/assets/missions-hero.jpg';
import cooperationImage from '@/assets/cooperationImage.jpg';
import multidisciplinaryImage from '@/assets/multidisciplinaryImage.png';
import governmentImage from '@/assets/governmentImage.jpg';
import partner1 from '@/assets/partners-1.png';
import partner2 from '@/assets/partner_2.png';
import partner3 from '@/assets/partner_3.png';
import partner4 from '@/assets/partners-4.jpeg';
import climateImage from '@/assets/climateImage.png';
import capacity from '@/assets/Capacity.jpg';
import logo from '@/assets/AQC_logo.jpg';

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
          style={{ backgroundImage: `url(${Home})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-sky-blue/20"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white-700 via-white-700 to-white-900 bg-clip-text ">
            {" "}Air Quality Nexus Center
          </h1>
            <p className="text-left text-xl md:text-xl mb-8 text-white max-w-7xl mx-auto bg-green-700/85 rounded-full px-12 py-3 shadow">
            A leading Center in conducting and implementing application research with the aim to gain multiple 
            benefits from reducing air pollution through improvement of health of human and ecosystem, and 
            protection of the climate system.
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
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Missions</h2>
          </div>
          
          {/* Hero Image for Missions */}
          <div className="mb-16">
            <img 
              src={missionsHero} 
              alt="Our Missions Hero" 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/10 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={missionsHero} 
                  alt="High-quality Research" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">High-quality Research</h3>
                <p className="text-muted-foreground">
                  Conduct high-quality research demonstrated by real-life applications for improving air quality in Asia and beyond.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/10 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={cooperationImage} 
                  alt="International Cooperation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">International Cooperation</h3>
                <p className="text-muted-foreground">
                  Continue and expand international cooperation in conducting research projects, consultancies, training, etc.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/10 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={multidisciplinaryImage} 
                  alt="Multidisciplinary Approach" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">Multidisciplinary Approach</h3>
                <p className="text-muted-foreground">
                  Focus on the multi-pollutant and multi-effect approach to provide cost-effective solutions to complex air pollution problems.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/10 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={governmentImage} 
                  alt="Government Assistance" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">Assistance to Governments</h3>
                <p className="text-muted-foreground">
                  Provide assistance to governments, and other development partners in the planning, designing, scaling up, and implementation of clean air action plans with multiple benefits.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/10 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={climateImage} 
                  alt="Co-benefits to Air Quality and Climate" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-3">Co-benefits to Air Quality and Climate</h3>
                <p className="text-muted-foreground">
                  Demonstrate and quantitatively assess the co-benefits to air quality and climate of integrated measures applicable in local context.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/10">
            <div className="h-48 overflow-hidden">
                <img 
                  src={capacity} 
                  alt="Co-benefits to Air Quality and Climate" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
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
                      {/* Partner Images */}
          
            <h2 className="text-4xl font-bold text-foreground mb-6">Strategic Partners</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Collaborating with leading organizations to advance air quality research and policy worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <a href="https://cleanairasia.org/" target="_blank" rel="noopener noreferrer">
            <Card className="group hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm rounded-3xl">
              <CardContent className="p-6 text-center h-72 flex flex-col justify-between">
                <img 
                  src={partner1}
                  alt='Strategic Parteners'
                   className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-3">Clean Air Asia</h3>

              </CardContent>
            </Card>
            </a>
            
            <a href="https://www.fhi360.org/" target="_blank" rel="noopener noreferrer">
            <Card className="group hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm rounded-3xl">
              <CardContent className="p-6 text-center h-72 flex flex-col justify-between">
                <img 
                  src={partner2}
                  alt='Strategic Parteners'
                   className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-3">Family Health International (FHI 360)</h3>

              </CardContent>
            </Card>
            </a>

            <a href="https://www.canberra.edu.au/faculties/health/heal" target="_blank" rel="noopener noreferrer">
            <Card className="group hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm rounded-3xl">
              <CardContent className="p-6 text-center h-72 flex flex-col justify-between">
                <img 
                  src={partner3}
                  alt='Strategic Parteners'
                   className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-3">Healthy Environments and Lives (HEAL) Global Research Centre</h3>

              </CardContent>
            </Card>
            </a>
            
            <a href="https://www.sinica.edu.tw/en" target="_blank" rel="noopener noreferrer">
            <Card className="group hover:shadow-lg transition-all duration-300 bg-background/80 backdrop-blur-sm rounded-3xl">
              <CardContent className="p-6 text-center h-72 flex flex-col justify-between">
                <img 
                  src={partner4}
                  alt='Strategic Parteners'
                   className="mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-3">Academia Sinica</h3>

              </CardContent>
            </Card>
            </a>
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

      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <div className="flex justify-center items-center space-x-2">
              <img src={logo} alt="Air Quality Nexus" className="h-10 w-10 bg-transparent" />
              <span className="text-4xl font-bold text-foreground">Air Quality Nexus</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Leading research and advocacy for cleaner air and sustainable environmental solutions.
            </p>
            <div className="flex justify-center space-x-8">
              <Facebook size={40} className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter size={40} className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Linkedin size={40} className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram size={40} className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;