import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

import launching5 from '@/assets/Launching-5.jpg';
import launching6 from '@/assets/Launching-6.jpg';

const LaunchingEventDetails = () => {
  useEffect(() => {
    const title = 'Launching Event Details | Air Quality Nexus';
    const description = 'Highlights, photos, and recap of the Air Quality Nexus Center Launching Event.';

    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);

    // Canonical tag
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    const canonicalHref = window.location.href;
    if (existingCanonical) {
      existingCanonical.setAttribute('href', canonicalHref);
    } else {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonicalHref);
      document.head.appendChild(link);
    }

    // Structured data (Article)
    const ldJson = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Launching Event Details',
      description,
      image: [launching5, launching6],
      author: {
        '@type': 'Organization',
        name: 'Air Quality Nexus Center',
      },
      datePublished: '2024-07-10',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(ldJson);
    document.head.appendChild(script);

    return () => {
      // optional cleanup: remove structured data on unmount
      if (script && script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const container = { show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } } as const;
  const pop = {
    hidden: { opacity: 0, y: 16, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 90, damping: 18 } },
  } as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section className="py-16 md:py-20 bg-gradient-to-br from-air-light to-sky-blue/20">
          <motion.div
            className="container mx-auto px-4 sm:px-6 lg:px-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h1 variants={pop} className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Launching Event Details</motion.h1>
            <motion.p variants={pop} className="text-base md:text-lg text-muted-foreground max-w-3xl">
              Here you can add a comprehensive recap of the event. For now, this page includes
              placeholder text and images. You can replace these with your own content later.
            </motion.p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <motion.img
                variants={pop}
                src={launching5}
                alt="Launching Event presentation at AIT Conference Center"
                loading="lazy"
                className="w-full h-72 md:h-80 object-cover rounded-xl shadow hover-scale"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              />
              <motion.img
                variants={pop}
                src={launching6}
                alt="Participants and panel during the Launching Event"
                loading="lazy"
                className="w-full h-72 md:h-80 object-cover rounded-xl shadow hover-scale"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              />
            </div>

            <div className="mt-10 space-y-5 max-w-4xl text-muted-foreground">
              <motion.p variants={pop}>
                The Air Quality Nexus Center officially launched on July 10, 2024, bringing together
                experts, partners, and stakeholders to discuss integrated solutions across air quality,
                health, ecosystems, and climate.
              </motion.p>
              <motion.p variants={pop}>
                The event featured keynote remarks, panel discussions, and an overview of the Center’s
                mission and activities. Photos above capture selected moments from the day.
              </motion.p>
              <motion.p variants={pop}>
                You can expand this page later with detailed agenda, speaker bios, partner links, and
                additional media galleries.
              </motion.p>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LaunchingEventDetails;
