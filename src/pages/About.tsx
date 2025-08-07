import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Award, Users, Microscope, Globe, Lightbulb, BookOpen, BarChart3, Network } from 'lucide-react';
import teamGroupPhoto from '@/assets/team-group-photo.jpg';
import researchImage from '@/assets/air-pollution-research.png';

const About = () => {
  const stats = [
    { icon: Microscope, label: 'Research Projects', value: '200+' },
    { icon: Users, label: 'International Partners', value: '50+' },
    { icon: Globe, label: 'Countries Served', value: '15+' },
    { icon: BookOpen, label: 'Publications', value: '300+' },
  ];

  const missions = [
    {
      icon: Target,
      title: 'High-Quality Research',
      description: 'Conduct cutting-edge research demonstrated by real-life applications for improving air quality in Asia and beyond.'
    },
    {
      icon: BarChart3,
      title: 'Multi-Pollutant Approach',
      description: 'Focus on multi-pollutant and multi-effect approaches to provide cost-effective solutions to complex air pollution problems.'
    },
    {
      icon: Lightbulb,
      title: 'Co-Benefits Assessment',
      description: 'Demonstrate and quantitatively assess the co-benefits to air quality and climate of integrated measures.'
    },
    {
      icon: Network,
      title: 'International Cooperation',
      description: 'Continue and expand international cooperation in conducting research projects, consultancies, and training.'
    },
    {
      icon: Users,
      title: 'Government Assistance',
      description: 'Provide assistance to governments in planning, designing, and implementing clean air action plans.'
    },
    {
      icon: BookOpen,
      title: 'Capacity Building',
      description: 'Build capacity and promote multi-disciplinary approaches in atmospheric sciences within AIT and internationally.'
    }
  ];

  const researchAreas = [
    {
      title: 'Atmospheric Sciences',
      description: 'Advanced monitoring and modeling of atmospheric processes affecting air quality.'
    },
    {
      title: 'Climate Co-Benefits',
      description: 'Research on integrated solutions that improve both air quality and climate outcomes.'
    },
    {
      title: 'Policy Development',
      description: 'Evidence-based policy recommendations for effective air quality management.'
    },
    {
      title: 'Technology Innovation',
      description: 'Development of cutting-edge monitoring and mitigation technologies.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-nature-green/10 via-sky-blue/5 to-primary/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                Research Excellence
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                Air Quality Nexus
                <span className="block text-primary">Research Center</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A leading center for cutting-edge atmospheric sciences research, building capacity and 
                conducting innovative solutions for effective air quality improvement across Asia and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About & Vision */}
      <section className="py-24 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12 animate-fade-in">
              <div>
                <Badge variant="outline" className="mb-4 border-primary/30 text-primary">About Our Center</Badge>
                <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">
                  Focal Point for Atmospheric Sciences Excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  The Air Quality Nexus Center serves as a focal point to build capacity and conduct cutting-edge 
                  research in atmospheric sciences for effective improvement of air quality in Asia and beyond.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We operate as an institution-wide center, cooperating with multidisciplinary research areas 
                  to foster collaboration and strengthen research and education capacity across diverse fields.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-nature-green/10 p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Eye className="mr-3 text-primary" size={28} />
                  Our Vision
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be a leading center in conducting and implementing application research with the aim to gain 
                  multiple benefits from reducing air pollution through improvement of health of human and ecosystem, 
                  and protection of the climate system.
                </p>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={teamGroupPhoto} 
                  alt="Research team collaboration" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img 
                  src={researchImage} 
                  alt="Air quality research" 
                  className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-nature-green/5 to-sky-blue/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Research Impact</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Measurable Impact Across Asia</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive research initiatives span multiple countries and disciplines
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover-scale group bg-background/60 backdrop-blur-sm border-primary/10">
                <CardContent className="p-8">
                  <stat.icon className="mx-auto mb-6 text-primary group-hover:scale-110 transition-transform duration-300" size={56} />
                  <div className="text-4xl font-bold text-foreground mb-3 bg-gradient-to-br from-primary to-nature-green bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Our Missions</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Comprehensive Research Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our multi-faceted mission encompasses research excellence, international cooperation, 
              and practical solutions for complex air pollution challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <Card key={index} className="group hover-scale bg-gradient-to-br from-background to-accent/10 border-primary/10 h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <mission.icon className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300" size={48} />
                  <h3 className="text-xl font-bold text-foreground mb-4">{mission.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{mission.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 bg-gradient-to-br from-accent/20 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Research Focus</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Key Research Areas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advancing knowledge across critical domains of atmospheric sciences and environmental policy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {researchAreas.map((area, index) => (
              <Card key={index} className="group hover-scale bg-background/80 backdrop-blur-sm border-primary/20">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-nature-green rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Microscope className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;