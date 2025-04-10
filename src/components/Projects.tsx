
import React, { useState } from 'react';
import VideoCard from './VideoCard';
import ImageCard from './ImageCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Filter, Grid3X3, Film, RefreshCcw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useToast } from "@/hooks/use-toast";

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

  const [isGridView, setIsGridView] = useState(true);
  const { toast } = useToast();

  const handleViewToggle = () => {
    setIsGridView(!isGridView);
    toast({
      title: `Switched to ${isGridView ? 'List' : 'Grid'} view`,
      duration: 2000
    });
  };

  return (
    <section className="py-16 bg-portfolio-softGray">
      <div className="portfolio-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="section-title">Projects</h2>
          <Button variant="outline" className="mt-4 md:mt-0" onClick={handleViewToggle}>
            {isGridView ? <Film className="mr-2" /> : <Grid3X3 className="mr-2" />}
            {isGridView ? "List View" : "Grid View"}
          </Button>
        </div>
        
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="w-full mb-8 grid grid-cols-2 h-auto">
            <TabsTrigger value="videos" className="py-3">
              <Film className="mr-2 h-4 w-4" /> Video Campaigns
            </TabsTrigger>
            <TabsTrigger value="images" className="py-3">
              <Filter className="mr-2 h-4 w-4" /> Creative Designs
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="videos" className="space-y-4">
            <div className={`grid ${isGridView ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
              {videos.map(video => (
                <VideoCard 
                  key={video.id}
                  title={video.title}
                  thumbnailUrl={video.thumbnailUrl}
                  videoUrl={video.videoUrl}
                  isCompact={!isGridView}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="images" className="space-y-4">
            <div className={`grid ${isGridView ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'} gap-6`}>
              {images.map(image => (
                <Card key={image.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative group">
                      <AspectRatio ratio={isGridView ? 1 : 21/9} className="bg-muted">
                        <img 
                          src={image.imageUrl} 
                          alt={image.title} 
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 w-full">
                          <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="group">
            <RefreshCcw className="mr-2 h-4 w-4 group-hover:animate-spin" />
            Load More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
