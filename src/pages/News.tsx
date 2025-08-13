import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ExternalLink } from 'lucide-react';

// Import images
import capacityImg from '@/assets/capacity.jpg';
import airPollutionResearchImg from '@/assets/air-pollution-research.png';
import riceStrawBurningImg from '@/assets/rice-straw-burning.jpg';
import governmentImg from '@/assets/government.jpg';
import higQualityImg from '@/assets/hig-quality.jpg';
import coBenefitsImg from '@/assets/co-benefits.png';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  link: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const News = () => {
  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "International Conference on Air Quality Management",
      date: "2025-09-15",
      time: "9:00 AM - 5:00 PM",
      location: "Bangkok, Thailand",
      description: "A comprehensive conference bringing together researchers, policymakers, and industry experts to discuss latest developments in air quality management across Southeast Asia.",
      image: capacityImg
    },
    {
      id: 2,
      title: "Workshop on Emission Inventory Development",
      date: "2025-10-22",
      time: "2:00 PM - 6:00 PM",
      location: "Virtual Event",
      description: "Hands-on workshop for building technical capacity in emission inventory development using latest methodologies and tools.",
      image: airPollutionResearchImg
    }
  ];

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "New Research Reveals Impact of Rice Straw Burning on Regional Air Quality",
      excerpt: "Recent study by our research team shows significant correlation between agricultural burning practices and air pollution levels across Southeast Asian countries.",
      category: "Research",
      date: "2025-08-10",
      image: riceStrawBurningImg,
      link: "#"
    },
    {
      id: 2,
      title: "Partnership Announcement with International Environmental Organizations",
      excerpt: "Air Quality Nexus Center announces new collaborative partnerships to strengthen regional capacity in air quality monitoring and management.",
      category: "Partnership",
      date: "2025-08-05",
      image: coBenefitsImg,
      link: "#"
    },
    {
      id: 3,
      title: "Government Policy Workshop Successfully Completed",
      excerpt: "Three-day intensive workshop with government officials concluded with actionable recommendations for air quality policy implementation.",
      category: "Training",
      date: "2025-07-28",
      image: governmentImg,
      link: "#"
    },
    {
      id: 4,
      title: "Technical Report on Air Quality Monitoring Networks Released",
      excerpt: "Comprehensive analysis of current air quality monitoring infrastructure and recommendations for network enhancement published.",
      category: "Publication",
      date: "2025-07-20",
      image: higQualityImg,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              News & Events
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with our latest research, events, and developments in air quality science
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Calendar className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Upcoming Events</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <div className="text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1 mb-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.location}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All News Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">All News</h2>
            <div className="space-y-6">
              {newsItems.map((news) => (
                <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={news.image} 
                        alt={news.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {news.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(news.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 leading-tight">
                        {news.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {news.excerpt}
                      </p>
                      <Button variant="ghost" className="p-0 h-auto font-medium">
                        Read More
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;