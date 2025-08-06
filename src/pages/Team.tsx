import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Twitter, User, AlignCenter } from 'lucide-react';

// Replace these imports with actual images if available
import kim from '@/assets/prof.kim.jpg';
import huy from '@/assets/dr.huy.jpg';
import ktoo from '@/assets/ms-khing.jpg';
import Huyen from '@/assets/Dr. Truong Thi Huyen.jpg';
import Nguyen from '@/assets/ms-chi.jpg';
import Dang from '@/assets/dang .jpeg'
import Hun from '@/assets/Hun Win Thu.jpg'
                                         
import Ingyin from '@/assets/Ms. Ingyin Myint Swe.jpeg';
import Lohani from '@/assets/Advisory/Prof. Bindu N. Lohani.jpeg';
import Shrestha from '@/assets/Advisory/Prof. Ram Shrestha.jpeg';
import Hopke from '@/assets/Advisory/Prof. Philip Hopke.jpeg';
import Rupakheti from '@/assets/Advisory/Dr. Maheswar Rupakheti.jpg';
import Emberson from '@/assets/Advisory/Prof. Lisa Emberson.jpg';
import Vardoulakis from '@/assets/Advisory/Prof. Sotiris Vardoulakis.jpeg';
import Bond from '@/assets/Advisory/Prof. Tami C. Bond.jpg';
import Lung from '@/assets/Advisory/Dr. Shih-Chun Candice Lung.jpg';
import Zusman from '@/assets/Advisory/Dr. Eric Zusman.jpg';
import Saikawa from '@/assets/Advisory/Dr. Eri Saikawa.jpg';
import Broomfield from '@/assets/Advisory/Dr. Mark Broomfield.jpg';
import Mari from '@/assets/Advisory/Dr. Xavier Mari.jpeg';
import Casanova from '@/assets/Advisory/Ms. Dang Espita Casanova.jpeg';

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
    twitter: ''
  },
  {
    id: 2,
    name: 'Dr. Lai Nguyen Huy',
    role: 'Center Manager',
    department: 'Environmental Engineering and Management',
    bio: 'Researcher focusing on air pollution modeling and monitoring.',
    Expertise: 'Air quality and meteorology modeling; Emission inventory; Satellite air pollution monitoring; Climate co-benefits assessment',
    specialties: ['Air Pollution Modeling', 'Monitoring', 'Data Analysis'],
    image: huy,
    email: 'lainguyenhuy@ait.asia',
    linkedin: '',
    twitter: ''
  },

  {
    id: 3,
    name: 'Ms. Khing Thwe Oo',
    role: 'Research Associate',
    department: 'Environmental Engineering and Management',
    bio: 'Specializes in emission inventory and air quality management.',
    Expertise: ' 	Administration; Air pollution monitoring',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    image: ktoo,
    email: '',
    linkedin: '',
    twitter: ''
  },

  {
    id: 4,
    name: 'Ms. Nguyen Nhat Ha Chi',
    role: 'Ph.D. Candidate',
    department: 'Environmental Engineering and Management',
    bio: 'Specializes in emission inventory and air quality management.',
    Expertise: 'Air quality and meteorology modeling; Emission inventory',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    image: Nguyen,
    email: '',
    linkedin: '',
    twitter: ''
  },

    {
    id: 5,
    name: 'Mr. Ha Quang Dang',
    role: 'Research Assistant',
    department: 'Environmental Engineering and Management',
    bio: 'Specializes in emission inventory and air quality management.',
    Expertise: 'Research Assistant_Air pollution monitoring',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    alignTop: true,
    image: Dang,
    email: '',
    linkedin: '',
    twitter: ''
  },

    {
    id: 6,
    name: 'Mr. Hun Win Thu',
    role: 'ICT Support',
    department: 'Environmental Engineering and Management',
    bio: 'Specializes in emission inventory and air quality management.',
    Expertise: 'Research Assistant_ICT Support and IoT Engineer',
    specialties: ['Emission Inventory', 'Air Quality Management'],
    alignTop: true,
    image: Hun,
    email: '',
    linkedin: '',
    twitter: ''
  },
  // Add more core team members as needed
];



const advisoryCommittee = [
  //{
  //  id: 1,
  //  name: "Prof. Bindu N. Lohani",
  //  role: "Advisory Member",
  //  department: "University of Nepal, Clean Air Asia, AIT",
  //  bio: "Chancellor of University of Nepal, Chair of Clean Air Asia Board, Member of AIT Board of Trustee",
  //  alignTop: true,
  //  image: Lohani,
  //  viewprofile: "https://ait.ac.th/people/bindu-n-lohani/",
  //  linkedin: "https://www.linkedin.com/in/bindu-lohani-4a526a2/"
  //},
  {
    id: 2,
    name: "Prof. Ram Shrestha",
    role: "Advisory Member",
    department: "Asian Institute of Technology (AIT)",
    bio: "Emeritus Professor, Sustainable Energy Transition Program, Department of Energy and Climate Change, AIT. Editor of Energy-The International Journal and Energy Economics, and is a member of the Editorial Advisory Board of International Energy Journal",
    alignTop: true,
    image: Shrestha,
    viewprofile: "https://ait.ac.th/people/prof-ram-shrestha/",
    linkedin: "https://www.linkedin.com/in/ram-m-shrestha-3a6a8a40/?originalSubdomain=np"
  },
  {
    id: 3,
    name: "Prof. Philip Hopke",
    role: "Advisory Member",
    department: "Clarkson University, University of Rochester",
    bio: "Co-Editor-in-Chief, Science of the Total Environment, Bayard D. Clarkson Distinguished Professor Emeritus, Clarkson University. Adjunct Professor, Departments of Public Health Sciences and Environmental Medicine, University of Rochester School of Medicine and Dentistry, NY, USA",
    alignTop: false,
    image: Hopke,
    viewprofile: "https://www.clarkson.edu/people/philip-hopke",
    linkedin: "https://www.linkedin.com/in/philip-hopke-5b01409/"
  },
  {
    id: 4,
    name: "Dr. Maheswar Rupakheti",
    role: "Advisory Member",
    department: "Research Institute for Sustainability Helmholtz Centre Potsdam (RIFS), IPCC",
    bio: "Research Group Leader, Research Institute for Sustainability Helmholtz Centre Potsdam (RIFS), Germany. Vice Chair, WG-I, Intergovernmental Panel on Climate Change (IPCC)",
    alignTop: true,
    image: Rupakheti,
    viewprofile: "https://www.rifs-potsdam.de/en/people/maheswar-rupakheti",
    linkedin: "https://www.linkedin.com/in/maheswar-rupakheti/"
  },
  {
    id: 5,
    name: "Prof. Lisa Emberson",
    role: "Advisory Member",
    department: "Stockholm Environment Institute (SEI), University of York",
    bio: "Centre Director of the York office at the Stockholm Environment Institute (SEI). Professor of Environmental Science in the Environment & Geography Dept., University of York",
    alignTop: true,
    image: Emberson,
    viewprofile: "https://www.york.ac.uk/environment-geography/people/lisa-emberson/",
    linkedin: "https://www.linkedin.com/in/lisa-emberson-7632871b/"
  },
  {
    id: 6,
    name: "Prof. Sotiris Vardoulakis",
    role: "Advisory Member",
    department: "University of Canberra, NHMRC HEAL Network",
    bio: "Director, NHMRC Healthy Environments and Lives (HEAL) National Research Network. Professor of Environmental Public Health, University of Canberra, Australia",
    alignTop: true,
    image: Vardoulakis,
    viewprofile: "https://researchprofiles.canberra.edu.au/en/persons/sotiris-vardoulakis",
    linkedin: "https://www.linkedin.com/in/sotiris-vardoulakis-b5759790/"
  },
  //{
  //  id: 7,
  //  name: "Prof. Tami C. Bond",
  //  role: "Advisory Member",
  //  department: "Colorado State University, USA",
  //  bio: "Scott Presidential Chair in Energy, Environment and Health. Professor, Mechanical Engineering; Joint Professor, Civil & Environmental Engineering; Affiliate, Systems Colorado University, Fort Collins, CO, USA",
  //  alignTop: true,
  //  image: Bond,
  //  viewprofile: "https://www.engr.colostate.edu/me/faculty/dr-tami-bond/",
  //  linkedin: "https://www.linkedin.com/in/tami-bond-195a07251/"
  //},
  {
    id: 8,
    name: "Dr. Shih-Chun Candice Lung",
    role: "Advisory Member",
    department: "Academia Sinica, Taiwan",
    bio: "Deputy Director, Research Center for Environmental Changes (RCEC), Academia Sinica, Taiwan",
    alignTop: true,
    image: Lung,
    viewprofile: "https://rcec.sinica.edu.tw/index_en.php?action=member&id=16",
    linkedin: "https://www.linkedin.com/in/shih-chun-candice-lung-1024b9205/"
  },
  {
    id: 9,
    name: "Dr. Eric Zusman",
    role: "Advisory Member",
    department: "Institute for Global Environmental Strategies (IGES), Japan",
    bio: "Research Director, Center for Sustainability Governance, Institute for Global Environmental Strategies (IGES), Japan",
    alignTop: true,
    image: Zusman,
    viewprofile: "https://www.iges.or.jp/en/about/staff/zusman-eric",
    linkedin: "https://www.linkedin.com/in/eric-zusman-0b52001/"
  }
];


const departments = [
  {
    name: 'Environmental Engineering and Management',
    description: 'Research and Expertise in air quality, emission inventory, and environmental health.',
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
                      className={`w-48 h-48 rounded-full mx-auto mb-4 object-cover ${member.alignTop ? 'object-top' : ''}`}
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.role}</p>
                    <Badge variant="secondary" className="text-base">{member.department}</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-l font-semibold text-foreground mb-1">Expertise</h4>
                      <p className="text-l text-muted-foreground">{member.Expertise}</p>
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
                    {member.linkedin && member.linkedin !== '' && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="p-2">
                          <Linkedin size={16} />
                        </Button>
                      </a>
                    )}
                    {member.twitter && member.twitter !== '' && (
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
    
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Advisors</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">Advisory Committee</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our distinguished advisory committee, guiding our mission to improve air quality and sustainability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisoryCommittee.map((member) => (
            <Card
              key={member.id}
              className="group hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background to-accent/10"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <img
                    src={member.image || teamPlaceholder}
                    alt={member.name}
                    className={`w-48 h-48 rounded-full mx-auto mb-4 object-cover ${member.alignTop ? 'object-top' : ''}`}
                  />
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <Badge variant="secondary" className="text-base">{member.department}</Badge>
                </div>
                <div className="flex justify-center space-x-4 mt-2">
                  {member.viewprofile && member.viewprofile !== '' && (
                    <a href={member.viewprofile} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="p-3">
                        <User size={32} /> {/* Changed from size={16} to size={24} */}
                      </Button>
                    </a>
                  )}
                  {member.linkedin && member.linkedin !== '' && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" variant="outline" className="p-3"> {/* Changed from p-2 to p-3 */}
                        <Linkedin size={32} /> {/* Changed from size={16} to size={24} */}
                      </Button>
                    </a>
                  )}
                </div>
                <p className="text-base text-muted-foreground mb-4 pt-3 text-center">{member.bio}</p>
                
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