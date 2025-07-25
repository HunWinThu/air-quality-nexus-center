import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import teamImage from '@/assets/team-placeholder.jpg';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Director & Lead Researcher',
      department: 'Atmospheric Sciences',
      bio: 'Leading expert in air quality monitoring with 15+ years of experience in environmental research.',
      education: 'PhD in Atmospheric Sciences, Stanford University',
      specialties: ['Air Quality Monitoring', 'Sensor Technology', 'Data Analysis'],
      image: teamImage,
      email: 'sarah.johnson@airqualitynexus.org',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      role: 'Senior Research Scientist',
      department: 'Environmental Health',
      bio: 'Focused on community health impacts of air pollution and environmental justice.',
      education: 'PhD in Environmental Health, Harvard University',
      specialties: ['Public Health', 'Environmental Justice', 'Community Outreach'],
      image: teamImage,
      email: 'michael.chen@airqualitynexus.org',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      role: 'Policy Research Lead',
      department: 'Environmental Policy',
      bio: 'Expert in environmental policy development and regulatory framework analysis.',
      education: 'PhD in Environmental Policy, UC Berkeley',
      specialties: ['Policy Analysis', 'Regulatory Affairs', 'Government Relations'],
      image: teamImage,
      email: 'emily.rodriguez@airqualitynexus.org',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 4,
      name: 'Dr. Robert Kim',
      role: 'Technology Innovation Manager',
      department: 'Engineering & Technology',
      bio: 'Develops cutting-edge sensor technology and monitoring systems for air quality measurement.',
      education: 'PhD in Environmental Engineering, MIT',
      specialties: ['Sensor Development', 'IoT Systems', 'Data Engineering'],
      image: teamImage,
      email: 'robert.kim@airqualitynexus.org',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 5,
      name: 'Dr. Lisa Wang',
      role: 'Community Engagement Director',
      department: 'Community Relations',
      bio: 'Leads community education initiatives and citizen science programs.',
      education: 'PhD in Environmental Communication, Northwestern University',
      specialties: ['Community Education', 'Citizen Science', 'Science Communication'],
      image: teamImage,
      email: 'lisa.wang@airqualitynexus.org',
      linkedin: '#',
      twitter: '#'
    },
    {
      id: 6,
      name: 'Dr. James Martinez',
      role: 'International Partnerships Coordinator',
      department: 'Global Initiatives',
      bio: 'Manages international collaborations and global research partnerships.',
      education: 'PhD in International Environmental Studies, Columbia University',
      specialties: ['International Relations', 'Global Partnerships', 'Cross-cultural Research'],
      image: teamImage,
      email: 'james.martinez@airqualitynexus.org',
      linkedin: '#',
      twitter: '#'
    }
  ];

  const departments = [
    {
      name: 'Atmospheric Sciences',
      description: 'Core research on air quality measurement and atmospheric processes.',
      members: 15
    },
    {
      name: 'Environmental Health',
      description: 'Studying health impacts of air pollution on communities.',
      members: 12
    },
    {
      name: 'Environmental Policy',
      description: 'Policy research and regulatory framework development.',
      members: 8
    },
    {
      name: 'Engineering & Technology',
      description: 'Developing innovative monitoring technologies and systems.',
      members: 10
    },
    {
      name: 'Community Relations',
      description: 'Community engagement and education initiatives.',
      members: 6
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Meet Our Team</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Expert Team
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated researchers, scientists, and professionals working to improve air quality and protect community health.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="group hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background to-accent/10">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <Badge variant="secondary" className="text-xs">{member.department}</Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4 text-center">
                    {member.bio}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">Education</h4>
                      <p className="text-xs text-muted-foreground">{member.education}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-3 mt-6">
                    <Button size="sm" variant="outline" className="p-2">
                      <Mail size={16} />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Linkedin size={16} />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Twitter size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-accent/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{dept.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{dept.members} members</span>
                    <Badge variant="secondary">{dept.name.split(' ')[0]}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-primary/10 to-sky-blue/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Team</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for passionate researchers, scientists, and professionals to join our mission 
                of improving air quality and protecting community health.
              </p>
              <div className="space-x-4">
                <Button size="lg">View Open Positions</Button>
                <Button size="lg" variant="outline">Submit Resume</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;