import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, User } from 'lucide-react';

const Blog = () => {
  const ongoingProjects = [
    {
      id: 1,
      title: 'Air Quality Capacity Building and Emissions Inventory for Southeast Asia',
      excerpt: 'Building regional capacity for air quality management through comprehensive training programs and emissions inventory development across ASEAN countries.',
      author: 'Dr. Nguyen Thi Kim Chi',
      date: '2024-08-15',
      readTime: '12 min read',
      category: 'Capacity Building',
      image: '/src/assets/capacity.jpg'
    },
    {
      id: 2,
      title: 'Transboundary Air Pollution Research Initiative',
      excerpt: 'Investigating cross-border air pollution impacts and developing collaborative solutions for regional air quality management in Southeast Asia.',
      author: 'Prof. Shrestha Ram',
      date: '2024-07-20',
      readTime: '10 min read',
      category: 'Research',
      image: '/src/assets/air-pollution-research.png'
    },
    {
      id: 3,
      title: 'Health Co-benefits Assessment of Air Quality Policies',
      excerpt: 'Evaluating the health and economic benefits of air quality improvement policies through comprehensive impact assessment studies.',
      author: 'Dr. Eri Saikawa',
      date: '2024-06-10',
      readTime: '8 min read',
      category: 'Health Impact',
      image: '/src/assets/co-benefits.png'
    },
    {
      id: 4,
      title: 'Government Collaboration for Clean Air Standards',
      excerpt: 'Working directly with government agencies across the region to develop and implement evidence-based air quality standards and policies.',
      author: 'Prof. Bindu N. Lohani',
      date: '2024-05-25',
      readTime: '9 min read',
      category: 'Policy Development',
      image: '/src/assets/government.jpg'
    },
    {
      id: 5,
      title: 'Multi-stakeholder Engagement Platform',
      excerpt: 'Creating collaborative networks between academia, government, and industry stakeholders to advance air quality research and implementation.',
      author: 'Ms. Dang Espita Casanova',
      date: '2024-04-15',
      readTime: '7 min read',
      category: 'Collaboration',
      image: '/src/assets/multi.png'
    }
  ];

  const completedProjects = [
    {
      id: 6,
      title: 'Baseline Air Quality Assessment for ASEAN Region',
      excerpt: 'Completed comprehensive baseline study of air quality conditions across Southeast Asian countries, providing foundational data for regional planning.',
      author: 'Dr. Truong Thi Huyen',
      date: '2023-12-15',
      readTime: '15 min read',
      category: 'Case Study',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop'
    },
    {
      id: 7,
      title: 'Rice Straw Burning Assessment and Mitigation',
      excerpt: 'Completed comprehensive study on rice straw burning impacts and developed community-based mitigation strategies across the region.',
      author: 'Dr. Xavier Mari',
      date: '2023-11-30',
      readTime: '11 min read',
      category: 'Case Study',
      image: '/src/assets/rice-straw-burning.jpg'
    },
    {
      id: 8,
      title: 'High-Quality Data Standards Development',
      excerpt: 'Established standardized protocols for air quality data collection and validation across research institutions.',
      author: 'Prof. Philip Hopke',
      date: '2023-10-25',
      readTime: '8 min read',
      category: 'Data Standards',
      image: '/src/assets/hig-quality.jpg'
    },
    {
      id: 9,
      title: 'International Partnership Development',
      excerpt: 'Successfully established collaborative partnerships with key international research institutions and organizations.',
      author: 'Prof. Lisa Emberson',
      date: '2023-09-15',
      readTime: '6 min read',
      category: 'Partnership',
      image: '/src/assets/cooperation.jpg'
    }
  ];

  const upcomingProjects = [
    {
      id: 10,
      title: 'Advanced Emission Source Identification Technologies',
      excerpt: 'Planning implementation of cutting-edge technologies for precise identification and quantification of air pollution sources.',
      author: 'Dr. Maheswar Rupakheti',
      date: '2025-01-15',
      readTime: '10 min read',
      category: 'Technology',
      image: '/src/assets/bg_4.jpg'
    },
    {
      id: 11,
      title: 'Regional Air Quality Network Expansion',
      excerpt: 'Expanding monitoring network capabilities across Southeast Asia to enhance real-time air quality assessment coverage.',
      author: 'Dr. Mark Broomfield',
      date: '2025-03-01',
      readTime: '12 min read',
      category: 'Monitoring',
      image: '/src/assets/bg_3.jpg'
    },
    {
      id: 12,
      title: 'Climate-Air Quality Nexus Research Initiative',
      excerpt: 'Comprehensive research program investigating the interconnections between climate change and air quality in tropical regions.',
      author: 'Prof. Sotiris Vardoulakis',
      date: '2025-06-01',
      readTime: '14 min read',
      category: 'Climate Research',
      image: '/src/assets/bg_2.jpg'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Capacity Building': 'bg-primary/10 text-primary',
      'Research': 'bg-ocean-blue/10 text-ocean-blue',
      'Health Impact': 'bg-nature-green/10 text-nature-green',
      'Policy Development': 'bg-purple-100 text-purple-800',
      'Collaboration': 'bg-blue-100 text-blue-800',
      'Case Study': 'bg-orange-100 text-orange-800',
      'Data Standards': 'bg-cyan-100 text-cyan-800',
      'Partnership': 'bg-green-100 text-green-800',
      'Technology': 'bg-sky-500/10 text-sky-700',
      'Monitoring': 'bg-emerald-100 text-emerald-800',
      'Climate Research': 'bg-teal-100 text-teal-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const renderProjectCards = (projects: typeof ongoingProjects) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Card key={project.id} className="group hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-background to-accent/10">
          <div className="relative overflow-hidden rounded-t-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <Badge className={getCategoryColor(project.category)}>
                {project.category}
              </Badge>
            </div>
          </div>
          
          <CardHeader className="pb-2">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </h3>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-muted-foreground line-clamp-3">
              {project.excerpt}
            </p>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <User size={14} />
                <span>{project.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{new Date(project.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{project.readTime}</span>
              </div>
            </div>
            
            <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              Learn More
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Projects
            </h1>
          </div>
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="ongoing" orientation="vertical" className="flex gap-8">
            <TabsList className="flex-col h-fit w-64 bg-muted p-1">
              <TabsTrigger 
                value="ongoing" 
                className="w-full justify-start text-lg py-4 data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                On-going Projects
              </TabsTrigger>
              <TabsTrigger 
                value="completed" 
                className="w-full justify-start text-lg py-4 data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                Completed Projects
              </TabsTrigger>
              <TabsTrigger 
                value="upcoming" 
                className="w-full justify-start text-lg py-4 data-[state=active]:bg-background data-[state=active]:text-foreground"
              >
                Up Coming Projects
              </TabsTrigger>
            </TabsList>
            
            <div className="flex-1">
              <TabsContent value="ongoing" className="mt-0">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    On-going Projects
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl">
                    Current research initiatives actively making impact in air quality science
                  </p>
                </div>
                {renderProjectCards(ongoingProjects)}
              </TabsContent>
              
              <TabsContent value="completed" className="mt-0">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Completed Projects
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl">
                    Successfully completed research projects with measurable outcomes
                  </p>
                </div>
                {renderProjectCards(completedProjects)}
              </TabsContent>
              
              <TabsContent value="upcoming" className="mt-0">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Up Coming Projects
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl">
                    Future initiatives planned to advance air quality research and solutions
                  </p>
                </div>
                {renderProjectCards(upcomingProjects)}
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;