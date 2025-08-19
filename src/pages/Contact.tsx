import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ContactHero />
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactInfo />
          <div className="grid grid-cols-1 gap-12 max-w-2xl mx-auto w-full">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;