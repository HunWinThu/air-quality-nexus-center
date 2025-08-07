import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Book, Users } from 'lucide-react';

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
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: { y: 0, opacity: 1 },
  };

  const revealOverlayVariants = {
    hidden: { x: 0 },
    visible: { 
      x: '100%',
      transition: { duration: 0.7 }
    },
  };

  const revealTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3 }
    }
  }

  return (
    <div 
      className="min-h-screen bg-cover bg-fixed bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
    >
      <div className="min-h-screen bg-white/80 backdrop-blur-sm">
        <Header />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">Our Publications</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our extensive library of peer-reviewed articles, showcasing our commitment to advancing air quality research.
            </p>
          </motion.div>

          <Tabs defaultValue="2024" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-sky-200/50 p-2 rounded-lg">
              {Object.keys(publications).map((year) => (
                <TabsTrigger key={year} value={year} className="text-lg font-semibold">{year}</TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(publications).map(([year, pubs]) => (
              <TabsContent key={year} value={year} className="mt-8">
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-6"
                >
                  {pubs.map((pub, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="relative bg-white/90 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/50 p-6 overflow-hidden"
                    >
                      <motion.div variants={revealTextVariants}>
                        <h3 className="text-xl font-bold text-gray-800 leading-tight mb-2">{pub.title}</h3>
                        <div className="flex items-center text-md text-gray-600 mb-3">
                          <Users className="mr-2" size={16} />
                          <span>{pub.authors}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 italic">
                          <Book className="mr-2" size={16} />
                          <span>{pub.journal}</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className="absolute top-0 left-0 bottom-0 right-0 bg-sky-300"
                        variants={revealOverlayVariants}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Find More on ResearchGate</h2>
            <div className="flex justify-center flex-wrap gap-4">
              <Button asChild variant="outline" size="lg">
                <Link to="https://www.researchgate.net/profile/Nguyen-Thi-Oanh" target="_blank" rel="noopener noreferrer">
                  Nguyen Thi Oanh
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="https://www.researchgate.net/profile/Lai-Huy-2" target="_blank" rel="noopener noreferrer">
                  Lai Huy
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="https://www.researchgate.net/profile/Huyen-Truong-5" target="_blank" rel="noopener noreferrer">
                  Huyen Truong
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Publications;