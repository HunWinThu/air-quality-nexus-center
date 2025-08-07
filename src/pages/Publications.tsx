import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Book, Users, ExternalLink, Calendar } from 'lucide-react';

const publications = {
  2024: [
    {
      title: 'In-depth analysis of ambient air pollution changes due to the COVID-19 pandemic in the Asian Monsoon region.',
      authors: 'Latif, M. T., et al.',
      journal: 'Science of The Total Environment, 941, 173145.',
    },
    {
      title: 'Atmospheric Emissions from Electricity Generation in Southeast Asia: Development Trend and Policy Responses.',
      authors: 'Kim Oanh, N. T., & Huy, L. N.',
      journal: 'Current Pollution Reports, 10(1), 54-69.',
    },
    {
      title: 'Comparative analysis of PM2. 5 levels in various microenvironments associated with common cooking practices in selected Asian countries.',
      authors: 'Kim Oanh, N.T., et al.',
      journal: 'Air Quality, Atmosphere & Health.',
    },
  ],
  2023: [
    {
      title: 'Bi-decadal trend of atmospheric emissions from thermal power plants in Mainland Southeast Asia: Implications on acid deposition and climate change Mitigation.',
      authors: 'Ha Chi, N. N., et al.',
      journal: 'Journal of Environmental Management, 348, 119252.',
    },
    {
      title: 'Analysis of atmospheric emissions associated with on-road and inland waterway transport in Vietnam: Past, current and future control scenarios.',
      authors: 'Huy, L. N., et al.',
      journal: 'Atmospheric Pollution Research, 14(8), 101810.',
    },
    {
      title: 'Chemical composition and potential sources of PM2.5 in Hanoi.',
      authors: 'Makkonen, U., et al.',
      journal: 'Atmospheric Environment, 299, 119650.',
    },
    {
      title: 'Air quality management status and needs of countries in South Asia and Southeast Asia.',
      authors: 'Verma, R. L., et al.',
      journal: 'APN Science Bulletin, 13(1), 130-152.',
    },
    {
      title: 'Health risk assessment of BTEX exposure at roadside and on-road traveling route in Bangkok Metropolitan Region.',
      authors: 'Kongpran, J., et al.',
      journal: 'Journal of Environmental Exposure Assessment, 2(8), 1-16.',
    },
  ],
  2022: [
    {
      title: 'Chemical characteristics and deposition amounts of carbonaceous species and inorganic ions in precipitation in the Bangkok Metropolitan Region.',
      authors: 'Huo, M. Q., et al.',
      journal: 'Atmospheric Environment, 291.',
    },
    {
      title: 'The Airborne and Satellite Investigation of Asian Air Quality (Asia-Aq): An Opportunity for International Collaboration.',
      authors: 'Crawford, J. H., et al.',
      journal: 'Paper presented at the IGARSS 2022 – 2022 IEEE International Geoscience and Remote Sensing Symposium.',
    },
    {
      title: 'Large spatio-temporal variations of size-resolved particulate matter and volatile organic compounds in urban area with heavy traffic.',
      authors: 'Phuc, N. H., & Kim Oanh, N. T.',
      journal: 'Environmental Science and Pollution Research, 29(15), 21491-21507.',
    },
    {
      title: 'Research Priorities of Applying Low-Cost PM2.5 Sensors in Southeast Asian Countries.',
      authors: 'Lung, S.-C. C., et al.',
      journal: '19(3), 1522.',
    },
    {
      title: 'Effects of length-to-diameter ratio, pinewood sawdust, and sodium lignosulfonate on quality of rice straw pellets produced via a flat die pellet mill.',
      authors: 'Dao, C. N., et al.',
      journal: 'Renewable Energy, 181, 1140-1154.',
    },
  ],
};

const Publications = () => {
  // Optimized animations for better performance
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scaleOnHover = {
    scale: 1.02,
    transition: { duration: 0.2 }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - matching website style */}
      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-4">Research</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Publications
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our extensive library of peer-reviewed articles, showcasing our commitment to advancing air quality research and policy development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Publications Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="2024" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-accent/50 p-2 rounded-lg mb-8">
              {Object.keys(publications).map((year) => (
                <TabsTrigger 
                  key={year} 
                  value={year} 
                  className="text-lg font-semibold data-[state=active]:bg-background data-[state=active]:text-foreground"
                >
                  <Calendar className="mr-2" size={16} />
                  {year}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(publications).map(([year, pubs]) => (
              <TabsContent key={year} value={year} className="mt-8">
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  {pubs.map((pub, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={scaleOnHover}
                      className="group"
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-background to-accent/10 border-2 border-transparent hover:border-primary/20">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                                {pub.title}
                              </h3>
                              
                              <div className="flex items-center text-muted-foreground mb-3">
                                <Users className="mr-2 flex-shrink-0" size={16} />
                                <span className="text-sm">{pub.authors}</span>
                              </div>
                              
                              <div className="flex items-center text-muted-foreground">
                                <Book className="mr-2 flex-shrink-0" size={16} />
                                <span className="text-sm italic">{pub.journal}</span>
                              </div>
                            </div>
                            
                            <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                              <ExternalLink className="text-primary" size={20} />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          {/* ResearchGate Section - matching website style */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-20"
          >
            <div className="bg-gradient-to-br from-accent/30 to-background rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Find More Research on ResearchGate
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with our researchers and explore additional publications on their ResearchGate profiles.
              </p>
              <div className="flex justify-center flex-wrap gap-4">
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="https://www.researchgate.net/profile/Nguyen-Thi-Oanh" target="_blank" rel="noopener noreferrer">
                    Nguyen Thi Oanh
                    <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="https://www.researchgate.net/profile/Lai-Huy-2" target="_blank" rel="noopener noreferrer">
                    Lai Huy
                    <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group">
                  <Link to="https://www.researchgate.net/profile/Huyen-Truong-5" target="_blank" rel="noopener noreferrer">
                    Huyen Truong
                    <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publications;