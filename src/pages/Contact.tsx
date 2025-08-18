import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'airqualitynexus@ait.ac.th',
      description: 'General inquiries and information'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+66 9-9797-6360',
      description: ''
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Asian Institute of Technology, 58 Moo 9, Km. 42, Paholyothin Highway, Klong Luang, Pathum Thani 12120, Thailand',
      description: 'https://maps.app.goo.gl/UA82JeVX5uKR2Stg6'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Mon - Fri: 9 AM - 5 PM',
      description: 'Saturday: 10 AM - 2 PM (by appointment)'
    }
  ];

  const officeLocations = [
    {
      name: 'Main Research Facility',
      address: '123 Environmental Way, Green City, GC 12345',
      phone: '+1 (555) 123-4567',
      type: 'Headquarters'
    },
    {
      name: 'Urban Monitoring Station',
      address: '456 Downtown Plaza, Metro City, MC 67890',
      phone: '+1 (555) 234-5678',
      type: 'Field Office'
    },
    {
      name: 'Community Outreach Center',
      address: '789 Community Blvd, Riverside, RS 54321',
      phone: '+1 (555) 345-6789',
      type: 'Outreach'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: `${formData.get('firstName')} ${formData.get('lastName')}`.trim(),
      email: formData.get('email') as string,
      phone: formData.get('phone') as string || 'Not provided',
      organization: formData.get('organization') as string || 'Not specified',
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch(`https://alfnngetdsxwsvldvzpd.supabase.co/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZm5uZ2V0ZHN4d3N2bGR2enBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0MzE5MjcsImV4cCI6MjA2OTAwNzkyN30.61ioddBFpoZ2j2K_Z8KKajKOe8nnY0JzjhF6Yy4MmJE`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Show success message and reset form
        const form = e.target as HTMLFormElement;
        form.reset();
        toast({
          title: "Message Sent Successfully! ✅",
          description: "Thank you for reaching out! We'll get back to you as soon as possible.",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Message Failed to Send ❌",
        description: "Sorry, there was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariants}>
              <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            >
              Have questions about our research, want to collaborate, or need information about air quality in your area? 
              We'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 gap-6 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Card className="text-center bg-gradient-to-br from-background to-accent/10">
                  <CardContent className="p-6">
                    <info.icon className="mx-auto mb-4 text-primary" size={32} />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                    <p className="text-primary font-medium mb-1">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 gap-12 max-w-2xl mx-auto w-full">
            {/* Contact Form */}
            <Card className="bg-gradient-to-br from-background to-accent/5">
              <CardHeader>
                <h2 className="text-2xl font-bold text-foreground flex items-center">
                  <MessageSquare className="mr-3 text-primary" size={24} />
                  Send us a Message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="Your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Your last name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <Input id="organization" name="organization" placeholder="Your organization or company" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select name="subject" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="research">Research Collaboration</SelectItem>
                        <SelectItem value="media">Media Request</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="data">Data Request</SelectItem>
                        <SelectItem value="volunteer">Volunteer Opportunity</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell us how we can help you..." 
                      rows={5}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Removed collaboration section */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;