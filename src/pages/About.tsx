import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Award, Users, Microscope, Globe, Lightbulb, BookOpen, BarChart3, Network } from 'lucide-react';
import teamGroupPhoto from '@/assets/team-group-photo.jpg';
import pm25Image from '@/assets/pm2.5.png';
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