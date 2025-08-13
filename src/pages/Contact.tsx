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

const Contact = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-air-light to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">Get In Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about our research, want to collaborate, or need information about air quality in your area? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-background to-accent/10">
                <CardContent className="p-6">
                  <info.icon className="mx-auto mb-4 text-primary" size={32} />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-primary font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

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
                      <Input id="firstName" placeholder="Your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (Optional)</Label>
                    <Input id="organization" placeholder="Your organization or company" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
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
                      placeholder="Tell us how we can help you..." 
                      rows={5}
                      required 
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
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