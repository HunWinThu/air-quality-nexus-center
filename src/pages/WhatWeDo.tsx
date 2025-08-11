import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import researchImg from '@/assets/air-pollution-research.png';
import cooperationImg from '@/assets/cooperation.jpg';
import capacityImg from '@/assets/capacity.jpg';

import missionsHero from '@/assets/hig-quality.jpg';
import multidisciplinaryImage from '@/assets/multi.png';
import governmentImage from '@/assets/government.jpg';
import climateImage from '@/assets/co-benefits.png';
import pm25Image from '@/assets/pm2.5.png';

const WhatWeDo = () => {
  useEffect(() => {
    const title = 'What We Do | Air Quality Nexus Center';
    document.title = title;

    const description = 'Discover what we do: research, partnerships, and capacity building for cleaner air.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    // Canonical tag
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', `${window.location.origin}/air-quality-nexus-center/what-we-do`);
  }, []);

  const sections = [
    {
      title: 'Applied Research & Innovation',
      text: 'We conduct high-quality, application-driven research addressing complex air pollution challenges with measurable impact on health, ecosystems, and climate.',
      img: researchImg,
      alt: 'Applied air pollution research at Air Quality Nexus Center'
    },
    {
      title: 'International Collaboration',
      text: 'We work with global partners to co-design solutions, share data, and scale evidence-based practices across regions.',
      img: cooperationImg,
      alt: 'International cooperation and partnerships for clean air'
    },
    {
      title: 'Capacity Building & Training',
      text: 'We strengthen institutional and community capacity through training, workshops, and knowledge transfer.',
      img: capacityImg,
      alt: 'Capacity building workshops on air quality management'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-air-light to-accent">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            <Badge variant="secondary" className="mb-4">Our Work</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What We Do</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Advancing clean air through research, partnerships, and real-world implementation.
            </p>
          </div>
        </section>

        {/* Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((s, i) => (
              <Card key={i} className="bg-background/80 backdrop-blur-sm border-primary/10">
                <CardContent className="p-6">
                  <img
                    src={s.img}
                    alt={s.alt}
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h2 className="text-2xl font-semibold text-foreground mb-2">{s.title}</h2>
                  <p className="text-muted-foreground">{s.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Missions (moved from Home) */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={pm25Image} 
              alt="PM2.5 air pollution monitoring" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30"></div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="relative">
              <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl">
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-white mb-4">Our Missions</h2>
                  <p className="text-xl text-white/80 max-w-3xl mx-auto">
                    Our multi-faceted mission encompasses research excellence, international cooperation, 
                    and practical solutions for complex air pollution challenges
                  </p>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl -z-10 blur-xl"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <Card className="group hover-scale bg-white/10 backdrop-blur-md border-white/20 text-white h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <img 
                    src={missionsHero} 
                    alt="High-Quality Research"
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                  <h3 className="text-xl font-bold mb-4">High-Quality Research</h3>
                  <p className="text-white/80 leading-relaxed flex-grow">Conduct high-quality research demonstrated by real-life applications for improving air quality in Asia and beyond.</p>
                </CardContent>
              </Card>
              <Card className="group hover-scale bg-white/10 backdrop-blur-md border-white/20 text-white h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <img 
                    src={multidisciplinaryImage} 
                    alt="Multi-Pollutant Approach"
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                  <h3 className="text-xl font-bold mb-4">Multi-Pollutant Approach</h3>
                  <p className="text-white/80 leading-relaxed flex-grow">Focus on the multi-pollutant and multi-effect approach to provide cost-effective solutions to complex air pollution problems.</p>
                </CardContent>
              </Card>
              <Card className="group hover-scale bg-white/10 backdrop-blur-md border-white/20 text-white h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <img 
                    src={climateImage} 
                    alt="Co-Benefits Assessment"
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                  <h3 className="text-xl font-bold mb-4">Co-Benefits Assessment</h3>
                  <p className="text-white/80 leading-relaxed flex-grow">Demonstrate and quantitatively assess the co-benefits to air quality and climate of integrated measures applicable in local context.</p>
                </CardContent>
              </Card>
              <Card className="group hover-scale bg-white/10 backdrop-blur-md border-white/20 text-white h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <img 
                    src={cooperationImg} 
                    alt="International Cooperation"
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                  <h3 className="text-xl font-bold mb-4">International Cooperation</h3>
                  <p className="text-white/80 leading-relaxed flex-grow">Continue and expand international cooperation in conducting research projects, consultancies, training, etc.</p>
                </CardContent>
              </Card>
              <Card className="group hover-scale bg-white/10 backdrop-blur-md border-white/20 text-white h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <img 
                    src={governmentImage} 
                    alt="Government Assistance"
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                  <h3 className="text-xl font-bold mb-4">Government Assistance</h3>
                  <p className="text-white/80 leading-relaxed flex-grow">Provide assistance to governments, and other development partners in the planning, designing, scaling up, and implementation of clean air action plans with multiple benefits.</p>
                </CardContent>
              </Card>
              <Card className="group hover-scale bg-white/10 backdrop-blur-md border-white/20 text-white h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <img 
                    src={capacityImg} 
                    alt="Capacity Building"
                    className="w-full h-48 object-cover rounded-xl mb-6"
                  />
                  <h3 className="text-xl font-bold mb-4">Capacity Building</h3>
                  <p className="text-white/80 leading-relaxed flex-grow">Build capacity and promote multi-disciplinary approaches in atmospheric sciences within AIT and internationally.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-accent/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground">
              Want to collaborate or learn more? Visit our Team page or Contact us.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <a href="/air-quality-nexus-center/team" className="underline text-primary">Meet the Team</a>
              <a href="/air-quality-nexus-center/contact" className="underline text-primary">Contact Us</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhatWeDo;
