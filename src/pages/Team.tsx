import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Twitter } from 'lucide-react';

// Replace these imports with actual images if available
import kim from '@/assets/prof.kim.jpg';
import huy from '@/assets/dr.huy.jpg';
import ktoo from '@/assets/ms.ktoo.jpg';
import Huyen from '@/assets/Dr. Truong Thi Huyen.jpg';
import Nguyen from '@/assets/Ms. Nguyen Nhat Ha Chi.jpeg';
import Ingyin from '@/assets/Ms. Ingyin Myint Swe.jpeg';

import Lohani from '@/assets/prof.bindu.jpg';
import Shrestha     from '@/assets/prof.ram.jpg';
import Hopke  from '@/assets/prof.ram.jpg';
import Rupakheti  from '@/assets/prof.ram.jpg';
import Emberson from '@/assets/prof.ram.jpg';
import Vardoulakis  from '@/assets/prof.ram.jpg';
import Bond from '@/assets/prof.ram.jpg';
import Lung from '@/assets/prof.ram.jpg';
import Zusman from '@/assets/prof.ram.jpg';

import teamPlaceholder from '@/assets/team-placeholder.jpg';

const coreTeam = [
  {
    id: 1,
    name: 'Prof. Dr. Nguyen Thi Kim Oanh',
    role: 'Director of Center',
    department: 'Environmental Engineering and Management',
    bio: 'Professor at AIT, expert in air quality, emission inventory, and environmental health.',
    Expertise: 'Air pollution monitoring; Dispersion modeling and receptor modeling; Emission inventory and projection; Emission control; Exposure assessment; Effects of air pollution on ecosystem; Meteorology and climate science; Climate co-benefits assessment; Industrial environmental management',
    specialties: ['Air Quality', 'Emission Inventory', 'Environmental Health'],
    image: kim,
    email: 'kim.oanh@ait.ac.th',
    linkedin: 'https://www.linkedin.com/in/kim-oanh/',
    twitter: '#'
  },
  {
    id: 2,
    name: 'Dr. Lai Nguyen Huy',
    role: 'Center manager',
    department: 'Environmental Engineering and Management',
    bio: 'Researcher focusing on air pollution modeling and monitoring.',
    Expertise: 'Air quality and meteorology modeling; Emission inventory; Satellite air pollution monitoring; Climate co-benefits assessment',
    specialties: ['Air Pollution Modeling', 'Monitoring', 'Data Analysis'],
    image: huy,
    email: 'lainguyenhuy@ait.asia',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 3,
    name: 'Dr. Truong Thi Huyen',
    role: 'Research Engineer',
    department: 'Environmental Engineering and Management',
    bio: 'Specializes in emission inventory and air quality management.',
    Expertise: 'Air pollution monitoring; Exposure assessment; Receptor modeling',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    image: Huyen,
    email: '#',
    linkedin: '#',
    twitter: '#'
  },

  {
    id: 4,
    name: 'Ms. Khing Thwe Oo',
    role: 'Research Associate',
    department: 'Environmental Engineering and Management',
    bio: 'Specializes in emission inventory and air quality management.',
    Expertise: ' 	Administration; Air pollution monitoring',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    image: ktoo,
    email: '#',
    linkedin: '#',
    twitter: '#'
  },

  {
    id: 5,
    name: 'Ms. Nguyen Nhat Ha Chi',
    role: 'Ph.D. Candidate',
    department: 'Environmental Engineering and Management',
    bio: 'Specializes in emission inventory and air quality management.',
    Expertise: 'Air quality and meteorology modeling; Emission inventory',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    image: Nguyen,
    email: '#',
    linkedin: '#',
    twitter: '#'
  },

  {
    id: 6,
    name: 'Ms. Ingyin Myint Swe',
    role: 'Ph.D. Student',
    department: 'Environmental Engineering and Management',
    bio: 'Specializes in emission inventory and air quality management.',
    Expertise: 'Air quality and meteorology modeling; Emission inventory',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    image: Ingyin,
    email: '#',
    linkedin: '#',
    twitter: '#'
  },
  // Add more core team members as needed
];

const advisoryCommittee = [
  {
    id: 1,
    name: 'Prof. Bindu N. Lohani',
    role: 'Advisory Member',
    department: 'Member of AIT Board of Trustee, Chair of Clean Air Asia Board',
    bio: 'Emeritus Professor, Sustainable Energy Transition Program, Department of Energy and Climate Change, AIT',
    education: '',
    specialties: [],
    image: teamPlaceholder,
    email: '',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 2,
    name: 'Prof. Ram Shrestha',
    role: 'Advisory Member',
    department: 'Chancellor of University of Nepal',
    bio: 'Editor of Energy-The International Journal and Energy Economics, Member of Editorial Advisory Board of International Energy Journal',
    education: '',
    specialties: [],
    image: teamPlaceholder,
    email: '',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 3,
    name: 'Prof. Philip Hopke',
    role: 'Advisory Member',
    department: 'Clarkson University, USA',
    bio: 'Bayard D. Clarkson Distinguished Professor Emeritus; Co-Editor-in-Chief, Science of the Total Environment; Adjunct Professor, University of Rochester',
    education: '',
    specialties: [],
    image: teamPlaceholder,
    email: '',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 4,
    name: 'Dr. Maheswar Rupakheti',
    role: 'Advisory Member',
    department: 'Research Institute for Sustainability (RIFS), Germany',
    bio: 'Vice Chair, WG-I, IPCC',
    education: '',
    specialties: [],
    image: teamPlaceholder,
    email: '',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 5,
    name: 'Prof. Lisa Emberson',
    role: 'Advisory Member',
    department: 'University of York, UK',
    bio: 'Centre Director of the York office at the Stockholm Environment Institute (SEI)',
    education: '',
    specialties: [],
    image: teamPlaceholder,
    email: '',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 6,
    name: 'Prof. Sotiris Vardoulakis',
    role: 'Advisory Member',
    department: 'University of Canberra, Australia',
    bio: 'Director, HEAL National Research Network; Professor of Environmental Public Health',
    education: '',
    specialties: [],
    image: teamPlaceholder,
    email: '',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 7,
    name: 'Prof. Tami C. Bond',
    role: 'Advisory Member',
    department: 'Colorado State University, USA',
    bio: 'Scott Presidential Chair in Energy, Environment and Health; Professor of Mechanical Engineering and Civil & Environmental Engineering',
    education: '',
    specialties: [],
    image: teamPlaceholder,
    email: '',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 8,
    name: 'Dr. Shih-Chun Candice Lung',
    role: 'Advisory Member',
    department: 'Academia Sinica, Taiwan',
    bio: 'Deputy Director, Research Center for Environmental Changes (RCEC)',
    education: '',
    specialties: [],
    image: teamPlaceholder,
    email: '',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: 9,
    name: 'Dr. Eric Zusman',
    role: 'Advisory Member',
    department: 'Institute for Global Environmental Strategies (IGES), Japan',
    bio: 'Research Director, Center for Sustainability Governance',
    education: '',
    specialties: [],
    image: teamPlaceholder,
    email: '',
    linkedin: '#',
    twitter: '#'
  }
];


const departments = [
  {
    name: 'Environmental Engineering and Management',
    description: 'Research and education in air quality, emission inventory, and environmental health.',
    members: 10
  },
  {
    name: 'Air Quality Modeling',
    description: 'Focus on modeling, monitoring, and management of air pollution.',
    members: 5
  },
  {
    name: 'Sensor Technology',
    description: 'Development and deployment of air quality sensors and monitoring systems.',
    members: 3
  }
];

const Team = () => {
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
              Meet the dedicated researchers and professionals at AIT working to improve air quality and environmental health.
            </p>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTeam.map((member) => (
              <Card key={member.id} className="group hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background to-accent/10">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <img 
                      src={member.image || teamPlaceholder} 
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
                      <p className="text-xs text-muted-foreground">{member.Expertise}</p>
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
                    <a href={`mailto:${member.email}`}>
                      <Button size="sm" variant="outline" className="p-2">
                        <Mail size={16} />
                      </Button>
                    </a>
                    {member.linkedin && member.linkedin !== '#' && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="p-2">
                          <Linkedin size={16} />
                        </Button>
                      </a>
                    )}
                    {member.twitter && member.twitter !== '#' && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="p-2">
                          <Twitter size={16} />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Committee */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Advisory Committee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryCommittee.map((member) => (
              <Card key={member.id} className="group hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background to-accent/10">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <img 
                      src={member.image || teamPlaceholder} 
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
                    <a href={`mailto:${member.email}`}>
                      <Button size="sm" variant="outline" className="p-2">
                        <Mail size={16} />
                      </Button>
                    </a>
                    {member.linkedin && member.linkedin !== '#' && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="p-2">
                          <Linkedin size={16} />
                        </Button>
                      </a>
                    )}
                    {member.twitter && member.twitter !== '#' && (
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="p-2">
                          <Twitter size={16} />
                        </Button>
                      </a>
                    )}
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
                We welcome passionate researchers and professionals to join our mission of improving air quality and environmental health.
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