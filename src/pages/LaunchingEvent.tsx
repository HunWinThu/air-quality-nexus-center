import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import pm25Image from '@/assets/pm2.5.png';
import teamGroupPhoto from '@/assets/team-group-photo.jpg';

import quoteImage2 from '@/assets/Advisory/Prof. Bindu N. Lohani.jpeg';
import quoteImage3 from '@/assets/Advisory/Prof. Ram Shrestha.jpeg';
import quoteImage4 from '@/assets/Advisory/Prof. Philip Hopke.jpeg';
import quoteImage5 from '@/assets/Advisory/Dr. Maheswar Rupakheti.jpg';
import quoteImage6 from '@/assets/Advisory/Prof. Lisa Emberson.jpg';
import quoteImage7 from '@/assets/Advisory/Prof. Sotiris Vardoulakis.jpeg';
import quoteImage8 from '@/assets/Advisory/Prof. Tami C. Bond.jpg';
import quoteImage9 from '@/assets/Advisory/Dr. Shih-Chun Candice Lung.jpg';
import quoteImage10 from '@/assets/Advisory/Dr. Eric Zusman.jpg';

const LaunchingEvent = () => {
  useEffect(() => {
    document.title = 'Launching Event | Air Quality Nexus';
    const description = 'Launching Event and expert quotes at Air Quality Nexus Center.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, []);

  const quotes = [
    {
      quote:
        'At the nexus of air pollution, climate science, ecosystems, and public health, …This Center is a catalyst for interdisciplinary collaboration—driving evidence-based solutions that protect both planetary and human well-being',
      name: 'Prof. Bindu N. Lohani',
      position:
        'Chancellor of University of Nepal<br/>Chair of Clean Air Asia Board<br/>Member of AIT Board of Trustee',
      image: quoteImage2,
    },
    {
      quote:
        'Thank you for sharing the good news. It is a timely (actually much overdue) initiative. I hope Air Quality Nexus Center can serve a pivotal role in Asia and beyond in fostering a holistic nexus approach in understanding air pollution in the region and in designing evidence – informed policies to address air pollution and related issues.',
      name: 'Dr. Maheswar Rupakheti',
      position:
        'Research Group Leader, Research Institute for Sustainability Helmholtz Centre Potsdam (RIFS), Germany<br/>Vice Chair, WG-I, Intergovernmental Panel on Climate Change (IPCC)',
      image: quoteImage3,
    },
    {
      quote:
        'It is becoming ever more important to improve air quality across Asia - not only to protect human health but also to protect from damage to crop yields and nutrition since current air pollution concentrations, particularly of ground level ozone, are likely to be reducing crop yields by up to as much as 10% in polluted regions. Given the continued challenges around ensuring food security across Asia, cleaner air would encourage higher crop yields enhancing food supply, an important component of food security',
      name: 'Prof. Lisa Emberson',
      position:
        'Centre Director of the York office at the Stockholm Environment Institute (SEI)<br/>Professor of Environmental Science in the Environment & Geography Dept., University of York',
      image: quoteImage4,
    },
    {
      quote:
        'The Air Quality Nexus Center at the Asian Institute of Technology is a timely and much needed initiative aiming to address the pressing challenges climate change and air pollution are posing on human health and ecosystems in the Asia-Pacific region and globally. Australian environmental health research, policy and practice will benefit from this international collaboration.',
      name: 'Prof. Sotiris Vardoulakis',
      position:
        'Director, NHMRC Healthy Environments and Lives (HEAL) National Research Network<br/>Professor of Environmental Public Health, University of Canberra, Australia',
      image: quoteImage5,
    },
    {
      quote:
        'What Wonderful RecognitionCongratulations! Air Quality Nexus Center will be fantastic to have such a resource in Southeast Asia, under Prof. Kim Oanh’s Leadership!',
      name: 'Prof. Tami C. Bond',
      position:
        'Scott Presidential Chair in Energy, Environment and Health<br/>Professor, Mechanical Engineering; Joint Professor, Civil & Environmental Engineering; Affiliate; Systems Colorado University, Fort Collins, CO USA',
      image: quoteImage6,
    },
    {
      quote:
        'Thank you for reaching out and Congratulations to the Center for your achievements!',
      name: 'Ms. Dang Espita Casanova',
      position: 'Associate Program Director<br/>Clean Air Asia',
      image: quoteImage7,
    },
    {
      quote:
        'Emory Climate Hub is excited to partner with the Center for Nexus of Air Quality, Health, Ecosystem and Climate, as we are interested in finding evidence-based solutions through an interdisciplinary framework. The center emphasizes an integrated approach necessary for a complicated problem that involves climate change, air quality, and human/ecosystem health.',
      name: 'Dr. Eri Saikawa',
      position: 'Professor<br/>Emory University, USA',
      image: quoteImage8,
    },
    {
      quote:
        'The Air Quality Nexus Center at AIT plays a pivotal role in Southeast Asia as an essential structure for addressing the region’s air pollution challenges. By adopting a holistic, multi-stakeholder approach, it fosters the dismantling of scientific and institutional silos — a necessary step to understand and mitigate the deeply intertwined and interdependent health, climate, economic, and social impacts of this critical issue.',
      name: 'Dr. Xavier Mari',
      position: 'IRD Representative, Thailand (Bangladesh-India-Myanmar-Nepal)',
      image: quoteImage9,
    },
    {
      quote:
        'We at Ricardo have really appreciated the informed input from the Air Quality Nexus team in support of our work developing clean air solutions for Thailand and the Greater Mekong region. Your expertise across air quality, health, ecosystems and climate resilience has never been more important. We hope to continue working with the team in the future',
      name: 'Dr. Mark Broomfield',
      position: 'Technical Director<br/>Air quality specialist, Ricardo',
      image: quoteImage10,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Team Photo Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={teamGroupPhoto}
            alt="Air Quality Nexus team group photo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-br from-air-light to-accent overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={pm25Image}
            alt="Launching Event Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Celebrating Our Launch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Launching Event</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join us in celebrating the launch of the Air Quality Nexus Center, a pivotal step towards cleaner air and sustainable solutions in Asia and beyond.
            </p>
            <Button size="lg" variant="secondary" className="mt-6 bg-white text-primary hover:bg-white/90">
              Learn More
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          <motion.div
            className="flex flex-col gap-12 md:gap-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          >
            {quotes.map((quote, index) => {
              const isEven = index % 2 === 0;
              const xFrom = isEven ? -120 : 120;
              const alignClass = isEven ? 'md:self-start' : 'md:self-end';
              const floatOffset = isEven ? 'md:-translate-y-2' : 'md:translate-y-2';
              return (
                <motion.div
                  key={index}
                  className={`w-full md:w-11/12 lg:w-10/12 ${alignClass} ${floatOffset}`}
                  initial={{ opacity: 0, x: xFrom, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ type: 'spring', stiffness: 70, damping: 16 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-500 bg-white/10 backdrop-blur-md border-white/20 text-white transform hover:scale-105 will-change-transform">
                    <CardContent className="p-6 md:p-8">
                      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-10`}>
                        <img
                          src={quote.image}
                          alt={`${quote.name} - Launching Event testimonial`}
                          className="w-full md:w-80 lg:w-96 h-56 md:h-64 lg:h-72 object-cover rounded-xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-500"
                        />
                        <div className={isEven ? 'text-left' : 'text-left md:text-right'}>
                          <p className="text-xl md:text-2xl text-white/90 mb-4 italic">“{quote.quote}”</p>
                          <div className="mt-2">
                            <h3 className="text-lg md:text-xl font-semibold text-white">{quote.name}</h3>
                            <p
                              className="text-sm text-white/80"
                              dangerouslySetInnerHTML={{ __html: quote.position }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaunchingEvent;
