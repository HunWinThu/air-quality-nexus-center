import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wind, BarChart3, Users, Globe, Leaf, Zap, Microscope, Building2, GraduationCap } from 'lucide-react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Home from '@/assets/HOME.jpg';
import missionsHero from '@/assets/hig-quality.jpg';
import cooperationImage from '@/assets/cooperation.jpg';
import multidisciplinaryImage from '@/assets/multi.png';
import governmentImage from '@/assets/government.jpg';
import partner1 from '@/assets/partners-1.png';
import partner2 from '@/assets/partner-2.png';
import partner3 from '@/assets/partner-3.png';
import partner4 from '@/assets/partners-4.jpeg';
import climateImage from '@/assets/co-benefits.png';
import capacity from '@/assets/capacity.jpg';
import logo from '@/assets/AQC_logo.jpg';
import teamGroupPhoto from '@/assets/team-group-photo.jpg';
import pm25Image from '@/assets/pm2.5.png';
import { Target, Eye } from 'lucide-react';

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




      {/* About Our Center Card */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={pm25Image} 
            alt="PM2.5 air pollution monitoring" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
            <div className="relative">
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl hover-scale">
                <Badge variant="outline" className="mb-6 border-white/30 text-white bg-white/10 backdrop-blur-sm">
                  About Our Center
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Air Quality Nexus
                  <span className="block text-primary">Center</span>
                </h2>
                <p className="text-lg text-white/90 leading-relaxed mb-6 font-medium">
                  Air Quality Nexus Center has a goal to serve as a focal point to build capacity and conduct cutting-edge 
                  research in atmospheric sciences for effective improvement of air quality in Asia and beyond.
                </p>
                <p className="text-base text-white/80 leading-relaxed">
                  The Center will be an institution-wide Center, cooperating with multidisciplinary and cutting-edge research 
                  areas of the schools and other AIT Centers to foster collaboration and strengthen AIT research and education capacity.
                </p>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Card */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={pm25Image} 
            alt="PM2.5 air pollution monitoring" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-4xl mx-auto">
            <div className="relative">
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl hover-scale">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Eye className="mr-4 text-primary" size={32} />
                  Our Vision
                </h3>
                <p className="text-lg text-white/90 leading-relaxed font-medium">
                  Air Quality Nexus will be a leading Center in conducting and implementing application research with the aim to gain
                  multiple benefits from reducing air pollution through improvement of health of human and ecosystem,
                  and protection of the climate system.
                </p>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={pm25Image} 
            alt="PM2.5 air pollution monitoring" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl">
              <div className="text-center">
                <Badge variant="outline" className="mb-4 border-white/30 text-white bg-white/10 backdrop-blur-sm">Our Missions</Badge>
                <h2 className="text-4xl font-bold text-white mb-4">Our Missions</h2>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  Our multi-faceted mission encompasses research excellence, international cooperation, 
                  and practical solutions for complex air pollution challenges
                </p>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl -z-10 blur-xl"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <Card className="group hover-scale bg-white/10 backdrop-blur-md border-white/20 text-white h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <img 
                  src={missionsHero} 
                  alt="High-Quality Research"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold mb-4">High-Quality Research</h3>
                <p className="text-white/80 leading-relaxed flex-grow">Conduct high-quality research demonstrated by real-life applications for improving air quality in Asia and beyond.</p>
              </CardContent>
            </Card>
            <Card className="group hover-scale bg-white/10 backdrop-blur-md border-white/20 text-white h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <img 
                  src={multidisciplinaryImage} 
                  alt="Multi-Pollutant Approach"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold mb-4">Multi-Pollutant Approach</h3>
                <p className="text-white/80 leading-relaxed flex-grow">Focus on the multi-pollutant and multi-effect approach to provide cost-effective solutions to complex air pollution problems.</p>
              </CardContent>
            </Card>
            <Card className="group hover-scale bg-white/10 backdrop-blur-md border-white/20 text-white h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <img 
                  src={climateImage} 
                  alt="Co-Benefits Assessment"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold mb-4">Co-Benefits Assessment</h3>
                <p className="text-white/80 leading-relaxed flex-grow">Demonstrate and quantitatively assess the co-benefits to air quality and climate of integrated measures applicable in local context.</p>
              </CardContent>
            </Card>
            <Card className="group hover-scale bg-white/10 backdrop-blur-md border-white/20 text-white h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <img 
                  src={cooperationImage} 
                  alt="International Cooperation"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold mb-4">International Cooperation</h3>
                <p className="text-white/80 leading-relaxed flex-grow">Continue and expand international cooperation in conducting research projects, consultancies, training, etc.</p>
              </CardContent>
            </Card>
            <Card className="group hover-scale bg-white/10 backdrop-blur-md border-white/20 text-white h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <img 
                  src={governmentImage} 
                  alt="Government Assistance"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold mb-4">Government Assistance</h3>
                <p className="text-white/80 leading-relaxed flex-grow">Provide assistance to governments, and other development partners in the planning, designing, scaling up, and implementation of clean air action plans with multiple benefits.</p>
              </CardContent>
            </Card>
            <Card className="group hover-scale bg-white/10 backdrop-blur-md border-white/20 text-white h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <img 
                  src={capacity} 
                  alt="Capacity Building"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3 className="text-xl font-bold mb-4">Capacity Building</h3>
                <p className="text-white/80 leading-relaxed flex-grow">Build capacity and promote multi-disciplinary approaches in atmospheric sciences within AIT and internationally.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={teamGroupPhoto} 
            alt="Research team collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
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