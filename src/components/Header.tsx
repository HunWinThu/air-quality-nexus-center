import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/AQC_logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/blog' },
    { name: 'News', href: '/activities' },
    { name: 'Publications', href: '/publications' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-gradient-to-r from-white to-sky-100 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Air Quality Nexus" className="h-12 w-12 md:h-14 md:w-14" />
            <span className="text-sm md:text-base font-semibold leading-snug text-foreground"> Center for Nexus of Air Quality,<br/> Health, Ecosystem, and Climate</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => {
              if (item.name === 'About Us') {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={`text-base font-medium transition-colors hover:text-primary ${
                          isActive('/about')
                            ? 'text-primary border-b-2 border-primary pb-1'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {item.name}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="z-50 bg-background border border-border">
                      <DropdownMenuItem asChild>
                        <Link to="/launching-event">Launching Event</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/what-we-do">What We Do</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/team">Team</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    isActive(item.href) 
                      ? 'text-primary border-b-2 border-primary pb-1' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
                {navigation.map((item) => (
                  item.name === 'About Us' ? (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                          isActive(item.href)
                            ? 'text-primary bg-accent'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="ml-4">
                        <Link
                          to="/launching-event"
                          className="block px-3 py-2 text-base rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Launching Event
                        </Link>
                        <Link
                          to="/what-we-do"
                          className="block px-3 py-2 text-base rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          What We Do
                        </Link>
                        <Link
                          to="/team"
                          className="block px-3 py-2 text-base rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Team
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                        isActive(item.href)
                          ? 'text-primary bg-accent'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </div>
          )}
      </div>
    </header>
  );
};

export default Header;