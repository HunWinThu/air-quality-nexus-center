import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Award, Users, Microscope, Globe, Lightbulb, BookOpen, BarChart3, Network } from 'lucide-react';
import teamGroupPhoto from '@/assets/team-group-photo.jpg';
import researchImage from '@/assets/air-pollution-research.png';
import highQualityImage from '@/assets/hig-quality.jpg';
import multiPollutantImage from '@/assets/multi.png';
import coBenefitsImage from '@/assets/co-benefits.png';
import cooperationImage from '@/assets/cooperation.jpg';
import governmentImage from '@/assets/government.jpg';
import capacityImage from '@/assets/capacity.jpg';

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
      description: 'Conduct high-quality research demonstrated by real-life applications for improving air quality in Asia and beyond.',
      image: highQualityImage
    },
    {
      icon: BarChart3,
      title: 'Multi-Pollutant Approach',
      description: 'Focus on the multi-pollutant and multi-effect approach to provide cost-effective solutions to complex air pollution problems.',
      image: multiPollutantImage
    },
    {
      icon: Lightbulb,
      title: 'Co-Benefits Assessment',
      description: 'Demonstrate and quantitatively assess the co-benefits to air quality and climate of integrated measures applicable in local context.',
      image: coBenefitsImage
    },
    {
      icon: Network,
      title: 'International Cooperation',
      description: 'Continue and expand international cooperation in conducting research projects, consultancies, training, etc.',
      image: cooperationImage
    },
    {
      icon: Users,
      title: 'Government Assistance',
      description: 'Provide assistance to governments, and other development partners in the planning, designing, scaling up, and implementation of clean air action plans with multiple benefits.',
      image: governmentImage
    },
    {
      icon: BookOpen,
      title: 'Capacity Building',
      description: 'Build capacity and promote multi-disciplinary approaches in atmospheric sciences within AIT and internationally.',
      image: capacityImage
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
            <div>
              <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                Research Excellence
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                Air Quality Nexus
                <span className="block text-primary">Center</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A focal point to build capacity and conduct cutting-edge research in atmospheric sciences 
                for effective improvement of air quality in Asia and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About & Vision */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full-screen background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={teamGroupPhoto} 
            alt="Research team collaboration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-24">
            <div className="space-y-12">
              <div>
                <Badge variant="outline" className="mb-6 border-white/30 text-white bg-white/10 backdrop-blur-sm">
                  About Our Center
                </Badge>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                  Air Quality Nexus
                  <span className="block text-primary">Center</span>
                </h2>
                <p className="text-xl text-white/90 leading-relaxed mb-8 font-medium">
                  Air Quality Nexus Center has a goal to serve as a focal point to build capacity and conduct cutting-edge 
                  research in atmospheric sciences for effective improvement of air quality in Asia and beyond.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  The Center will be an institution-wide Center, cooperating with multidisciplinary and cutting-edge research 
                  areas of the schools and other AIT Centers to foster collaboration and strengthen AIT research and education capacity.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg p-12 rounded-3xl border border-white/20 shadow-2xl hover-scale">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Eye className="mr-4 text-primary" size={32} />
                  Our Vision
                </h3>
                <p className="text-xl text-white/90 leading-relaxed font-medium">
                  Air Quality Nexus will be a leading Center in conducting and implementing application research with the aim to gain 
                  multiple benefits from reducing air pollution through improvement of health of human and ecosystem, 
                  and protection of the climate system.
                </p>
              </div>
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Missions */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Our Missions</Badge>
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Missions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our multi-faceted mission encompasses research excellence, international cooperation, 
              and practical solutions for complex air pollution challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <Card key={index} className="group hover-scale bg-gradient-to-br from-background to-accent/10 border-primary/10 h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <img 
                    src={mission.image} 
                    alt={mission.title}
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
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
          <div className="text-center mb-16">
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