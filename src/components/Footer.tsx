import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-earth-green text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/about" className="text-base opacity-90 hover:opacity-100 transition-opacity">About Us</Link>
              <Link to="/blog" className="text-base opacity-90 hover:opacity-100 transition-opacity">Latest News</Link>
              <Link to="/activities" className="text-base opacity-90 hover:opacity-100 transition-opacity">Our Projects</Link>
              <Link to="/team" className="text-base opacity-90 hover:opacity-100 transition-opacity">Our Team</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Our Focus</h3>
            <nav className="flex flex-col space-y-2">
              <span className="text-base opacity-90">Air Quality Research</span>
              <span className="text-base opacity-90">Environmental Monitoring</span>
              <span className="text-base opacity-90">Policy Advocacy</span>
              <span className="text-base opacity-90">Community Education</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="opacity-70" />
                <span className="text-base opacity-90">info@airqualitynexus.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="opacity-70" />
                <span className="text-base opacity-90">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="opacity-70" />
                <span className="text-base opacity-90">123 Environmental Way, Green City, GC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2024 Air Quality Nexus Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;