
import React from 'react';
import VideoCard from './VideoCard';
import ImageCard from './ImageCard';

const Projects = () => {
  // These would be replaced with actual URLs from Supabase storage
  const videos = [
    {
      id: 1,
      title: '3BHK Launch Campaign',
      thumbnailUrl: 'https://via.placeholder.com/640x360/0A2647/FFFFFF?text=3BHK+Launch+Campaign',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: 'Virtual Site Walkthrough',
      thumbnailUrl: 'https://via.placeholder.com/640x360/144272/FFFFFF?text=Virtual+Site+Walkthrough',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: 'Diwali Promo Ad',
      thumbnailUrl: 'https://via.placeholder.com/640x360/2C74B3/FFFFFF?text=Diwali+Promo+Ad',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 4,
      title: 'Client Testimonials',
      thumbnailUrl: 'https://via.placeholder.com/640x360/0A2647/FFFFFF?text=Client+Testimonials',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 5,
      title: 'Property Teaser Video',
      thumbnailUrl: 'https://via.placeholder.com/640x360/144272/FFFFFF?text=Property+Teaser',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  // These would be replaced with actual URLs from Supabase storage
  const images = [
    {
      id: 1,
      title: 'Financial Freedom Campaign',
      imageUrl: 'https://via.placeholder.com/800x800/0A2647/FFFFFF?text=Financial+Freedom'
    },
    {
      id: 2,
      title: 'Luxury Homes Banner',
      imageUrl: 'https://via.placeholder.com/800x800/144272/FFFFFF?text=Luxury+Homes'
    },
    {
      id: 3,
      title: 'New Year Offer',
      imageUrl: 'https://via.placeholder.com/800x800/2C74B3/FFFFFF?text=New+Year+Offer'
    },
    {
      id: 4,
      title: 'Smart City Concept',
      imageUrl: 'https://via.placeholder.com/800x800/0A2647/FFFFFF?text=Smart+City'
    },
    {
      id: 5,
      title: 'Premium Amenities',
      imageUrl: 'https://via.placeholder.com/800x800/144272/FFFFFF?text=Premium+Amenities'
    },
    {
      id: 6,
      title: 'Investment Guide',
      imageUrl: 'https://via.placeholder.com/800x800/2C74B3/FFFFFF?text=Investment+Guide'
    }
  ];

  return (
    <section className="py-12 bg-portfolio-softGray">
      <div className="portfolio-container">
        <h2 className="section-title">Projects</h2>
        
        <h3 className="text-xl font-semibold mb-6 text-portfolio-lightNavy">Video Campaigns</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map(video => (
            <VideoCard 
              key={video.id}
              title={video.title}
              thumbnailUrl={video.thumbnailUrl}
              videoUrl={video.videoUrl}
            />
          ))}
        </div>

        <h3 className="text-xl font-semibold mb-6 text-portfolio-lightNavy">Creative Designs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map(image => (
            <ImageCard 
              key={image.id}
              title={image.title}
              imageUrl={image.imageUrl}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="italic text-gray-600">
            Note: Replace placeholder images and videos with actual content from your Supabase storage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
