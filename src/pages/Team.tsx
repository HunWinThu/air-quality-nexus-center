import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import profNguyen from '@/assets/prof-nguyen.jpg';
import drLai from '@/assets/dr-lai.jpg';
import drTruong from '@/assets/dr-truong.jpg';
import msKhing from '@/assets/ms-khing.jpg';
import msChi from '@/assets/ms-chi.jpg';
import msIngyin from '@/assets/ms-ingyin.jpg';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Prof. Dr. Nguyen Thi Kim Oanh',
      role: 'Director of Center',
      department: 'Leadership',
      bio: 'Leading expert in air pollution research with extensive experience in environmental science and climate studies.',
      education: 'Ph.D. in Environmental Science',
      specialties: ['Air pollution monitoring', 'Dispersion modeling', 'Emission inventory', 'Climate co-benefits assessment'],
      image: profNguyen,
      email: 'nguyen@ait.ac.th'
    },
    {
      id: 2,
      name: 'Dr. Lai Nguyen Huy',
      role: 'Center Manager',
      department: 'Management',
      bio: 'Expert in air quality modeling and satellite monitoring with focus on climate co-benefits assessment.',
      education: 'Ph.D. in Environmental Science',
      specialties: ['Air quality modeling', 'Emission inventory', 'Satellite monitoring', 'Climate assessment'],
      image: drLai,
      email: 'lai.nguyen@ait.ac.th'
    },
    {
      id: 3,
      name: 'Dr. Truong Thi Huyen',
      role: 'Research Engineer',
      department: 'Research',
      bio: 'Specialist in air pollution monitoring and exposure assessment with expertise in receptor modeling.',
      education: 'Ph.D. in Environmental Engineering',
      specialties: ['Air pollution monitoring', 'Exposure assessment', 'Receptor modeling'],
      image: drTruong,
      email: 'truong.huyen@ait.ac.th'
    },
    {
      id: 4,
      name: 'Ms. Khing Thwe Oo',
      role: 'Research Associate',
      department: 'Administration',
      bio: 'Research associate managing administrative operations and supporting air pollution monitoring activities.',
      education: 'Master\'s in Environmental Science',
      specialties: ['Administration', 'Air pollution monitoring'],
      image: msKhing,
      email: 'khing.oo@ait.ac.th'
    },
    {
      id: 5,
      name: 'Ms. Nguyen Nhat Ha Chi',
      role: 'Ph.D. Candidate',
      department: 'Research',
      bio: 'Doctoral researcher focusing on air quality modeling and emission inventory development.',
      education: 'Ph.D. Candidate in Environmental Science',
      specialties: ['Air quality modeling', 'Meteorology modeling', 'Emission inventory'],
      image: msChi,
      email: 'chi.nguyen@ait.ac.th'
    },
    {
      id: 6,
      name: 'Ms. Ingyin Myint Swe',
      role: 'Ph.D. Student',
      department: 'Research',
      bio: 'Doctoral student specializing in air quality modeling and emission inventory research.',
      education: 'Ph.D. Student in Environmental Science',
      specialties: ['Air quality modeling', 'Meteorology modeling', 'Emission inventory'],
      image: msIngyin,
      email: 'ingyin.swe@ait.ac.th'
    }
  ];

  const departments = [
    {
      name: 'Leadership',
      description: 'Strategic direction and overall management of the Air Quality Nexus Center\'s research initiatives.',
      members: 1
    },
    {
      name: 'Management',
      description: 'Center operations, coordination of research activities, and administrative oversight.',
      members: 1
    },
    {
      name: 'Research',
      description: 'Core research activities including air pollution monitoring, modeling, and assessment studies.',
      members: 3
    },
    {
      name: 'Administration',
      description: 'Administrative support, coordination of monitoring activities, and operational management.',
      members: 1
    },
    {
      name: 'External Partners',
      description: 'Collaboration with governments, universities, funding agencies, NGOs, and private sectors.',
      members: 0
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
              Meet the dedicated researchers and professionals at the Air Quality Nexus Center, AIT, working to advance air quality research and protect environmental health.
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
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="p-2"
                      onClick={() => window.location.href = `mailto:${member.email}`}
                    >
                      <Mail size={16} />
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