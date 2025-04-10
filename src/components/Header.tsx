
import React from 'react';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-portfolio-navy text-white py-16 animate-fade-in">
      <div className="portfolio-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">Kreeti Rangra</h1>
            <h2 className="text-xl md:text-2xl font-light mb-4 text-portfolio-softGray">Digital Marketing Executive</h2>
            <div className="flex items-center text-sm mb-2">
              <MapPin size={16} className="mr-2 text-portfolio-accent" />
              <span>Mumbai, India</span>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <div className="flex flex-col space-y-2">
              <a href="tel:+919699600290" className="flex items-center hover:text-portfolio-accent transition-colors">
                <Phone size={16} className="mr-2" />
                <span>9699600290</span>
              </a>
              <a href="mailto:rangrakreeti@gmail.com" className="flex items-center hover:text-portfolio-accent transition-colors">
                <Mail size={16} className="mr-2" />
                <span>rangrakreeti@gmail.com</span>
              </a>
              <a 
                href="https://linkedin.com/in/kreeti-rangra-a04502266" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center hover:text-portfolio-accent transition-colors"
              >
                <Linkedin size={16} className="mr-2" />
                <span>linkedin.com/in/kreeti-rangra-a04502266</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
