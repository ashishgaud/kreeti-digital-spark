
import React, { useEffect } from 'react';
import Header from '../components/Header';
import ProfileSummary from '../components/ProfileSummary';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';

const Index = () => {
  useEffect(() => {
    // Simple scroll animation
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        // If element is in viewport
        if(position.top < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    };

    // Initial check
    animateOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <div className="animate-on-scroll">
          <ProfileSummary />
        </div>
        
        <div className="animate-on-scroll">
          <Experience />
        </div>
        
        <div className="animate-on-scroll">
          <Projects />
        </div>
        
        <div className="animate-on-scroll">
          <Skills />
        </div>
        
        <div className="animate-on-scroll">
          <Education />
        </div>

        <footer className="bg-portfolio-navy text-white py-6 text-center">
          <div className="portfolio-container">
            <p>© {new Date().getFullYear()} Kreeti Rangra. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
