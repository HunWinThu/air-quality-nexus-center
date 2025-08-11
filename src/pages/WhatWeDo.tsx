import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import researchImg from '@/assets/air-pollution-research.png';
import cooperationImg from '@/assets/cooperation.jpg';
import capacityImg from '@/assets/capacity.jpg';

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
